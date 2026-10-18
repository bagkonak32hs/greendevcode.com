// ── Custom Cursor ──
(function () {
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursorDot');
    if (!cursor || !dot) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function anim() {
        cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12;
        cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
        requestAnimationFrame(anim);
    })();
    document.querySelectorAll('a,button,.project-card,.service-card,.tech-icon,.social-btn,.testimonial-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
    });
})();

// ── Dark / Light Mode ──
(function () {
    const btn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    if (!btn) return;
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        icon.className = 'fa-solid fa-moon';
    }
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const light = document.body.classList.contains('light-mode');
        icon.className = light ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        localStorage.setItem('theme', light ? 'light' : 'dark');
    });
})();

// ── TR / EN Language Toggle ──
(function () {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    const t = {
        en: {
            'nav-home':'Home','nav-about':'About','nav-services':'Services',
            'nav-projects':'Projects','nav-next':'Next Projects',
            'nav-reviews':'Reviews','nav-experience':'Experience','nav-contact':'Contact',
            'avail':'Available for freelance work',
            'hero-sub':'Full Stack Software Developer',
            'hero-p':'We develop scalable web applications and innovative solutions that make a difference. We are passionate about clean code, user experience, and the latest technologies. We are constantly learning and improving.',
            'btn-work':'View My Work','btn-touch':'Get In Touch',
            'about-title':'About Me','about-sub':'Passionate developer with over 1 year of experience in developing digital solutions',
            'about-h3':"Hi, I'm Selçuk",
            'about-p1':"I'm a full-stack software developer specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies, I create robust, scalable applications that solve real-world problems.",
            'about-p2':'My journey in software development started with a curiosity about how things work, and has evolved into a passion for creating elegant solutions to complex challenges. I believe in writing clean, maintainable code and staying current with industry best practices.',
            'about-p3':"When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies.",
            'about-p4':'In software development, it is very important to stay up to date, follow the latest technologies, learn new languages, and work continuously. I am constantly striving to improve myself in this regard.',
            'srv-title':'Services','srv-sub':'What I can build for you',
            'srv1-title':'Web Development','srv2-title':'E-Commerce','srv3-title':'Shopify Store','srv4-title':'Mobile App','srv5-title':'Desktop Application',
            'srv1-desc':'Corporate and personal websites with modern design, mobile-friendly layouts and fast loading times.',
            'srv2-desc':'Full-featured online stores with product management, payment integration and sales analytics.',
            'srv3-desc':'Custom Shopify themes and storefronts optimised for conversion, mobile UX and brand identity.',
            'srv4-desc':'Android mobile applications built with Java/Kotlin, published and maintained on Google Play Store.',
            'srv5-desc':'Windows desktop applications built with C# and .NET. Internal tools, automation software and business management systems.',
            'srv-cta':'Get a Quote →',
            'proj-title':'Projects','proj-sub':'Here are some completed projects',
            'rev-title':'Client Reviews','rev-sub':'What clients say about working with me',
            'rev1-text':'"Selçuk delivered our law firm website exactly as we envisioned. Professional, fast, and responsive — the site looks great on every device. Highly recommend."',
            'rev2-text':'"Our automotive service website was built quickly and professionally. Customers find us easily online now. The design is clean and the contact form works perfectly."',
            'rev3-text':'"The Shopify store Selçuk built for us has a beautiful design and works flawlessly. Sales increased noticeably after launch. Great communication throughout the project."',
            'exp-title':'Work Experience','exp-sub':'My professional journey in software development',
            'exp1-title':'Freelance Full Stack Developer','exp1-company':'Self-Employed',
            'exp1-desc':'Developing corporate and commercial websites for clients across various industries including legal, automotive, e-commerce and real estate. Delivering end-to-end solutions from design to Cloudflare/Vercel deployment.',
            'exp2-title':'Android Developer','exp2-company':'Independent',
            'exp2-desc':'Developed and published a mobile game on Google Play using Java and Android SDK. Handled game logic, UI animations, and store listing optimization independently.',
            'exp3-title':'Junior Developer','exp3-company':'StartUp Labs / Freelancer',
            'exp3-desc':'Built responsive web applications and RESTful APIs. Participated in agile development processes and contributed to code reviews. Gained extensive experience in modern JavaScript frameworks.',
            'cont-title':'Get In Touch','cont-sub':"Let's discuss your next project or opportunity",
            'lbl-email':'Email','lbl-phone':'Phone','lbl-location':'Location','lbl-avail':'Availability','lbl-avail-text':'Open to opportunities',
            'copy-hint':'click to copy',
            'calc-title':'Price Calculator','calc-sub':'Get an instant estimate for your project',
            'calc-type':'Project Type','calc-extras':'Extra Features',
            'calc-estimate':'Estimated Price','calc-note':'* Final price depends on project scope','calc-cta':'Get Exact Quote →',
            'ext-seo':'SEO Optimization','ext-admin':'Admin Panel','ext-payment':'Payment Integration','ext-multilang':'Multi-language Support','ext-maintenance':'6-Month Maintenance',
            'clients-title':'Our Clients','clients-sub':'Trusted by businesses across industries',
            'req-open':'Request a Project','req-title':'Request a Project','req-sub':'Tell me about your project',
            'req-budget':'Budget Range','req-send':'Send Request',
            'cta-badge':'Free Consultation','cta-sub':'Get a custom quote in 24 hours',
            'form-title':'Send a Quick Message','form-sub':'I\'ll get back to you within 24 hours',
        },
        tr: {
            'nav-home':'Ana Sayfa','nav-about':'Hakkımda','nav-services':'Hizmetler',
            'nav-projects':'Projeler','nav-next':'Diğer Projeler',
            'nav-reviews':'Referanslar','nav-experience':'Deneyim','nav-contact':'İletişim',
            'avail':'Freelance iş için müsaitim',
            'hero-sub':'Full Stack Yazılım Geliştirici',
            'hero-p':'Fark yaratan ölçeklenebilir web uygulamaları ve yenilikçi çözümler geliştiriyoruz. Temiz kod, kullanıcı deneyimi ve en son teknolojilere olan tutkumuzla sürekli öğreniyor ve gelişiyoruz.',
            'btn-work':'Projelerimi Gör','btn-touch':'İletişime Geç',
            'about-title':'Hakkımda','about-sub':'1 yılı aşkın deneyimle dijital çözümler geliştiren tutkulu yazılımcı',
            'about-h3':"Merhaba, ben Selçuk",
            'about-p1':"Olağanüstü dijital deneyimler oluşturma konusunda uzmanlaşmış bir full-stack yazılım geliştiricisiyim. Hem frontend hem de backend teknolojilerinde güçlü bir temelle, gerçek dünya problemlerini çözen sağlam ve ölçeklenebilir uygulamalar geliştiriyorum.",
            'about-p2':'Yazılım geliştirme yolculuğum, şeylerin nasıl çalıştığına dair merakla başladı ve karmaşık zorluklara zarif çözümler üretme tutkusuna dönüştü. Temiz, sürdürülebilir kod yazmaya ve sektördeki en iyi uygulamalarla güncel kalmaya inanıyorum.',
            'about-p3':'Kodlama yapmadığım zamanlarda açık kaynak projelere katkıda bulunuyor, teknik makaleler yazıyor veya yeni teknolojiler keşfediyorum.',
            'about-p4':'Yazılım geliştirmede güncel kalmak, en son teknolojileri takip etmek, yeni diller öğrenmek ve sürekli çalışmak çok önemlidir. Bu konuda kendimi sürekli geliştirmeye çalışıyorum.',
            'srv-title':'Hizmetler','srv-sub':'Sizin için neler yapabilirim',
            'srv1-title':'Web Geliştirme','srv2-title':'E-Ticaret','srv3-title':'Shopify Mağaza','srv4-title':'Mobil Uygulama','srv5-title':'Masaüstü Uygulama',
            'srv1-desc':'Modern tasarım, mobil uyumlu yapı ve hızlı yükleme süreleriyle kurumsal ve kişisel web siteleri.',
            'srv2-desc':'Ürün yönetimi, ödeme entegrasyonu ve satış analitiğiyle tam donanımlı online mağazalar.',
            'srv3-desc':'Dönüşüm, mobil UX ve marka kimliğine optimize edilmiş özel Shopify temaları ve mağazaları.',
            'srv4-desc':"Java/Kotlin ile geliştirilen ve Google Play Store'da yayınlanan Android mobil uygulamalar.",
            'srv5-desc':'C# ve .NET ile geliştirilen Windows masaüstü uygulamaları. İç araçlar, otomasyon yazılımları ve iş yönetim sistemleri.',
            'srv-cta':'Teklif Al →',
            'proj-title':'Projeler','proj-sub':'Tamamlanmış bazı projeler',
            'rev-title':'Müşteri Yorumları','rev-sub':'Müşterilerim ne diyor',
            'rev1-text':'"Selçuk, hukuk büromuzu tam hayal ettiğimiz gibi teslim etti. Profesyonel, hızlı ve duyarlı — site her cihazda harika görünüyor. Kesinlikle tavsiye ederim."',
            'rev2-text':'"Otomotiv servis sitemiz hızlı ve profesyonel şekilde yapıldı. Müşteriler bizi artık kolayca çevrimiçi buluyor. Tasarım temiz, iletişim formu mükemmel çalışıyor."',
            'rev3-text':'"Selçuk\'un bizim için yaptığı Shopify mağazası güzel bir tasarıma sahip ve kusursuz çalışıyor. Lansmanın ardından satışlarda gözle görülür artış yaşandı. Proje boyunca iletişim harikaydı."',
            'exp-title':'İş Deneyimi','exp-sub':'Yazılım geliştirmedeki profesyonel yolculuğum',
            'exp1-title':'Freelance Full Stack Geliştirici','exp1-company':'Serbest Çalışan',
            'exp1-desc':'Hukuk, otomotiv, e-ticaret ve gayrimenkul gibi çeşitli sektörlerdeki müşteriler için kurumsal ve ticari web siteleri geliştiriyorum. Tasarımdan Cloudflare/Vercel deployment\'a kadar uçtan uca çözümler sunuyorum.',
            'exp2-title':'Android Geliştirici','exp2-company':'Bağımsız',
            'exp2-desc':'Java ve Android SDK kullanarak Google Play\'de bir mobil oyun geliştirip yayınladım. Oyun mantığını, UI animasyonlarını ve mağaza listeleme optimizasyonunu bağımsız olarak yönettim.',
            'exp3-title':'Junior Geliştirici','exp3-company':'StartUp Labs / Freelancer',
            'exp3-desc':'Duyarlı web uygulamaları ve RESTful API\'ler oluşturdum. Çevik geliştirme süreçlerine katıldım ve kod incelemelerine katkıda bulundum. Modern JavaScript framework\'lerinde kapsamlı deneyim kazandım.',
            'cont-title':'İletişime Geç','cont-sub':'Bir sonraki projenizi veya fırsatınızı konuşalım',
            'lbl-email':'E-posta','lbl-phone':'Telefon','lbl-location':'Konum','lbl-avail':'Müsaitlik','lbl-avail-text':'İş tekliflerine açığım',
            'copy-hint':'kopyalamak için tıkla',
            'calc-title':'Fiyat Hesaplayıcı','calc-sub':'Projeniz için anında tahmini fiyat alın',
            'calc-type':'Proje Türü','calc-extras':'Ek Özellikler',
            'calc-estimate':'Tahmini Fiyat','calc-note':'* Kesin fiyat proje kapsamına göre değişir','calc-cta':'Kesin Teklif Al →',
            'ext-seo':'SEO Optimizasyonu','ext-admin':'Admin Paneli','ext-payment':'Ödeme Entegrasyonu','ext-multilang':'Çok Dilli Destek','ext-maintenance':'6 Aylık Bakım',
            'clients-title':'Müşterilerimiz','clients-sub':'Farklı sektörlerden güvenen işletmeler',
            'req-open':'Proje Talep Et','req-title':'Proje Talebi','req-sub':'Projenizi anlatın',
            'req-budget':'Bütçe Aralığı','req-send':'Talebi Gönder',
            'cta-badge':'Ücretsiz Danışma','cta-sub':'24 saat içinde özel teklif alın',
            'form-title':'Hızlı Mesaj Gönder','form-sub':'24 saat içinde geri dönüyorum',
        }
    };
    let lang = localStorage.getItem('lang') || 'en';
    btn.textContent = lang === 'en' ? 'TR' : 'EN';
    // NOT: applyLang projDescTR/EN'e bağımlı, diziler tanımlandıktan sonra çağrılıyor
    btn.addEventListener('click', () => {
        lang = lang === 'en' ? 'tr' : 'en';
        localStorage.setItem('lang', lang);
        btn.textContent = lang === 'en' ? 'TR' : 'EN';
        applyLang(lang);
    });
    // Project card descriptions (EN → TR by order)
    const projDescTR = [
        'Gerçek zamanlı dava takibi, otomatik belge taslağı, sözleşme analizi ve güvenli müvekkil iletişim paneliyle tam donanımlı bir hukuki destek platformu.',
        'Büyük, orta ve küçük segment araçlara mekanik tamir, kaporta düzeltme ve boya hizmetleri sunan kapsamlı bir otomotiv servisi platformu.',
        'Online rezervasyon, gerçek zamanlı takip ve müşteri desteği özellikleriyle modern bir nakliyat şirketi web sitesi.',
        'Dava yönetimi, belge işleme ve müvekkil iletişim araçlarıyla tam donanımlı bir hukuk bürosu platformu.',
        'Gerçek zamanlı envanter yönetimi, ödeme entegrasyonu ve zarif mobil öncelikli tasarıma sahip premium mücevher e-ticaret platformu.',
        'Java ile geliştirilmiş ve Google Play\'de yayınlanmış Android mobil oyun. Özel oyun mekaniği, akıcı animasyonlar ve ilerleme sistemi içeriyor.',
        'React ve Tailwind CSS ile oluşturulmuş evcil hayvan ürünleri e-ticaret platformu. Ürün kataloğu, filtreleme, sepet yönetimi ve mobil uyumlu ödeme akışı içeriyor.',
        "Premium evcil hayvan aksesuar markası için özel Shopify mağazası. Özel tema geliştirme, ürün sayfası optimizasyonu ve dönüşüm odaklı UI tasarımı içeriyor.",
        'Otantik Anadolu el sanatları ve doğal ürünleri sergileyen e-ticaret sitesi. Kültürel tasarım öğeleri ve çoklu dil desteğiyle özel Shopify teması.',
        'Kategorize haber akışları, maç sonuçları ve canlı skor güncellemeleriyle spor haber portalı. Mobil okuyuculara optimize edilmiş temiz ve hızlı tasarım.',
    ];
    const projDescEN = [
        'A full-featured legal support platform with real-time case tracking, automated document drafting, contract analysis, and secure client communication dashboard.',
        'A comprehensive auto repair company platform that provides mechanical repair, body correction and painting services for large, medium and small segment vehicles.',
        'A modern moving company website with online booking, real-time tracking, and customer support features.',
        'A full-featured legal law platform with case management, document handling, and client communication tools.',
        'Premium jewelry e-commerce platform built with React and Tailwind CSS. Features product showcase, real-time inventory, secure payment integration and an elegant mobile-first design.',
        'Android mobile game developed with Java and published on Google Play. Features custom game mechanics, smooth animations and progression systems.',
        'Pet products e-commerce platform built with React and Tailwind CSS. Includes product catalog, filtering, cart management and a mobile-friendly checkout flow.',
        'Custom Shopify storefront for a premium pet accessories brand. Includes custom theme development, product page optimization and conversion-focused UI design.',
        'E-commerce website showcasing authentic Anatolian handcraft and natural products. Custom Shopify theme with cultural design elements and multi-language support.',
        'A sports news portal with categorized news feeds, match results and live score updates. Built with a clean, fast-loading design optimized for mobile readers.',
    ];

    function applyLang(l) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[l][key] !== undefined) el.textContent = t[l][key];
        });
        // Project card descriptions
        const projDescs = document.querySelectorAll('.project-content > p');
        const descArr = l === 'tr' ? projDescTR : projDescEN;
        projDescs.forEach((el, i) => { if (descArr[i]) el.textContent = descArr[i]; });
        // Form placeholders
        const fields = {
            'input[name="name"]': l === 'tr' ? 'Ad Soyad' : 'Full Name',
            'input[name="email"]': l === 'tr' ? 'E-posta Adresi' : 'Email Address',
            'textarea[name="message"]': l === 'tr' ? 'Mesajınız' : 'Your Message',
        };
        Object.entries(fields).forEach(([sel, txt]) => {
            const el = document.querySelector(sel);
            if (el) el.placeholder = txt;
        });
        const submitBtn = document.querySelector('.contact-form button[type="submit"]');
        if (submitBtn) submitBtn.textContent = l === 'tr' ? 'Gönder' : 'Send Message';
    }

    // Diziler tanımlandıktan sonra sayfa açılışında uygula
    applyLang(lang);
})();

