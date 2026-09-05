/**
 * PAVELIA JEWELS - HAUTE JOAILLERIE & LAPIDARY ATELIER
 * Complete E-Commerce Architecture, Showroom Coordinator,
 * Live Search Engine, Wishlist Vault, and Bespoke VIP Concierge.
 */

// Disable automatic browser scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

/* ==========================================================================
   1. MASTER HIGH JEWELRY PRODUCT DATABASE
   ========================================================================== */
const PAVELIA_PRODUCTS = [
    // RINGS
    {
        id: 'ring-1',
        name: 'Amour Solitaire Ring',
        category: 'rings',
        categoryLabel: 'Royal Solitaire',
        price: '₹85,000',
        priceNum: 85000,
        badge: '✦ SIGNATURE PIECE',
        specs: '1.2 Carat GIA Solitaire • 925 Sterling / 18K Gold',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700&auto=format&fit=crop',
        desc: 'A stunning brilliant-cut central solitaire diamond set in an elevated 4-claw crown. Hand-burnished by master lapidaries to maximize light fire.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Solid Platinum'],
            size: ['6', '7', '8', '9']
        }
    },
    {
        id: 'ring-2',
        name: 'Eternal Diamond Band',
        category: 'rings',
        categoryLabel: 'Pavé Eternity Band',
        price: '₹1,10,000',
        priceNum: 110000,
        badge: '✦ RARE SOLITAIRE',
        specs: 'Continuous Round Cut Diamonds • Hand-Channel Set',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=700&auto=format&fit=crop',
        desc: 'Interlacing twisted ropes of pavé set round diamonds and polished metal bands, representing eternal devotion and timeless poise.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '18K Rose Gold'],
            size: ['6', '7', '8']
        }
    },
    {
        id: 'ring-3',
        name: 'Lumina Gold Dome Ring',
        category: 'rings',
        categoryLabel: 'Architectural Dome',
        price: '₹48,000',
        priceNum: 48000,
        badge: '✦ ATELIER CLASSIC',
        specs: 'Heavy Solid Casting • High-Mirror Polish Finish',
        image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=700&auto=format&fit=crop',
        desc: 'A sculptural bold dome ring crafted with comfortable inner contouring and a mirror-like finish that catches soft ambient light.',
        options: {
            metal: ['18K Yellow Gold Vermeil', '925 Sterling Silver'],
            size: ['6', '7', '8', '9']
        }
    },
    {
        id: 'ring-4',
        name: 'Seraphina Emerald Ring',
        category: 'rings',
        categoryLabel: 'Imperial Emerald',
        price: '₹1,35,000',
        priceNum: 135000,
        badge: '✦ LIMITED ATELIER',
        specs: '1.8 Carat Step-Cut Zambian Emerald • Diamond Halo',
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=700&auto=format&fit=crop',
        desc: 'A deep forest-green step-cut emerald centered on a cluster of brilliant-cut diamonds and fine sterling silver framework.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'],
            size: ['6', '7', '8']
        }
    },
    {
        id: 'ring-5',
        name: 'Dune Minimalist Band',
        category: 'rings',
        categoryLabel: 'Organic Modern Band',
        price: '₹32,000',
        priceNum: 32000,
        badge: '✦ DAILY LUXURY',
        specs: 'Wave Silhouette • Whisper-Light Comfort Fit',
        image: 'https://images.unsplash.com/photo-1543294001-f7cbfe92237e?q=80&w=700&auto=format&fit=crop',
        desc: 'Subtly undulating organic lines inspired by wind-swept sand dunes, designed for stackable daily elegance.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '18K Rose Gold'],
            size: ['5', '6', '7', '8', '9']
        }
    },

    // EARRINGS
    {
        id: 'earring-1',
        name: 'Orion Diamond Studs',
        category: 'earrings',
        categoryLabel: 'Solitaire Studs',
        price: '₹62,000',
        priceNum: 62000,
        badge: '✦ SIGNATURE CUT',
        specs: '1.0 Total Carat Weight • Micro-Claw Basket Setting',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=700&auto=format&fit=crop',
        desc: 'Flawlessly matched brilliant solitaires held in low-profile claw settings, reflecting maximum light fire for versatile day-to-evening wear.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Solid Platinum'],
            size: ['0.50 Carat Pair', '1.00 Carat Pair', '2.00 Carat Pair']
        }
    },
    {
        id: 'earring-2',
        name: 'Gilded Blossom Drops',
        category: 'earrings',
        categoryLabel: 'Chandelier Cascades',
        price: '₹92,000',
        priceNum: 92000,
        badge: '✦ BESPOKE CUT',
        specs: 'Faceted Petal Filigree • Articulated Movement',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=700&auto=format&fit=crop',
        desc: 'Floral silhouette drop earrings featuring articulated petal links that sway with graceful fluidity at formal galas.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'],
            size: ['Standard']
        }
    },
    {
        id: 'earring-3',
        name: 'Nova Pearl Hoops',
        category: 'earrings',
        categoryLabel: 'South Sea Pearl',
        price: '₹75,000',
        priceNum: 75000,
        badge: '✦ HAUTE EDIT',
        specs: 'AAA Luster Pearls • Pavé Diamond Huggie Ring',
        image: 'https://images.unsplash.com/photo-1617038220319-276d3bc7d685?q=80&w=700&auto=format&fit=crop',
        desc: 'Lustrous natural cultured pearls delicately suspended from diamond-encrusted huggie hoops for effortless sophistication.',
        options: {
            metal: ['925 Sterling Silver', '18K Rose Gold Plated'],
            size: ['Standard']
        }
    },
    {
        id: 'earring-4',
        name: 'Siren Sapphire Drops',
        category: 'earrings',
        categoryLabel: 'Royal Blue Sapphire',
        price: '₹1,45,000',
        priceNum: 145000,
        badge: '✦ LIMITED EDITION',
        specs: 'Deep Ceylon Sapphire • Pear-Cut Diamond Halo',
        image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=700&auto=format&fit=crop',
        desc: 'Regal pear-shaped Ceylon sapphires enveloped by high-luster halo diamond diamonds, commanding instant attention.',
        options: {
            metal: ['925 Sterling Silver', '950 Solid Platinum'],
            size: ['Standard']
        }
    },
    {
        id: 'earring-5',
        name: 'Echo Leaf Climbers',
        category: 'earrings',
        categoryLabel: 'Botanical Climber',
        price: '₹54,000',
        priceNum: 54000,
        badge: '✦ ATELIER FAVOURITE',
        specs: 'Anatomical Ear Curve • Graduating Diamonds',
        image: 'https://images.unsplash.com/photo-1588444839799-eb082e6666fc?q=80&w=700&auto=format&fit=crop',
        desc: 'Delicate diamond leaves climbing the ear contour with gentle curvature and secure clip-back comfort.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'],
            size: ['Standard']
        }
    },

    // NECKLACES
    {
        id: 'necklace-1',
        name: 'Aura Solitaire Pendant',
        category: 'necklaces',
        categoryLabel: 'Classic Solitaire Pendant',
        price: '₹95,000',
        priceNum: 95000,
        badge: '✦ SIGNATURE PIECE',
        specs: '1.5 Carat Solitaire • Fine Box Chain Included',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=700&auto=format&fit=crop',
        desc: 'A floating diamond solitaire pendant on a whisper-thin box chain that rests perfectly along the collarbone.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Solid Platinum'],
            size: ['16 Inches', '18 Inches', '20 Inches']
        }
    },
    {
        id: 'necklace-2',
        name: 'Helix Golden Chain',
        category: 'necklaces',
        categoryLabel: 'Hand-Woven Link Chain',
        price: '₹58,000',
        priceNum: 58000,
        badge: '✦ ATELIER CRAFT',
        specs: 'Interlocking Herringbone • High-Flexibility Weave',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=700&auto=format&fit=crop',
        desc: 'Hand-assembled Italian herringbone links that drape like liquid silk across the neckline with warm golden shimmer.',
        options: {
            metal: ['18K Yellow Gold Vermeil', '925 Sterling Silver'],
            size: ['16 Inches', '18 Inches']
        }
    },
    {
        id: 'necklace-3',
        name: 'Celestial Star Necklace',
        category: 'necklaces',
        categoryLabel: 'Astral Diamond Motif',
        price: '₹88,000',
        priceNum: 88000,
        badge: '✦ HAUTE CAPSULE',
        specs: 'North Star Medallion • Central Star Solitaire',
        image: 'https://images.unsplash.com/photo-1611085583191-a3b1a30a8a3a?q=80&w=700&auto=format&fit=crop',
        desc: 'A radiant eight-point star pendant centered with a sparkling diamond, evoking ancient maritime navigators.',
        options: {
            metal: ['925 Sterling Silver', '18K Rose Gold Plated'],
            size: ['16 Inches', '18 Inches']
        }
    },
    {
        id: 'necklace-4',
        name: 'Marina Aquamarine Choker',
        category: 'necklaces',
        categoryLabel: 'Royal Collar Choker',
        price: '₹1,65,000',
        priceNum: 165000,
        badge: '✦ RARE MASTERPIECE',
        specs: 'Emerald-Cut Aquamarine • Triple-Strand Diamond Clasp',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=700&auto=format&fit=crop',
        desc: 'An icy-blue aquamarine centerpiece set against an intricately structured choker collar for premier gala appearances.',
        options: {
            metal: ['925 Sterling Silver', '950 Solid Platinum'],
            size: ['14 Inches', '16 Inches']
        }
    },
    {
        id: 'necklace-5',
        name: 'Verdant Malachite Pendant',
        category: 'necklaces',
        categoryLabel: 'Ornamental Stone',
        price: '₹72,000',
        priceNum: 72000,
        badge: '✦ ATELIER BESPOKE',
        specs: 'Natural Banded Malachite • Bezel Set in Gold',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=700&auto=format&fit=crop',
        desc: 'A circular talisman carved from deep green banded malachite and rimmed with a micro-bezel diamond halo.',
        options: {
            metal: ['18K Yellow Gold Vermeil', '925 Sterling Silver'],
            size: ['18 Inches', '20 Inches']
        }
    },

    // BRACELETS
    {
        id: 'bracelet-1',
        name: 'Infinity Link Bracelet',
        category: 'bracelets',
        categoryLabel: 'Sculpted Link Chain',
        price: '₹78,000',
        priceNum: 78000,
        badge: '✦ DAILY LUXURY',
        specs: 'Seamless Interlocking Infinity Links • Concealed Lock',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=700&auto=format&fit=crop',
        desc: 'Polished silver infinity shape loops linked in unbroken harmony, closing with an invisible precision clasp.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'],
            size: ['S (6.5")', 'M (7.0")', 'L (7.5")']
        }
    },
    {
        id: 'bracelet-2',
        name: 'Esme Diamond Bangle',
        category: 'bracelets',
        categoryLabel: 'Hinged Diamond Bangle',
        price: '₹1,85,000',
        priceNum: 185000,
        badge: '✦ HAUTE MASTERPIECE',
        specs: 'Channel-Set Round Diamonds • Safety Lock Mechanism',
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=700&auto=format&fit=crop',
        desc: 'A rigid luxury bangle set with continuous round diamonds, engineered with an ultra-smooth side-press safety lock.',
        options: {
            metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Solid Platinum'],
            size: ['S', 'M', 'L']
        }
    },
    {
        id: 'bracelet-3',
        name: 'Solstice Gold Cuff',
        category: 'bracelets',
        categoryLabel: 'Hammered Artisan Cuff',
        price: '₹98,000',
        priceNum: 98000,
        badge: '✦ HAND-HAMMERED',
        specs: 'Heavy Gauge Gold Plate • Malleable Fit',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=700&auto=format&fit=crop',
        desc: 'A broad architectural cuff hand-hammered to reflect shifting candle and ambient room lights.',
        options: {
            metal: ['18K Yellow Gold Vermeil', '925 Sterling Silver'],
            size: ['Standard Adjustable']
        }
    },
    {
        id: 'bracelet-4',
        name: 'Riviera Tennis Bracelet',
        category: 'bracelets',
        categoryLabel: 'Riviera Solitaire Line',
        price: '₹2,40,000',
        priceNum: 240000,
        badge: '✦ RARE COLLECTIBLE',
        specs: '3.5 Total Carat Weight • Ultra-Flexible 4-Claw Links',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=700&auto=format&fit=crop',
        desc: 'The definitive high-jewelry tennis bracelet. Individually set round solitaires linked on a silky flexible platinum setting.',
        options: {
            metal: ['950 Solid Platinum', '925 Sterling Silver', '18K Yellow Gold Vermeil'],
            size: ['6.5 Inches', '7.0 Inches', '7.5 Inches']
        }
    },
    {
        id: 'bracelet-5',
        name: 'Luna Chain Bracelet',
        category: 'bracelets',
        categoryLabel: 'Paperclip Link Bracelet',
        price: '₹45,000',
        priceNum: 45000,
        badge: '✦ ATELIER CLASSIC',
        specs: 'Elongated Flat-Edge Links • Lobster Claw Lock',
        image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=700&auto=format&fit=crop',
        desc: 'Clean geometric paperclip chains hand-polished to mirror luster, perfect for stacking alongside fine luxury timepieces.',
        options: {
            metal: ['925 Sterling Silver', '18K Rose Gold Plated'],
            size: ['S', 'M', 'L']
        }
    }
];

