#!/bin/bash

echo "🚀 Configurando Forjado na Rocha Web para GitHub e Vercel..."
echo ""

# Verificar se git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Instale com: sudo apt install git"
    exit 1
fi

echo "✅ Git encontrado"
echo ""

# Configurar git
echo "📝 Configurando Git..."
git config user.email "dev@forjado.com"
git config user.name "Forjado Developer"

echo "✅ Git configurado"
echo ""

# Verificar se já tem remote
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote origin já existe"
    echo "URL atual: $(git remote get-url origin)"
    echo ""
    read -p "Deseja substituir? (s/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git remote remove origin
    else
        echo "Abortando..."
        exit 1
    fi
fi

echo ""
echo "📋 Para continuar, você precisa:"
echo "1. Criar uma conta em github.com (se não tiver)"
echo "2. Criar um novo repositório chamado 'forjado-na-rocha-web'"
echo ""
read -p "Digite seu usuário GitHub: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Usuário não pode estar vazio"
    exit 1
fi

REPO_URL="https://github.com/$GITHUB_USER/forjado-na-rocha-web.git"

echo ""
echo "🔗 Adicionando remote: $REPO_URL"
git remote add origin "$REPO_URL"

echo "📤 Fazendo push para GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ✅ ✅ SUCESSO! ✅ ✅ ✅"
    echo ""
    echo "📊 Seu repositório está em:"
    echo "   $REPO_URL"
    echo ""
    echo "🚀 Próximo passo: Deploy no Vercel"
    echo "   1. Acesse https://vercel.com"
    echo "   2. Clique em 'Sign Up' → 'Continue with GitHub'"
    echo "   3. Autorize o Vercel"
    echo "   4. Clique em 'New Project'"
    echo "   5. Selecione 'forjado-na-rocha-web'"
    echo "   6. Clique em 'Deploy'"
    echo ""
    echo "⏱️  Seu site estará online em 1-2 minutos!"
    echo ""
else
    echo "❌ Erro ao fazer push. Verifique:"
    echo "   1. Sua conexão com internet"
    echo "   2. Se o repositório existe no GitHub"
    echo "   3. Se você tem permissão"
    exit 1
fi