// ── Particle Canvas ──
(function () {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles, mouse = { x: null, y: null };
    const COUNT = 80;
    const MAX_DIST = 140;
    const COLORS = ['#0ea5e9', '#6366f1', '#8b5cf6', '#38bdf8'];

    function resize() {
        const hero = canvas.parentElement;
        W = canvas.width  = hero.offsetWidth;
        H = canvas.height = hero.offsetHeight;
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function createParticles() {
        particles = Array.from({ length: COUNT }, () => ({
            x: rand(0, W), y: rand(0, H),
            vx: rand(-0.4, 0.4), vy: rand(-0.4, 0.4),
            r: rand(1.5, 3.5),
            color: COLORS[Math.floor(Math.random() * COLORS.length)]
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        // lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(14,165,233,${0.15 * (1 - dist / MAX_DIST)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
            // line to mouse
            if (mouse.x !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST * 1.4) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(99,102,241,${0.25 * (1 - dist / (MAX_DIST * 1.4))})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // dots
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.7;
            ctx.fill();
            ctx.globalAlpha = 1;

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
        });

        requestAnimationFrame(draw);
    }

    canvas.parentElement.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = null; mouse.y = null;
    });

    window.addEventListener('resize', () => { resize(); createParticles(); });

    resize();
    createParticles();
    draw();
})();