/* ==========================================================================
   2. PRELOADER & HERO PARALLAX
   ========================================================================== */
function runClassicPreloader() {
    const overlay = document.getElementById('intro-overlay');
    const appContainer = document.getElementById('app-container');
    const loaderLine = document.querySelector('.loader-line');
    const parallaxBg = document.getElementById('parallax-bg');
    const parallaxContent = document.getElementById('parallax-content');

    window.scrollTo(0, 0);

    if (!overlay) {
        if (appContainer) {
            appContainer.classList.remove('hidden');
            appContainer.classList.add('visible');
        }
        document.body.classList.remove('lock-scroll');
        initDOMParallax();
        initCarousel();
        return;
    }

    document.body.classList.add('lock-scroll');

    let progress = 0;
    const startTime = Date.now();
    const minAnimationDuration = 2200;

    const updateLoader = (value) => {
        progress = value;
        if (loaderLine) {
            loaderLine.style.transform = `scaleX(${progress / 100})`;
        }
    };

    setTimeout(() => updateLoader(35), 200);
    setTimeout(() => updateLoader(70), 800);
    setTimeout(() => updateLoader(100), 1600);

    const completeIntro = () => {
        updateLoader(100);

        setTimeout(() => {
            window.scrollTo(0, 0);

            if (appContainer) {
                appContainer.classList.remove('hidden');
                void appContainer.offsetHeight;
                appContainer.classList.add('visible');
            }

            overlay.classList.add('fade-out');

            setTimeout(() => {
                overlay.style.display = 'none';
                document.body.classList.remove('lock-scroll');
                initDOMParallax();
                initCarousel();
            }, 1200);

        }, 300);
    };

    window.addEventListener('load', () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minAnimationDuration - elapsedTime);
        setTimeout(completeIntro, remainingTime);
    });

    setTimeout(() => {
        if (progress < 100) completeIntro();
    }, 4500);

    function initDOMParallax() {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
        const easeAmount = 0.08;

        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        document.addEventListener('mouseleave', () => {
            mouseX = 0;
            mouseY = 0;
        });

        function animateDOMParallax() {
            currentX += (mouseX - currentX) * easeAmount;
            currentY += (mouseY - currentY) * easeAmount;

            if (parallaxBg) {
                const bgX = currentX * -24;
                const bgY = currentY * -24;
                parallaxBg.style.transform = `translate3d(${bgX}px, ${bgY}px, 0) scale(1.06)`;
            }

            if (parallaxContent) {
                const textX = currentX * 20;
                const textY = currentY * 20;
                parallaxContent.style.transform = `translate3d(${textX}px, ${textY}px, 0)`;
            }

            requestAnimationFrame(animateDOMParallax);
        }

        requestAnimationFrame(animateDOMParallax);
    }

    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(document.querySelectorAll('.carousel-slide'));
        const prevBtn = document.querySelector('.carousel-nav-btn.prev-btn');
        const nextBtn = document.querySelector('.carousel-nav-btn.next-btn');
        const dots = Array.from(document.querySelectorAll('.indicator-dot'));

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        let slideInterval = null;
        const slideDuration = 6000;

        const moveToSlide = (index) => {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;

            track.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        };

        moveToSlide(0);

        const startAutoSlide = () => {
            stopAutoSlide();
            slideInterval = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, slideDuration);
        };

        const stopAutoSlide = () => {
            if (slideInterval) clearInterval(slideInterval);
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
                startAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
                startAutoSlide();
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                moveToSlide(idx);
                startAutoSlide();
            });
        });

        startAutoSlide();
    }
}

/* ==========================================================================
   2. DYNAMIC CATALOG STORAGE & DATA ACCESS LAYER
   ========================================================================== */
function getPaveliaCatalog() {
    try {
        const stored = localStorage.getItem('pavelia_catalog');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Pavelia catalog storage notice:', e);
    }
    return PAVELIA_PRODUCTS;
}

function savePaveliaCatalog(catalog) {
    try {
        localStorage.setItem('pavelia_catalog', JSON.stringify(catalog));
    } catch (e) {
        console.error('Error persisting Pavelia catalog:', e);
    }
}

window.getPaveliaCatalog = getPaveliaCatalog;
window.savePaveliaCatalog = savePaveliaCatalog;

/* ==========================================================================
   3. SHOWROOM, WISHLIST, SEARCH & CART ARCHITECTURE
   ========================================================================== */
