# Eduardo Fiorini — Portfólio

Site estático com HTML, CSS e JavaScript. Projetos, mockups interativos e embeds (Canva).

## Publicação no GitHub Pages

Repositório: [github.com/F1orini/EduardoFiorini-Portfolio](https://github.com/F1orini/EduardoFiorini-Portfolio)

**URL do site (após ativar Pages):**  
https://f1orini.github.io/EduardoFiorini-Portfolio/

### Passo a passo

1. Envie as alterações para o GitHub:
   ```bash
   git add .
   git commit -m "Prepara portfólio para GitHub Pages"
   git push origin main
   ```

2. No GitHub, abra o repositório → **Settings** → **Pages**.

3. Em **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`

4. Salve. Em 1–3 minutos o site fica no ar na URL acima.

5. Atualizações futuras: `git push` na `main` e o Pages republica sozinho.

### Estrutura principal

| Arquivo / pasta | Função |
|-----------------|--------|
| `index.html` | Entrada do site (GitHub Pages) |
| `main.js` | Lógica do portfólio e mockups |
| `data.js` | Textos e projetos |
| `styles.css` | Estilos globais |
| `img/` | Imagens e favicons |
| `*-mockup.js/css` | Mockups interativos por projeto |

### Desenvolvimento local

Abra `index.html` no navegador ou use um servidor simples:

```bash
# Python 3
python -m http.server 8080
```

Acesse http://localhost:8080

### Observações

- O embed do SafeStart (Canva) exige internet; funciona em HTTPS no GitHub Pages.
- GSAP e fontes Google são carregados via CDN.
