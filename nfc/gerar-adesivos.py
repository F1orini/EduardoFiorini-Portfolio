#!/usr/bin/env python3
"""Gera folha A4 de adesivos NFC (85,5 × 54 mm) — frente e verso iguais."""

from pathlib import Path

import qrcode
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from io import BytesIO

OUT = Path(__file__).resolve().parent / "nfc-adesivos-lote.pdf"
IMG = Path(__file__).resolve().parent.parent / "img"
APOLO = IMG / "apolo-64.png"
FRAJOLA = IMG / "frajola-64.png"

# Cartão ISO ID-1
CARD_W = 85.5 * mm
CARD_H = 54 * mm
GAP_X = 8 * mm
GAP_Y = 8 * mm
MARGIN_X = 12 * mm
MARGIN_TOP = 22 * mm
ROWS_PER_PAGE = 4

CARDS = [
    {
        "label": "ANDRÉ",
        "handle": "~/andre",
        "name": "André M. Martins",
        "role": "Full-Stack · cartão de contato",
        "domain": "andremmartins.com.br",
        "path": "/contacts/",
        "url": "https://andremmartins.com.br/contacts/",
        "accent": (0.718, 0.549, 1.0),  # #b78cff
    },
    {
        "label": "HELENA",
        "handle": "~/helenistica",
        "name": "Helena Bridi Lona",
        "role": "Escrita · Pesquisa · Dança",
        "domain": "helenabridilona.com.br",
        "path": "/contato/",
        "url": "https://helenabridilona.com.br/contato/",
        "accent": (0.91, 0.35, 0.38),  # vermelho
    },
    {
        "label": "PROJECON",
        "handle": "~/projecon",
        "name": "Nelson Martins",
        "role": "Projecon · Construção civil",
        "domain": "projecon.pro.br",
        "path": "/cartaocontato/",
        "url": "https://www.projecon.pro.br/cartaocontato/",
        "accent": (0.55, 0.86, 0.22),  # lima
    },
    {
        "label": "JOÃO",
        "handle": "~/pomba",
        "name": "João V. Ferreira",
        "role": "Full-Stack · cartão de contato",
        "domain": "joaovitorferreira.com.br",
        "path": "/contato/",
        "url": "https://joaovitorferreira.com.br/contato/",
        "accent": (0.72, 0.65, 0.95),  # lavanda
    },
    {
        "label": "EDUARDO",
        "handle": ">/Eduardo Fiorini",
        "name": "Eduardo Fiorini",
        "role": "Full-Stack · cartão de contato",
        "domain": "f1orini.github.io",
        "path": "/EduardoFiorini-Portfolio/contacts/",
        "url": "https://f1orini.github.io/EduardoFiorini-Portfolio/contacts/",
        "accent": (0.133, 0.773, 0.369),  # #22c55e
        "pets": True,
    },
    {
        "label": "JEAN",
        "handle": "~/jean",
        "name": "Jean Olivotto",
        "role": "Full-Stack · cartão de contato",
        "domain": "jeanolivotto.com.br",
        "path": "/contacts/",
        "url": "https://jeanolivotto.com.br/contacts/",
        "accent": (0.12, 0.27, 0.55),  # azul escuro
    },
]

BG = (0.035, 0.035, 0.043)  # #09090b
TEXT = (0.98, 0.98, 0.98)
MUTED = (0.63, 0.63, 0.67)
DIM = (0.44, 0.44, 0.47)


def make_qr(url: str) -> ImageReader:
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=12,
        border=1,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#09090b", back_color="#ffffff").convert("RGB")
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return ImageReader(buf)


def draw_crop_marks(c: canvas.Canvas, x: float, y: float):
    """Marcas de corte nos cantos do cartão."""
    c.setStrokeColorRGB(0.55, 0.55, 0.55)
    c.setLineWidth(0.4)
    mark = 2.2 * mm
    gap = 0.8 * mm
    # TL
    c.line(x - gap - mark, y + CARD_H, x - gap, y + CARD_H)
    c.line(x, y + CARD_H + gap, x, y + CARD_H + gap + mark)
    # TR
    c.line(x + CARD_W + gap, y + CARD_H, x + CARD_W + gap + mark, y + CARD_H)
    c.line(x + CARD_W, y + CARD_H + gap, x + CARD_W, y + CARD_H + gap + mark)
    # BL
    c.line(x - gap - mark, y, x - gap, y)
    c.line(x, y - gap - mark, x, y - gap)
    # BR
    c.line(x + CARD_W + gap, y, x + CARD_W + gap + mark, y)
    c.line(x + CARD_W, y - gap - mark, x + CARD_W, y - gap)