function initializePaveliaCommerce() {
    // 1. Toast Notification System
    let toastContainer = document.querySelector('.luxury-toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'luxury-toast-container';
        document.body.appendChild(toastContainer);
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'luxury-toast';
        toast.innerHTML = `
            <span class="luxury-toast-icon">✦</span>
            <span class="luxury-toast-message">${message}</span>
            <button class="luxury-toast-close" aria-label="Close">&times;</button>
        `;

        toastContainer.appendChild(toast);
        setTimeout(() => toast.classList.add('visible'), 50);

        const closeBtn = toast.querySelector('.luxury-toast-close');
        closeBtn.addEventListener('click', () => removeToast(toast));

        const timeout = setTimeout(() => removeToast(toast), 4000);
        toast.dataset.timeoutId = timeout;
    }

    function removeToast(toast) {
        if (toast.dataset.timeoutId) clearTimeout(parseInt(toast.dataset.timeoutId, 10));
        toast.classList.remove('visible');
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 400);
    }

    window.showPaveliaToast = showToast;

    // 2. Application State Management
    let cart = JSON.parse(localStorage.getItem('pavelia_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('pavelia_wishlist')) || [];
    let activeCategory = 'all';
    let activeSort = 'featured';

    // DOM References
    const cartCountEl = document.querySelector('.cart-count');
    const wishlistCountEl = document.getElementById('header-wishlist-count');
    const productGridEl = document.getElementById('main-product-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const sortSelect = document.getElementById('showroom-sort');

    // Cart Drawer Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartBtn = document.getElementById('cart-btn');
    const cartCloseBtn = document.getElementById('cart-drawer-close-btn');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const cartBody = document.getElementById('cart-drawer-body');
    const cartSubtotalDisplay = document.getElementById('cart-subtotal-display');
    const checkoutBtn = document.getElementById('btn-checkout-drawer');

    // Wishlist Drawer Elements
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const wishlistBtn = document.getElementById('wishlist-btn');
    const wishlistCloseBtn = document.getElementById('wishlist-drawer-close-btn');
    const wishlistOverlay = document.getElementById('wishlist-drawer-overlay');
    const wishlistBody = document.getElementById('wishlist-drawer-body');

    // Search Modal Elements
    const searchModal = document.getElementById('search-modal');
    const searchBtn = document.getElementById('search-btn');
    const searchCloseBtn = document.getElementById('search-modal-close-btn');
    const searchOverlay = document.getElementById('search-modal-overlay');
    const searchInput = document.getElementById('live-search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchTagChips = document.querySelectorAll('.search-tag-chip');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    // Quick View Elements
    const quickviewModal = document.getElementById('quickview-modal');
    const quickviewOverlay = document.getElementById('quickview-overlay');
    const quickviewCloseBtn = document.getElementById('quickview-close-btn');
    const quickviewContent = document.getElementById('quickview-content');

    // Size Guide Elements
    const sizeGuideModal = document.getElementById('sizeguide-modal');
    const sizeGuideOverlay = document.getElementById('sizeguide-overlay');
    const sizeGuideCloseBtn = document.getElementById('sizeguide-close-btn');
    const openSizeGuideBtns = [
        document.getElementById('btn-open-size-guide'),
        document.getElementById('footer-btn-size-guide')
    ];


    // -------------------------------------------------------------
    // RENDER SHOWROOM PRODUCT GRID
    // -------------------------------------------------------------
    function renderShowroomProducts() {
        if (!productGridEl) return;

        const catalog = getPaveliaCatalog();

        // 1. Filter by category
        let filtered = catalog.filter(item => {
            if (activeCategory === 'all') return true;
            return item.category === activeCategory;
        });

        // 2. Sort
        if (activeSort === 'price-desc') {
            filtered.sort((a, b) => b.priceNum - a.priceNum);
        } else if (activeSort === 'price-asc') {
            filtered.sort((a, b) => a.priceNum - b.priceNum);
        } else if (activeSort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        // 3. Render HTML
        productGridEl.innerHTML = filtered.map(product => {
            const isWishlisted = wishlist.includes(product.id);
            const installmentPrice = Math.round(product.priceNum / 3).toLocaleString('en-IN');
            const primaryImg = (product.images && product.images[0]) || product.image;

            return `
                <div class="product-card" data-product-id="${product.id}">
                    <span class="product-badge-float">${product.badge}</span>
                    
                    <div class="product-actions-toolbar">
                        <button class="btn-tool-icon btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Save to Vault">
                            <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.4" width="18" height="18">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <button class="btn-tool-icon btn-quickview-trigger" data-id="${product.id}" aria-label="Quick View">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" width="18" height="18">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                    </div>

                    <div class="product-img-wrapper" data-id="${product.id}">
                        <img src="${primaryImg}" alt="${product.name}" class="product-img" loading="lazy">
                    </div>

                    <div class="product-info">
                        <span class="product-category-tag">${product.categoryLabel || product.category}</span>
                        <h4 class="product-name">${product.name}</h4>
                        <p class="product-specs-line">${product.specs || ''}</p>
                        
                        <div class="product-price-row">
                            <span class="product-price">${product.price}</span>
                        </div>
                        <p class="product-installment">or 3 investments of ₹${installmentPrice} at 0% APR</p>

                        <div class="product-card-actions">
                            <button class="btn-card-add-bag" data-id="${product.id}">ADD TO BAG</button>
                            <button class="btn-card-quickview" data-id="${product.id}">DETAILS</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        bindProductCardEvents();
    }

    function bindProductCardEvents() {
        // Quick View triggers
        document.querySelectorAll('.btn-quickview-trigger, .btn-card-quickview, .product-img-wrapper').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = btn.dataset.id || btn.closest('.product-card').dataset.productId;
                openQuickview(productId);
            });
        });

        // Add to Bag buttons
        document.querySelectorAll('.btn-card-add-bag').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = btn.dataset.id;
                const product = getPaveliaCatalog().find(p => p.id === productId);
                if (product) {
                    const metals = (product.options && product.options.metal) || ['925 Sterling Silver'];
                    const sizes = (product.options && product.options.size) || ['Standard'];
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: (product.images && product.images[0]) || product.image,
                        variantMetal: metals[0] || '925 Sterling Silver',
                        variantSize: sizes[0] || 'Standard'
                    });
                }
            });
        });

        // Wishlist Toggle buttons
        document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const productId = btn.dataset.id;
                toggleWishlist(productId);
            });
        });
    }

    // Filter Tabs Handler
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.dataset.filter;
            renderShowroomProducts();
        });
    });

    // Category Card clicks linking to filter
    document.querySelectorAll('[data-category-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            const cat = link.dataset.categoryFilter;
            activeCategory = cat;
            filterTabs.forEach(t => {
                t.classList.toggle('active', t.dataset.filter === cat);
            });
            renderShowroomProducts();
        });
    });

    // Sort Dropdown Handler
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            activeSort = e.target.value;
            renderShowroomProducts();
        });
    }

    // -------------------------------------------------------------
    // CART DRAWER & LOGIC
    // -------------------------------------------------------------
    function updateCartUI() {
        localStorage.setItem('pavelia_cart', JSON.stringify(cart));
        if (window.syncCartToCloud) {
            window.syncCartToCloud(cart);
        }

        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountEl) {
            cartCountEl.textContent = totalItems;
            cartCountEl.style.transform = 'scale(1.3)';
            setTimeout(() => cartCountEl.style.transform = 'scale(1)', 200);
        }

        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-empty-message">
                    <p>Your atelier vault bag is currently empty.</p>
                    <a href="#showroom" class="btn-shop-now" id="btn-shop-now-drawer">EXPLORE HIGH COLLECTIONS</a>
                </div>
            `;
            const shopNowBtn = document.getElementById('btn-shop-now-drawer');
            if (shopNowBtn) shopNowBtn.addEventListener('click', closeCartDrawer);
            if (cartSubtotalDisplay) cartSubtotalDisplay.textContent = '₹0';
        } else {
            let subtotal = 0;
            const itemsHTML = cart.map((item, idx) => {
                const itemPriceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
                subtotal += (itemPriceNum * item.quantity);

                return `
                    <div class="cart-item">
                        <div class="cart-item-img-wrapper">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        </div>
                        <div class="cart-item-details">
                            <div>
                                <h5 class="cart-item-name">${item.name}</h5>
                                <p class="cart-item-variant">${item.variantMetal} • Size: ${item.variantSize}</p>
                                <span class="cart-item-price">${item.price}</span>
                            </div>
                            <div class="cart-item-controls">
                                <div class="cart-qty-selector">
                                    <button class="btn-qty btn-cart-minus" data-index="${idx}">&minus;</button>
                                    <span class="cart-qty-value">${item.quantity}</span>
                                    <button class="btn-qty btn-cart-plus" data-index="${idx}">&plus;</button>
                                </div>
                                <button class="btn-remove-item" data-index="${idx}">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            cartBody.innerHTML = `<div class="cart-items-list">${itemsHTML}</div>`;
            if (cartSubtotalDisplay) {
                cartSubtotalDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
            }

            // Bind Qty controls
            cartBody.querySelectorAll('.btn-cart-minus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    if (cart[idx].quantity > 1) {
                        cart[idx].quantity--;
                    } else {
                        cart.splice(idx, 1);
                    }
                    updateCartUI();
                });
            });

            cartBody.querySelectorAll('.btn-cart-plus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    cart[idx].quantity++;
                    updateCartUI();
                });
            });

            cartBody.querySelectorAll('.btn-remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    const name = cart[idx].name;
                    cart.splice(idx, 1);
                    updateCartUI();
                    showToast(`Removed "${name}" from your bag.`);
                });
            });
        }
    }

    function addToCart(product) {
        const existingIdx = cart.findIndex(item => 
            item.id === product.id && 
            item.variantMetal === product.variantMetal && 
            item.variantSize === product.variantSize
        );

        if (existingIdx > -1) {
            cart[existingIdx].quantity++;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                variantMetal: product.variantMetal,
                variantSize: product.variantSize,
                quantity: 1
            });
        }

        updateCartUI();
        openCartDrawer();
        showToast(`Added "${product.name}" to your Atelier Bag.`);
    }

    function openCartDrawer() {
        if (cartDrawer) {
            cartDrawer.classList.add('active');
            document.body.classList.add('lock-scroll');
        }
    }

    function closeCartDrawer() {
        if (cartDrawer) {
            cartDrawer.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (cartBtn) cartBtn.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); });
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showToast('✦ Connecting to encrypted Razorpay vault gateway for armored checkout...');
            closeCartDrawer();
        });
    }

    // -------------------------------------------------------------
    // WISHLIST VAULT DRAWER & LOGIC
    // -------------------------------------------------------------
    function updateWishlistUI() {
        localStorage.setItem('pavelia_wishlist', JSON.stringify(wishlist));

        if (wishlistCountEl) {
            wishlistCountEl.textContent = wishlist.length;
            wishlistCountEl.style.transform = 'scale(1.3)';
            setTimeout(() => wishlistCountEl.style.transform = 'scale(1)', 200);
        }

        if (!wishlistBody) return;

        if (wishlist.length === 0) {
            wishlistBody.innerHTML = `
                <div class="wishlist-empty-message">
                    <p>Your private vault wishlist is currently empty.</p>
                    <a href="#showroom" class="btn-shop-now" id="btn-shop-now-wishlist">EXPLORE COLLECTIONS</a>
                </div>
            `;
            const shopWishBtn = document.getElementById('btn-shop-now-wishlist');
            if (shopWishBtn) shopWishBtn.addEventListener('click', closeWishlistDrawer);
        } else {
            const catalog = getPaveliaCatalog();
            const wishlistItems = wishlist.map(id => catalog.find(p => p.id === id)).filter(Boolean);
            
            wishlistBody.innerHTML = `
                <div class="wishlist-items-list">
                    ${wishlistItems.map(product => {
                        const primaryImg = (product.images && product.images[0]) || product.image;
                        return `
                        <div class="wishlist-item">
                            <div class="wishlist-item-img-wrapper">
                                <img src="${primaryImg}" alt="${product.name}" class="wishlist-item-img">
                            </div>
                            <div class="wishlist-item-details">
                                <div>
                                    <h5 class="wishlist-item-name">${product.name}</h5>
                                    <p class="wishlist-item-variant">${product.specs || ''}</p>
                                    <span class="wishlist-item-price">${product.price}</span>
                                </div>
                                <div class="cart-item-controls">
                                    <button class="btn-card-add-bag btn-wishlist-add-bag" data-id="${product.id}" style="padding: 6px 14px; font-size: 0.62rem;">MOVE TO BAG</button>
                                    <button class="btn-remove-item btn-wishlist-remove" data-id="${product.id}">Remove</button>
                                </div>
                            </div>
                        </div>
                    `}).join('')}
                </div>
            `;

            wishlistBody.querySelectorAll('.btn-wishlist-add-bag').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.dataset.id;
                    const product = getPaveliaCatalog().find(p => p.id === id);
                    if (product) {
                        const metals = (product.options && product.options.metal) || ['925 Sterling Silver'];
                        const sizes = (product.options && product.options.size) || ['Standard'];
                        addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: (product.images && product.images[0]) || product.image,
                            variantMetal: metals[0] || '925 Sterling Silver',
                            variantSize: sizes[0] || 'Standard'
                        });
                        toggleWishlist(id);
                        closeWishlistDrawer();
                    }
                });
            });

            wishlistBody.querySelectorAll('.btn-wishlist-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    toggleWishlist(btn.dataset.id);
                });
            });
        }
    }

    function toggleWishlist(productId) {
        const idx = wishlist.indexOf(productId);
        const product = getPaveliaCatalog().find(p => p.id === productId);
        if (idx > -1) {
            wishlist.splice(idx, 1);
            if (product) showToast(`Removed "${product.name}" from your Private Vault.`);
        } else {
            wishlist.push(productId);
            if (product) showToast(`Saved "${product.name}" to your Private Vault.`);
        }
        updateWishlistUI();
        renderShowroomProducts();
    }

    function openWishlistDrawer() {
        if (wishlistDrawer) {
            wishlistDrawer.classList.add('active');
            document.body.classList.add('lock-scroll');
            updateWishlistUI();
        }
    }

    function closeWishlistDrawer() {
        if (wishlistDrawer) {
            wishlistDrawer.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (wishlistBtn) wishlistBtn.addEventListener('click', (e) => { e.preventDefault(); openWishlistDrawer(); });
    if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
    if (wishlistOverlay) wishlistOverlay.addEventListener('click', closeWishlistDrawer);

    // -------------------------------------------------------------
    // LIVE INSTANT SEARCH MODAL
    // -------------------------------------------------------------
    function openSearchModal() {
        if (searchModal) {
            searchModal.classList.add('active');
            document.body.classList.add('lock-scroll');
            setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
        }
    }

    function closeSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
            if (searchInput) searchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            if (searchResultsContainer) {
                searchResultsContainer.innerHTML = '<p class="search-prompt-text">Begin typing to search our certified high jewelry vault.</p>';
            }
        }
    }

    function performLiveSearch(query) {
        if (!searchResultsContainer) return;
        const q = query.trim().toLowerCase();

        if (!q) {
            searchResultsContainer.innerHTML = '<p class="search-prompt-text">Begin typing to search our certified high jewelry vault.</p>';
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            return;
        }

        if (clearSearchBtn) clearSearchBtn.style.display = 'block';

        const catalog = getPaveliaCatalog();
        const matches = catalog.filter(item => 
            (item.name && item.name.toLowerCase().includes(q)) ||
            (item.category && item.category.toLowerCase().includes(q)) ||
            (item.desc && item.desc.toLowerCase().includes(q)) ||
            (item.specs && item.specs.toLowerCase().includes(q)) ||
            (item.id && item.id.toLowerCase().includes(q))
        );

        if (matches.length === 0) {
            searchResultsContainer.innerHTML = `
                <p class="search-prompt-text">No pieces matching "${query}". Try searching for Solitaire, Emerald, Tennis, or Choker.</p>
            `;
        } else {
            searchResultsContainer.innerHTML = matches.map(product => {
                const primaryImg = (product.images && product.images[0]) || product.image;
                return `
                <div class="search-result-item" data-id="${product.id}">
                    <div class="search-result-left">
                        <img src="${primaryImg}" alt="${product.name}" class="search-result-img">
                        <div>
                            <h5 class="search-result-title">${product.name}</h5>
                            <span class="product-category-tag">${product.categoryLabel || product.category}</span>
                        </div>
                    </div>
                    <span class="search-result-price">${product.price}</span>
                </div>
            `}).join('');

            searchResultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.dataset.id;
                    closeSearchModal();
                    openQuickview(id);
                });
            });
        }
    }

    if (searchBtn) searchBtn.addEventListener('click', (e) => { e.preventDefault(); openSearchModal(); });
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);
    if (searchOverlay) searchOverlay.addEventListener('click', closeSearchModal);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performLiveSearch(e.target.value);
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            performLiveSearch('');
        });
    }

    searchTagChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.dataset.query;
            if (searchInput) {
                searchInput.value = query;
                performLiveSearch(query);
            }
        });
    });

    // -------------------------------------------------------------
    // PRODUCT QUICK VIEW MODAL
    // -------------------------------------------------------------
    function openQuickview(productId) {
        const catalog = getPaveliaCatalog();
        const product = catalog.find(p => p.id === productId);
        if (!product || !quickviewModal || !quickviewContent) return;

        const imagesList = Array.isArray(product.images) && product.images.length > 0 
            ? product.images 
            : [product.image].filter(Boolean);
        const primaryImg = imagesList[0] || product.image;
        const metals = (product.options && product.options.metal) || ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Platinum'];
        const sizes = (product.options && product.options.size) || ['Standard'];

        quickviewContent.innerHTML = `
            <div class="quickview-grid">
                <div class="quickview-img-side">
                    <img src="${primaryImg}" alt="${product.name}" id="qv-main-img">
                </div>
                <div class="quickview-info-side">
                    <div>
                        <p class="quickview-pretitle">PAVELIA HAUTE JOAILLERIE • GIA CERTIFIED</p>
                        <h3 class="quickview-title">${product.name}</h3>
                        <p class="quickview-price">${product.price}</p>
                        <p class="quickview-desc">${product.desc || ''}</p>
                        
                        <!-- Metal Option Selection -->
                        <div class="quickview-selector-group">
                            <span class="quickview-label">PRECIOUS METAL FINISH</span>
                            <div class="quickview-options" id="qv-metal-options">
                                ${metals.map((metal, i) => `
                                    <button class="option-btn ${i === 0 ? 'active' : ''}" data-value="${metal}">${metal}</button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Size Selection -->
                        ${sizes && sizes[0] !== 'Standard' ? `
                            <div class="quickview-selector-group">
                                <span class="quickview-label">CHOOSE SIZE</span>
                                <div class="quickview-options" id="qv-size-options">
                                    ${sizes.map((size, i) => `
                                        <button class="option-btn ${i === 0 ? 'active' : ''}" data-value="${size}">${size}</button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="quickview-actions">
                        <button class="btn-qv-add-cart" id="btn-qv-add-bag">ADD TO ATELIER BAG &rarr;</button>
                    </div>
                </div>
            </div>
        `;

        // Bind Option toggles
        const bindToggles = (containerId) => {
            const container = document.getElementById(containerId);
            if (container) {
                container.querySelectorAll('.option-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    });
                });
            }
        };

        bindToggles('qv-metal-options');
        bindToggles('qv-size-options');

        const qvAddBagBtn = document.getElementById('btn-qv-add-bag');
        if (qvAddBagBtn) {
            qvAddBagBtn.addEventListener('click', () => {
                const activeMetal = document.querySelector('#qv-metal-options .option-btn.active')?.dataset.value || metals[0];
                const activeSize = document.querySelector('#qv-size-options .option-btn.active')?.dataset.value || sizes[0] || 'Standard';

                addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: primaryImg,
                    variantMetal: activeMetal,
                    variantSize: activeSize
                });
                closeQuickview();
            });
        }

        quickviewModal.classList.add('active');
        document.body.classList.add('lock-scroll');
    }

    function closeQuickview() {
        if (quickviewModal) {
            quickviewModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (quickviewCloseBtn) quickviewCloseBtn.addEventListener('click', closeQuickview);
    if (quickviewOverlay) quickviewOverlay.addEventListener('click', closeQuickview);

    // -------------------------------------------------------------
    // SIZE GUIDE & APPOINTMENT MODALS
    // -------------------------------------------------------------
    function openSizeGuideModal() {
        if (sizeGuideModal) {
            sizeGuideModal.classList.add('active');
            document.body.classList.add('lock-scroll');
        }
    }

    function closeSizeGuideModal() {
        if (sizeGuideModal) {
            sizeGuideModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    openSizeGuideBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', (e) => { e.preventDefault(); openSizeGuideModal(); });
    });
    if (sizeGuideCloseBtn) sizeGuideCloseBtn.addEventListener('click', closeSizeGuideModal);
    if (sizeGuideOverlay) sizeGuideOverlay.addEventListener('click', closeSizeGuideModal);

    // Size Guide Tabs
    const sgTabs = document.querySelectorAll('.sg-tab');
    sgTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sgTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.tab;
            document.getElementById('sg-tab-rings')?.classList.toggle('active', target === 'rings');
            document.getElementById('sg-tab-diamonds')?.classList.toggle('active', target === 'diamonds');
        });
    });

    // Global ESC key modal dismissal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeWishlistDrawer();
            closeSearchModal();
            closeQuickview();
            closeSizeGuideModal();
        }
    });

    // Newsletter Subscription Form
    const newsletterForm = document.getElementById('newsletter-subscription');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const email = input ? input.value : '';
            if (input) input.value = '';
            showToast(`✦ Welcome to the Private Atelier Circle. VIP invite dispatched to ${email || 'your email'}.`);
        });
    }

    // Expose helpers globally
    window.renderShowroomProducts = renderShowroomProducts;
    window.openQuickview = openQuickview;

    // Initial Loadings
    renderShowroomProducts();
    updateCartUI();
    updateWishlistUI();
}

/* ==========================================================================
   4. NAVIGATION DRAWER & SMOOTH SCROLL
   ========================================================================== */
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const closeBtn = document.getElementById('nav-menu-close-btn');
    const navLinks = document.querySelectorAll('.nav-menu-item');
    const exploreBtn = document.getElementById('hero-explore-btn');

    const openMenu = () => {
        if (navOverlay) {
            navOverlay.classList.add('active');
            document.body.classList.add('lock-scroll');
        }
    };

    const closeMenu = () => {
        if (navOverlay) {
            navOverlay.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    };

    if (navToggle) navToggle.addEventListener('click', (e) => { e.preventDefault(); openMenu(); });
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); });
    if (navOverlay) {
        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) closeMenu();
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            const targetId = link.getAttribute('data-target');
            const section = document.getElementById(targetId);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const showroom = document.getElementById('showroom');
            if (showroom) showroom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

