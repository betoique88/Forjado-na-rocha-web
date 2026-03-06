# Forjado na Rocha - Site Web

Site web responsivo para o programa de transformação espiritual "Forjado na Rocha".

## Funcionalidades

- ✅ Módulos de transformação (4 semanas)
- ✅ Loja com e-books e testes
- ✅ Integração com WhatsApp
- ✅ Dashboard de progresso
- ✅ Suporte 24/7
- ✅ Design responsivo

## Instalação Local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Deployment

### Docker

```bash
docker build -t forjado-na-rocha-web .
docker run -p 3000:3000 forjado-na-rocha-web
```

### Heroku

```bash
heroku create forjado-na-rocha
git push heroku main
```

### Railway

1. Conecte seu repositório GitHub
2. Selecione este projeto
3. Railway fará o deploy automaticamente

### Vercel

```bash
npm install -g vercel
vercel
```

### AWS (EC2 + Docker)

```bash
# SSH no servidor
ssh -i key.pem ubuntu@seu-servidor.com

# Clone o repositório
git clone seu-repositorio.git
cd forjado-na-rocha-web

# Build e execute
docker build -t forjado .
docker run -d -p 80:3000 --name forjado forjado
```

## Variáveis de Ambiente

Crie um arquivo `.env`:

```
PORT=3000
NODE_ENV=production
STRIPE_KEY=sua_chave_stripe
PAYPAL_KEY=sua_chave_paypal
WHATSAPP_NUMBER=5541988265591
```

## API Endpoints

- `GET /api/modules` - Lista todos os módulos
- `GET /api/modules/:id` - Detalhes de um módulo
- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:id` - Detalhes de um produto
- `POST /api/checkout` - Processar compra
- `POST /api/whatsapp/emergency` - Gerar link de emergência
- `GET /api/health` - Health check

## Estrutura do Projeto

```
forjado-na-rocha-web/
├── public/
│   └── index.html          # Página principal
├── server.js               # Servidor Express
├── package.json            # Dependências
├── Dockerfile              # Configuração Docker
└── README.md               # Este arquivo
```

## Tecnologias

- Node.js
- Express.js
- HTML5 + CSS3 + JavaScript
- Responsive Design

## Suporte

Para suporte, entre em contato via WhatsApp: +55 41 98826-5591

## Licença

MIT