def draw_card(c: canvas.Canvas, x: float, y: float, card: dict, face: str):
    accent = card["accent"]

    # fundo
    c.setFillColorRGB(*BG)
    c.roundRect(x, y, CARD_W, CARD_H, 1.2 * mm, fill=1, stroke=0)

    # barra de accent no topo
    c.setFillColorRGB(*accent)
    c.rect(x, y + CARD_H - 1.4 * mm, CARD_W, 1.4 * mm, fill=1, stroke=0)

    pad_l = 5.5 * mm
    pad_t = 6.5 * mm

    # handle
    c.setFillColorRGB(*accent)
    handle = card["handle"]
    handle_size = 7 if len(handle) > 14 else 8
    c.setFont("Courier-Bold", handle_size)
    c.drawString(x + pad_l, y + CARD_H - pad_t - 1.5 * mm, handle)

    # nome
    c.setFillColorRGB(*TEXT)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(x + pad_l, y + CARD_H - pad_t - 9 * mm, card["name"])

    # cargo
    c.setFillColorRGB(*MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(x + pad_l, y + CARD_H - pad_t - 14.5 * mm, card["role"])

    # QR à direita
    qr_size = 28 * mm
    qr_x = x + CARD_W - qr_size - 5 * mm
    qr_y = y + (CARD_H - qr_size) / 2 - 1 * mm
    # moldura branca
    c.setFillColorRGB(1, 1, 1)
    c.roundRect(qr_x - 1.2 * mm, qr_y - 1.2 * mm, qr_size + 2.4 * mm, qr_size + 2.4 * mm, 1 * mm, fill=1, stroke=0)
    c.drawImage(make_qr(card["url"]), qr_x, qr_y, qr_size, qr_size, mask="auto")

    # texto inferior esquerdo
    pets = bool(card.get("pets"))
    footer_lift = 5 * mm if pets else 0

    c.setFillColorRGB(*MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(x + pad_l, y + 14.5 * mm + footer_lift, "Aponte a câmera aqui")

    c.setFillColorRGB(*DIM)
    path = card["path"]
    path_size = 5.5 if len(path) > 20 else 6.5
    c.setFont("Courier", path_size)
    c.drawString(x + pad_l, y + 9.5 * mm + footer_lift, card["domain"])
    c.drawString(x + pad_l, y + 5.5 * mm + footer_lift, path)

    if pets and APOLO.exists() and FRAJOLA.exists():
        pet = 5.8 * mm
        gap = 1.4 * mm
        py = y + 2.0 * mm
        c.drawImage(
            ImageReader(str(APOLO)),
            x + pad_l,
            py,
            pet,
            pet,
            mask="auto",
            preserveAspectRatio=True,
        )
        c.drawImage(
            ImageReader(str(FRAJOLA)),
            x + pad_l + pet + gap,
            py,
            pet,
            pet,
            mask="auto",
            preserveAspectRatio=True,
        )

    draw_crop_marks(c, x, y)


def build():
    page_w, page_h = A4
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("Adesivos NFC — André, Helena, Projecon, João, Eduardo, Jean")
    c.setAuthor("Eduardo Fiorini")

    col0 = MARGIN_X
    col1 = MARGIN_X + CARD_W + GAP_X

    rows_per_page = ROWS_PER_PAGE
    y = page_h - MARGIN_TOP - CARD_H
    row_on_page = 0

    for i, card in enumerate(CARDS):
        if row_on_page >= rows_per_page:
            c.showPage()
            y = page_h - MARGIN_TOP - CARD_H
            row_on_page = 0

        draw_card(c, col0, y, card, "FRENTE")
        draw_card(c, col1, y, card, "VERSO")
        y -= CARD_H + GAP_Y
        row_on_page += 1

    c.save()
    print(f"saved {OUT}")


if __name__ == "__main__":
    build()
