# 🎉 Deployment 100% GRATUITO - Forjado na Rocha Web

## 🚀 Opções de Deployment Gratuito (Escolha Uma)

### **OPÇÃO 1: Vercel (RECOMENDADO - Mais Fácil)**

Vercel oferece **plano gratuito ilimitado** para aplicações Node.js.

#### Passo 1: Criar Conta
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel

#### Passo 2: Fazer Deploy
1. Clique em **"New Project"**
2. Selecione seu repositório **"forjado-na-rocha-web"**
3. Clique em **"Deploy"**
4. Aguarde 1-2 minutos
5. Seu site estará em: `https://forjado-na-rocha-web.vercel.app`

#### Passo 3: Configurar Domínio Personalizado (Gratuito)
1. No Vercel, vá para **"Settings" → "Domains"**
2. Adicione seu domínio
3. Configure os DNS records conforme instruído

**Vantagens:**
- ✅ Gratuito para sempre
- ✅ Deploy automático a cada push no GitHub
- ✅ HTTPS automático
- ✅ Suporte a variáveis de ambiente
- ✅ Logs em tempo real
- ✅ Rollback automático

---

### **OPÇÃO 2: Railway (GRATUITO COM LIMITE)**

Railway oferece **$5/mês gratuito** (mais que suficiente para começar).

