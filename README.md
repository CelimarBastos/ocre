# 🎨 Site Ocre - Site Responsivo Premium

Um site completo e responsivo para apresentação de produtos com menu interativo, galeria de produtos e botão de WhatsApp para orçamento.

## 📋 Características

✅ **Responsivo** - Funciona perfeitamente em desktop, tablet e celular
✅ **Menu Hambúrguer** - Menu responsivo para dispositivos móveis
✅ **Galeria de Produtos** - Grid dinâmico de produtos com animações
✅ **WhatsApp Integrado** - Botão flutuante para pedir orçamento
✅ **Animações Suaves** - Transições e efeitos visuais atraentes
✅ **Design Moderno** - Paleta de cores profissional (tons ocre)
✅ **Performance** - Código otimizado e leve
✅ **Acessibilidade** - Semântica HTML correta

## 🚀 Como Usar

### Instalação

1. Coloque os três arquivos na mesma pasta:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Abra o arquivo `index.html` no navegador

### Personalização

#### 🔧 Mudar Número do WhatsApp

Edite o arquivo `script.js` e procure por esta linha:

```javascript
const phoneNumber = '5511999999999';
```

Substitua pelo seu número de WhatsApp (inclua código de país +55 e DDD):
- Exemplo: `'5511987654321'` para São Paulo
- Exemplo: `'5521988776655'` para Rio de Janeiro

#### 🎨 Cores

No arquivo `styles.css`, encontre a seção `:root` e altere as cores:

```css
:root {
    --primary-color: #8B6F47;      /* Cor principal (ocre) */
    --secondary-color: #D4A574;    /* Cor secundária */
    --text-color: #333;            /* Cor do texto */
    --light-bg: #F5F5F5;           /* Fundo claro */
}
```

#### 📝 Adicionar/Editar Produtos

No `index.html`, dentro da seção `.products-grid`, copie e modifique um card de produto:

```html
<div class="product-card">
    <div class="product-image">
        <img src="URL-DA-IMAGEM" alt="Nome do Produto">
    </div>
    <div class="product-info">
        <h3>Nome do Produto</h3>
        <p class="product-description">Descrição do produto</p>
        <div class="product-price">
            <span class="price">R$ 99,90</span>
        </div>
        <button class="btn btn-secondary">Saiba Mais</button>
    </div>
</div>
```

#### 📱 Imagens de Produtos

Use URLs de imagens reais. Exemplos:
- Upload em um servidor de imagens (Imgur, Cloudinary, etc.)
- Hospede as imagens no mesmo servidor
- Use plataformas como Firebase Storage

## 📁 Estrutura do Projeto

```
├── index.html      # Estrutura HTML do site
├── styles.css      # Estilos e responsividade
├── script.js       # Interatividade e funcionalidades
└── README.md       # Este arquivo
```

## 🌐 Seções do Site

1. **Header** - Logo e menu de navegação responsivo
2. **Banner** - Seção de destaque com call-to-action
3. **Produtos** - Grid de 6 produtos premium
4. **Sobre** - Informações sobre a empresa e diferenciais
5. **Footer** - Links rápidos, redes sociais e informações
6. **WhatsApp** - Botão flutuante para orçamento

## 💻 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para ícones e fontes)
- Nenhuma dependência externa necessária!

## 🎯 Dicas de Otimização

### Para melhor experiência:
1. Use imagens comprimidas (<100KB cada)
2. Teste em diferentes dispositivos
3. Customize as cores de acordo com sua marca
4. Atualize os textos e informações
5. Adicione seu número real de WhatsApp

### Para hospedagem:
- GitHub Pages (grátis)
- Netlify (grátis)
- Vercel (grátis)
- Seu próprio servidor

## 📱 Breakpoints Responsivos

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Celular**: até 767px
- **Celular pequeno**: até 480px

## 🔐 Segurança

- Sem formulários com dados sensíveis
- Sem banco de dados
- Link de WhatsApp totalmente seguro
- Nenhum rastreamento não autorizado

## 🆘 Troubleshooting

**Menu não funciona em mobile?**
- Verifique se o `script.js` está vinculado corretamente
- Limpe o cache do navegador

**Imagens não aparecem?**
- Verifique as URLs das imagens
- Use https:// em vez de http://

**WhatsApp não abre?**
- Confirme que o número está no formato correto (+55 + DDD + número)
- Teste em um dispositivo com WhatsApp instalado

## 📞 Suporte

Para dúvidas sobre personalização, consulte a documentação HTML, CSS e JavaScript comentada.

## 📄 Licença

Use livremente para seus projetos pessoais e comerciais.

---

**Desenvolvido com ❤️ para a Ocre**
Última atualização: 3 de Abril de 2026
