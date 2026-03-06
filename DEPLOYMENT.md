# Guia de Deployment - Forjado na Rocha Web

## Opções de Deployment

### 1. **Railway** (Recomendado - Mais Fácil)

Railway é a forma mais fácil e rápida de fazer deploy.

#### Passos:
1. Acesse [railway.app](https://railway.app)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub"
4. Conecte seu repositório GitHub
5. Railway fará o deploy automaticamente
6. Seu site estará online em: `seu-projeto.railway.app`

**Vantagens:**
- ✅ Deploy automático a cada push no GitHub
- ✅ HTTPS grátis
- ✅ Suporte a variáveis de ambiente
- ✅ Monitoramento e logs

---

### 2. **Heroku**

Heroku é outra opção popular e confiável.

#### Passos:
```bash
# 1. Instale o Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# 2. Faça login
heroku login

# 3. Crie uma nova app
heroku create seu-app-name

# 4. Faça push do código
git push heroku main

# 5. Seu site estará em: https://seu-app-name.herokuapp.com
```

**Vantagens:**
- ✅ Fácil de usar
- ✅ HTTPS grátis
- ✅ Escalável
- ✅ Integração com GitHub

---

### 3. **Vercel**

Vercel é ideal para aplicações Node.js.

#### Passos:
```bash
# 1. Instale o Vercel CLI
npm install -g vercel

# 2. Faça deploy
vercel

# 3. Siga as instruções
```

---

### 4. **Docker + AWS EC2**

Para máximo controle e escalabilidade.

#### Passos:
```bash
# 1. Crie uma instância EC2 no AWS
# 2. SSH na instância
ssh -i key.pem ubuntu@seu-servidor.com

# 3. Instale Docker
sudo apt update
sudo apt install docker.io -y

# 4. Clone o repositório
git clone seu-repositorio.git
cd forjado-na-rocha-web

# 5. Build a imagem Docker
docker build -t forjado .

# 6. Execute o container
docker run -d -p 80:3000 --name forjado forjado

# 7. Seu site estará em: http://seu-servidor.com
```

---

### 5. **DigitalOcean App Platform**

Simples e acessível.

#### Passos:
1. Acesse [digitalocean.com](https://www.digitalocean.com)
2. Vá para "App Platform"
3. Clique em "Create App"
4. Conecte seu repositório GitHub
5. Configure as variáveis de ambiente
6. Deploy automático

---

## Configuração de Variáveis de Ambiente

Independentemente da plataforma escolhida, você precisará configurar:

```
PORT=3000
NODE_ENV=production
STRIPE_KEY=sk_live_sua_chave
PAYPAL_KEY=sua_chave_paypal
WHATSAPP_NUMBER=5541988265591
```

---

## Domínio Personalizado

Após o deployment, você pode configurar um domínio personalizado:

1. Compre um domínio em: GoDaddy, Namecheap, etc.
2. Configure os DNS records apontando para sua aplicação
3. Configure SSL/HTTPS (geralmente automático)

**Exemplo de DNS:**
```
Type: CNAME
Name: www
Value: seu-app.railway.app
```

---

## Monitoramento e Logs

### Railway
- Acesse o dashboard do Railway
- Vá para "Logs"
- Veja logs em tempo real

### Heroku
```bash
heroku logs --tail
```

### AWS EC2
```bash
docker logs forjado
```

---

## Backup e Recuperação

### GitHub
Sempre mantenha seu código no GitHub:
```bash
git push origin main
```

### Banco de Dados
Se usar banco de dados, configure backups automáticos na plataforma.

---

## Performance e Escalabilidade

### Railway
- Aumentar recursos: Dashboard → Settings → Increase Resources

### Heroku
```bash
heroku ps:scale web=2
```

### AWS
- Use load balancer
- Configure auto-scaling

---

## Troubleshooting

### Erro: "Cannot GET /"
- Verifique se `public/index.html` existe
- Verifique se o servidor está rodando na porta correta

### Erro: "Connection refused"
- Verifique se a porta está aberta
- Verifique as variáveis de ambiente

### Erro: "Out of memory"
- Aumente os recursos da aplicação
- Otimize o código

---

## Próximos Passos

1. ✅ Escolha uma plataforma de deployment
2. ✅ Configure as variáveis de ambiente
3. ✅ Faça o primeiro deploy
4. ✅ Configure um domínio personalizado
5. ✅ Monitore os logs e performance

---

## Suporte

Para mais informações, consulte a documentação oficial:
- Railway: https://docs.railway.app
- Heroku: https://devcenter.heroku.com
- Vercel: https://vercel.com/docs
- AWS: https://docs.aws.amazon.com

---

**Seu site estará online e acessível 24/7!** 🚀
