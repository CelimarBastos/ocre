// Menu Toggle para mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const header = document.querySelector('.header');
        if (!header.contains(event.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Scroll suave e animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animar cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animar features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(feature);
    });

    // Animar galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Hover efeito nos botões
    const buttons = document.querySelectorAll('.btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Adicionar interatividade extra para as fotos da galeria
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateX(8deg) rotateY(-12deg) rotateZ(2deg) scale(1.08)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0) rotateZ(0) scale(1)';
        });
    });

    // ============ FUNCIONALIDADE MODAL GALERIA ============
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const whatsappShareBtn = document.getElementById('whatsappShareBtn');
    
    let currentImageIndex = 0;
    const allImages = Array.from(document.querySelectorAll('.gallery-card img'));

    // Verificar se todos os elementos existem
    if (modal && closeBtn && prevBtn && nextBtn && whatsappShareBtn) {
        
        // Abrir modal ao clicar em uma imagem
        galleryCards.forEach((card, index) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                e.stopPropagation();
                const imgInCard = card.querySelector('img');
                currentImageIndex = allImages.indexOf(imgInCard);
                // Enviar direto para WhatsApp ao clicar na imagem
                if (allImages[currentImageIndex]) {
                    const phoneNumber = '558599004961'; // ALTERE PARA SEU NÚMERO
                    const img = allImages[currentImageIndex];
                    const imageName = img.alt;
                    const message = `Olá! Tenho interesse neste produto: *${imageName}* 📸`;
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                }
            });
        });

        function openModal() {
            if (allImages.length === 0) return;
            const img = allImages[currentImageIndex];
            if (img) {
                modalImage.src = img.src;
                modalCaption.textContent = img.alt;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                updateNavButtons();
            }
        }

        function closeModal() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        function updateNavButtons() {
            prevBtn.disabled = currentImageIndex === 0;
            nextBtn.disabled = currentImageIndex === allImages.length - 1;
        }

        function showNextImage() {
            if (currentImageIndex < allImages.length - 1) {
                currentImageIndex++;
                openModal();
            }
        }

        function showPrevImage() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                openModal();
            }
        }

        // Event listeners do modal
        closeBtn.addEventListener('click', closeModal);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);

        // Fechar ao clicar fora da imagem
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Navegação com teclado
        document.addEventListener('keydown', function(e) {
            if (modal.classList.contains('show')) {
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'Escape') closeModal();
            }
        });

        // Compartilhar via WhatsApp (botão dedicado no modal)
        whatsappShareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (allImages[currentImageIndex]) {
                const phoneNumber = '558599004961'; // ALTERE PARA SEU NÚMERO
                const img = allImages[currentImageIndex];
                const imageName = img.alt;
                const message = `Olá! Tenho interesse neste produto: *${imageName}* 📸`;
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
            }
        });

        console.log('✅ Sistema de galeria inicializado com sucesso');
        console.log(`📸 Total de imagens: ${allImages.length}`);
    } else {
        console.error('❌ Erro: Modal ou elementos não encontrados no DOM');
    }

    // Atualizar número do WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        const phoneNumber = '558599004961'; // ALTERE PARA SEU NÚMERO
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=Olá, gostaria de pedir um orçamento!`;
    }

    console.log('Website carregado com sucesso!');
});

// Smooth scroll para navegadores que não suportam scroll-behavior
if (!('scrollBehavior' in document.documentElement.style)) {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
