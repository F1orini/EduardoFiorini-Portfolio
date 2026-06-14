# Upscale 32x32 pixel-art masters to 64x64 for sharper favicon rendering.
# Design stays identical — each pixel becomes a 2x2 block.
param(
    [int]$Scale = 2
)

$Size = 32 * $Scale
$root = $PSScriptRoot

function Upscale-RectLine([string]$line, [int]$s) {
    if ($line -notmatch '<rect\s+([^>]+)/?>') { return $line }

    $attrs = $Matches[1]
    $get = {
        param($name)
        if ($attrs -match "(?:^|\s)$name=`"([^`"]+)`"") { return $Matches[1] }
        return $null
    }

    $parts = @()
    foreach ($name in @('x', 'y', 'width', 'height', 'rx')) {
        $val = & $get $name
        if ($null -ne $val) {
            $num = [int]$val * $s
            $parts += "$name=`"$num`""
        }
    }

    $fill = & $get 'fill'
    if ($fill) { $parts += "fill=`"$fill`"" }

    return "  <rect $($parts -join ' ')/>"
}

function Upscale-SvgFile([string]$src, [string]$dst, [int]$s) {
    $outSize = 32 * $s
    $lines = Get-Content $src -Encoding UTF8
    $result = @(
        "<svg xmlns=`"http://www.w3.org/2000/svg`" viewBox=`"0 0 $outSize $outSize`" shape-rendering=`"crispEdges`">"
    )

    foreach ($line in $lines) {
        $trim = $line.Trim()
        if ($trim -match '^<svg') { continue }
        if ($trim -eq '</svg>') { continue }
        if ($trim -match '^<rect') {
            $result += (Upscale-RectLine $trim $s)
        }
    }

    $result += '</svg>'
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($dst, ($result -join "`n") + "`n", $utf8)
    Write-Host "Wrote $dst ($outSize x $outSize)"
}

# Keep 32x32 masters
foreach ($name in @('apolo', 'frajola')) {
    $master = Join-Path $root "favicon-$name-32.svg"
    $src = Join-Path $root "favicon-$name.svg"
    if (-not (Test-Path $master)) {
        Copy-Item $src $master -Force
        Write-Host "Saved master favicon-$name-32.svg"
    }
    Upscale-SvgFile $master (Join-Path $root "favicon-$name.svg") $Scale
}

Upscale-SvgFile (Join-Path $root "favicon-apolo-32.svg") (Join-Path $root "favicon.svg") $Scale
Write-Host "Done (scale ${Scale}x)"

$pngScript = Join-Path $root "export_favicon_png.ps1"
if (Test-Path $pngScript) {
    & $pngScript | Out-Host
}