// ── Fiyat Hesaplayıcı (floating modal) ──
(function () {
    const floatBtn = document.getElementById('calcFloatBtn');
    const calcModal = document.getElementById('calcModal');
    const calcClose = document.getElementById('calcModalClose');
    if (!floatBtn || !calcModal) return;

    floatBtn.addEventListener('click', () => calcModal.classList.toggle('open'));
    calcClose && calcClose.addEventListener('click', () => calcModal.classList.remove('open'));
    calcModal.addEventListener('click', e => { if (e.target === calcModal) calcModal.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') calcModal.classList.remove('open'); });

    const basePrices = {
        web:       [8000,  15000],
        ecommerce: [15000, 30000],
        shopify:   [10000, 20000],
        mobile:    [20000, 40000],
        desktop:   [15000, 35000],
    };
    function fmt(n) { return '₺' + n.toLocaleString('tr-TR'); }
    function update() {
        const typeEl = document.querySelector('input[name="proj-type"]:checked');
        const priceEl = document.getElementById('calcPrice');
        if (!typeEl || !priceEl) return;
        let [min, max] = basePrices[typeEl.value] || [8000, 15000];
        document.querySelectorAll('.calc-extra:checked').forEach(cb => {
            const v = parseInt(cb.value, 10);
            min += v; max += v;
        });
        priceEl.textContent = fmt(min) + ' – ' + fmt(max);
    }
    document.querySelectorAll('input[name="proj-type"]').forEach(r => r.addEventListener('change', update));
    document.querySelectorAll('.calc-extra').forEach(c => c.addEventListener('change', update));
    update();
})();

// ── Email Kopyala ──
(function () {
    const item = document.getElementById('emailCopyItem');
    const toast = document.getElementById('toast');
    if (!item || !toast) return;
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }
    item.addEventListener('click', () => {
        navigator.clipboard.writeText('info@greendevcode.com').then(() => {
            const lang = localStorage.getItem('lang') || 'en';
            showToast(lang === 'tr' ? '📋 E-posta kopyalandı!' : '📋 Email copied!');
        });
    });
})();

// ── Proje Talep Modalı ──
(function () {
    const overlay = document.getElementById('projModal');
    const openBtn = document.getElementById('openProjModal');
    const closeBtn = document.getElementById('projModalClose');
    const slider = document.getElementById('budgetSlider');
    const display = document.getElementById('budgetDisplay');
    if (!overlay || !openBtn) return;

    const budgets = ['₺0 – ₺5.000', '₺5.000 – ₺15.000', '₺15.000 – ₺30.000', '₺30.000 – ₺60.000', '₺60.000+'];
    const budgetHidden = document.getElementById('budgetHidden');
    if (slider && display) {
        slider.addEventListener('input', () => {
            display.textContent = budgets[slider.value];
            if (budgetHidden) budgetHidden.value = budgets[slider.value];
        });
    }

    openBtn.addEventListener('click', () => overlay.classList.add('open'));
    closeBtn && closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('open'); });

    // AJAX form — sayfadan çıkmadan gönderim
    const projForm = document.querySelector('.proj-req-form');
    if (projForm) {
        projForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = projForm.querySelector('[type="submit"]');
            const origText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Gönderiliyor...';
            submitBtn.disabled = true;
            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: new FormData(projForm)
                });
                const json = await res.json();
                if (json.success) {
                    const lang = localStorage.getItem('lang') || 'en';
                    projForm.innerHTML = '<div style="text-align:center;padding:2rem 1rem;">'
                        + '<div style="font-size:3.5rem;margin-bottom:1rem;">✅</div>'
                        + '<h3 style="color:#10b981;margin-bottom:0.6rem;">' + (lang === 'tr' ? 'Talebiniz İletildi!' : 'Request Sent!') + '</h3>'
                        + '<p style="color:var(--gray);">' + (lang === 'tr' ? 'En kısa sürede size dönüş yapacağım.' : "I'll get back to you as soon as possible.") + '</p>'
                        + '</div>';
                } else {
                    submitBtn.textContent = origText;
                    submitBtn.disabled = false;
                }
            } catch {
                submitBtn.textContent = origText;
                submitBtn.disabled = false;
            }
        });
    }
})();

