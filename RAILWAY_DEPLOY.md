# 🚀 Deployment Rápido no Railway

## Passo 1: Preparar o Repositório GitHub

Se ainda não tiver um repositório GitHub:

```bash
# 1. Crie uma conta em github.com (se não tiver)
# 2. Crie um novo repositório chamado "forjado-na-rocha-web"
# 3. No seu computador, execute:

cd /home/ubuntu/forjado-na-rocha-web

# Configure o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/forjado-na-rocha-web.git
git branch -M main
git push -u origin main
```

## Passo 2: Fazer Deploy no Railway

### Opção A: Via Interface Web (Mais Fácil)

1. Acesse [railway.app](https://railway.app)
2. Clique em **"Start a New Project"**
3. Selecione **"Deploy from GitHub"**
4. Autorize o Railway a acessar sua conta GitHub
5. Selecione o repositório **"forjado-na-rocha-web"**
6. Clique em **"Deploy"**
7. Aguarde 2-3 minutos
8. Seu site estará em: `https://seu-projeto.railway.app`

### Opção B: Via CLI (Mais Rápido)

```bash
# 1. Instale o Railway CLI
npm install -g @railway/cli

# 2. Faça login
railway login

# 3. Crie um novo projeto
railway init

# 4. Faça deploy
railway up

# 5. Seu site estará online!
```

## Passo 3: Configurar Variáveis de Ambiente

No Dashboard do Railway:

1. Vá para seu projeto
2. Clique em **"Variables"**
3. Adicione as variáveis:

```
PORT=3000
NODE_ENV=production
STRIPE_KEY=sk_live_sua_chave (opcional)
PAYPAL_KEY=sua_chave (opcional)
WHATSAPP_NUMBER=5541988265591
```

## Passo 4: Configurar Domínio Personalizado (Opcional)

1. Compre um domínio em: GoDaddy, Namecheap, etc.
2. No Dashboard do Railway, vá para **"Settings"**
3. Clique em **"Custom Domain"**
4. Digite seu domínio
5. Configure os DNS records conforme instruído

## Passo 5: Ativar Auto-Deploy

No Dashboard do Railway:

1. Vá para **"Settings"**
2. Ative **"Auto Deploy"**
3. Agora, cada push no GitHub fará deploy automático

## ✅ Seu Site Está Online!

Acesse:
- **Railway:** `https://seu-projeto.railway.app`
- **Domínio personalizado:** `https://seu-dominio.com`

## 🔐 Credenciais de Demonstração

- **Email:** mentor@forjado.com
- **Senha:** senha123

## 📊 Monitorar Performance

No Dashboard do Railway:

- **Logs:** Veja logs em tempo real
- **Metrics:** CPU, memória, requisições
- **Deployments:** Histórico de deploys

## 🆘 Troubleshooting

### Erro: "Cannot GET /"
- Verifique se `public/index.html` existe
- Verifique os logs no Railway

### Erro: "Port already in use"
- Railway gerencia portas automaticamente
- Verifique a variável `PORT`

### Erro: "Connection refused"
- Aguarde 2-3 minutos após o deploy
- Recarregue a página

## 💡 Dicas

1. **Sempre faça commit antes de push:**
   ```bash
   git add .
   git commit -m "Sua mensagem"
   git push origin main
   ```

2. **Monitore os logs:**
   ```bash
   railway logs
   ```

3. **Veja o status do deployment:**
   ```bash
   railway status
   ```

4. **Rollback para versão anterior:**
   No Dashboard → Deployments → Selecione versão anterior

## 🎉 Pronto!

Seu site "Forjado na Rocha" está online e acessível 24/7!

Para mais informações: [docs.railway.app](https://docs.railway.app)
