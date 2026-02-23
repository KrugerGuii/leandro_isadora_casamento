# Convite de Casamento Interativo 💍

Um convite de casamento interativo 100% em HTML, CSS e JavaScript puro. Sem frameworks, sem dependências externas!

## 📋 Arquivos

- `index.html` - Estrutura HTML do convite
- `style.css` - Estilos CSS com animações
- `script.js` - Lógica JavaScript pura

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador
Simplesmente abra o arquivo `index.html` no seu navegador. É isso!

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

### Opção 2: Usar um servidor local (recomendado)

Se você tem Python instalado:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

Se você tem Node.js:
```bash
npx http-server
```

## 🎨 Como Personalizar

### Alterar os Links

Abra o arquivo `index.html` e procure por:

```html
<!-- Botão WhatsApp -->
<a href="https://wa.me/5541999999999?text=..." class="btn btn-confirm">

<!-- Botão Google Maps -->
<a href="https://maps.google.com/?q=..." class="btn btn-location">
```

Substitua os links pelos reais:
- **WhatsApp**: `https://wa.me/SEU_NUMERO_COM_CODIGO_PAIS`
- **Google Maps**: `https://maps.google.com/?q=ENDERECO_OU_COORDENADAS`

### Alterar Textos

Todos os textos estão no `index.html`. Procure e edite:
- Nomes dos noivos
- Data e hora
- Localização
- Mensagens

### Alterar Cores

Abra o `style.css` e procure por:
```css
--primary-color: #1e3a5f; /* Azul marinho */
--secondary-color: #ffffff; /* Branco */
```

Substitua pelos códigos hexadecimais das cores desejadas.

### Alterar Fontes

No `style.css`, procure por:
```css
font-family: 'Georgia', serif;
```

Substitua por outra fonte de sua preferência.

## ✨ Funcionalidades

✅ Animação do envelope se abrindo  
✅ Selo de cera rotativo  
✅ Transição suave entre telas  
✅ Botões interativos com hover  
✅ Responsivo (funciona em mobile, tablet e desktop)  
✅ Tecla ESC para voltar  
✅ Sem dependências externas  
✅ Fácil de editar e customizar  

## 📱 Responsividade

O convite se adapta automaticamente para:
- 📱 Celulares (480px e menores)
- 📱 Tablets (768px)
- 💻 Desktops (1024px+)

## 🔧 Estrutura do Código

```
index.html
├── Tela 1: Envelope
│   ├── Título
│   ├── Envelope (clicável)
│   │   ├── Selo de cera (rotativo)
│   │   └── Texto "Clique para abrir"
│   └── Nomes dos noivos
│
└── Tela 2: Convite Aberto
    ├── Monograma
    ├── Citação bíblica
    ├── Informações do casamento
    ├── Botões interativos
    ├── Informações importantes
    ├── Assinatura
    ├── Paleta de cores
    └── Botão voltar
```

## 🎯 Dicas

- Pressione **ESC** para voltar ao envelope
- Clique nos botões para abrir WhatsApp e Google Maps
- Todos os estilos estão centralizados no `style.css`
- Todas as animações usam CSS puro (sem JavaScript)

## 📄 Licença

Livre para usar e modificar!

---

Desenvolvido com ❤️ para Isadora e Leandro