// ── Easter Egg: The Sims MOTHERLODE → Para Yağmuru ──
(function () {
    const SECRET = 'motherlode';
    let buffer = '';

    document.addEventListener('keydown', function (e) {
        if (e.key.length !== 1) return;
        buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
        if (buffer === SECRET) { buffer = ''; launchSimsMoney(); }
    });

    function launchSimsMoney() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;flex-direction:column;animation:matrixFadeIn 0.4s ease;cursor:pointer;overflow:hidden;';

        // Mesaj
        const msg = document.createElement('div');
        msg.style.cssText = 'position:relative;z-index:2;text-align:center;font-family:"Georgia",serif;pointer-events:none;';
        msg.innerHTML = '<div style="font-size:3.5rem;margin-bottom:0.8rem;filter:drop-shadow(0 0 20px gold);">💰</div>'
            + '<div style="font-size:2rem;font-weight:bold;color:#FFD700;text-shadow:0 0 30px gold;letter-spacing:4px;">§§§ MOTHERLODE §§§</div>'
            + '<div style="color:#FFC107;font-size:1.1rem;margin-top:0.6rem;">§19.999 Simoleon eklendi!</div>'
            + '<div style="color:#aaa;font-size:0.8rem;margin-top:1.5rem;">Kapatmak için tıkla veya bir tuşa bas</div>';

        overlay.appendChild(msg);
        document.body.appendChild(overlay);

        // Para sembolleri yağdır
        const symbols = ['§','$','💰','🪙','§','§','$','§'];
        for (let i = 0; i < 60; i++) {
            const coin = document.createElement('span');
            const sym = symbols[Math.floor(Math.random() * symbols.length)];
            const left = Math.random() * 100;
            const delay = Math.random() * 2.5;
            const dur = 1.5 + Math.random() * 2;
            const size = 1 + Math.random() * 1.8;
            coin.textContent = sym;
            coin.style.cssText = `position:absolute;left:${left}%;top:-5%;font-size:${size}rem;color:${Math.random()>0.5?'#FFD700':'#FFC107'};z-index:1;pointer-events:none;animation:simsMoneyFall ${dur}s ${delay}s linear infinite;text-shadow:0 0 8px gold;`;
            overlay.appendChild(coin);
        }

        function close() {
            overlay.style.animation = 'matrixFadeOut 0.4s ease forwards';
            setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 400);
            document.removeEventListener('keydown', close);
        }
        setTimeout(() => {
            overlay.addEventListener('click', close);
            document.addEventListener('keydown', close);
        }, 500);
        setTimeout(close, 8000);
    }
})();

