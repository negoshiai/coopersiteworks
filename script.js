document.addEventListener('DOMContentLoaded', () => {

    // --- MOCK DATA ---
    const testimonials = [
      { name: 'John D.', platform: 'Angi', rating: 5, quote: 'Cooper Siteworks was fantastic. They were professional, on time, and the quality of their work was top-notch. Our site was cleaner than when they started!' },
      { name: 'Sarah L.', platform: 'Facebook Review', rating: 5, quote: 'Incredible attention to detail on our retaining wall and grading. They have the right equipment and the expertise to handle complex jobs. Highly recommend.' },
      { name: 'Mike R.', platform: 'Houzz', rating: 5, quote: 'They installed our new septic system flawlessly. The team was knowledgeable and answered all our questions. A truly professional operation.' },
    ];

    const portfolio = [
        { category: 'Excavation', imageUrl: 'https://images.unsplash.com/photo-1593332934274-8b31131b8a2a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
        { category: 'Utilities', imageUrl: 'https://images.unsplash.com/photo-1521629244738-c1a3c67f4eea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
        { category: 'Hardscaping', imageUrl: 'https://images.unsplash.com/photo-1617103191183-3a7c3b7b3e6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
        { category: 'Demolition', imageUrl: 'https://images.unsplash.com/photo-1551737632-041a87948d58?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
        { category: 'Septic Systems', imageUrl: 'https://images.unsplash.com/photo-1628779238320-b941237e3d5b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
        { category: 'Grading', imageUrl: 'https://images.unsplash.com/photo-1605093393936-3c1347194b91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D%3D' },
    ];
    
    const serviceCategories = [
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-blue-800"><path d="M2 22v-5l5-5 5 5-5 5z"></path><path d="M9.5 14.5 16 8l3 3-6.5 6.5z"></path><path d="m17 5 3 3"></path><path d="m2 2 5 5"></path></svg>`, title: 'Excavation & Grading', items: ['Site Preparation', 'Backfilling', 'Rock Breaking', 'Topsoil'] },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-blue-800"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>`, title: 'Utilities & Septic', items: ['Water & Sewer Lines', 'Advanced Septic Systems', 'Lift Stations', 'Conduit Installation'] },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-blue-800"><path d="M12 22 8 18l-6 2 4-10 6-6 6 6-10 4 2 6-6-2Z"></path><path d="m16 14 3-3 1 1-3 3-1-1Z"></path></svg>`, title: 'Land & Hardscaping', items: ['Retaining Walls', 'Rip Rap Seawalls', 'Mulching', 'Final Grading'] },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-blue-800"><path d="M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13"></path><path d="M4 10h16"></path><path d="M10 21v-5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5"></path></svg>`, title: 'Demolition & Hauling', items: ['Structure Removal', 'Concrete Breaking', 'Debris Hauling', 'Site Clearing'] },
    ];

    // --- Header & Mobile Menu ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-[#0D2C54]/95', 'shadow-lg', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-[#0D2C54]/95', 'shadow-lg', 'backdrop-blur-sm');
        }
    });

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuOpenIcon.classList.remove('hidden');
                    menuCloseIcon.classList.add('hidden');
                }
            }
        });
    });

    // --- On-Scroll Animations ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- Animated Counter ---
    const yearsCounter = document.getElementById('years-counter');
    const counterObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            let start = 0;
            const end = 30;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    yearsCounter.textContent = `${end}+`;
                    clearInterval(timer);
                } else {
                    yearsCounter.textContent = `${Math.ceil(start)}+`;
                }
            }, 16);
            counterObserver.disconnect();
        }
    }, { threshold: 0.5 });
    if(yearsCounter) {
        counterObserver.observe(yearsCounter);
    }

    // --- Dynamic Content Injection ---
    function populateContent() {
        // Services
        const servicesGrid = document.querySelector('#services .grid');
        serviceCategories.forEach(cat => {
            servicesGrid.innerHTML += `
                <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                        ${cat.icon}
                        <h3 class="text-2xl font-bold text-[#0D2C54] ml-4">${cat.title}</h3>
                    </div>
                    <ul class="space-y-2 text-gray-600">
                        ${cat.items.map(item => `<li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2 text-blue-500"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>${item}</li>`).join('')}
                    </ul>
                </div>`;
        });

        // Portfolio
        const portfolioGrid = document.querySelector('#portfolio .grid');
        portfolio.forEach(p => {
            portfolioGrid.innerHTML += `
                <div class="group relative overflow-hidden rounded-lg shadow-lg">
                    <img src="${p.imageUrl}" alt="${p.category}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">${p.category}</h3>
                    </div>
                </div>`;
        });

        // Testimonials
        const testimonialsGrid = document.querySelector('#testimonials .grid');
        testimonials.forEach(t => {
            testimonialsGrid.innerHTML += `
                <div class="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
                    <div class="flex mb-4">
                        ${Array(t.rating).fill('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-yellow-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join('')}
                    </div>
                    <p class="text-gray-600 italic mb-6">"${t.quote}"</p>
                    <p class="font-bold text-gray-800 text-right">- ${t.name}</p>
                </div>`;
        });
    }

    populateContent();
});