/* ==========================================================================
   5. DEDICATED FULL-VIEW MAISON ADMIN DASHBOARD
   ========================================================================== */
function initializeAdminDashboard() {
    const adminDashboard = document.getElementById('admin-fullview-dashboard');
    const floatingReturnBtn = document.getElementById('admin-floating-return-btn');
    const btnOpenAddProduct = document.getElementById('btn-admin-open-add');
    const btnPreviewStorefront = document.getElementById('btn-admin-preview-storefront');
    const btnTopLogout = document.getElementById('btn-admin-top-logout');
    
    const adminProductSearch = document.getElementById('admin-product-search');
    const adminCategoryFilter = document.getElementById('admin-category-filter');
    const adminProductsTbody = document.getElementById('admin-products-tbody');
    const adminTabCount = document.getElementById('admin-tab-prod-count');
    
    // Product Modal Elements
    const productModal = document.getElementById('admin-product-modal');
    const productModalTitle = document.getElementById('admin-modal-title');
    const productModalCloseBtn = document.getElementById('admin-product-modal-close');
    const productCancelBtn = document.getElementById('btn-admin-product-cancel');
    const productForm = document.getElementById('admin-product-form');
    
    // Form Inputs
    const formProductId = document.getElementById('form-product-id');
    const formProductName = document.getElementById('form-product-name');
    const formProductCategory = document.getElementById('form-product-category');
    const formProductPrice = document.getElementById('form-product-price');
    const formProductInventory = document.getElementById('form-product-inventory');
    const formProductBadge = document.getElementById('form-product-badge');
    const formProductStatus = document.getElementById('form-product-status');
    const formProductSpecs = document.getElementById('form-product-specs');
    const formProductImage = document.getElementById('form-product-image');
    const formProductImage2 = document.getElementById('form-product-image2');

    window.openAdminFullview = () => {
        if (adminDashboard) {
            adminDashboard.classList.remove('hidden');
            document.body.classList.add('lock-scroll');
        }
        if (floatingReturnBtn) {
            floatingReturnBtn.classList.add('hidden');
        }
        renderAdminProductsTable();
    };

    window.closeAdminFullview = (showFloatingReturn = false) => {
        if (adminDashboard) {
            adminDashboard.classList.add('hidden');
            document.body.classList.remove('lock-scroll');
        }
        if (showFloatingReturn && floatingReturnBtn) {
            const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
            if (cachedUser && (cachedUser.role === 'admin' || cachedUser.email === 'admin@pavelia.com')) {
                floatingReturnBtn.classList.remove('hidden');
            }
        } else if (floatingReturnBtn) {
            floatingReturnBtn.classList.add('hidden');
        }
    };

    function renderAdminProductsTable() {
        if (!adminProductsTbody) return;

        const catalog = getPaveliaCatalog();
        if (adminTabCount) {
            adminTabCount.textContent = catalog.length;
        }

        const searchTerm = (adminProductSearch ? adminProductSearch.value : '').trim().toLowerCase();
        const selectedCat = (adminCategoryFilter ? adminCategoryFilter.value : 'all').toLowerCase();

        let filtered = catalog.filter(item => {
            const matchesCategory = (selectedCat === 'all' || (item.category && item.category.toLowerCase() === selectedCat));
            const matchesSearch = !searchTerm ||
                (item.name && item.name.toLowerCase().includes(searchTerm)) ||
                (item.category && item.category.toLowerCase().includes(searchTerm)) ||
                (item.specs && item.specs.toLowerCase().includes(searchTerm)) ||
                (item.id && item.id.toLowerCase().includes(searchTerm));
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            adminProductsTbody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 40px; color: var(--color-text-subtle); font-style: italic;">
                        No creations found matching the active search or category filters.
                    </td>
                </tr>
            `;
            return;
        }

        adminProductsTbody.innerHTML = filtered.map(product => {
            const imagesList = Array.isArray(product.images) && product.images.length > 0 
                ? product.images 
                : [product.image].filter(Boolean);
            const imageCount = imagesList.length;
            const primaryImg = imagesList[0] || product.image || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700';

            const status = product.status || 'IN STOCK';
            let statusClass = '';
            if (status === 'LIMITED RUN') statusClass = 'limited';
            else if (status === 'VAULT EXCLUSIVE' || status === 'MADE TO ORDER') statusClass = 'vault';

            const inventoryText = product.inventory || '8 pcs';
            const priceFormatted = product.price || ('₹' + (product.priceNum || 0).toLocaleString('en-IN'));

            return `
                <tr data-product-id="${product.id}">
                    <td class="td-item">
                        <div class="admin-item-cell">
                            <div class="admin-item-img-box">
                                <img src="${primaryImg}" alt="${product.name}" loading="lazy">
                                ${imageCount > 1 ? `<span class="admin-item-img-count" title="${imageCount} Images">${imageCount}</span>` : ''}
                            </div>
                            <div class="admin-item-meta">
                                <div class="admin-item-title-text">${product.name}</div>
                                <div class="admin-item-subline">
                                    <span class="admin-item-sku">#${product.id.toUpperCase()}</span>
                                    <span>•</span>
                                    <span>${product.specs || 'Certified Fine Jewel'}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="td-category">
                        <span class="admin-category-text">${product.category ? product.category.toUpperCase() : 'FINE JEWELRY'}</span>
                    </td>
                    <td class="td-price">
                        <span class="admin-price-text">${priceFormatted}</span>
                    </td>
                    <td class="td-inventory">
                        <span class="admin-inventory-text">${inventoryText}</span>
                    </td>
                    <td class="td-status">
                        <span class="status-pill ${statusClass}">● ${status}</span>
                    </td>
                    <td class="td-actions">
                        <div class="admin-action-btns">
                            <button type="button" class="btn-table-action btn-edit" data-id="${product.id}" title="Edit Creation">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                            <button type="button" class="btn-table-action btn-view" data-id="${product.id}" title="View in Showroom">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                            <button type="button" class="btn-table-action btn-delete" data-id="${product.id}" title="Retire Creation">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        // Bind table row buttons
        adminProductsTbody.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                openEditProductModal(id);
            });
        });

        adminProductsTbody.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                window.closeAdminFullview(true);
                const showroom = document.getElementById('showroom');
                if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
                if (typeof window.openQuickview === 'function') {
                    setTimeout(() => window.openQuickview(id), 500);
                }
            });
        });

        adminProductsTbody.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                handleDeleteProduct(id);
            });
        });
    }

    function openAddProductModal() {
        if (!productModal || !productForm) return;
        productForm.reset();
        if (formProductId) formProductId.value = '';
        if (productModalTitle) productModalTitle.textContent = 'ADD NEW CREATION';
        if (formProductCategory) formProductCategory.value = 'rings';
        if (formProductStatus) formProductStatus.value = 'IN STOCK';
        if (formProductInventory) formProductInventory.value = '8 pcs';
        productModal.classList.remove('hidden');
    }

    function openEditProductModal(productId) {
        if (!productModal || !productForm) return;
        const catalog = getPaveliaCatalog();
        const product = catalog.find(p => p.id === productId);
        if (!product) return;

        if (formProductId) formProductId.value = product.id;
        if (productModalTitle) productModalTitle.textContent = `EDIT CREATION: ${product.name}`;
        if (formProductName) formProductName.value = product.name || '';
        if (formProductCategory) formProductCategory.value = product.category || 'rings';
        if (formProductPrice) formProductPrice.value = product.priceNum || parseInt(String(product.price).replace(/[^\d]/g, ''), 10) || 0;
        if (formProductInventory) formProductInventory.value = product.inventory || '8 pcs';
        if (formProductBadge) formProductBadge.value = product.badge ? product.badge.replace(/^✦\s*/, '') : '';
        if (formProductStatus) formProductStatus.value = product.status || 'IN STOCK';
        if (formProductSpecs) formProductSpecs.value = product.specs || '';
        
        const imagesList = Array.isArray(product.images) && product.images.length > 0 
            ? product.images 
            : [product.image].filter(Boolean);
        if (formProductImage) formProductImage.value = imagesList[0] || product.image || '';
        if (formProductImage2) formProductImage2.value = imagesList[1] || '';

        productModal.classList.remove('hidden');
    }

    function closeProductModal() {
        if (productModal) productModal.classList.add('hidden');
    }

    function handleProductFormSubmit(e) {
        e.preventDefault();
        const id = formProductId ? formProductId.value.trim() : '';
        const name = formProductName ? formProductName.value.trim() : '';
        const category = formProductCategory ? formProductCategory.value : 'rings';
        const priceNum = formProductPrice ? parseInt(formProductPrice.value, 10) : 0;
        const inventory = formProductInventory ? formProductInventory.value.trim() : '8 pcs';
        const badgeRaw = formProductBadge ? formProductBadge.value.trim() : '';
        const status = formProductStatus ? formProductStatus.value : 'IN STOCK';
        const specs = formProductSpecs ? formProductSpecs.value.trim() : '';
        const image = formProductImage ? formProductImage.value.trim() : '';
        const image2 = formProductImage2 ? formProductImage2.value.trim() : '';

        if (!name || !image || isNaN(priceNum) || priceNum <= 0) {
            alert('Please provide a valid Creation Title, Price, and Primary Image URL.');
            return;
        }

        const images = image2 ? [image, image2] : [image];
        const badgeFormatted = badgeRaw ? (badgeRaw.startsWith('✦') ? badgeRaw : `✦ ${badgeRaw}`) : '✦ SIGNATURE PIECE';
        const priceFormatted = `₹${priceNum.toLocaleString('en-IN')}`;
        const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

        let catalog = getPaveliaCatalog();

        if (id) {
            // Edit existing product
            const index = catalog.findIndex(p => p.id === id);
            if (index !== -1) {
                catalog[index] = {
                    ...catalog[index],
                    name,
                    category,
                    categoryLabel,
                    price: priceFormatted,
                    priceNum,
                    inventory,
                    status,
                    badge: badgeFormatted,
                    specs: specs || catalog[index].specs || 'Master Cut • 18K Solid Gold / Platinum',
                    image,
                    images
                };
            }
        } else {
            // Add new creation
            const newId = `${category}-${Date.now().toString().slice(-6)}`;
            const newProduct = {
                id: newId,
                name,
                category,
                categoryLabel,
                price: priceFormatted,
                priceNum,
                inventory,
                status,
                badge: badgeFormatted,
                specs: specs || 'Handcrafted Fine Atelier Creation',
                image,
                images,
                desc: `${name} is an exquisite high jewelry creation, hand-burnished by master lapidaries to evoke timeless poise.`,
                options: {
                    metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Solid Platinum'],
                    size: category === 'rings' ? ['6', '7', '8', '9'] : ['Standard']
                }
            };
            catalog.unshift(newProduct);
        }

        savePaveliaCatalog(catalog);
        closeProductModal();
        renderAdminProductsTable();
        
        // Update storefront showroom and counts
        if (typeof window.renderShowroomProducts === 'function') {
            window.renderShowroomProducts();
        }

        // Show toast notification
        const showToastFn = window.showPaveliaToast || alert;
        showToastFn(`✦ Creation "${name}" has been saved to the Maison catalog.`);
    }

    function handleDeleteProduct(productId) {
        let catalog = getPaveliaCatalog();
        const product = catalog.find(p => p.id === productId);
        if (!product) return;

        if (confirm(`Are you sure you wish to retire "${product.name}" (#${product.id.toUpperCase()}) from the live catalog?`)) {
            catalog = catalog.filter(p => p.id !== productId);
            savePaveliaCatalog(catalog);
            renderAdminProductsTable();
            if (typeof window.renderShowroomProducts === 'function') {
                window.renderShowroomProducts();
            }
            const showToastFn = window.showPaveliaToast || alert;
            showToastFn(`✦ "${product.name}" has been retired from the live showroom.`);
        }
    }

    // Event Listeners
    if (btnOpenAddProduct) btnOpenAddProduct.addEventListener('click', openAddProductModal);
    if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);
    if (productCancelBtn) productCancelBtn.addEventListener('click', closeProductModal);
    if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);
    
    if (adminProductSearch) adminProductSearch.addEventListener('input', renderAdminProductsTable);
    if (adminCategoryFilter) adminCategoryFilter.addEventListener('change', renderAdminProductsTable);
    
    if (btnPreviewStorefront) {
        btnPreviewStorefront.addEventListener('click', () => {
            window.closeAdminFullview(true);
            const showroom = document.getElementById('showroom');
            if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (floatingReturnBtn) {
        floatingReturnBtn.addEventListener('click', () => {
            window.openAdminFullview();
        });
    }

    if (btnTopLogout) {
        btnTopLogout.addEventListener('click', () => {
            if (typeof window.paveliaAdminLogout === 'function') {
                window.paveliaAdminLogout();
            } else {
                localStorage.removeItem('pavelia_token');
                localStorage.removeItem('pavelia_user_profile');
                window.closeAdminFullview(false);
                location.reload();
            }
        });
    }
}

/* ==========================================================================
   6. ATELIER AUTHENTICATION & CLOUD SESSION MANAGER
   ========================================================================== */
function initializeAuth() {
    const accountBtn = document.getElementById('account-btn');
    const authModal = document.getElementById('auth-modal');
    const authOverlay = document.getElementById('auth-overlay');
    const authCloseBtn = document.getElementById('auth-close-btn');

    const signinPanel = document.getElementById('signin-panel');
    const signupPanel = document.getElementById('signup-panel');
    const dashboardPanel = document.getElementById('dashboard-panel');
    const adminPanel = document.getElementById('admin-panel');

    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const signinSubmitBtn = document.getElementById('btn-signin-submit');
    const signupSubmitBtn = document.getElementById('btn-signup-submit');

    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');
    const logoutBtn = document.getElementById('btn-logout');
    const btnAdminLogout = document.getElementById('btn-admin-logout');
    const btnAdminViewStore = document.getElementById('btn-admin-view-store');

    const signinError = document.getElementById('signin-error');
    const signupError = document.getElementById('signup-error');

    const dashboardWelcome = document.getElementById('dashboard-welcome');
    const dashboardEmailDisplay = document.getElementById('dashboard-email-display');
    const dashboardOrdersList = document.getElementById('dashboard-orders-list');

    let userToken = localStorage.getItem('pavelia_token') || null;

    // Helper: Check if user is Maison Administrator
    const isAdmin = (user) => {
        return Boolean(user && (user.role === 'admin' || user.email === 'admin@pavelia.com'));
    };

    // Local resilient user backup store
    const getLocalUsers = () => {
        try {
            return JSON.parse(localStorage.getItem('pavelia_local_users')) || [];
        } catch (e) {
            return [];
        }
    };

    const saveLocalUser = (userObj) => {
        const users = getLocalUsers();
        const existingIdx = users.findIndex(u => u.email === userObj.email);
        if (existingIdx >= 0) {
            users[existingIdx] = userObj;
        } else {
            users.push(userObj);
        }
        localStorage.setItem('pavelia_local_users', JSON.stringify(users));
    };

    function showAuthToast(msg) {
        if (typeof window.showPaveliaToast === 'function') {
            window.showPaveliaToast(msg);
            return;
        }
        let toastContainer = document.querySelector('.luxury-toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'luxury-toast-container';
            document.body.appendChild(toastContainer);
        }
        const toast = document.createElement('div');
        toast.className = 'luxury-toast visible';
        toast.innerHTML = `
            <span class="luxury-toast-icon">✦</span>
            <span class="luxury-toast-message">${msg}</span>
            <button class="luxury-toast-close" aria-label="Close">&times;</button>
        `;
        toastContainer.appendChild(toast);
        toast.querySelector('.luxury-toast-close').addEventListener('click', () => toast.remove());
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Password visibility toggle setup
    document.querySelectorAll('.btn-password-toggle').forEach(toggleBtn => {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggleBtn.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            if (!targetInput) return;

            const isPassword = targetInput.type === 'password';
            targetInput.type = isPassword ? 'text' : 'password';

            if (isPassword) {
                toggleBtn.innerHTML = `
                    <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                `;
            } else {
                toggleBtn.innerHTML = `
                    <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                `;
            }
        });
    });

    // Clear errors when typing
    ['signin-email', 'signin-password'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => { if (signinError) signinError.textContent = ''; });
    });

    ['signup-firstname', 'signup-lastname', 'signup-email', 'signup-password'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => { if (signupError) signupError.textContent = ''; });
    });

    const openAuthModal = (targetTab) => {
        const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
        if (userToken && isAdmin(cachedUser)) {
            if (typeof window.openAdminFullview === 'function') {
                window.openAdminFullview();
                return;
            }
        }

        if (authModal) {
            authModal.classList.add('active');
            document.body.classList.add('lock-scroll');
            const authContainer = document.querySelector('.auth-container');

            if (userToken) {
                if (authContainer) authContainer.classList.remove('admin-mode');
                updateDashboardDetails();
                showPanel(dashboardPanel);
            } else if (targetTab === 'signup') {
                if (authContainer) authContainer.classList.remove('admin-mode');
                showPanel(signupPanel);
            } else {
                if (authContainer) authContainer.classList.remove('admin-mode');
                showPanel(signinPanel);
            }
        }
    };

    const closeAuthModal = () => {
        if (authModal) {
            authModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
            if (signinError) signinError.textContent = '';
            if (signupError) signupError.textContent = '';
        }
    };

    const showPanel = (panelToShow) => {
        [signinPanel, signupPanel, dashboardPanel, adminPanel].forEach(panel => {
            if (panel) panel.classList.add('hidden');
        });
        if (panelToShow) panelToShow.classList.remove('hidden');
    };

    if (switchToSignup) switchToSignup.addEventListener('click', (e) => { e.preventDefault(); showPanel(signupPanel); });
    if (switchToSignin) switchToSignin.addEventListener('click', (e) => { e.preventDefault(); showPanel(signinPanel); });
    if (accountBtn) {
        accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
            if (userToken && isAdmin(cachedUser)) {
                if (typeof window.openAdminFullview === 'function') {
                    window.openAdminFullview();
                    return;
                }
            }
            openAuthModal();
        });
    }
    if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
    if (authOverlay) authOverlay.addEventListener('click', closeAuthModal);

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && authModal && authModal.classList.contains('active')) {
            closeAuthModal();
        }
    });

    const updateAdminDashboardDetails = () => {
        const prodStat = document.getElementById('admin-stat-products');
        const catStat = document.getElementById('admin-stat-categories');
        const cartValStat = document.getElementById('admin-stat-cart-val');
        const catalogCount = document.getElementById('admin-catalog-count');
        const listEl = document.getElementById('admin-inventory-list');

        const products = getPaveliaCatalog();
        if (prodStat) prodStat.textContent = products.length;
        if (catalogCount) catalogCount.textContent = `${products.length} Pieces`;
        if (catStat) catStat.textContent = '5';

        const cartItems = JSON.parse(localStorage.getItem('pavelia_cart') || '[]');
        const cartTotal = cartItems.reduce((acc, it) => acc + ((it.price || 0) * (it.quantity || 1)), 0);
        if (cartValStat) cartValStat.textContent = `₹${cartTotal.toLocaleString('en-IN')}`;

        if (listEl && products.length > 0) {
            listEl.innerHTML = products.map(p => `
                <div class="admin-inventory-item">
                    <div class="admin-item-left">
                        <img src="${(p.images && p.images[0]) || p.image}" alt="${p.name}" class="admin-item-thumb">
                        <div>
                            <div class="admin-item-title">${p.name}</div>
                            <div class="admin-item-category">${p.category ? p.category.toUpperCase() : 'FINE JEWELRY'}</div>
                        </div>
                    </div>
                    <div class="admin-item-right">
                        <div class="admin-item-price">₹${p.price ? p.price.toLocaleString('en-IN') : '0'}</div>
                        <span class="admin-item-badge">● LIVE</span>
                    </div>
                </div>
            `).join('');
        }
    };

    const updateDashboardDetails = () => {
        const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
        if (cachedUser) {
            if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${cachedUser.firstName} ${cachedUser.lastName || ''}`;
            if (dashboardEmailDisplay) dashboardEmailDisplay.textContent = cachedUser.email;
        }

        if (dashboardOrdersList) {
            const cartItems = JSON.parse(localStorage.getItem('pavelia_cart') || '[]');
            const wishlistItems = JSON.parse(localStorage.getItem('pavelia_wishlist') || '[]');
            if (cartItems.length > 0 || wishlistItems.length > 0) {
                dashboardOrdersList.innerHTML = `
                    <div style="font-size:0.75rem; color:#E0D5C1; line-height:1.6; background:#1E1E1E; padding:12px 14px; border-radius:3px; border:1px solid rgba(197,168,128,0.2);">
                        <p style="margin-bottom:4px;"><strong style="color:var(--color-gold);">&#10022; Private Vault Status:</strong></p>
                        <p>&bull; Bag: <strong>${cartItems.length} fine creation${cartItems.length === 1 ? '' : 's'}</strong></p>
                        <p>&bull; Wishlist: <strong>${wishlistItems.length} curated piece${wishlistItems.length === 1 ? '' : 's'}</strong></p>
                    </div>
                `;
            } else {
                dashboardOrdersList.innerHTML = `<div class="order-empty">No active bespoke orders placed yet. Your bespoke histories will appear here.</div>`;
            }
        }
    };

    const updateHeaderAuthState = (user) => {
        let welcomeBadge = document.getElementById('header-welcome-badge');
        if (!welcomeBadge && accountBtn) {
            welcomeBadge = document.createElement('span');
            welcomeBadge.id = 'header-welcome-badge';
            accountBtn.parentNode.insertBefore(welcomeBadge, accountBtn);
            welcomeBadge.addEventListener('click', (e) => {
                e.preventDefault();
                const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
                if (userToken && isAdmin(cachedUser)) {
                    if (typeof window.openAdminFullview === 'function') {
                        window.openAdminFullview();
                        return;
                    }
                }
                openAuthModal();
            });
        }

        const authContainer = document.querySelector('.auth-container');

        if (user) {
            localStorage.setItem('pavelia_user_profile', JSON.stringify(user));
            if (isAdmin(user)) {
                if (authContainer) authContainer.classList.add('admin-mode');
                if (welcomeBadge) {
                    welcomeBadge.className = 'header-admin-badge';
                    welcomeBadge.innerHTML = `✦ MAISON ADMIN`;
                    welcomeBadge.style.display = 'inline-flex';
                }
                updateAdminDashboardDetails();
            } else {
                if (authContainer) authContainer.classList.remove('admin-mode');
                if (welcomeBadge) {
                    welcomeBadge.className = 'header-user-welcome';
                    welcomeBadge.textContent = `Client: ${user.firstName}`;
                    welcomeBadge.style.display = 'inline-block';
                }
                if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${user.firstName} ${user.lastName || ''}`;
                if (dashboardEmailDisplay) dashboardEmailDisplay.textContent = user.email;
                updateDashboardDetails();
            }
            if (accountBtn) accountBtn.style.color = 'var(--color-gold)';
        } else {
            userToken = null;
            localStorage.removeItem('pavelia_token');
            localStorage.removeItem('pavelia_user_profile');
            if (authContainer) authContainer.classList.remove('admin-mode');
            if (welcomeBadge) welcomeBadge.style.display = 'none';
            if (accountBtn) accountBtn.style.color = '';
            if (typeof window.closeAdminFullview === 'function') {
                window.closeAdminFullview(false);
            }
        }
    };

    window.paveliaAdminLogout = () => {
        updateHeaderAuthState(null);
        if (typeof window.closeAdminFullview === 'function') {
            window.closeAdminFullview(false);
        }
        showAuthToast('✦ Maison Admin session closed securely.');
    };

    // Instant cached profile restore for zero UI flicker
    const cachedProfile = localStorage.getItem('pavelia_user_profile');
    if (userToken && cachedProfile) {
        try {
            updateHeaderAuthState(JSON.parse(cachedProfile));
        } catch (e) {
            // ignore
        }
    }

    const verifySession = async () => {
        if (!userToken) return;
        try {
            const res = await fetch('/api/auth/profile', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${userToken}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.user) {
                    updateHeaderAuthState(data.user);
                    if (!isAdmin(data.user)) {
                        loadCloudCart();
                    }
                }
            }
        } catch (err) {
            console.warn('Session verify note: using offline cached credentials.');
        }
    };

    const loadCloudCart = async () => {
        if (!userToken) return;
        try {
            const res = await fetch('/api/cart/sync', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${userToken}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.items && data.items.length > 0) {
                    localStorage.setItem('pavelia_cart', JSON.stringify(data.items));
                    initializePaveliaCommerce();
                }
            }
        } catch (err) {
            console.warn('Cloud cart sync note:', err.message);
        }
    };

    window.syncCartToCloud = async (items) => {
        if (!userToken) return;
        try {
            await fetch('/api/cart/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({ items })
            });
        } catch (err) {
            console.warn('Sync cart notice:', err.message);
        }
    };

    // -------------------------------------------------------------
    // SIGN UP SUBMISSION
    // -------------------------------------------------------------
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (signupError) signupError.textContent = '';

            const firstNameInput = document.getElementById('signup-firstname');
            const lastNameInput = document.getElementById('signup-lastname');
            const emailInput = document.getElementById('signup-email');
            const passwordInput = document.getElementById('signup-password');

            const firstName = (firstNameInput ? firstNameInput.value : '').trim();
            const lastName = (lastNameInput ? lastNameInput.value : '').trim();
            const email = (emailInput ? emailInput.value : '').trim().toLowerCase();
            const password = (passwordInput ? passwordInput.value : '');

            if (!firstName) {
                if (signupError) signupError.textContent = 'Please enter your first name.';
                return;
            }
            if (!email || !email.includes('@')) {
                if (signupError) signupError.textContent = 'Please enter a valid email address.';
                return;
            }
            if (password.length < 6) {
                if (signupError) signupError.textContent = 'Password must be at least 6 characters long.';
                return;
            }

            // Set loading state
            if (signupSubmitBtn) {
                signupSubmitBtn.disabled = true;
                signupSubmitBtn.innerHTML = `<span>✦ CREATING ACCOUNT...</span>`;
            }

            try {
                let registrationSuccess = false;
                let registeredUser = { firstName, lastName, email, role: 'customer' };

                try {
                    const res = await fetch('/api/auth/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ firstName, lastName, email, password })
                    });
                    const data = await res.json();

                    if (res.ok) {
                        registrationSuccess = true;
                        if (data.user) registeredUser = data.user;
                    } else {
                        if (signupError) signupError.textContent = data.error || 'Registration failed.';
                    }
                } catch (fetchErr) {
                    // Client fallback registration
                    saveLocalUser({ firstName, lastName, email, password, role: 'customer' });
                    registrationSuccess = true;
                }

                if (registrationSuccess) {
                    saveLocalUser({ firstName, lastName, email, password, role: 'customer' });
                    const simulatedToken = 'pvl_' + btoa(JSON.stringify({ email, firstName, time: Date.now() }));
                    userToken = simulatedToken;
                    localStorage.setItem('pavelia_token', userToken);

                    updateHeaderAuthState(registeredUser);
                    showAuthToast(`✦ Welcome to House of Pavelia, ${firstName}. Account created.`);
                    signupForm.reset();
                    closeAuthModal();

                    const localCart = JSON.parse(localStorage.getItem('pavelia_cart')) || [];
                    if (localCart.length > 0) {
                        window.syncCartToCloud(localCart);
                    }
                }
            } catch (err) {
                if (signupError) signupError.textContent = 'Unable to complete registration. Please try again.';
            } finally {
                if (signupSubmitBtn) {
                    signupSubmitBtn.disabled = false;
                    signupSubmitBtn.innerHTML = `<span class="btn-submit-text">CREATE PRIVATE ACCOUNT</span>`;
                }
            }
        });
    }

    // -------------------------------------------------------------
    // SIGN IN SUBMISSION
    // -------------------------------------------------------------
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (signinError) signinError.textContent = '';

            const emailInput = document.getElementById('signin-email');
            const passwordInput = document.getElementById('signin-password');

            const email = (emailInput ? emailInput.value : '').trim().toLowerCase();
            const password = (passwordInput ? passwordInput.value : '');

            if (!email || !email.includes('@')) {
                if (signinError) signinError.textContent = 'Please enter a valid email address.';
                return;
            }
            if (!password) {
                if (signinError) signinError.textContent = 'Please enter your password.';
                return;
            }

            // Set loading state
            if (signinSubmitBtn) {
                signinSubmitBtn.disabled = true;
                signinSubmitBtn.innerHTML = `<span>✦ AUTHENTICATING...</span>`;
            }

            try {
                let authenticated = false;
                let authUser = null;
                let token = null;

                // Dedicated check for master admin
                if (email === 'admin@pavelia.com' && password === 'admin123') {
                    authenticated = true;
                    token = 'pvl_admin_' + Date.now();
                    authUser = { firstName: 'Maison', lastName: 'Owner', email: 'admin@pavelia.com', role: 'admin' };
                } else {
                    try {
                        const res = await fetch('/api/auth/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password })
                        });
                        const data = await res.json();

                        if (res.ok && data.token) {
                            authenticated = true;
                            token = data.token;
                            authUser = data.user;
                        } else {
                            // Check local client fallback
                            const localUsers = getLocalUsers();
                            const matched = localUsers.find(u => u.email === email && u.password === password);
                            if (matched) {
                                authenticated = true;
                                token = 'pvl_' + btoa(JSON.stringify({ email: matched.email, firstName: matched.firstName, time: Date.now() }));
                                authUser = { firstName: matched.firstName, lastName: matched.lastName, email: matched.email, role: matched.role || 'customer' };
                            } else {
                                if (signinError) signinError.textContent = data.error || 'Invalid credentials. Please verify your email and password.';
                            }
                        }
                    } catch (netErr) {
                        // Offline / Network fallback
                        const localUsers = getLocalUsers();
                        const matched = localUsers.find(u => u.email === email && u.password === password);
                        if (matched) {
                            authenticated = true;
                            token = 'pvl_' + btoa(JSON.stringify({ email: matched.email, firstName: matched.firstName, time: Date.now() }));
                            authUser = { firstName: matched.firstName, lastName: matched.lastName, email: matched.email, role: matched.role || 'customer' };
                        } else {
                            if (signinError) signinError.textContent = 'Invalid credentials or connection issue.';
                        }
                    }
                }

                if (authenticated && token && authUser) {
                    userToken = token;
                    localStorage.setItem('pavelia_token', userToken);
                    updateHeaderAuthState(authUser);

                    signinForm.reset();
                    closeAuthModal();

                    if (isAdmin(authUser)) {
                        showAuthToast(`✦ Welcome to Executive Maison Suite, Owner.`);
                        if (typeof window.openAdminFullview === 'function') {
                            window.openAdminFullview();
                        }
                    } else {
                        showAuthToast(`✦ Signed in as ${authUser.firstName}. Welcome back.`);
                        const localCart = JSON.parse(localStorage.getItem('pavelia_cart')) || [];
                        if (localCart.length > 0) {
                            await window.syncCartToCloud(localCart);
                        }
                        loadCloudCart();
                    }
                }
            } catch (err) {
                if (signinError) signinError.textContent = 'Authentication error. Please try again.';
            } finally {
                if (signinSubmitBtn) {
                    signinSubmitBtn.disabled = false;
                    signinSubmitBtn.innerHTML = `<span class="btn-submit-text">SIGN IN TO PAVELIA</span>`;
                }
            }
        });
    }

    // -------------------------------------------------------------
    // SECURE LOGOUT (CUSTOMER & ADMIN)
    // -------------------------------------------------------------
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateHeaderAuthState(null);
            showAuthToast('✦ You have been signed out securely.');
            closeAuthModal();
        });
    }

    if (btnAdminLogout) {
        btnAdminLogout.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof window.paveliaAdminLogout === 'function') {
                window.paveliaAdminLogout();
            }
            closeAuthModal();
        });
    }

    if (btnAdminViewStore) {
        btnAdminViewStore.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal();
            const showroom = document.getElementById('showroom');
            if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
        });
    }

    verifySession();
}

/* ==========================================================================
   7. BOOTSTRAP APPLICATION
   ========================================================================== */
function initApp() {
    runClassicPreloader();
    initializePaveliaCommerce();
    initializeNavigation();
    initializeAdminDashboard();
    initializeAuth();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