// ── Easter Egg: Konami Code → Matrix Rain ──
(function () {
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let idx = 0;

    document.addEventListener('keydown', function (e) {
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (key === KONAMI[idx]) {
            idx++;
            if (idx === KONAMI.length) { idx = 0; launchMatrix(); }
        } else {
            idx = (key === KONAMI[0]) ? 1 : 0;
        }
    });

    function launchMatrix() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.93);display:flex;align-items:center;justify-content:center;flex-direction:column;animation:matrixFadeIn 0.5s ease;cursor:pointer;';

        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const msg = document.createElement('div');
        msg.style.cssText = 'position:relative;z-index:1;text-align:center;font-family:"Courier New",monospace;pointer-events:none;';
        msg.innerHTML = '<div style="font-size:3.5rem;margin-bottom:1rem;filter:drop-shadow(0 0 20px #00ff41);">🕵️</div>'
            + '<div style="font-size:1.6rem;font-weight:bold;color:#00ff41;text-shadow:0 0 30px #00ff41;letter-spacing:2px;">BİR DEVELOPER BULUNDU!</div>'
            + '<div style="color:#00cc33;font-size:1rem;margin-top:0.6rem;opacity:0.8;">Konami Kodu Aktif</div>'
            + '<div style="color:#00aa22;font-size:0.8rem;margin-top:1.5rem;opacity:0.5;">↑↑↓↓←→←→BA · Kapatmak için tıkla veya bir tuşa bas</div>';

        overlay.appendChild(canvas);
        overlay.appendChild(msg);
        document.body.appendChild(overlay);

        // Matrix rain
        const ctx = canvas.getContext('2d');
        const SIZE = 15;
        const cols = Math.floor(canvas.width / SIZE);
        const drops = Array.from({length: cols}, () => Math.random() * -50);
        const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF<>{}[]|/\\!@#$%^&*';

        function draw() {
            ctx.fillStyle = 'rgba(0,0,0,0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drops.forEach((y, x) => {
                const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
                ctx.font = SIZE + 'px "Courier New"';
                ctx.fillStyle = y < 2 ? '#aaffaa' : '#00ff41';
                ctx.shadowColor = '#00ff41';
                ctx.shadowBlur = 6;
                ctx.fillText(ch, x * SIZE, y * SIZE);
                ctx.shadowBlur = 0;
                drops[x] = (y * SIZE > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
            });
        }

        const timer = setInterval(draw, 45);

        function close() {
            clearInterval(timer);
            overlay.style.animation = 'matrixFadeOut 0.5s ease forwards';
            setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 500);
            document.removeEventListener('keydown', close);
        }

        setTimeout(() => {
            overlay.addEventListener('click', close);
            document.addEventListener('keydown', close);
        }, 600);

        setTimeout(close, 9000);
    }
})();