#### Passo 1: Criar Conta
1. Acesse [railway.app](https://railway.app)
2. Clique em **"Start a New Project"**
3. Escolha **"Deploy from GitHub"**
4. Autorize o Railway

#### Passo 2: Fazer Deploy
1. Selecione seu repositório
2. Clique em **"Deploy"**
3. Seu site estará em: `https://seu-projeto.railway.app`

**Vantagens:**
- ✅ $5/mês gratuito
- ✅ Mais que suficiente para começar
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ Banco de dados gratuito (PostgreSQL)

---

### **OPÇÃO 3: Heroku (GRATUITO - Mas Lento)**

Heroku oferece **dyno gratuito** (aplicação fica lenta após 30 min de inatividade).

#### Passo 1: Criar Conta
1. Acesse [heroku.com](https://www.heroku.com)
2. Clique em **"Sign up"**
3. Preencha o formulário

#### Passo 2: Instalar Heroku CLI
```bash
# No seu computador
npm install -g heroku

# Fazer login
heroku login
```

#### Passo 3: Fazer Deploy
```bash
cd /home/ubuntu/forjado-na-rocha-web

# Criar app no Heroku
heroku create seu-app-name

# Fazer push
git push heroku main

# Seu site estará em: https://seu-app-name.herokuapp.com
```

**Vantagens:**
- ✅ Gratuito
- ✅ Fácil de usar
- ✅ HTTPS automático

**Desvantagens:**
- ❌ Aplicação fica lenta após 30 min de inatividade
- ❌ Precisa de cartão de crédito

---

### **OPÇÃO 4: Render (GRATUITO - Bom Desempenho)**

Render oferece **plano gratuito com bom desempenho**.

#### Passo 1: Criar Conta
1. Acesse [render.com](https://render.com)
2. Clique em **"Sign up"**
3. Escolha **"GitHub"**

#### Passo 2: Fazer Deploy
1. Clique em **"New +"**
2. Selecione **"Web Service"**
3. Conecte seu repositório
4. Clique em **"Create Web Service"**
5. Seu site estará em: `https://seu-app.onrender.com`

**Vantagens:**
- ✅ Gratuito
- ✅ Bom desempenho
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ Sem "sleep mode"

---

### **OPÇÃO 5: Netlify (GRATUITO - Para Sites Estáticos)**

Se quiser apenas servir os arquivos HTML/CSS/JS sem backend.

#### Passo 1: Criar Conta
1. Acesse [netlify.com](https://www.netlify.com)
2. Clique em **"Sign up"**
3. Escolha **"GitHub"**

#### Passo 2: Fazer Deploy
1. Clique em **"Add new site"**
2. Selecione **"Import an existing project"**
3. Escolha seu repositório
4. Configure:
   - Build command: (deixe vazio)
   - Publish directory: `public`
5. Clique em **"Deploy"**
6. Seu site estará em: `https://seu-site.netlify.app`

**Vantagens:**
- ✅ Gratuito
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ CDN global

**Desvantagens:**
- ❌ Não funciona com Node.js backend (apenas arquivos estáticos)

---

## 📊 Comparação das Opções

| Plataforma | Custo | Desempenho | Facilidade | Recomendação |
|---|---|---|---|---|
| **Vercel** | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 🏆 MELHOR |
| **Railway** | $5/mês | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ Bom |
| **Render** | Gratuito | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ Bom |
| **Heroku** | Gratuito | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ Lento |
| **Netlify** | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ Sem backend |

---

## 🎯 RECOMENDAÇÃO: Vercel (100% Gratuito)

### Por que Vercel é a melhor opção?

1. **Completamente Gratuito** - Sem limites, sem cartão de crédito necessário
2. **Melhor Desempenho** - Infraestrutura global com CDN
3. **Deploy Automático** - A cada push no GitHub
4. **HTTPS Automático** - Segurança incluída
5. **Fácil de Usar** - Interface intuitiva
6. **Suporte Excelente** - Documentação completa

### Passo a Passo Vercel (5 minutos)

#### 1. Preparar GitHub
```bash
cd /home/ubuntu/forjado-na-rocha-web

# Se ainda não tiver repositório
git init
git config user.email "seu@email.com"
git config user.name "Seu Nome"
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub
# https://github.com/new

# Fazer push
git remote add origin https://github.com/SEU_USUARIO/forjado-na-rocha-web.git
git branch -M main
git push -u origin main
```

#### 2. Fazer Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** → **"Continue with GitHub"**
3. Autorize o Vercel
4. Clique em **"New Project"**
5. Selecione **"forjado-na-rocha-web"**
6. Clique em **"Deploy"**
7. **PRONTO!** Seu site está online em 1-2 minutos

#### 3. Seu Site Está Online!
- URL: `https://forjado-na-rocha-web.vercel.app`
- Acesso: mentor@forjado.com / senha123

---

## 🌐 Configurar Domínio Personalizado (Gratuito)

### Passo 1: Comprar Domínio Gratuito
Existem vários provedores de domínios gratuitos:

1. **Freenom** (freenom.com)
   - Domínios: .tk, .ml, .ga, .cf
   - Completamente gratuito
   - Válido por 12 meses

2. **Dot.tk** (dot.tk)
   - Domínios .tk gratuitos
   - Fácil de configurar

3. **Vercel Domains** (vercel.com)
   - Domínios pagos mas com preços baixos
   - Integração perfeita

### Passo 2: Configurar no Vercel
1. No Vercel, vá para seu projeto
2. Clique em **"Settings"** → **"Domains"**
3. Clique em **"Add Domain"**
4. Digite seu domínio
5. Configure os DNS records conforme instruído
6. Aguarde 24-48 horas para propagação

---

## 🔄 Deploy Automático

Após configurar no Vercel/Railway/Render, cada vez que você fizer push no GitHub:

```bash
# Fazer alterações
# ... editar arquivos ...

# Fazer commit
git add .
git commit -m "Sua mensagem"

# Fazer push
git push origin main

# Vercel fará deploy automaticamente em 1-2 minutos!
```

---

## 📊 Monitorar Seu Site

### Vercel Dashboard
1. Acesse seu projeto no Vercel
2. Veja:
   - **Deployments:** Histórico de deploys
   - **Logs:** Logs em tempo real
   - **Analytics:** Visitantes e performance
   - **Settings:** Configurações

### Verificar Status
```bash
# Verificar se site está online
curl https://seu-site.vercel.app

# Ver logs (se usar CLI)
vercel logs
```

---

## 🆘 Troubleshooting

### Erro: "Cannot GET /"
- Verifique se `public/index.html` existe
- Verifique os logs no Vercel

### Erro: "Port already in use"
- Vercel gerencia portas automaticamente
- Não precisa configurar PORT

### Site está lento
- Verifique os logs
- Aumente recursos (se necessário)
- Use CDN (Vercel já inclui)

### Domínio não funciona
- Aguarde 24-48 horas para propagação DNS
- Verifique se os DNS records estão corretos
- Use: https://www.whatsmydns.net/

---

## 💡 Dicas Importantes

1. **Sempre use GitHub**
   - Backup automático do código
   - Histórico de versões
   - Fácil rollback

2. **Monitore os logs**
   - Identifique problemas rapidamente
   - Melhore performance

3. **Teste localmente antes de fazer push**
   ```bash
   npm install
   npm start
   # Acesse http://localhost:3000
   ```

4. **Use variáveis de ambiente**
   - Não coloque senhas no código
   - Configure no Vercel Dashboard

5. **Faça backup regularmente**
   - Mantenha código no GitHub
   - Exporte dados periodicamente

---

## 🎉 Seu Site Está Online!

Parabéns! Seu site "Forjado na Rocha" está:
- ✅ Online 24/7
- ✅ Com HTTPS automático
- ✅ Com deploy automático
- ✅ 100% GRATUITO
- ✅ Escalável
- ✅ Com bom desempenho

---

## 📞 Próximos Passos

1. ✅ Fazer deploy no Vercel
2. ⬜ Integrar pagamento (Stripe - gratuito para começar)
3. ⬜ Adicionar banco de dados (MongoDB Atlas - gratuito)
4. ⬜ Implementar email (SendGrid - gratuito)
5. ⬜ Analytics (Google Analytics - gratuito)

---

## 🔗 Links Úteis

- **Vercel:** https://vercel.com
- **GitHub:** https://github.com
- **Freenom:** https://www.freenom.com
- **Stripe:** https://stripe.com
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas

---

**Seu site está pronto para o mundo! 🌍✨**

Dúvidas? Consulte a documentação oficial ou entre em contato via WhatsApp: +55 41 98826-5591
