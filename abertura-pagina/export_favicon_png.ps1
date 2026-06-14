# Export crisp PNG favicons from 32x32 masters (integer scale only).
param(
    [int[]]$Sizes = @(16, 32, 64, 120),
    [int]$MasterSize = 32
)

Add-Type -AssemblyName System.Drawing

function Get-Attr([string]$attrs, [string]$name) {
    if ($attrs -match "(?:^|\s)$name=`"([^`"]+)`"") { return $Matches[1] }
    return $null
}

function Parse-Color([string]$hex) {
    $h = $hex.TrimStart('#')
    if ($h.Length -eq 3) {
        $h = "$($h[0])$($h[0])$($h[1])$($h[1])$($h[2])$($h[2])"
    }
    $r = [Convert]::ToInt32($h.Substring(0, 2), 16)
    $g = [Convert]::ToInt32($h.Substring(2, 2), 16)
    $b = [Convert]::ToInt32($h.Substring(4, 2), 16)
    return [System.Drawing.Color]::FromArgb(255, $r, $g, $b)
}

function Read-Grid([string]$svgPath, [int]$n) {
    $content = [System.IO.File]::ReadAllText($svgPath)
    $bg = [System.Drawing.Color]::FromArgb(9, 9, 9)
    $grid = @{}
    for ($y = 0; $y -lt $n; $y++) {
        for ($x = 0; $x -lt $n; $x++) {
            $grid["$x,$y"] = $bg
        }
    }

    $matches = [regex]::Matches($content, '<rect\s+([^>]+)/?>')
    foreach ($m in $matches) {
        $attrs = $m.Groups[1].Value
        $fill = Get-Attr $attrs 'fill'
        if (-not $fill) { continue }

        $x0 = 0
        $y0 = 0
        $xv = Get-Attr $attrs 'x'
        $yv = Get-Attr $attrs 'y'
        if ($null -ne $xv) { $x0 = [int]$xv }
        if ($null -ne $yv) { $y0 = [int]$yv }

        $w = [int](Get-Attr $attrs 'width')
        $hVal = Get-Attr $attrs 'height'
        $h = if ($null -ne $hVal) { [int]$hVal } else { $w }

        $color = Parse-Color $fill
        for ($dy = 0; $dy -lt $h; $dy++) {
            for ($dx = 0; $dx -lt $w; $dx++) {
                $px = $x0 + $dx
                $py = $y0 + $dy
                if ($px -ge 0 -and $px -lt $n -and $py -ge 0 -and $py -lt $n) {
                    $grid["$px,$py"] = $color
                }
            }
        }
    }
    return $grid
}

function Export-GridToPng([hashtable]$grid, [string]$outPath, [int]$size, [int]$master) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $bg = [System.Drawing.Color]::FromArgb(9, 9, 9)

    for ($oy = 0; $oy -lt $size; $oy++) {
        for ($ox = 0; $ox -lt $size; $ox++) {
            $sx = [int][Math]::Floor($ox * $master / $size)
            $sy = [int][Math]::Floor($oy * $master / $size)
            if ($sx -ge $master) { $sx = $master - 1 }
            if ($sy -ge $master) { $sy = $master - 1 }
            $key = "$sx,$sy"
            $color = if ($grid.ContainsKey($key)) { $grid[$key] } else { $bg }
            $bmp.SetPixel($ox, $oy, $color)
        }
    }

    $dir = Split-Path $outPath -Parent
    if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Wrote $outPath ($size x $size)"
}

$root = $PSScriptRoot
$pairs = @(
    @{ Master = 'favicon-apolo-32.svg'; Base = 'favicon-apolo' },
    @{ Master = 'favicon-frajola-32.svg'; Base = 'favicon-frajola' },
    @{ Master = 'favicon-apolo-32.svg'; Base = 'favicon' }
)

foreach ($pair in $pairs) {
    $svg = Join-Path $root $pair.Master
    if (-not (Test-Path $svg)) {
        Write-Warning "Skip missing $svg"
        continue
    }
    $grid = Read-Grid $svg $MasterSize
    foreach ($s in $Sizes) {
        $out = Join-Path $root "$($pair.Base)-$s.png"
        Export-GridToPng $grid $out $s $MasterSize
    }
}

Write-Host 'Done (from 32x32 masters, nearest-neighbor)'