// ── Easter Egg: 1923 → Ziya Gökalp ──
(function () {
    const SECRET = '1923';
    let buffer = '';
    document.addEventListener('keydown', function (e) {
        if (e.key.length !== 1) return;
        buffer = (buffer + e.key).slice(-SECRET.length);
        if (buffer === SECRET) { buffer = ''; launch1923(); }
    });
    function launch1923() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.93);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2rem;padding:2rem;animation:matrixFadeIn 0.5s ease;cursor:pointer;';
        const img = document.createElement('img');
        img.src = 'images/türk (1).png';
        img.style.cssText = 'max-width:300px;max-height:300px;object-fit:contain;border-radius:12px;box-shadow:0 0 50px rgba(220,0,0,0.6);';
        const msg = document.createElement('div');
        msg.style.cssText = 'text-align:center;font-family:"Georgia",serif;max-width:600px;pointer-events:none;';
        msg.innerHTML = '<p style="font-size:1.1rem;line-height:1.9;color:#f0e68c;font-style:italic;text-shadow:0 0 20px rgba(240,230,140,0.5);">'
            + '"Türklük hem mefkürem, hem kanımdır ;<br>Sırtımdan alınmaz, çünkü kürk değil!<br>Türklük hadimine \'\'Türk değildir!\'\' diyen<br>Soyca Türk olsa da \'\'piçtir\'\', Türk değil."'
            + '</p>'
            + '<p style="color:#aaa;font-size:0.9rem;margin-top:0.8rem;">― Ziya Gökalp</p>'
            + '<p style="color:#555;font-size:0.75rem;margin-top:1.5rem;">Kapatmak için tıkla veya bir tuşa bas</p>';
        overlay.appendChild(img);
        overlay.appendChild(msg);
        document.body.appendChild(overlay);
        function close() {
            overlay.style.animation = 'matrixFadeOut 0.5s ease forwards';
            setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 500);
            document.removeEventListener('keydown', close);
        }
        setTimeout(() => {
            overlay.addEventListener('click', close);
            document.addEventListener('keydown', close);
        }, 500);
        setTimeout(close, 12000);
    }
})();

