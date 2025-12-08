# Lavandas na Varanda

Site de divulgação para o spa/centro de bem-estar "Lavandas na Varanda" localizado em Monte Verde/MG.

## Deploy na Vercel

O projeto está configurado para deploy automático na Vercel.

### Arquivos de Configuração:
- **vercel.json** — Configurações de build, framework e rewrite de rotas
- **.vercelignore** — Arquivos ignorados no deploy
- **vite.config.ts** — Configuração do Vite (já pronto)
- **package.json** — Scripts de build e desenvolvimento

### Para fazer Deploy:

1. **Via Vercel Dashboard (Recomendado):**
   - Acesse https://vercel.com/dashboard
   - Clique em "New Project"
   - Selecione o repositório GitHub: `good-system-br/LavandaNaVaranda`
   - Clique em "Deploy"
   - Vercel detectará automaticamente as configurações do `vercel.json`

2. **Via CLI (Alternativa):**
   ```powershell
   npm install -g vercel
   vercel
   ```

### Variáveis de Ambiente (se necessário):
Se utilizar APIs no futuro (ex: GEMINI_API_KEY), adicione no dashboard Vercel:
- Projeto → Settings → Environment Variables

### Build Local (para testar):
```powershell
npm run build
npm run preview
```

## Estrutura do Projeto

- `index.html` — HTML principal
- `src/` — Componentes React
- `public/assets/` — Imagens e arquivos estáticos
- `dist/` — Build de produção (gerado pelo Vite)

Tudo pronto para deploy! 🚀
