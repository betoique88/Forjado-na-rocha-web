const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dados de exemplo
const modules = [
  {
    id: 1,
    week: 1,
    title: "A Sombra da Ausência",
    description: "Compreender o impacto da ausência paterna na vida",
    content: "Nesta semana exploraremos como a ausência do pai afeta nossas emoções e relacionamentos.",
    tasks: 7,
    completed: 0,
    status: "available"
  },
  {
    id: 2,
    week: 2,
    title: "O Pai que Precisávamos vs. O Pai que Tivemos",
    description: "Comparação entre expectativas e realidade",
    content: "Analisaremos a diferença entre o pai ideal e o pai real.",
    tasks: 7,
    completed: 0,
    status: "locked"
  },
  {
    id: 3,
    week: 3,
    title: "Ecos na Vida Adulta",
    description: "Como o passado afeta o presente",
    content: "Veremos como as experiências da infância ecoam na vida adulta.",
    tasks: 7,
    completed: 0,
    status: "locked"
  },
  {
    id: 4,
    week: 4,
    title: "O Pai Perfeito",
    description: "Encontrando cura em Deus Pai",
    content: "Descobriremos como Deus pode preencher as lacunas deixadas pela ausência paterna.",
    tasks: 7,
    completed: 0,
    status: "locked"
  }
];

const products = [
  {
    id: "ebook1",
    type: "ebook",
    title: "Fundamentos da Transformação Espiritual",
    description: "50 páginas com conteúdo profundo sobre transformação espiritual",
    price: 29.90,
    pages: 50
  },
  {
    id: "ebook2",
    type: "ebook",
    title: "Cura Emocional através da Fé",
    description: "45 páginas sobre cura emocional e fé",
    price: 24.90,
    pages: 45
  },
  {
    id: "ebook3",
    type: "ebook",
    title: "Relacionamentos Saudáveis em Cristo",
    description: "40 páginas sobre relacionamentos baseados em princípios cristãos",
    price: 19.90,
    pages: 40
  },
  {
    id: "test1",
    type: "test",
    title: "Avaliação de Maturidade Espiritual",
    description: "20 questões para avaliar seu nível de maturidade espiritual",
    price: 9.90,
    questions: 20
  },
  {
    id: "test2",
    type: "test",
    title: "Diagnóstico de Padrões Emocionais",
    description: "25 questões para identificar padrões emocionais",
    price: 9.90,
    questions: 25
  },
  {
    id: "test3",
    type: "test",
    title: "Identificação de Bloqueios Espirituais",
    description: "30 questões para identificar bloqueios espirituais",
    price: 14.90,
    questions: 30
  }
];

// Rotas da API
app.get('/api/modules', (req, res) => {
  res.json(modules);
});

app.get('/api/modules/:id', (req, res) => {
  const module = modules.find(m => m.id === parseInt(req.params.id));
  if (!module) return res.status(404).json({ error: 'Módulo não encontrado' });
  res.json(module);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(product);
});

app.post('/api/checkout', (req, res) => {
  const { productId, userId } = req.body;
  res.json({
    success: true,
    message: 'Compra processada com sucesso',
    orderId: `ORD-${Date.now()}`,
    productId,
    userId
  });
});

app.post('/api/whatsapp/emergency', (req, res) => {
  const { message, phone } = req.body;
  const mentorNumber = '5541988265591';
  const whatsappUrl = `https://wa.me/${mentorNumber}?text=${encodeURIComponent(message)}`;
  res.json({
    success: true,
    whatsappUrl,
    message: 'Link de emergência gerado'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Forjado na Rocha Web API' });
});

// Servir página HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Forjado na Rocha Web rodando em http://localhost:${PORT}`);
  console.log(`📱 Acesse http://localhost:${PORT} no seu navegador`);
});