// ── Easter Egg: 32 → Türk ──
(function () {
    const SECRET = '32';
    let buffer = '';
    document.addEventListener('keydown', function (e) {
        if (e.key.length !== 1) return;
        buffer = (buffer + e.key).slice(-SECRET.length);
        if (buffer === SECRET) { buffer = ''; launch32(); }
    });
    function launch32() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.93);display:flex;align-items:center;justify-content:center;animation:matrixFadeIn 0.5s ease;cursor:pointer;';
        const img = document.createElement('img');
        img.src = 'images/türk (2).png';
        img.style.cssText = 'max-width:80vw;max-height:80vh;object-fit:contain;border-radius:12px;box-shadow:0 0 60px rgba(220,0,0,0.7);';
        const hint = document.createElement('p');
        hint.style.cssText = 'position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);color:#444;font-size:0.75rem;pointer-events:none;';
        hint.textContent = 'Kapatmak için tıkla veya bir tuşa bas';
        overlay.appendChild(img);
        overlay.appendChild(hint);
        document.body.appendChild(overlay);
        function close() {
            overlay.style.animation = 'matrixFadeOut 0.5s ease forwards';
            setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 500);
            document.removeEventListener('keydown', close);
        }
        setTimeout(() => {
            overlay.addEventListener('click', close);
            document.addEventListener('keydown', close);
        }, 400);
        setTimeout(close, 10000);
    }
})();

// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll progress bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scrollProgress').style.width = scrolled + '%';
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections and cards (#calculator hariç — her zaman görünür)
        document.querySelectorAll('section:not(#calculator), .project-card, .timeline-item, .skill-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Animate skill bars when they come into view
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 100);
                    }
                    skillObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-item').forEach(item => {
            skillObserver.observe(item);
        });

        

        // Add active state to navigation based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink?.classList.add('active');
                } else {
                    navLink?.classList.remove('active');
                }
            });
        });


        // Project card hover effect - add subtle 3D tilt
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // Tech stack icons animation on hover
        document.querySelectorAll('.tech-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'translateY(-5px) scale(1.2) rotate(5deg)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'translateY(0) scale(1) rotate(0)';
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / 500);
            }
        });

        // Lazy loading for project images (if you add real images later)
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Add keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close any open modals or menus
                document.querySelectorAll('.modal, .menu').forEach(el => {
                    el.classList.remove('active');
                });
            }
        });

        // Console easter egg for fellow developers
        console.log('%c👋 Hello, fellow developer!', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
        console.log('%cLike what you see? Let\'s connect!', 'color: #6366f1; font-size: 14px;');
        console.log('%c📧 info@greendevcode.com', 'color: #10b981; font-size: 12px;');

        
  const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const hamburgerIcon = document.getElementById('hamburgerIcon');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburgerIcon.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburgerIcon.textContent = '☰';
  }
});


//CONTACKT FORM
(() => {
  const form = document.querySelector('form[action*="web3forms.com/submit"]');
  if (!form || form.dataset.web3bound === '1') return;
  form.dataset.web3bound = '1';

  const submitBtn = form.querySelector('[type="submit"]');

  // ✅ Mesaj elemanı: varsa kullan, yoksa oluşturup formun altına koy
  let msgEl = document.getElementById('form-msg') || form.querySelector('.form-msg');
  if (!msgEl) {
     msgEl = document.createElement('div');
     msgEl.id = 'form-msg';
     form.insertAdjacentElement('beforeend', msgEl); // ✅ formun içine, en alta
  }

  // Varsayılan stil (mesaj kutusu)
  msgEl.setAttribute('aria-live', 'polite');
  msgEl.style.marginTop = msgEl.style.marginTop || '10px';
  msgEl.style.fontWeight = msgEl.style.fontWeight || '700';

  // Yardımcılar: görünürlüğü ZORLA ayarla
  const showMsg = (text, color = '#16a34a') => {
    msgEl.textContent = text ?? '';
    // inline !important ile her türlü CSS’i ezer
    msgEl.style.setProperty('display', 'block', 'important');
    msgEl.hidden = false;
    msgEl.style.visibility = 'visible';
    msgEl.style.opacity = '1';
    msgEl.style.color = color;
  };
  const hideMsg = () => {
    msgEl.textContent = '';
    msgEl.style.removeProperty('display'); // inline display kaldır
    // istersen tamamen gizlemek için:
    // msgEl.style.setProperty('display', 'none', 'important');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    if (!fd.get('access_key')) {
      fd.set('access_key', '1b17333e-6cd0-481e-ad70-7e119bcd6d39');
    }
    // (İsteğe bağlı) yönlendirmeyi iptal etmek istersen:
    // fd.delete('redirect');

    // UI kilitle
    const orig = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Gönderiliyor…'; }
    hideMsg();

    try {
      const res = await fetch(form.action || 'https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== false) {
        form.reset();                      // ✅ başarı → temizle
        showMsg('Teşekkürler! Mesajınız iletildi.', '#16a34a'); // ✅ ZORLA GÖSTER
        // İsteğe bağlı otomatik gizle:
        // setTimeout(() => { hideMsg(); }, 3000);
        // İsteğe bağlı scroll:
        // msgEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
      } else {
        showMsg(data.message || 'Gönderim başarısız. Lütfen tekrar deneyin.', '#dc2626');
      }
    } catch (err) {
      showMsg('Ağ hatası. Lütfen tekrar deneyin.', '#dc2626');
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = orig || 'Submit'; }
    }
  });
})();



// Video modal
document.querySelectorAll('.video-trigger').forEach(card => {
    card.addEventListener('click', () => {
        const videoEl = card.querySelector('.project-video');
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        if (!videoEl || !modal || !modalVideo) return;

        modal.style.display = "flex";
        modalVideo.src = videoEl.getAttribute('src');
        modalVideo.play();
    });
});

const videoCloseBtn = document.querySelector('.video-close');
if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeModal);

const videoModal = document.getElementById('videoModal');
if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target.id === "videoModal") closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    if (!modal || !modalVideo) return;
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
}