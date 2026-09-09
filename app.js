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
                if (window.PaveliaRouter && typeof window.PaveliaRouter.handleInitialRoute === 'function') {
                    window.PaveliaRouter.handleInitialRoute();
                }
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

const DEFAULT_COLLECTIONS = [
    {
        id: 'col-rings',
        name: 'ROYAL SOLITAIRES & RINGS',
        desc: 'Architectural bands, emerald cuts & halo crowns',
        badge: '05 MASTERPIECES',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700&auto=format&fit=crop',
        categoryFilter: 'rings',
        linkText: 'DISCOVER COLLECTION →'
    },
    {
        id: 'col-earrings',
        name: 'ARTISAN EARRINGS',
        desc: 'Cascading diamond drops, huggies & pearl hoops',
        badge: '05 MASTERPIECES',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=700&auto=format&fit=crop',
        categoryFilter: 'earrings',
        linkText: 'DISCOVER COLLECTION →'
    },
    {
        id: 'col-necklaces',
        name: 'STATEMENT CHOKERS & PENDANTS',
        desc: 'Royal collars, star pendants & layered chains',
        badge: '05 MASTERPIECES',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=700&auto=format&fit=crop',
        categoryFilter: 'necklaces',
        linkText: 'DISCOVER COLLECTION →'
    },
    {
        id: 'col-bracelets',
        name: 'HEIRLOOM BRACELETS & BANGLES',
        desc: 'Riviera tennis bangles, hammered gold cuffs',
        badge: '05 MASTERPIECES',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=700&auto=format&fit=crop',
        categoryFilter: 'bracelets',
        linkText: 'DISCOVER COLLECTION →'
    },
    {
        id: 'col-giftvault',
        name: 'THE ATELIER GIFT VAULT',
        desc: 'Velvet boxed parures & private commissions',
        badge: 'CURATED SETS',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=700&auto=format&fit=crop',
        categoryFilter: 'all',
        linkText: 'DISCOVER COLLECTION →'
    }
];

function getPaveliaCollections() {
    try {
        const stored = localStorage.getItem('pavelia_collections');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Pavelia collections storage notice:', e);
    }
    return DEFAULT_COLLECTIONS;
}

function savePaveliaCollections(collections) {
    try {
        localStorage.setItem('pavelia_collections', JSON.stringify(collections));
    } catch (e) {
        console.error('Error persisting Pavelia collections:', e);
    }
}

window.getPaveliaCollections = getPaveliaCollections;
window.savePaveliaCollections = savePaveliaCollections;

/* ==========================================================================
   2.5 GLOBAL CENTRALIZED SPA ROUTER & BROWSER/DEVICE BACK NAVIGATION
   ========================================================================== */
window.PaveliaRouter = (function() {
    let internalHistoryCount = 0;
    let activeOverlayId = null;
    let currentSection = 'home';
    let lastKnownHash = '';

    const modalClosers = {};
    const modalOpeners = {};

    function registerModalCloser(modalId, closerFn) {
        modalClosers[modalId] = closerFn;
    }

    function registerModalOpener(modalId, openerFn) {
        modalOpeners[modalId] = openerFn;
    }

    function parseHash(hash) {
        if (!hash) return { type: 'section', target: 'home', category: null, param: null };
        let path = hash.replace(/^#\/?/, '').trim();
        if (!path) return { type: 'section', target: 'home', category: null, param: null };

        // 1. Checkout multi-step flow
        if (path.startsWith('checkout')) {
            let step = 1;
            if (path.includes('payment') || path.includes('step-2') || path.includes('/2')) step = 2;
            else if (path.includes('confirmation') || path.includes('step-3') || path.includes('/3')) step = 3;
            return { type: 'checkout', overlayId: 'checkout', step };
        }

        // 2. Product quickview: product/:id, quickview/:id, product-:id
        const productMatch = path.match(/^(?:product|quickview)[\/\-:](.+)$/);
        if (productMatch) {
            return { type: 'modal', overlayId: 'quickview', param: decodeURIComponent(productMatch[1]) };
        }

        // 3. Customer dossier: cust-dossier/:id
        const dossierMatch = path.match(/^cust-dossier[\/\-:](.+)$/);
        if (dossierMatch) {
            return { type: 'modal', overlayId: 'cust-dossier', param: decodeURIComponent(dossierMatch[1]) };
        }

        // 4. Showroom with category filter: showroom/rings, showroom-rings, showroom?category=rings
        const showroomMatch = path.match(/^showroom[\/\-:]([a-zA-Z0-9_\-]+)$/);
        if (showroomMatch) {
            return { type: 'section', target: 'showroom', category: showroomMatch[1] };
        }

        // 5. Recognized modals / drawers / overlays
        const overlays = {
            'cart': 'cart',
            'wishlist': 'wishlist',
            'search': 'search',
            'account': 'auth',
            'auth': 'auth',
            'signin': 'auth',
            'signup': 'auth',
            'sizeguide': 'sizeguide',
            'menu': 'nav-menu',
            'nav-menu': 'nav-menu',
            'razorpay': 'razorpay',
            'admin': 'admin',
            'admin-product': 'admin-product',
            'admin-order': 'admin-order',
            'admin-collection': 'admin-collection',
            'cust-dossier': 'cust-dossier'
        };
        if (overlays[path]) {
            return { type: 'modal', overlayId: overlays[path] };
        }

        // 6. Recognized sections
        const sections = {
            'home': 'home',
            'hero': 'home',
            'hero-interactive': 'home',
            'jewellery': 'jewellery',
            'collections': 'jewellery',
            'new-arrivals': 'new-arrivals',
            'campaigns': 'new-arrivals',
            'showroom': 'showroom',
            'heritage': 'heritage',
            'bespoke': 'bespoke-section',
            'bespoke-section': 'bespoke-section',
            'about-us': 'about-us',
            'about': 'about-us'
        };
        if (sections[path]) {
            return { type: 'section', target: sections[path], category: null };
        }

        return { type: 'section', target: 'home', category: null };
    }

    function applyRoute(parsed, isBack = false) {
        try {
            const targetOverlay = (parsed.type === 'modal' || parsed.type === 'checkout') ? parsed.overlayId : null;

            // Close any open overlays that don't belong to the target route
            Object.keys(modalClosers).forEach(id => {
                if (id !== targetOverlay && typeof modalClosers[id] === 'function') {
                    try {
                        modalClosers[id]();
                    } catch (e) {
                        console.warn('PaveliaRouter: error closing overlay ' + id, e);
                    }
                }
            });

            activeOverlayId = targetOverlay;

            if (!targetOverlay) {
                document.body.classList.remove('lock-scroll');
            }

            if (parsed.type === 'section') {
                const targetSec = parsed.target;
                currentSection = targetSec;

                if (targetSec === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const elId = (targetSec === 'bespoke') ? 'bespoke-section' : targetSec;
                    const el = document.getElementById(elId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }

                if (targetSec === 'showroom' && typeof window.setPaveliaCategoryFilter === 'function') {
                    window.setPaveliaCategoryFilter(parsed.category || 'all');
                }
            } else if (parsed.type === 'checkout') {
                if (typeof window.setPaveliaCheckoutStep === 'function') {
                    window.setPaveliaCheckoutStep(parsed.step, true);
                }
            } else if (parsed.type === 'modal') {
                if (parsed.overlayId === 'quickview' && parsed.param && typeof window.openQuickview === 'function') {
                    window.openQuickview(parsed.param, false);
                } else if (typeof modalOpeners[parsed.overlayId] === 'function') {
                    modalOpeners[parsed.overlayId](false);
                }
            }
        } catch (err) {
            console.error('PaveliaRouter: error applying route', err);
        }
    }

    function navigate(routeStr, options = {}) {
        let cleanRoute = (routeStr || '').replace(/^#\/?/, '').trim();
        if (!cleanRoute) cleanRoute = 'home';
        const newHash = '#/' + cleanRoute;

        if (window.location.hash === newHash) {
            applyRoute(parseHash(newHash));
            return;
        }

        if (options.replace) {
            history.replaceState(null, '', newHash);
            lastKnownHash = newHash;
            applyRoute(parseHash(newHash));
        } else {
            internalHistoryCount++;
            lastKnownHash = newHash;
            window.location.hash = newHash;
            applyRoute(parseHash(newHash));
        }
    }

    function navigateToSection(sectionId, options = {}) {
        const { category = null, replace = false } = options;
        let route = sectionId;
        if (sectionId === 'hero' || sectionId === 'hero-interactive') route = 'home';
        if (category && category !== 'all' && (route === 'showroom' || route === 'home')) {
            route = `showroom/${category}`;
        }
        navigate(route, { replace });
    }

    function pushModalState(modalId, payload = {}) {
        let route = modalId;
        if (modalId === 'quickview' && payload.productId) {
            route = `product/${payload.productId}`;
        } else if (modalId === 'cust-dossier' && payload.orderId) {
            route = `cust-dossier/${payload.orderId}`;
        }
        navigate(route);
    }

    function pushCheckoutStep(stepNumber) {
        if (stepNumber === 1) navigate('checkout');
        else if (stepNumber === 2) navigate('checkout/payment');
        else if (stepNumber === 3) navigate('checkout/confirmation');
    }

    function replaceCheckoutStep(stepNumber) {
        if (stepNumber === 1) navigate('checkout', { replace: true });
        else if (stepNumber === 2) navigate('checkout/payment', { replace: true });
        else if (stepNumber === 3) navigate('checkout/confirmation', { replace: true });
    }

    function closeActiveOverlay(fallbackSection = null) {
        if (internalHistoryCount > 0) {
            internalHistoryCount = Math.max(0, internalHistoryCount - 1);
            window.history.back();
        } else {
            const target = fallbackSection || currentSection || 'home';
            navigate(target, { replace: true });
        }
    }

    function handleModalClose(modalId, closeFn) {
        if (typeof closeFn === 'function') {
            try { closeFn(); } catch (e) {}
        }
        if (activeOverlayId === modalId) {
            closeActiveOverlay();
        }
    }

    function onRouteEvent() {
        const currentHash = window.location.hash;
        if (currentHash === lastKnownHash) return;
        lastKnownHash = currentHash;
        const parsed = parseHash(currentHash);
        applyRoute(parsed, true);
    }

    function init() {
        const initialHash = window.location.hash;
        if (!initialHash || initialHash === '#' || initialHash === '#/') {
            history.replaceState(null, '', '#/home');
            lastKnownHash = '#/home';
            currentSection = 'home';
        } else {
            lastKnownHash = initialHash;
        }

        window.addEventListener('hashchange', onRouteEvent);
        window.addEventListener('popstate', onRouteEvent);
        setupGlobalLinkInterception();
    }

    function handleInitialRoute() {
        const parsed = parseHash(window.location.hash);
        if (parsed.target !== 'home' || parsed.type === 'modal' || parsed.type === 'checkout') {
            applyRoute(parsed);
        }
    }

    function setupGlobalLinkInterception() {
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href) return;

            if (href.startsWith('http://') || href.startsWith('https://') || 
                href.startsWith('mailto:') || href.startsWith('tel:') || 
                href.startsWith('javascript:') || anchor.getAttribute('target') === '_blank') {
                return;
            }

            if (href.startsWith('#')) {
                e.preventDefault();

                if (anchor.id === 'footer-btn-size-guide') {
                    navigate('sizeguide');
                    return;
                }

                if (href === '#' || href === '#/' || href === '#home') {
                    navigate('home');
                    return;
                }

                const clean = href.replace(/^#\/?/, '').trim();
                const catFilter = anchor.dataset.categoryFilter;

                if (clean === 'showroom' && catFilter && catFilter !== 'all') {
                    navigate(`showroom/${catFilter}`);
                    return;
                }

                if (activeOverlayId === 'nav-menu') {
                    if (modalClosers['nav-menu']) {
                        try { modalClosers['nav-menu'](); } catch (err) {}
                    }
                    navigate(clean, { replace: true });
                    return;
                }

                navigate(clean);
            }
        });
    }

    return {
        init,
        navigate,
        navigateToSection,
        pushModalState,
        pushCheckoutStep,
        replaceCheckoutStep,
        closeActiveOverlay,
        handleModalClose,
        registerModalCloser,
        registerModalOpener,
        handleInitialRoute,
        getDepth: () => internalHistoryCount,
        getCurrentSection: () => currentSection
    };
})();

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
                            <button class="btn-card-buynow" data-id="${product.id}">BUY NOW</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        bindProductCardEvents();
    }

    function bindProductCardEvents() {
        // Quick View triggers (Top right icon & image click)
        document.querySelectorAll('.btn-quickview-trigger, .product-img-wrapper').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = btn.dataset.id || btn.closest('.product-card').dataset.productId;
                openQuickview(productId);
            });
        });

        // Buy Now triggers on product card
        document.querySelectorAll('.btn-card-buynow').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = btn.dataset.id;
                const product = getPaveliaCatalog().find(p => p.id === productId);
                if (product) {
                    const metals = (product.options && product.options.metal) || ['925 Sterling Silver'];
                    const sizes = (product.options && product.options.size) || ['Standard'];
                    if (typeof window.openCheckoutModal === 'function') {
                        window.openCheckoutModal([{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            priceNum: product.priceNum,
                            image: (product.images && product.images[0]) || product.image,
                            variantMetal: metals[0] || '925 Sterling Silver',
                            variantSize: sizes[0] || 'Standard',
                            quantity: 1
                        }], true);
                    }
                }
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

    window.setPaveliaCategoryFilter = function(cat) {
        activeCategory = cat || 'all';
        filterTabs.forEach(t => {
            t.classList.toggle('active', t.dataset.filter === activeCategory);
        });
        renderShowroomProducts();
    };

    // Filter Tabs Handler
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const cat = tab.dataset.filter;
            window.setPaveliaCategoryFilter(cat);
            if (window.PaveliaRouter) {
                window.PaveliaRouter.navigateToSection('showroom', { category: cat });
            }
        });
    });

    // -------------------------------------------------------------
    // DYNAMIC HAUTE COLLECTIONS SHOWCASE RENDERING
    // -------------------------------------------------------------
    function renderStorefrontCollections() {
        const gridEl = document.getElementById('storefront-category-grid') || document.querySelector('.category-grid');
        if (!gridEl) return;
        const collections = getPaveliaCollections();
        
        gridEl.innerHTML = collections.map(col => `
            <a href="#showroom" class="category-card" data-category-filter="${col.categoryFilter || 'all'}" data-collection-id="${col.id}">
                <div class="category-img-wrapper">
                    <img src="${col.image}" alt="${col.name}" class="category-img" loading="lazy">
                    <div class="category-overlay"></div>
                    <span class="category-badge-count">${col.badge || '05 MASTERPIECES'}</span>
                </div>
                <div class="category-info-box">
                    <h4 class="category-name">${col.name}</h4>
                    <span class="category-desc">${col.desc || ''}</span>
                    <span class="category-link">${col.linkText || 'DISCOVER COLLECTION &rarr;'}</span>
                </div>
            </a>
        `).join('');

        // Attach category filtering click listeners
        gridEl.querySelectorAll('[data-category-filter]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cat = link.dataset.categoryFilter;
                window.setPaveliaCategoryFilter(cat);
                if (window.PaveliaRouter) {
                    window.PaveliaRouter.navigateToSection('showroom', { category: cat, push: true });
                } else {
                    const showroom = document.getElementById('showroom');
                    if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    renderStorefrontCollections();
    window.renderStorefrontCollections = renderStorefrontCollections;

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
            if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('cart');
        }
    }

    function closeCartDrawer() {
        if (cartDrawer) {
            cartDrawer.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (cartBtn) cartBtn.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); });
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('cart', closeCartDrawer);
        else closeCartDrawer();
    });
    if (cartOverlay) cartOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('cart', closeCartDrawer);
        else closeCartDrawer();
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (!cart || cart.length === 0) {
                showToast('Your Atelier bag is currently empty.');
                return;
            }
            closeCartDrawer();
            if (typeof window.openCheckoutModal === 'function') {
                window.openCheckoutModal(cart, false);
            }
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
            if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('wishlist');
        }
    }

    function closeWishlistDrawer() {
        if (wishlistDrawer) {
            wishlistDrawer.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (wishlistBtn) wishlistBtn.addEventListener('click', (e) => { e.preventDefault(); openWishlistDrawer(); });
    if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('wishlist', closeWishlistDrawer);
        else closeWishlistDrawer();
    });
    if (wishlistOverlay) wishlistOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('wishlist', closeWishlistDrawer);
        else closeWishlistDrawer();
    });

    // -------------------------------------------------------------
    // LIVE INSTANT SEARCH MODAL
    // -------------------------------------------------------------
    function openSearchModal() {
        if (searchModal) {
            searchModal.classList.add('active');
            document.body.classList.add('lock-scroll');
            setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
            if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('search');
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
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('search', closeSearchModal);
        else closeSearchModal();
    });
    if (searchOverlay) searchOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('search', closeSearchModal);
        else closeSearchModal();
    });

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

                    <div class="quickview-actions" style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <button class="btn-qv-add-cart" id="btn-qv-add-bag" style="flex: 1; min-width: 180px;">ADD TO ATELIER BAG &rarr;</button>
                        <button class="btn-qv-buynow" id="btn-qv-buynow" style="flex: 1; min-width: 180px; background: linear-gradient(135deg, #DFCA9B, #C5A880); color: #0A0A0A; border: none; font-family: var(--font-heading); font-size: 0.72rem; letter-spacing: 0.14em; font-weight: 700; padding: 14px 20px; border-radius: 2px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(197, 168, 128, 0.3);">BUY NOW &rarr;</button>
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

        const qvBuyNowBtn = document.getElementById('btn-qv-buynow');
        if (qvBuyNowBtn) {
            qvBuyNowBtn.addEventListener('click', () => {
                const activeMetal = document.querySelector('#qv-metal-options .option-btn.active')?.dataset.value || metals[0];
                const activeSize = document.querySelector('#qv-size-options .option-btn.active')?.dataset.value || sizes[0] || 'Standard';

                closeQuickview();
                if (typeof window.openCheckoutModal === 'function') {
                    window.openCheckoutModal([{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        priceNum: product.priceNum,
                        image: primaryImg,
                        variantMetal: activeMetal,
                        variantSize: activeSize,
                        quantity: 1
                    }], true);
                }
            });
        }

        quickviewModal.classList.add('active');
        document.body.classList.add('lock-scroll');
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('quickview', { productId });
    }

    function closeQuickview() {
        if (quickviewModal) {
            quickviewModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    if (quickviewCloseBtn) quickviewCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('quickview', closeQuickview);
        else closeQuickview();
    });
    if (quickviewOverlay) quickviewOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('quickview', closeQuickview);
        else closeQuickview();
    });

    // -------------------------------------------------------------
    // SIZE GUIDE & APPOINTMENT MODALS
    // -------------------------------------------------------------
    function openSizeGuideModal() {
        if (sizeGuideModal) {
            sizeGuideModal.classList.add('active');
            document.body.classList.add('lock-scroll');
            if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('sizeguide');
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
    if (sizeGuideCloseBtn) sizeGuideCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('sizeguide', closeSizeGuideModal);
        else closeSizeGuideModal();
    });
    if (sizeGuideOverlay) sizeGuideOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('sizeguide', closeSizeGuideModal);
        else closeSizeGuideModal();
    });

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
    window.getPaveliaCart = () => cart;
    window.clearPaveliaCart = () => {
        cart = [];
        updateCartUI();
    };

    // Initial Loadings
    if (window.PaveliaRouter) {
        window.PaveliaRouter.registerModalCloser('cart', closeCartDrawer);
        window.PaveliaRouter.registerModalOpener('cart', () => openCartDrawer());
        window.PaveliaRouter.registerModalCloser('wishlist', closeWishlistDrawer);
        window.PaveliaRouter.registerModalOpener('wishlist', () => openWishlistDrawer());
        window.PaveliaRouter.registerModalCloser('search', closeSearchModal);
        window.PaveliaRouter.registerModalOpener('search', () => openSearchModal());
        window.PaveliaRouter.registerModalCloser('quickview', closeQuickview);
        window.PaveliaRouter.registerModalCloser('sizeguide', closeSizeGuideModal);
        window.PaveliaRouter.registerModalOpener('sizeguide', () => openSizeGuideModal());
    }

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
    const brandLogo = document.querySelector('.brand-logo-link');

    const openMenu = (push = true) => {
        if (navOverlay) {
            navOverlay.classList.add('active');
            document.body.classList.add('lock-scroll');
            if (push && window.PaveliaRouter) window.PaveliaRouter.pushModalState('nav-menu');
        }
    };

    const closeMenu = () => {
        if (navOverlay) {
            navOverlay.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    };

    if (navToggle) navToggle.addEventListener('click', (e) => { e.preventDefault(); openMenu(true); });
    if (closeBtn) closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('nav-menu', closeMenu);
        else closeMenu();
    });
    if (navOverlay) {
        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) {
                if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('nav-menu', closeMenu);
                else closeMenu();
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            const targetId = link.getAttribute('data-target') || 'home';
            if (window.PaveliaRouter) {
                window.PaveliaRouter.navigateToSection(targetId);
            } else {
                const section = document.getElementById(targetId === 'home' ? 'hero-interactive' : targetId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.PaveliaRouter) {
                window.PaveliaRouter.navigateToSection('showroom');
            } else {
                const showroom = document.getElementById('showroom');
                if (showroom) showroom.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (brandLogo) {
        brandLogo.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.PaveliaRouter) {
                window.PaveliaRouter.navigateToSection('home');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (window.PaveliaRouter) {
        window.PaveliaRouter.registerModalCloser('nav-menu', closeMenu);
        window.PaveliaRouter.registerModalOpener('nav-menu', () => openMenu(false));
    }
}

/* ==========================================================================
   5. LUXURY E-COMMERCE CHECKOUT FLOW & DEMO RAZORPAY GATEWAY
   ========================================================================== */
function initializeCheckoutFlow() {
    // 1. Modal & Backdrop Elements
    const checkoutModal = document.getElementById('pavelia-checkout-modal');
    const checkoutModalClose = document.getElementById('checkout-modal-close');
    const btnCheckoutClose = document.getElementById('btn-checkout-close');
    const btnCheckoutFinish = document.getElementById('btn-checkout-finish');

    // 2. Steps Trackers & Panels
    const stepItems = document.querySelectorAll('.checkout-steps-tracker .checkout-step-item');
    const stepPanels = {
        1: document.getElementById('checkout-step-1'),
        2: document.getElementById('checkout-step-2'),
        3: document.getElementById('checkout-step-3')
    };

    // 3. Step 1 Form Elements
    const addressForm = document.getElementById('checkout-address-form');
    const inputFullName = document.getElementById('checkout-fullname');
    const inputPhone = document.getElementById('checkout-phone');
    const inputEmail = document.getElementById('checkout-email');
    const inputStreet = document.getElementById('checkout-street');
    const inputLandmark = document.getElementById('checkout-landmark');
    const inputPincode = document.getElementById('checkout-pincode');
    const inputCity = document.getElementById('checkout-city');
    const inputState = document.getElementById('checkout-state');
    const step1Error = document.getElementById('checkout-step1-error');
    const itemsListEl = document.getElementById('checkout-items-list');
    const subtotalValEl = document.getElementById('checkout-subtotal-val');
    const totalValEl = document.getElementById('checkout-total-val');

    // 4. Step 2 Payment Elements
    const payOnlineCard = document.getElementById('pay-method-online-card');
    const payCodCard = document.getElementById('pay-method-cod-card');
    const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
    const deliveryAddressRecap = document.getElementById('delivery-address-recap');
    const itemsRecapEl = document.getElementById('checkout-items-recap');
    const subtotalRecapEl = document.getElementById('checkout-subtotal-recap');
    const totalRecapEl = document.getElementById('checkout-total-recap');
    const btnBackToAddress = document.getElementById('btn-back-to-address');
    const btnTriggerPayment = document.getElementById('btn-trigger-payment');
    const btnPayLabel = document.getElementById('btn-pay-label');

    // 5. Step 3 Order Placed Receipt Elements
    const placedOrderId = document.getElementById('placed-order-id');
    const placedClientName = document.getElementById('placed-client-name');
    const placedPaymentStatus = document.getElementById('placed-payment-status');
    const placedDeliveryDate = document.getElementById('placed-delivery-date');
    const placedTotalVal = document.getElementById('placed-total-val');
    const placedItemsSummary = document.getElementById('placed-items-summary');
    const placedAddressText = document.getElementById('placed-address-text');
    const btnWhatsappTrack = document.getElementById('btn-whatsapp-track');

    // 6. Demo Razorpay Gateway Popup Elements
    const rzpModal = document.getElementById('razorpay-demo-modal');
    const rzpModalClose = document.getElementById('rzp-modal-close');
    const rzpModalAmount = document.getElementById('rzp-modal-amount');
    const rzpBodyContent = document.getElementById('rzp-body-content');
    const rzpProcessingState = document.getElementById('rzp-processing-state');
    const rzpTabs = document.querySelectorAll('.rzp-tab');
    const rzpPanels = {
        upi: document.getElementById('rzp-panel-upi'),
        card: document.getElementById('rzp-panel-card'),
        netbanking: document.getElementById('rzp-panel-netbanking')
    };
    const rzpUpiApps = document.querySelectorAll('.rzp-upi-app-item');
    const rzpVpaInput = document.getElementById('rzp-vpa-input');
    const rzpBankPills = document.querySelectorAll('.rzp-bank-pill');
    const btnRzpPayConfirm = document.getElementById('btn-rzp-pay-confirm');

    // 7. Internal Flow State
    let currentCheckoutItems = [];
    let isInstantSingleBuy = false;
    let checkoutAddress = null;
    let selectedPaymentMode = 'online'; // 'online' or 'cod'

    // Helper: Parse numerical price
    function extractNumericPrice(priceVal) {
        if (typeof priceVal === 'number') return priceVal;
        if (!priceVal) return 0;
        const clean = String(priceVal).replace(/[^\d]/g, '');
        return parseInt(clean, 10) || 0;
    }

    // Helper: Calculate checkout totals
    function calculateTotals(items) {
        let subtotal = 0;
        items.forEach(it => {
            const unitPrice = it.priceNum || extractNumericPrice(it.price);
            const qty = it.quantity || 1;
            subtotal += (unitPrice * qty);
        });
        return {
            subtotal,
            total: subtotal // Transit is insured & complimentary
        };
    }

    // Helper: Switch active checkout step panel
    function setCheckoutStep(stepNumber) {
        // Toggle step tracker classes
        stepItems.forEach(item => {
            const itemStep = parseInt(item.dataset.step, 10);
            item.classList.remove('active', 'completed');
            if (itemStep === stepNumber) {
                item.classList.add('active');
            } else if (itemStep < stepNumber) {
                item.classList.add('completed');
            }
        });

        // Toggle panels
        Object.keys(stepPanels).forEach(key => {
            const panel = stepPanels[key];
            if (panel) {
                if (parseInt(key, 10) === stepNumber) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            }
        });

        // Scroll modal card to top when step transitions
        const modalContent = document.querySelector('.checkout-modal-card');
        if (modalContent) modalContent.scrollTop = 0;
    }

    // Helper: Render items list into summary containers
    function renderItemsSummary(items, containerEl) {
        if (!containerEl) return;
        if (!items || items.length === 0) {
            containerEl.innerHTML = '<div style="color: #A0A0A0; font-size: 0.8rem; padding: 12px 0;">No items selected.</div>';
            return;
        }

        containerEl.innerHTML = items.map(item => {
            const unitPriceNum = item.priceNum || extractNumericPrice(item.price);
            const qty = item.quantity || 1;
            const lineTotal = unitPriceNum * qty;
            const itemImg = item.image || (item.images && item.images[0]) || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=300';
            const variantSpecs = [item.variantMetal, item.variantSize && item.variantSize !== 'Standard' ? `Size ${item.variantSize}` : ''].filter(Boolean).join(' • ');

            return `
                <div class="checkout-item-row" style="display: flex; gap: 14px; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(197,168,128,0.12);">
                    <div style="width: 54px; height: 54px; border-radius: 2px; overflow: hidden; background: #0E0E0E; border: 1px solid rgba(197,168,128,0.2); flex-shrink: 0;">
                        <img src="${itemImg}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-family: var(--font-heading); font-size: 0.82rem; color: #FFFFFF; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
                        ${variantSpecs ? `<div style="font-size: 0.68rem; color: #C5A880; margin-top: 2px;">${variantSpecs}</div>` : ''}
                        <div style="font-size: 0.68rem; color: #8E8E8E; margin-top: 2px;">Qty: ${qty}</div>
                    </div>
                    <div style="font-family: var(--font-heading); font-size: 0.85rem; color: #E8D7B8; font-weight: 600; text-align: right; flex-shrink: 0;">
                        ₹${lineTotal.toLocaleString('en-IN')}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Main Open Checkout Function
    function openCheckoutModal(items, isInstant = false) {
        if (!items || items.length === 0) {
            if (typeof window.showPaveliaToast === 'function') {
                window.showPaveliaToast('Please select a fine creation to begin checkout.');
            }
            return;
        }

        currentCheckoutItems = Array.isArray(items) ? JSON.parse(JSON.stringify(items)) : [items];
        isInstantSingleBuy = Boolean(isInstant);

        // Calculate and display totals
        const totals = calculateTotals(currentCheckoutItems);
        const formattedTotal = `₹${totals.total.toLocaleString('en-IN')}`;

        if (subtotalValEl) subtotalValEl.textContent = formattedTotal;
        if (totalValEl) totalValEl.textContent = formattedTotal;
        if (subtotalRecapEl) subtotalRecapEl.textContent = formattedTotal;
        if (totalRecapEl) totalRecapEl.textContent = formattedTotal;

        // Render item summaries in Step 1 & Step 2
        renderItemsSummary(currentCheckoutItems, itemsListEl);
        renderItemsSummary(currentCheckoutItems, itemsRecapEl);

        // Pre-fill user information if available
        const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
        const savedAddress = JSON.parse(localStorage.getItem('pavelia_saved_address') || 'null');

        if (cachedUser) {
            if (inputFullName && !inputFullName.value) {
                inputFullName.value = `${cachedUser.firstName || ''} ${cachedUser.lastName || ''}`.trim();
            }
            if (inputEmail && !inputEmail.value) {
                inputEmail.value = cachedUser.email || '';
            }
        }

        if (savedAddress) {
            if (inputFullName && savedAddress.fullName) inputFullName.value = savedAddress.fullName;
            if (inputPhone && savedAddress.phone) inputPhone.value = savedAddress.phone;
            if (inputEmail && savedAddress.email) inputEmail.value = savedAddress.email;
            if (inputStreet && savedAddress.street) inputStreet.value = savedAddress.street;
            if (inputLandmark && savedAddress.landmark) inputLandmark.value = savedAddress.landmark;
            if (inputPincode && savedAddress.pincode) inputPincode.value = savedAddress.pincode;
            if (inputCity && savedAddress.city) inputCity.value = savedAddress.city;
            if (inputState && savedAddress.state) inputState.value = savedAddress.state;

            if (savedAddress.addressType) {
                const typeRadio = document.querySelector(`input[name="address-type"][value="${savedAddress.addressType}"]`);
                if (typeRadio) typeRadio.checked = true;
            }
        }

        if (step1Error) step1Error.textContent = '';

        // Reset to Step 1
        setCheckoutStep(1);

        // Show Modal
        if (checkoutModal) {
            checkoutModal.classList.remove('hidden');
            checkoutModal.classList.add('active');
            document.body.classList.add('lock-scroll');
            if (window.PaveliaRouter) {
                window.PaveliaRouter.pushCheckoutStep(1);
            }
        }
    }

    function closeCheckoutModal() {
        if (checkoutModal) {
            checkoutModal.classList.remove('active');
            setTimeout(() => {
                checkoutModal.classList.add('hidden');
            }, 300);
            document.body.classList.remove('lock-scroll');
        }
    }

    // -------------------------------------------------------------
    // STEP 1: ADDRESS FORM VALIDATION & ADVANCEMENT
    // -------------------------------------------------------------
    if (addressForm) {
        addressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (step1Error) step1Error.textContent = '';

            const fullName = (inputFullName ? inputFullName.value : '').trim();
            const phone = (inputPhone ? inputPhone.value : '').trim();
            const email = (inputEmail ? inputEmail.value : '').trim().toLowerCase();
            const street = (inputStreet ? inputStreet.value : '').trim();
            const landmark = (inputLandmark ? inputLandmark.value : '').trim();
            const pincode = (inputPincode ? inputPincode.value : '').trim();
            const city = (inputCity ? inputCity.value : '').trim();
            const state = (inputState ? inputState.value : '').trim();
            const addressType = document.querySelector('input[name="address-type"]:checked')?.value || 'Home';

            // Validation Checks
            if (!fullName || fullName.length < 2) {
                if (step1Error) step1Error.textContent = 'Please provide your full legal name for transit insurance.';
                if (inputFullName) inputFullName.focus();
                return;
            }

            const phoneDigits = phone.replace(/[^\d]/g, '');
            if (!phone || phoneDigits.length < 10) {
                if (step1Error) step1Error.textContent = 'Please enter a valid 10-digit mobile contact number (+91).';
                if (inputPhone) inputPhone.focus();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                if (step1Error) step1Error.textContent = 'Please enter a valid email address for certificate issuance and tracking.';
                if (inputEmail) inputEmail.focus();
                return;
            }

            if (!street || street.length < 5) {
                if (step1Error) step1Error.textContent = 'Please enter your complete street / residence delivery address.';
                if (inputStreet) inputStreet.focus();
                return;
            }

            const pinClean = pincode.replace(/[^\d]/g, '');
            if (!pincode || pinClean.length !== 6) {
                if (step1Error) step1Error.textContent = 'Please enter a valid 6-digit postal PIN code.';
                if (inputPincode) inputPincode.focus();
                return;
            }

            if (!city) {
                if (step1Error) step1Error.textContent = 'Please enter your city / district.';
                if (inputCity) inputCity.focus();
                return;
            }

            if (!state) {
                if (step1Error) step1Error.textContent = 'Please select your state or union territory.';
                if (inputState) inputState.focus();
                return;
            }

            // Save Address Object
            checkoutAddress = {
                fullName,
                phone: phoneDigits,
                email,
                street,
                landmark,
                pincode: pinClean,
                city,
                state,
                addressType
            };

            localStorage.setItem('pavelia_saved_address', JSON.stringify(checkoutAddress));

            // Populate Step 2 Delivery Recap
            if (deliveryAddressRecap) {
                deliveryAddressRecap.innerHTML = `
                    <div style="background: rgba(197,168,128,0.06); border: 1px solid rgba(197,168,128,0.2); padding: 14px 16px; border-radius: 3px; font-size: 0.76rem; color: #E0D5C1; line-height: 1.6;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <strong style="color: var(--color-gold); font-family: var(--font-heading); letter-spacing: 0.08em;">✦ ARMORED TRANSIT DESTINATION:</strong>
                            <span style="font-size: 0.68rem; background: #1A1A1A; border: 1px solid #C5A880; color: #C5A880; padding: 2px 8px; border-radius: 2px;">${addressType.toUpperCase()}</span>
                        </div>
                        <div style="font-weight: 600; color: #FFFFFF; font-size: 0.82rem;">${fullName} • +91 ${phoneDigits}</div>
                        <div style="color: #BFB4A0; margin-top: 2px;">${street}${landmark ? ', ' + landmark : ''}, ${city}, ${state} - ${pinClean}</div>
                        <div style="color: #8E8E8E; font-size: 0.7rem; margin-top: 2px;">Notifications &amp; GIA Vault Card to: ${email}</div>
                    </div>
                `;
            }

            // Move to Step 2
            setCheckoutStep(2);
            if (window.PaveliaRouter) {
                window.PaveliaRouter.pushCheckoutStep(2);
            }
        });
    }

    // -------------------------------------------------------------
    // STEP 2: PAYMENT METHOD SELECTION & TRIGGER
    // -------------------------------------------------------------
    const updatePaymentSelection = (mode) => {
        selectedPaymentMode = mode;
        if (mode === 'online') {
            if (payOnlineCard) payOnlineCard.classList.add('active');
            if (payCodCard) payCodCard.classList.remove('active');
            const radioOnline = document.querySelector('input[name="payment-method"][value="online"]');
            if (radioOnline) radioOnline.checked = true;
            if (btnPayLabel) btnPayLabel.textContent = 'PAY NOW VIA RAZORPAY';
        } else {
            if (payOnlineCard) payOnlineCard.classList.remove('active');
            if (payCodCard) payCodCard.classList.add('active');
            const radioCod = document.querySelector('input[name="payment-method"][value="cod"]');
            if (radioCod) radioCod.checked = true;
            if (btnPayLabel) btnPayLabel.textContent = 'CONFIRM CASH ON DELIVERY ORDER';
        }
    };

    if (payOnlineCard) {
        payOnlineCard.addEventListener('click', () => updatePaymentSelection('online'));
    }
    if (payCodCard) {
        payCodCard.addEventListener('click', () => updatePaymentSelection('cod'));
    }
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', (e) => updatePaymentSelection(e.target.value));
    });

    if (btnBackToAddress) {
        btnBackToAddress.addEventListener('click', () => {
            if (window.PaveliaRouter) {
                window.PaveliaRouter.closeActiveOverlay();
            } else {
                setCheckoutStep(1);
            }
        });
    }

    if (btnTriggerPayment) {
        btnTriggerPayment.addEventListener('click', () => {
            const totals = calculateTotals(currentCheckoutItems);
            if (selectedPaymentMode === 'online') {
                // Open Demo Razorpay Simulation Gateway
                if (rzpModal) {
                    if (rzpModalAmount) rzpModalAmount.textContent = `₹${totals.total.toLocaleString('en-IN')}`;
                    if (rzpBodyContent) rzpBodyContent.classList.remove('hidden');
                    if (rzpProcessingState) rzpProcessingState.classList.add('hidden');
                    rzpModal.classList.remove('hidden');
                    rzpModal.classList.add('active');
                    if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('razorpay');
                }
            } else {
                // Cash on Delivery
                finalizeOrder('Cash / Card on Delivery (Armored Transit Verification)');
            }
        });
    }

    // -------------------------------------------------------------
    // DEMO RAZORPAY GATEWAY SIMULATOR
    // -------------------------------------------------------------
    function closeRazorpayModal() {
        if (rzpModal) {
            rzpModal.classList.remove('active');
            setTimeout(() => {
                rzpModal.classList.add('hidden');
                if (rzpBodyContent) rzpBodyContent.classList.remove('hidden');
                if (rzpProcessingState) rzpProcessingState.classList.add('hidden');
            }, 250);
        }
    }

    if (rzpModalClose) rzpModalClose.addEventListener('click', closeRazorpayModal);

    // Razorpay Tabs Switcher
    rzpTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            rzpTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const targetTab = tab.dataset.rzpTab;
            Object.keys(rzpPanels).forEach(key => {
                const panel = rzpPanels[key];
                if (panel) {
                    if (key === targetTab) {
                        panel.classList.remove('hidden');
                    } else {
                        panel.classList.add('hidden');
                    }
                }
            });
        });
    });

    // Razorpay UPI App selector
    rzpUpiApps.forEach(app => {
        app.addEventListener('click', () => {
            rzpUpiApps.forEach(a => {
                a.classList.remove('active');
                const radio = a.querySelector('.upi-radio');
                if (radio) radio.textContent = '○';
            });
            app.classList.add('active');
            const activeRadio = app.querySelector('.upi-radio');
            if (activeRadio) activeRadio.textContent = '●';

            const upiType = app.dataset.upi;
            if (rzpVpaInput) {
                if (upiType === 'gpay') rzpVpaInput.value = 'client@okhdfcbank';
                else if (upiType === 'phonepe') rzpVpaInput.value = 'client@ybl';
                else if (upiType === 'paytm') rzpVpaInput.value = 'client@paytm';
            }
        });
    });

    // Bank Pills
    rzpBankPills.forEach(bank => {
        bank.addEventListener('click', () => {
            rzpBankPills.forEach(b => b.classList.remove('active'));
            bank.classList.add('active');
        });
    });

    // Confirm Razorpay Demo Payment
    if (btnRzpPayConfirm) {
        btnRzpPayConfirm.addEventListener('click', () => {
            if (rzpBodyContent) rzpBodyContent.classList.add('hidden');
            if (rzpProcessingState) rzpProcessingState.classList.remove('hidden');

            setTimeout(() => {
                closeRazorpayModal();
                finalizeOrder('Online Payment (Encrypted Razorpay Vault - UPI/Card)');
            }, 1400);
        });
    }

    // -------------------------------------------------------------
    // FINALIZE ORDER & STEP 3 SUCCESS RECEIPT
    // -------------------------------------------------------------
    function finalizeOrder(paymentMethodText) {
        const orderYear = new Date().getFullYear();
        const orderRand = Math.floor(10000 + Math.random() * 90000);
        const orderId = `PVL-${orderYear}-${orderRand}`;
        const totals = calculateTotals(currentCheckoutItems);
        const orderDate = new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const newOrderRecord = {
            orderId,
            orderDate,
            timestamp: new Date().toISOString(),
            items: currentCheckoutItems,
            total: totals.total,
            paymentMethod: paymentMethodText,
            address: checkoutAddress || {},
            status: 'Confirmed • In Bespoke Atelier Preparation'
        };

        // Save order to LocalStorage
        try {
            const existingOrders = JSON.parse(localStorage.getItem('pavelia_orders') || '[]');
            existingOrders.unshift(newOrderRecord);
            localStorage.setItem('pavelia_orders', JSON.stringify(existingOrders));
        } catch (e) {
            console.error('Failed to store order in localStorage', e);
        }

        // Clear cart if this was a full cart drawer checkout
        if (!isInstantSingleBuy) {
            if (typeof window.clearPaveliaCart === 'function') {
                window.clearPaveliaCart();
            }
        }

        // Populate Step 3 Order Confirmation Screen
        if (placedOrderId) placedOrderId.textContent = orderId;
        if (placedClientName) placedClientName.textContent = (checkoutAddress && checkoutAddress.fullName) || 'Esteemed Patron';
        if (placedPaymentStatus) placedPaymentStatus.textContent = paymentMethodText;
        if (placedTotalVal) placedTotalVal.textContent = `₹${totals.total.toLocaleString('en-IN')}`;
        if (placedDeliveryDate) placedDeliveryDate.textContent = '3 - 5 Business Days (Armored Transit)';

        if (placedAddressText && checkoutAddress) {
            placedAddressText.textContent = `${checkoutAddress.fullName}, ${checkoutAddress.street}${checkoutAddress.landmark ? ', ' + checkoutAddress.landmark : ''}, ${checkoutAddress.city}, ${checkoutAddress.state} - ${checkoutAddress.pincode} (Ph: +91 ${checkoutAddress.phone})`;
        }

        if (placedItemsSummary) {
            renderItemsSummary(currentCheckoutItems, placedItemsSummary);
        }

        // Generate dynamic WhatsApp Concierge tracking link
        if (btnWhatsappTrack) {
            const waMsg = `Hello Pavelia Luxury Atelier Concierge,\n\nI have placed a bespoke Haute Joaillerie commission on your boutique.\n\n✦ Order ID: ${orderId}\n✦ Client: ${(checkoutAddress && checkoutAddress.fullName) || 'Patron'}\n✦ Total Investment: ₹${totals.total.toLocaleString('en-IN')}\n✦ Payment Mode: ${paymentMethodText}\n✦ Delivery Destination: ${(checkoutAddress && checkoutAddress.city) || ''}, ${(checkoutAddress && checkoutAddress.state) || ''}\n\nPlease share live master artisan crafting updates & armored tracking.`;
            btnWhatsappTrack.href = `https://wa.me/919999999999?text=${encodeURIComponent(waMsg)}`;
        }

        // Advance to Step 3
        setCheckoutStep(3);
        if (window.PaveliaRouter) {
            window.PaveliaRouter.replaceCheckoutStep(3);
        }

        if (typeof window.showPaveliaToast === 'function') {
            window.showPaveliaToast(`✦ Commission ${orderId} confirmed! Our lapidary atelier has received your order.`);
        }

        // Trigger custom event so customer dashboard updates immediately
        window.dispatchEvent(new CustomEvent('pavelia_order_placed', { detail: newOrderRecord }));
    }

    // Modal Close Buttons
    const handleCheckoutDismiss = () => {
        if (window.PaveliaRouter) {
            window.PaveliaRouter.handleModalClose('checkout', closeCheckoutModal);
        } else {
            closeCheckoutModal();
        }
    };
    if (checkoutModalClose) checkoutModalClose.addEventListener('click', handleCheckoutDismiss);
    if (btnCheckoutClose) btnCheckoutClose.addEventListener('click', handleCheckoutDismiss);

    const handleRazorpayDismiss = () => {
        if (window.PaveliaRouter) {
            window.PaveliaRouter.handleModalClose('razorpay', closeRazorpayModal);
        } else {
            closeRazorpayModal();
        }
    };
    if (rzpModalClose) rzpModalClose.addEventListener('click', handleRazorpayDismiss);

    const btnPlacedViewDossier = document.getElementById('btn-placed-view-dossier');
    if (btnPlacedViewDossier) {
        btnPlacedViewDossier.addEventListener('click', () => {
            const orderId = placedOrderId ? placedOrderId.textContent.trim() : null;
            if (orderId && typeof window.openCustomerOrderDossier === 'function') {
                closeCheckoutModal();
                window.openCustomerOrderDossier(orderId);
            }
        });
    }

    if (btnCheckoutFinish) {
        btnCheckoutFinish.addEventListener('click', () => {
            closeCheckoutModal();
            if (window.PaveliaRouter) {
                window.PaveliaRouter.navigateToSection('showroom', { push: true });
            } else {
                const showroom = document.getElementById('showroom');
                if (showroom) showroom.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Dismiss modals on backdrop click
    if (checkoutModal) {
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) handleCheckoutDismiss();
        });
    }
    if (rzpModal) {
        rzpModal.addEventListener('click', (e) => {
            if (e.target === rzpModal) handleRazorpayDismiss();
        });
    }

    // Global ESC key dismissal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (rzpModal && rzpModal.classList.contains('active')) {
                handleRazorpayDismiss();
            } else if (checkoutModal && checkoutModal.classList.contains('active')) {
                handleCheckoutDismiss();
            }
        }
    });

    // Expose openCheckoutModal globally
    window.openCheckoutModal = openCheckoutModal;
    window.setPaveliaCheckoutStep = setCheckoutStep;
    if (window.PaveliaRouter) {
        window.PaveliaRouter.registerModalCloser('checkout', closeCheckoutModal);
        window.PaveliaRouter.registerModalOpener('checkout', () => openCheckoutModal(null, false, false));
        window.PaveliaRouter.registerModalCloser('razorpay', closeRazorpayModal);
    }
}

/* ==========================================================================
   6. DEDICATED FULL-VIEW MAISON ADMIN DASHBOARD
   ========================================================================== */
function initializeAdminDashboard() {
    const adminDashboard = document.getElementById('admin-fullview-dashboard');
    const floatingReturnBtn = document.getElementById('admin-floating-return-btn');
    const btnOpenAddProduct = document.getElementById('btn-admin-open-add');
    const btnPreviewStorefront = document.getElementById('btn-admin-preview-storefront');
    const btnTopLogout = document.getElementById('btn-admin-top-logout');
    
    // Tab Navigation Elements
    const adminTabBtnProducts = document.getElementById('admin-tab-btn-products');
    const adminTabBtnOrders = document.getElementById('admin-tab-btn-orders');
    const adminTabBtnCollections = document.getElementById('admin-tab-btn-collections');
    const adminTabProdCount = document.getElementById('admin-tab-prod-count');
    const adminTabOrdersCount = document.getElementById('admin-tab-orders-count');
    const adminTabCollectionsCount = document.getElementById('admin-tab-collections-count');
    const adminPanelProducts = document.getElementById('admin-panel-products');
    const adminPanelOrders = document.getElementById('admin-panel-orders');
    const adminPanelCollections = document.getElementById('admin-panel-collections');
    
    // Products Table Elements
    const adminProductSearch = document.getElementById('admin-product-search');
    const adminCategoryFilter = document.getElementById('admin-category-filter');
    const adminProductsTbody = document.getElementById('admin-products-tbody');
    
    // Orders Table & Stats Elements
    const adminOrdersSearch = document.getElementById('admin-orders-search');
    const adminOrdersFilter = document.getElementById('admin-orders-filter');
    const adminOrdersTbody = document.getElementById('admin-orders-tbody');
    const adminStatOrdersTotal = document.getElementById('admin-stat-orders-total');
    const adminStatOrdersRev = document.getElementById('admin-stat-orders-rev');
    const adminStatOrdersPending = document.getElementById('admin-stat-orders-pending');

    // Collections Table & Stats Elements
    const adminStatCollectionsTotal = document.getElementById('admin-stat-collections-total');
    const adminStatCollectionsCats = document.getElementById('admin-stat-collections-cats');
    const adminCollectionsSearch = document.getElementById('admin-collections-search');
    const btnOpenAddCollection = document.getElementById('btn-admin-open-add-collection');
    const btnResetCollections = document.getElementById('btn-admin-reset-collections');
    const adminCollectionsTbody = document.getElementById('admin-collections-tbody');
    
    // Product Modal Elements
    const productModal = document.getElementById('admin-product-modal');
    const productModalTitle = document.getElementById('admin-modal-title');
    const productModalCloseBtn = document.getElementById('admin-product-modal-close');
    const productCancelBtn = document.getElementById('btn-admin-product-cancel');
    const productForm = document.getElementById('admin-product-form');
    
    // Product Form Inputs
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

    // Collection Modal Elements
    const collectionModal = document.getElementById('admin-collection-modal');
    const collectionModalTitle = document.getElementById('admin-collection-modal-title');
    const collectionModalCloseBtn = document.getElementById('admin-collection-modal-close');
    const collectionCancelBtn = document.getElementById('btn-admin-collection-cancel');
    const collectionForm = document.getElementById('admin-collection-form');

    // Collection Form Inputs
    const formCollectionId = document.getElementById('form-collection-id');
    const formCollectionName = document.getElementById('form-collection-name');
    const formCollectionBadge = document.getElementById('form-collection-badge');
    const formCollectionDesc = document.getElementById('form-collection-desc');
    const formCollectionCategory = document.getElementById('form-collection-category');
    const formCollectionLink = document.getElementById('form-collection-link');
    const formCollectionImage = document.getElementById('form-collection-image');
    const formCollectionImagePreview = document.getElementById('form-collection-image-preview');

    // Order Dossier Modal Elements
    const orderModal = document.getElementById('admin-order-modal');
    const orderModalCloseBtn = document.getElementById('admin-order-modal-close');
    const dossierOrderId = document.getElementById('dossier-order-id');
    const dossierClientName = document.getElementById('dossier-client-name');
    const dossierClientPhone = document.getElementById('dossier-client-phone');
    const dossierClientEmail = document.getElementById('dossier-client-email');
    const dossierClientType = document.getElementById('dossier-client-type');
    const dossierClientAddress = document.getElementById('dossier-client-address');
    const dossierLinkWa = document.getElementById('dossier-link-wa');
    const dossierLinkPhone = document.getElementById('dossier-link-phone');
    const dossierLinkEmail = document.getElementById('dossier-link-email');
    const dossierOrderDate = document.getElementById('dossier-order-date');
    const dossierOrderPayment = document.getElementById('dossier-order-payment');
    const dossierOrderTotal = document.getElementById('dossier-order-total');
    const dossierItemsList = document.getElementById('dossier-items-list');
    const dossierStatusForm = document.getElementById('dossier-status-form');
    const dossierStatusSelect = document.getElementById('dossier-status-select');

    window.openAdminFullview = () => {
        if (adminDashboard) {
            adminDashboard.classList.remove('hidden');
            document.body.classList.add('lock-scroll');
        }
        if (floatingReturnBtn) {
            floatingReturnBtn.classList.add('hidden');
        }
        renderAdminProductsTable();
        renderAdminOrdersTable();
        renderAdminCollectionsTable();
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

    // -------------------------------------------------------------
    // ADMIN TAB SWITCHING
    // -------------------------------------------------------------
    function switchAdminTab(targetTab) {
        if (targetTab === 'products') {
            if (adminTabBtnProducts) adminTabBtnProducts.classList.add('active');
            if (adminTabBtnOrders) adminTabBtnOrders.classList.remove('active');
            if (adminTabBtnCollections) adminTabBtnCollections.classList.remove('active');
            if (adminPanelProducts) adminPanelProducts.classList.remove('hidden');
            if (adminPanelOrders) adminPanelOrders.classList.add('hidden');
            if (adminPanelCollections) adminPanelCollections.classList.add('hidden');
            renderAdminProductsTable();
        } else if (targetTab === 'orders') {
            if (adminTabBtnOrders) adminTabBtnOrders.classList.add('active');
            if (adminTabBtnProducts) adminTabBtnProducts.classList.remove('active');
            if (adminTabBtnCollections) adminTabBtnCollections.classList.remove('active');
            if (adminPanelOrders) adminPanelOrders.classList.remove('hidden');
            if (adminPanelProducts) adminPanelProducts.classList.add('hidden');
            if (adminPanelCollections) adminPanelCollections.classList.add('hidden');
            renderAdminOrdersTable();
        } else if (targetTab === 'collections') {
            if (adminTabBtnCollections) adminTabBtnCollections.classList.add('active');
            if (adminTabBtnProducts) adminTabBtnProducts.classList.remove('active');
            if (adminTabBtnOrders) adminTabBtnOrders.classList.remove('active');
            if (adminPanelCollections) adminPanelCollections.classList.remove('hidden');
            if (adminPanelProducts) adminPanelProducts.classList.add('hidden');
            if (adminPanelOrders) adminPanelOrders.classList.add('hidden');
            renderAdminCollectionsTable();
        }
    }

    if (adminTabBtnProducts) adminTabBtnProducts.addEventListener('click', () => switchAdminTab('products'));
    if (adminTabBtnOrders) adminTabBtnOrders.addEventListener('click', () => switchAdminTab('orders'));
    if (adminTabBtnCollections) adminTabBtnCollections.addEventListener('click', () => switchAdminTab('collections'));

    // -------------------------------------------------------------
    // PRODUCTS TABLE RENDERING
    // -------------------------------------------------------------
    function renderAdminProductsTable() {
        if (!adminProductsTbody) return;

        const catalog = getPaveliaCatalog();
        if (adminTabProdCount) {
            adminTabProdCount.textContent = catalog.length;
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
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('admin-product');
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
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('admin-product');
    }

    function closeProductModal() {
        if (productModal) productModal.classList.add('hidden');
    }

    if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-product', closeProductModal);
        else closeProductModal();
    });
    if (productCancelBtn) productCancelBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-product', closeProductModal);
        else closeProductModal();
    });

    function handleProductFormSubmit(e) {
        e.preventDefault();
        const id = formProductId ? formProductId.value.trim() : '';
        const name = formProductName ? formProductName.value.trim() : '';
        const category = formProductCategory ? formProductCategory.value : 'rings';
        const priceNum = formProductPrice ? parseInt(formProductPrice.value, 10) : 0;
        const inventory = formProductInventory ? formProductInventory.value.trim() : '8 pcs';
        const badgeRaw = formProductBadge ? formProductBadge.value.trim() : '';
        const badgeFormatted = badgeRaw ? (badgeRaw.startsWith('✦') ? badgeRaw : `✦ ${badgeRaw}`) : '✦ HAUTE ATELIER';
        const status = formProductStatus ? formProductStatus.value : 'IN STOCK';
        const specs = formProductSpecs ? formProductSpecs.value.trim() : '';
        const image = formProductImage ? formProductImage.value.trim() : '';
        const image2 = formProductImage2 ? formProductImage2.value.trim() : '';

        const images = [image, image2].filter(Boolean);

        if (!name || !image || isNaN(priceNum) || priceNum <= 0) {
            alert('Please provide a valid creation title, primary image URL, and price.');
            return;
        }

        const priceFormatted = `₹${priceNum.toLocaleString('en-IN')}`;
        const categoryLabels = {
            rings: 'Royal Solitaire',
            earrings: 'Ear Drops & Studs',
            necklaces: 'Chokers & Cascades',
            bracelets: 'Tennis & Bangles',
            pendants: 'Royal Pendants'
        };
        const categoryLabel = categoryLabels[category] || 'Fine Jewelry';

        let catalog = getPaveliaCatalog();

        if (id) {
            // Edit existing creation
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
                    image: image,
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
                image: image,
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

    // -------------------------------------------------------------
    // CLIENT ORDERS TABLE & CUSTOMER DETAILS RENDERING
    // -------------------------------------------------------------
    const DEFAULT_SEED_ORDERS = [
        {
            orderId: 'PVL-2026-94812',
            orderDate: '06 September 2026',
            timestamp: new Date().toISOString(),
            items: [
                {
                    id: 'ring-1',
                    name: 'Amour Solitaire Ring',
                    price: '₹85,000',
                    priceNum: 85000,
                    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700&auto=format&fit=crop',
                    variantMetal: '18K Yellow Gold Vermeil',
                    variantSize: '7',
                    quantity: 1
                },
                {
                    id: 'earring-1',
                    name: 'Orion Diamond Studs',
                    price: '₹62,000',
                    priceNum: 62000,
                    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=700&auto=format&fit=crop',
                    variantMetal: '950 Solid Platinum',
                    variantSize: '1.00 Carat Pair',
                    quantity: 1
                }
            ],
            total: 147000,
            paymentMethod: 'Online Payment (Razorpay Vault - 100% Encrypted)',
            address: {
                fullName: 'Ananya Sharma',
                phone: '9876543210',
                email: 'ananya.sharma@example.com',
                street: 'Penthouse 4B, Imperial Towers, MG Road',
                landmark: 'Near Royal Opera House',
                pincode: '400001',
                city: 'Mumbai',
                state: 'Maharashtra',
                addressType: 'Residence'
            },
            status: 'Confirmed • In Bespoke Atelier Preparation'
        },
        {
            orderId: 'PVL-2026-81340',
            orderDate: '05 September 2026',
            timestamp: new Date(Date.now() - 86400000).toISOString(),
            items: [
                {
                    id: 'necklace-1',
                    name: 'Aura Solitaire Pendant',
                    price: '₹95,000',
                    priceNum: 95000,
                    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=700&auto=format&fit=crop',
                    variantMetal: '18K Yellow Gold Vermeil',
                    variantSize: '18 Inches',
                    quantity: 1
                }
            ],
            total: 95000,
            paymentMethod: 'Cash / Card on Delivery (Armored Transit Verification)',
            address: {
                fullName: 'Rohan Singhania',
                phone: '9988776655',
                email: 'rohan.singhania@example.com',
                street: 'Villa 12, Golf Links Enclave',
                landmark: 'Adjacent to Embassy Circle',
                pincode: '110003',
                city: 'New Delhi',
                state: 'Delhi',
                addressType: 'Office'
            },
            status: 'Dispatched • In Insured Armored Transit'
        }
    ];

    function getStoredOrders() {
        try {
            const stored = JSON.parse(localStorage.getItem('pavelia_orders'));
            if (Array.isArray(stored) && stored.length > 0) {
                return stored;
            }
            localStorage.setItem('pavelia_orders', JSON.stringify(DEFAULT_SEED_ORDERS));
            return DEFAULT_SEED_ORDERS;
        } catch (e) {
            return DEFAULT_SEED_ORDERS;
        }
    }

    function renderAdminOrdersTable() {
        if (!adminOrdersTbody) return;

        const orders = getStoredOrders();
        if (adminTabOrdersCount) {
            adminTabOrdersCount.textContent = orders.length;
        }

        // Calculate Overview Statistics
        const totalCount = orders.length;
        const totalRevenue = orders.reduce((acc, it) => acc + (it.total || 0), 0);
        const pendingCount = orders.filter(it => !it.status || it.status.includes('Preparation') || it.status.includes('Production') || it.status.includes('Confirmed')).length;

        if (adminStatOrdersTotal) adminStatOrdersTotal.textContent = totalCount;
        if (adminStatOrdersRev) adminStatOrdersRev.textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
        if (adminStatOrdersPending) adminStatOrdersPending.textContent = pendingCount;

        const searchTerm = (adminOrdersSearch ? adminOrdersSearch.value : '').trim().toLowerCase();
        const filterVal = (adminOrdersFilter ? adminOrdersFilter.value : 'all').toLowerCase();

        let filtered = orders.filter(order => {
            // Status/Payment filter
            let matchesFilter = true;
            const statusLower = (order.status || '').toLowerCase();
            const payLower = (order.paymentMethod || '').toLowerCase();

            if (filterVal === 'production') {
                matchesFilter = statusLower.includes('preparation') || statusLower.includes('production') || statusLower.includes('confirmed');
            } else if (filterVal === 'dispatched') {
                matchesFilter = statusLower.includes('dispatched') || statusLower.includes('transit');
            } else if (filterVal === 'delivered') {
                matchesFilter = statusLower.includes('delivered');
            } else if (filterVal === 'cod') {
                matchesFilter = payLower.includes('cash') || payLower.includes('cod') || payLower.includes('delivery');
            } else if (filterVal === 'online') {
                matchesFilter = payLower.includes('online') || payLower.includes('razorpay');
            }

            // Search query filter
            const addr = order.address || {};
            const items = order.items || [];
            const itemsNames = items.map(i => i.name || '').join(' ').toLowerCase();

            const matchesSearch = !searchTerm ||
                (order.orderId && order.orderId.toLowerCase().includes(searchTerm)) ||
                (addr.fullName && addr.fullName.toLowerCase().includes(searchTerm)) ||
                (addr.phone && addr.phone.toLowerCase().includes(searchTerm)) ||
                (addr.email && addr.email.toLowerCase().includes(searchTerm)) ||
                (addr.city && addr.city.toLowerCase().includes(searchTerm)) ||
                itemsNames.includes(searchTerm);

            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            adminOrdersTbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 48px 20px; color: var(--color-text-subtle);">
                        <div style="font-size: 1.1rem; color: var(--color-gold-light); margin-bottom: 6px; font-family: var(--font-heading);">No Client Orders Found</div>
                        <div style="font-size: 0.76rem; color: #888888;">When customers purchase creations via the "BUY NOW" flow, complete client profiles and order records will appear here live.</div>
                    </td>
                </tr>
            `;
            return;
        }

        adminOrdersTbody.innerHTML = filtered.map(order => {
            const addr = order.address || {};
            const items = order.items || [];
            const clientName = addr.fullName || 'Esteemed Patron';
            const clientPhone = addr.phone || '-';
            const clientEmail = addr.email || '-';
            const locationType = addr.addressType || 'Home';
            const street = addr.street || '';
            const landmark = addr.landmark || '';
            const city = addr.city || 'Destination';
            const state = addr.state || '';
            const pincode = addr.pincode || '';
            const cityState = `${city}, ${state}`;
            const totalFormatted = `₹${(order.total || 0).toLocaleString('en-IN')}`;
            const isCod = (order.paymentMethod || '').toLowerCase().includes('cash') || (order.paymentMethod || '').toLowerCase().includes('cod');
            const paymentTag = isCod ? 'COD (TRANSIT)' : 'ONLINE (RAZORPAY)';
            const orderDateText = order.orderDate || new Date(order.timestamp || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

            const statusVal = order.status || 'Confirmed • In Bespoke Atelier Preparation';

            return `
                <tr class="admin-order-row-clickable" data-order-id="${order.orderId}">
                    <td class="td-order-id">
                        <div class="admin-order-id-cell">
                            <span class="admin-order-id-val btn-dossier" data-order-id="${order.orderId}" title="Click to inspect order dossier">
                                ✦ ${order.orderId}
                            </span>
                            <span class="admin-order-date-val">${orderDateText}</span>
                        </div>
                    </td>
                    <td class="td-customer">
                        <div class="admin-customer-cell">
                            <div class="admin-cust-name-row">
                                <span class="admin-cust-name btn-dossier" data-order-id="${order.orderId}" title="Click to view full customer dossier">${clientName}</span>
                                <span class="admin-cust-type-tag">${locationType.toUpperCase()}</span>
                            </div>
                            <div class="admin-cust-contact">
                                <a href="tel:+91${clientPhone}" title="Call customer" onclick="event.stopPropagation();">📞 +91 ${clientPhone}</a>
                                <a href="mailto:${clientEmail}" title="Email customer" onclick="event.stopPropagation();">✉ ${clientEmail}</a>
                            </div>
                            <div class="admin-cust-location">
                                <div><strong>📍 ${street || 'Address on file'}</strong>${landmark ? ` (Landmark: ${landmark})` : ''}</div>
                                <div>${cityState} - <strong style="color:var(--color-gold); font-size:0.75rem;">${pincode}</strong></div>
                            </div>
                            <button type="button" class="btn-quick-view-dossier btn-dossier" data-order-id="${order.orderId}">
                                <span>✦ View Full Address &amp; Dossier</span>
                                <span>&rarr;</span>
                            </button>
                        </div>
                    </td>
                    <td class="td-order-items">
                        <div class="admin-order-items-preview">
                            ${items.slice(0, 2).map(item => `
                                <div class="admin-mini-item-row">
                                    <img src="${item.image || (item.images && item.images[0]) || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=100'}" alt="${item.name}" class="admin-mini-item-img">
                                    <div class="admin-mini-item-info">
                                        <div style="font-weight: 500;">${item.name}</div>
                                        <div class="item-variant-text">${[item.variantMetal, item.variantSize && item.variantSize !== 'Standard' ? `Size ${item.variantSize}` : ''].filter(Boolean).join(' • ')} (Qty: ${item.quantity || 1})</div>
                                    </div>
                                </div>
                            `).join('')}
                            ${items.length > 2 ? `<div style="font-size: 0.65rem; color: var(--color-gold); font-style: italic;">+ ${items.length - 2} more creation(s)...</div>` : ''}
                        </div>
                    </td>
                    <td class="td-order-total">
                        <span class="admin-price-text">${totalFormatted}</span>
                    </td>
                    <td class="td-order-payment">
                        <span class="admin-payment-pill ${isCod ? 'cod' : ''}">${paymentTag}</span>
                    </td>
                    <td class="td-order-status">
                        <select class="admin-order-status-select" data-order-id="${order.orderId}" onclick="event.stopPropagation();">
                            <option value="Confirmed • In Bespoke Atelier Preparation" ${statusVal.includes('Preparation') || statusVal.includes('Confirmed') ? 'selected' : ''}>In Atelier Preparation</option>
                            <option value="Crafted • Certified & Lapidary Sealed" ${statusVal.includes('Crafted') ? 'selected' : ''}>Crafted & Sealed</option>
                            <option value="Dispatched • In Insured Armored Transit" ${statusVal.includes('Dispatched') || statusVal.includes('Transit') ? 'selected' : ''}>Armored Transit</option>
                            <option value="Delivered & Handed Over" ${statusVal.includes('Delivered') ? 'selected' : ''}>Delivered</option>
                            <option value="Commission Cancelled" ${statusVal.includes('Cancelled') ? 'selected' : ''}>Cancelled</option>
                        </select>
                    </td>
                    <td class="td-actions">
                        <div class="admin-order-actions-container">
                            <button type="button" class="btn-admin-view-full-order btn-dossier" data-order-id="${order.orderId}" title="View Complete Order & Delivery Details">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px; height: 13px;">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                </svg>
                                <span>VIEW FULL ORDER</span>
                            </button>
                            <a href="https://wa.me/91${clientPhone}?text=${encodeURIComponent(`Hello ${clientName}, this is Pavelia Haute Joaillerie Concierge regarding your Order ${order.orderId}.`)}" target="_blank" class="btn-table-action btn-wa-admin" title="Message Customer on WhatsApp" onclick="event.stopPropagation();">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        // Bind table row clicks & dossier buttons
        adminOrdersTbody.querySelectorAll('tr.admin-order-row-clickable').forEach(row => {
            row.addEventListener('click', (e) => {
                if (e.target.closest('select') || e.target.closest('a') || e.target.closest('button')) {
                    return;
                }
                const orderId = row.dataset.orderId;
                if (orderId) openAdminOrderModal(orderId);
            });
        });

        adminOrdersTbody.querySelectorAll('.btn-dossier').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const orderId = btn.dataset.orderId;
                if (orderId) openAdminOrderModal(orderId);
            });
        });

        adminOrdersTbody.querySelectorAll('.admin-order-status-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const orderId = select.dataset.orderId;
                const newStatus = e.target.value;
                updateOrderStatus(orderId, newStatus);
            });
        });
    }

    // -------------------------------------------------------------
    // CUSTOMER & ORDER DOSSIER MODAL LOGIC
    // -------------------------------------------------------------
    function openAdminOrderModal(orderId) {
        if (!orderModal) return;
        const orders = getStoredOrders();
        const order = orders.find(o => o.orderId === orderId);
        if (!order) return;

        const addr = order.address || {};
        const items = order.items || [];
        const clientName = addr.fullName || 'Esteemed Patron';
        const clientPhone = addr.phone || '-';
        const clientEmail = addr.email || '-';
        const locationType = addr.addressType || 'Home';
        const street = addr.street || '';
        const landmark = addr.landmark || '';
        const city = addr.city || '';
        const state = addr.state || '';
        const pincode = addr.pincode || '';
        const fullDest = `${clientName}, ${street}${landmark ? ' (Landmark: ' + landmark + ')' : ''}, ${city}, ${state} - ${pincode}`;
        const totalFormatted = `₹${(order.total || 0).toLocaleString('en-IN')}`;
        const orderDateText = order.orderDate || new Date(order.timestamp || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

        if (dossierOrderId) dossierOrderId.textContent = order.orderId;
        if (dossierClientName) dossierClientName.textContent = clientName;
        if (dossierClientPhone) dossierClientPhone.textContent = `+91 ${clientPhone}`;
        if (dossierClientEmail) dossierClientEmail.textContent = clientEmail;
        if (dossierClientType) dossierClientType.textContent = `${locationType} Destination`;
        
        if (dossierClientAddress) {
            dossierClientAddress.innerHTML = `
                <div style="font-size: 0.95rem; font-weight: 600; color: #FFFFFF; margin-bottom: 4px;">📍 ${street || 'Street address on file'}</div>
                ${landmark ? `<div style="font-size: 0.82rem; color: #DFCA9B; margin-bottom: 4px;">✦ Landmark / Colony: <strong>${landmark}</strong></div>` : ''}
                <div style="font-size: 0.88rem; color: #E0D5C1; margin-bottom: 4px;">${[city, state].filter(Boolean).join(', ')} - <strong style="color: var(--color-gold); font-size: 0.95rem;">${pincode}</strong></div>
                <div style="font-size: 0.76rem; color: #9A9A9A; margin-top: 6px; padding-top: 6px; border-top: 1px dashed rgba(197,168,128,0.2);">
                    Recipient: <strong style="color: #FFFFFF;">${clientName}</strong> • Phone: <strong style="color: #FFFFFF;">+91 ${clientPhone}</strong> • Type: <span style="background: rgba(197,168,128,0.15); color: var(--color-gold-light); padding: 1px 6px; border-radius: 2px;">${locationType.toUpperCase()}</span>
                </div>
            `;
        }

        // Setup Copy Address Button
        const formattedAddressPlain = `Recipient: ${clientName}\nMobile: +91 ${clientPhone}\nEmail: ${clientEmail}\nAddress: ${street}${landmark ? ' (Landmark: ' + landmark + ')' : ''}\nCity/State: ${city}, ${state} - ${pincode}\nDestination: ${locationType}`;
        const btnAdminCopyAddress = document.getElementById('btn-admin-copy-address');
        if (btnAdminCopyAddress) {
            btnAdminCopyAddress.onclick = (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(formattedAddressPlain).then(() => {
                    const showToastFn = window.showPaveliaToast || alert;
                    showToastFn(`✦ Delivery Address for ${order.orderId} copied to clipboard!`);
                    btnAdminCopyAddress.innerHTML = `<span>✓ COPIED TO CLIPBOARD!</span>`;
                    setTimeout(() => {
                        btnAdminCopyAddress.innerHTML = `<span>📋 COPY DESTINATION ADDRESS</span>`;
                    }, 2500);
                }).catch(() => {
                    const showToastFn = window.showPaveliaToast || alert;
                    showToastFn(`✦ Delivery Address: ${street}, ${city} - ${pincode}`);
                });
            };
        }

        if (dossierLinkWa) {
            dossierLinkWa.href = `https://wa.me/91${clientPhone}?text=${encodeURIComponent(`Hello ${clientName}, this is Pavelia Haute Joaillerie Concierge regarding your Order ${order.orderId}.`)}`;
        }
        if (dossierLinkPhone) {
            dossierLinkPhone.href = `tel:+91${clientPhone}`;
        }
        if (dossierLinkEmail) {
            dossierLinkEmail.href = `mailto:${clientEmail}?subject=${encodeURIComponent(`Pavelia Jewels Commission Update - ${order.orderId}`)}`;
        }

        if (dossierOrderDate) dossierOrderDate.textContent = orderDateText;
        if (dossierOrderPayment) dossierOrderPayment.textContent = order.paymentMethod || 'Paid';
        if (dossierOrderTotal) dossierOrderTotal.textContent = totalFormatted;

        if (dossierItemsList) {
            dossierItemsList.innerHTML = items.map(item => `
                <div class="dossier-item-card">
                    <img src="${item.image || (item.images && item.images[0]) || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=200'}" alt="${item.name}" class="dossier-item-thumb">
                    <div class="dossier-item-details">
                        <div class="dossier-item-name">${item.name}</div>
                        <div class="dossier-item-specs">${[item.variantMetal, item.variantSize && item.variantSize !== 'Standard' ? `Size ${item.variantSize}` : ''].filter(Boolean).join(' • ')}</div>
                        <div class="dossier-item-qty">Quantity: ${item.quantity || 1}</div>
                    </div>
                    <div class="dossier-item-price">₹${((item.priceNum || parseInt(String(item.price).replace(/[^\d]/g, ''), 10) || 0) * (item.quantity || 1)).toLocaleString('en-IN')}</div>
                </div>
            `).join('');
        }

        if (dossierStatusSelect) {
            dossierStatusSelect.value = order.status || 'Confirmed • In Bespoke Atelier Preparation';
        }
        if (dossierStatusForm) {
            dossierStatusForm.dataset.orderId = order.orderId;
        }

        orderModal.classList.remove('hidden');
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('admin-order');
    }

    function closeAdminOrderModal() {
        if (orderModal) orderModal.classList.add('hidden');
    }

    function updateOrderStatus(orderId, newStatus) {
        let orders = getStoredOrders();
        const idx = orders.findIndex(o => o.orderId === orderId);
        if (idx !== -1) {
            orders[idx].status = newStatus;
            localStorage.setItem('pavelia_orders', JSON.stringify(orders));
            renderAdminOrdersTable();
            const showToastFn = window.showPaveliaToast || alert;
            showToastFn(`✦ Commission ${orderId} updated to: ${newStatus}`);
            window.dispatchEvent(new CustomEvent('pavelia_order_status_updated', { detail: { orderId, status: newStatus } }));
        }
    }

    if (dossierStatusForm) {
        dossierStatusForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderId = dossierStatusForm.dataset.orderId;
            const newStatus = dossierStatusSelect ? dossierStatusSelect.value : '';
            if (orderId && newStatus) {
                updateOrderStatus(orderId, newStatus);
                closeAdminOrderModal();
            }
        });
    }

    if (orderModalCloseBtn) orderModalCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-order', closeAdminOrderModal);
        else closeAdminOrderModal();
    });

    const btnAdminPrintManifest = document.getElementById('btn-admin-print-manifest');
    if (btnAdminPrintManifest) {
        btnAdminPrintManifest.addEventListener('click', () => {
            window.print();
        });
    }

    if (orderModal) {
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) closeAdminOrderModal();
        });
    }

    // Auto-update orders if customer places an order live
    window.addEventListener('pavelia_order_placed', () => {
        renderAdminOrdersTable();
    });

    if (adminOrdersSearch) adminOrdersSearch.addEventListener('input', renderAdminOrdersTable);
    if (adminOrdersFilter) adminOrdersFilter.addEventListener('change', renderAdminOrdersTable);

    // -------------------------------------------------------------
    // CURATED COLLECTIONS TABLE & MANAGEMENT RENDERING
    // -------------------------------------------------------------
    const categoryNameMap = {
        rings: 'Rings (Royal Solitaires)',
        earrings: 'Earrings (Drops & Studs)',
        necklaces: 'Necklaces & Chokers',
        bracelets: 'Bracelets & Bangles',
        pendants: 'Royal Pendants',
        all: 'All Showroom Pieces / Gift Vault'
    };

    function renderAdminCollectionsTable() {
        if (!adminCollectionsTbody) return;

        const collections = getPaveliaCollections();
        if (adminTabCollectionsCount) {
            adminTabCollectionsCount.textContent = collections.length;
        }
        if (adminStatCollectionsTotal) {
            adminStatCollectionsTotal.textContent = collections.length;
        }
        if (adminStatCollectionsCats) {
            const uniqueCats = new Set(collections.map(c => c.categoryFilter || 'all')).size;
            adminStatCollectionsCats.textContent = `${uniqueCats} Categories`;
        }

        const searchTerm = (adminCollectionsSearch ? adminCollectionsSearch.value : '').trim().toLowerCase();

        let filtered = collections.filter(col => {
            if (!searchTerm) return true;
            return (col.name && col.name.toLowerCase().includes(searchTerm)) ||
                   (col.desc && col.desc.toLowerCase().includes(searchTerm)) ||
                   (col.badge && col.badge.toLowerCase().includes(searchTerm)) ||
                   (col.categoryFilter && col.categoryFilter.toLowerCase().includes(searchTerm));
        });

        if (filtered.length === 0) {
            adminCollectionsTbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 40px; color: var(--color-text-subtle); font-style: italic;">
                        No curated collections found matching your search.
                    </td>
                </tr>
            `;
            return;
        }

        adminCollectionsTbody.innerHTML = filtered.map(col => {
            const categoryLabel = categoryNameMap[col.categoryFilter] || (col.categoryFilter ? col.categoryFilter.toUpperCase() : 'ALL');
            return `
                <tr data-collection-id="${col.id}">
                    <td>
                        <div class="admin-collection-cell">
                            <div class="admin-collection-img-box">
                                <img src="${col.image}" alt="${col.name}" loading="lazy">
                            </div>
                            <div class="admin-collection-meta">
                                <span class="admin-collection-title-text">${col.name}</span>
                                <span class="admin-collection-desc-text">${col.desc || ''}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="admin-collection-badge-tag">${col.badge || '05 MASTERPIECES'}</span>
                    </td>
                    <td>
                        <span class="admin-collection-cat-text">${categoryLabel}</span>
                    </td>
                    <td>
                        <span class="admin-collection-link-text">${col.linkText || 'DISCOVER COLLECTION &rarr;'}</span>
                    </td>
                    <td>
                        <div class="admin-table-actions">
                            <button type="button" class="btn-table-action btn-edit-collection" data-collection-id="${col.id}" title="Edit Collection Card">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                                <span>Edit</span>
                            </button>
                            <button type="button" class="btn-table-action btn-view-collection-live" data-category-filter="${col.categoryFilter || 'all'}" title="Preview in Showroom">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span>Preview</span>
                            </button>
                            <button type="button" class="btn-table-action btn-action-delete btn-delete-collection" data-collection-id="${col.id}" title="Remove Collection Card">
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

        // Attach event listeners for table buttons
        adminCollectionsTbody.querySelectorAll('.btn-edit-collection').forEach(btn => {
            btn.addEventListener('click', () => {
                const colId = btn.dataset.collectionId;
                openEditCollectionModal(colId);
            });
        });

        adminCollectionsTbody.querySelectorAll('.btn-view-collection-live').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.categoryFilter;
                window.closeAdminFullview(true);
                const filterBtn = document.querySelector(`.filter-tab[data-filter="${cat}"]`);
                if (filterBtn) filterBtn.click();
                const showroom = document.getElementById('showroom');
                if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
            });
        });

        adminCollectionsTbody.querySelectorAll('.btn-delete-collection').forEach(btn => {
            btn.addEventListener('click', () => {
                const colId = btn.dataset.collectionId;
                handleDeleteCollection(colId);
            });
        });
    }

    // Modal Opening & Closing
    function openAddCollectionModal() {
        if (!collectionModal) return;
        if (collectionForm) collectionForm.reset();
        if (formCollectionId) formCollectionId.value = '';
        if (formCollectionLink) formCollectionLink.value = 'DISCOVER COLLECTION →';
        if (formCollectionBadge) formCollectionBadge.value = '05 MASTERPIECES';
        if (formCollectionImagePreview) {
            formCollectionImagePreview.src = '';
            formCollectionImagePreview.style.display = 'none';
        }
        if (collectionModalTitle) collectionModalTitle.textContent = 'ADD NEW CURATED COLLECTION';
        collectionModal.classList.remove('hidden');
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('admin-collection');
    }

    function openEditCollectionModal(collectionId) {
        if (!collectionModal) return;
        const collections = getPaveliaCollections();
        const col = collections.find(c => c.id === collectionId);
        if (!col) return;

        if (formCollectionId) formCollectionId.value = col.id;
        if (formCollectionName) formCollectionName.value = col.name;
        if (formCollectionBadge) formCollectionBadge.value = col.badge || '05 MASTERPIECES';
        if (formCollectionDesc) formCollectionDesc.value = col.desc || '';
        if (formCollectionCategory) formCollectionCategory.value = col.categoryFilter || 'all';
        if (formCollectionLink) formCollectionLink.value = col.linkText || 'DISCOVER COLLECTION →';
        if (formCollectionImage) formCollectionImage.value = col.image || '';

        if (formCollectionImagePreview) {
            if (col.image) {
                formCollectionImagePreview.src = col.image;
                formCollectionImagePreview.style.display = 'block';
            } else {
                formCollectionImagePreview.style.display = 'none';
            }
        }

        if (collectionModalTitle) collectionModalTitle.textContent = `EDIT CURATED COLLECTION: ${col.name}`;
        collectionModal.classList.remove('hidden');
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('admin-collection');
    }

    function closeCollectionModal() {
        if (collectionModal) collectionModal.classList.add('hidden');
    }

    // Image preview live sync
    if (formCollectionImage && formCollectionImagePreview) {
        formCollectionImage.addEventListener('input', () => {
            const url = formCollectionImage.value.trim();
            if (url) {
                formCollectionImagePreview.src = url;
                formCollectionImagePreview.style.display = 'block';
            } else {
                formCollectionImagePreview.style.display = 'none';
            }
        });
    }

    // Form Submit
    function handleCollectionFormSubmit(e) {
        e.preventDefault();
        const id = formCollectionId ? formCollectionId.value : '';
        const name = formCollectionName ? formCollectionName.value.trim().toUpperCase() : '';
        const badge = formCollectionBadge ? formCollectionBadge.value.trim().toUpperCase() : '05 MASTERPIECES';
        const desc = formCollectionDesc ? formCollectionDesc.value.trim() : '';
        const categoryFilter = formCollectionCategory ? formCollectionCategory.value : 'all';
        const linkText = formCollectionLink ? formCollectionLink.value.trim() : 'DISCOVER COLLECTION →';
        const image = formCollectionImage ? formCollectionImage.value.trim() : '';

        if (!name || !image) {
            alert('Please provide a collection title and cover image URL.');
            return;
        }

        let collections = getPaveliaCollections();

        if (id) {
            const idx = collections.findIndex(c => c.id === id);
            if (idx !== -1) {
                collections[idx] = {
                    ...collections[idx],
                    name,
                    badge,
                    desc,
                    categoryFilter,
                    linkText,
                    image
                };
            }
        } else {
            const newId = `col-${categoryFilter}-${Date.now().toString().slice(-4)}`;
            collections.push({
                id: newId,
                name,
                badge,
                desc,
                categoryFilter,
                linkText,
                image
            });
        }

        savePaveliaCollections(collections);
        closeCollectionModal();
        renderAdminCollectionsTable();

        if (typeof window.renderStorefrontCollections === 'function') {
            window.renderStorefrontCollections();
        }

        const showToastFn = window.showPaveliaToast || alert;
        showToastFn(`✦ Curated Collection "${name}" updated and live on storefront.`);
    }

    function handleDeleteCollection(collectionId) {
        let collections = getPaveliaCollections();
        const col = collections.find(c => c.id === collectionId);
        if (!col) return;

        if (confirm(`Are you sure you wish to remove "${col.name}" from the curated showcase cards on the storefront?`)) {
            collections = collections.filter(c => c.id !== collectionId);
            savePaveliaCollections(collections);
            renderAdminCollectionsTable();
            if (typeof window.renderStorefrontCollections === 'function') {
                window.renderStorefrontCollections();
            }
            const showToastFn = window.showPaveliaToast || alert;
            showToastFn(`✦ Collection card "${col.name}" removed.`);
        }
    }

    function handleResetCollections() {
        if (confirm('Reset all curated collection showcase cards back to Pavelia original presets?')) {
            savePaveliaCollections(DEFAULT_COLLECTIONS);
            renderAdminCollectionsTable();
            if (typeof window.renderStorefrontCollections === 'function') {
                window.renderStorefrontCollections();
            }
            const showToastFn = window.showPaveliaToast || alert;
            showToastFn('✦ Curated collections reset to Pavelia presets.');
        }
    }

    // Event Listeners
    if (btnOpenAddProduct) btnOpenAddProduct.addEventListener('click', openAddProductModal);
    if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);
    if (productCancelBtn) productCancelBtn.addEventListener('click', closeProductModal);
    if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);
    
    if (adminProductSearch) adminProductSearch.addEventListener('input', renderAdminProductsTable);
    if (adminCategoryFilter) adminCategoryFilter.addEventListener('change', renderAdminProductsTable);

    // Collections Event Listeners
    if (btnOpenAddCollection) btnOpenAddCollection.addEventListener('click', openAddCollectionModal);
    if (btnResetCollections) btnResetCollections.addEventListener('click', handleResetCollections);
    if (collectionModalCloseBtn) collectionModalCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-collection', closeCollectionModal);
        else closeCollectionModal();
    });
    if (collectionCancelBtn) collectionCancelBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-collection', closeCollectionModal);
        else closeCollectionModal();
    });
    if (collectionForm) collectionForm.addEventListener('submit', handleCollectionFormSubmit);
    if (adminCollectionsSearch) adminCollectionsSearch.addEventListener('input', renderAdminCollectionsTable);

    if (collectionModal) {
        collectionModal.addEventListener('click', (e) => {
            if (e.target === collectionModal) {
                if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('admin-collection', closeCollectionModal);
                else closeCollectionModal();
            }
        });
    }
    
    if (btnPreviewStorefront) {
        btnPreviewStorefront.addEventListener('click', () => {
            if (window.PaveliaRouter) {
                window.PaveliaRouter.handleModalClose('admin', () => window.closeAdminFullview(true));
                window.PaveliaRouter.navigateToSection('showroom', { push: true });
            } else {
                window.closeAdminFullview(true);
                const showroom = document.getElementById('showroom');
                if (showroom) showroom.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (floatingReturnBtn) {
        floatingReturnBtn.addEventListener('click', () => {
            window.openAdminFullview();
        });
    }

    if (window.PaveliaRouter) {
        window.PaveliaRouter.registerModalCloser('admin', () => window.closeAdminFullview(false));
        window.PaveliaRouter.registerModalOpener('admin', () => window.openAdminFullview(false));
        window.PaveliaRouter.registerModalCloser('admin-product', closeProductModal);
        window.PaveliaRouter.registerModalCloser('admin-order', closeAdminOrderModal);
        window.PaveliaRouter.registerModalCloser('admin-collection', closeCollectionModal);
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
            if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('auth');
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
    if (authCloseBtn) authCloseBtn.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('auth', closeAuthModal);
        else closeAuthModal();
    });
    if (authOverlay) authOverlay.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('auth', closeAuthModal);
        else closeAuthModal();
    });

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

    // Customer Order Dossier Modal Elements
    const custOrderDossierModal = document.getElementById('customer-order-dossier-modal');
    const custOrderDossierClose = document.getElementById('cust-order-dossier-close');
    const custDossierOrderId = document.getElementById('cust-dossier-order-id');
    const custDossierStatusText = document.getElementById('cust-dossier-status-text');
    const custDossierPaymentTag = document.getElementById('cust-dossier-payment-tag');
    const custDossierClientName = document.getElementById('cust-dossier-client-name');
    const custDossierClientPhone = document.getElementById('cust-dossier-client-phone');
    const custDossierClientEmail = document.getElementById('cust-dossier-client-email');
    const custDossierClientType = document.getElementById('cust-dossier-client-type');
    const custDossierClientAddress = document.getElementById('cust-dossier-client-address');
    const custDossierItemsList = document.getElementById('cust-dossier-items-list');
    const custDossierSubtotalVal = document.getElementById('cust-dossier-subtotal-val');
    const custDossierTotalVal = document.getElementById('cust-dossier-total-val');
    const custDossierBtnWa = document.getElementById('cust-dossier-btn-wa');
    const custDossierBtnPrint = document.getElementById('cust-dossier-btn-print');

    const openCustomerOrderDossier = (orderId) => {
        if (!custOrderDossierModal) return;
        const allOrders = JSON.parse(localStorage.getItem('pavelia_orders') || '[]');
        let order = allOrders.find(o => o.orderId === orderId);

        if (!order) {
            // Fallback seed order if not in local store
            const seedOrders = [
                {
                    orderId: 'PVL-2026-94812',
                    orderDate: '06 September 2026',
                    items: [
                        { name: 'Amour Solitaire Ring', variantMetal: '18K Yellow Gold Vermeil', variantSize: '7', quantity: 1, priceNum: 85000, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700' },
                        { name: 'Orion Diamond Studs', variantMetal: '950 Solid Platinum', variantSize: '1.00 Carat Pair', quantity: 1, priceNum: 62000, image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=700' }
                    ],
                    total: 147000,
                    paymentMethod: 'Online Payment (Razorpay Vault - 100% Encrypted)',
                    address: {
                        fullName: 'Ananya Sharma',
                        phone: '9876543210',
                        email: 'ananya.sharma@example.com',
                        street: 'Penthouse 4B, Imperial Towers, MG Road',
                        landmark: 'Near Royal Opera House',
                        pincode: '400001',
                        city: 'Mumbai',
                        state: 'Maharashtra',
                        addressType: 'Residence'
                    },
                    status: 'Confirmed • In Bespoke Atelier Preparation'
                }
            ];
            order = seedOrders.find(o => o.orderId === orderId) || seedOrders[0];
        }

        if (!order) return;

        const addr = order.address || {};
        const items = order.items || [];
        const clientName = addr.fullName || 'Esteemed Patron';
        const clientPhone = addr.phone || '';
        const clientEmail = addr.email || '';
        const locType = addr.addressType || 'Residence';
        const fullAddress = [addr.street, addr.landmark, addr.city, addr.state ? `${addr.state} - ${addr.pincode || ''}` : addr.pincode].filter(Boolean).join(', ');
        const isCod = (order.paymentMethod || '').toLowerCase().includes('cash') || (order.paymentMethod || '').toLowerCase().includes('cod');
        const payTag = isCod ? 'COD (ARMORED TRANSIT)' : 'ONLINE (RAZORPAY VAULT)';
        const totalNum = order.total || items.reduce((acc, it) => acc + ((it.priceNum || 0) * (it.quantity || 1)), 0);

        if (custDossierOrderId) custDossierOrderId.textContent = order.orderId;
        if (custDossierStatusText) custDossierStatusText.textContent = order.status || 'Confirmed • In Bespoke Atelier Preparation';
        if (custDossierPaymentTag) {
            custDossierPaymentTag.textContent = payTag;
            if (isCod) {
                custDossierPaymentTag.classList.add('cod');
            } else {
                custDossierPaymentTag.classList.remove('cod');
            }
        }
        if (custDossierClientName) custDossierClientName.textContent = clientName;
        if (custDossierClientPhone) custDossierClientPhone.textContent = clientPhone ? `+91 ${clientPhone}` : '-';
        if (custDossierClientEmail) custDossierClientEmail.textContent = clientEmail || '-';
        if (custDossierClientType) custDossierClientType.textContent = `${locType} Destination`;
        if (custDossierClientAddress) custDossierClientAddress.textContent = fullAddress || 'Destination address on file';

        if (custDossierItemsList) {
            custDossierItemsList.innerHTML = items.map(it => {
                const img = it.image || (it.images && it.images[0]) || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=200';
                const priceNum = it.priceNum || parseInt(String(it.price).replace(/[^\d]/g, ''), 10) || 0;
                const qty = it.quantity || 1;
                const lineTotal = priceNum * qty;
                const specsText = [it.variantMetal, it.variantSize && it.variantSize !== 'Standard' ? `Size ${it.variantSize}` : ''].filter(Boolean).join(' • ') || 'Master Cut • Certified Atelier Creation';
                return `
                    <div class="dossier-item-card">
                        <img src="${img}" alt="${it.name}" class="dossier-item-thumb">
                        <div class="dossier-item-details">
                            <div class="dossier-item-name">${it.name}</div>
                            <div class="dossier-item-specs">${specsText}</div>
                            <div class="dossier-item-qty">Quantity: ${qty}</div>
                        </div>
                        <div class="dossier-item-price">₹${lineTotal.toLocaleString('en-IN')}</div>
                    </div>
                `;
            }).join('');
        }

        if (custDossierSubtotalVal) custDossierSubtotalVal.textContent = `₹${totalNum.toLocaleString('en-IN')}`;
        if (custDossierTotalVal) custDossierTotalVal.textContent = `₹${totalNum.toLocaleString('en-IN')}`;

        if (custDossierBtnWa) {
            const waMsg = `Hello Pavelia Luxury Atelier Concierge,\n\nI am inquiring about my Commission Dossier:\n✦ Order ID: ${order.orderId}\n✦ Patron: ${clientName}\n✦ Total Investment: ₹${totalNum.toLocaleString('en-IN')}\n✦ Status: ${order.status || 'In Atelier Preparation'}\n\nPlease share estimated transit schedule.`;
            custDossierBtnWa.href = `https://wa.me/919999999999?text=${encodeURIComponent(waMsg)}`;
        }

        custOrderDossierModal.classList.remove('hidden');
        document.body.classList.add('lock-scroll');
        if (window.PaveliaRouter) window.PaveliaRouter.pushModalState('cust-dossier');
    };

    const closeCustomerOrderDossier = () => {
        if (custOrderDossierModal) {
            custOrderDossierModal.classList.add('hidden');
            document.body.classList.remove('lock-scroll');
        }
    };

    if (custOrderDossierClose) custOrderDossierClose.addEventListener('click', () => {
        if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('cust-dossier', closeCustomerOrderDossier);
        else closeCustomerOrderDossier();
    });
    if (custOrderDossierModal) {
        custOrderDossierModal.addEventListener('click', (e) => {
            if (e.target === custOrderDossierModal) {
                if (window.PaveliaRouter) window.PaveliaRouter.handleModalClose('cust-dossier', closeCustomerOrderDossier);
                else closeCustomerOrderDossier();
            }
        });
    }
    if (custDossierBtnPrint) {
        custDossierBtnPrint.addEventListener('click', () => {
            window.print();
        });
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && custOrderDossierModal && !custOrderDossierModal.classList.contains('hidden')) {
            closeCustomerOrderDossier();
        }
    });

    window.openCustomerOrderDossier = openCustomerOrderDossier;
    window.closeCustomerOrderDossier = closeCustomerOrderDossier;

    const updateDashboardDetails = () => {
        const cachedUser = JSON.parse(localStorage.getItem('pavelia_user_profile') || 'null');
        if (cachedUser) {
            if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${cachedUser.firstName} ${cachedUser.lastName || ''}`;
            if (dashboardEmailDisplay) dashboardEmailDisplay.textContent = cachedUser.email;
        }

        if (dashboardOrdersList) {
            const placedOrders = JSON.parse(localStorage.getItem('pavelia_orders') || '[]');
            const cartItems = JSON.parse(localStorage.getItem('pavelia_cart') || '[]');
            const wishlistItems = JSON.parse(localStorage.getItem('pavelia_wishlist') || '[]');

            if (placedOrders.length > 0) {
                dashboardOrdersList.innerHTML = `
                    <div style="display: flex; flex-direction: column; gap: 12px; max-height: 280px; overflow-y: auto; padding-right: 4px;">
                        ${placedOrders.map(order => `
                            <div class="customer-order-card">
                                <div class="customer-order-header">
                                    <strong class="customer-order-id">${order.orderId}</strong>
                                    <span class="customer-order-status-pill">● ${(order.status || 'IN PRODUCTION').toUpperCase()}</span>
                                </div>
                                <div class="customer-order-items-preview">
                                    ${order.items && order.items.length 
                                        ? order.items.map(it => `✦ ${it.name}${it.variantMetal ? ' (' + it.variantMetal + ')' : ''} &times; ${it.quantity || 1}`).join('<br>') 
                                        : '✦ Fine Joaillerie Commission'}
                                </div>
                                <div class="customer-order-footer">
                                    <div class="customer-order-meta">
                                        <span>${order.orderDate || 'Recent'}</span>
                                        <span>•</span>
                                        <span>${order.paymentMethod ? (order.paymentMethod.toLowerCase().includes('cash') ? 'COD' : 'Online Paid') : 'Paid'}</span>
                                        <span class="customer-order-price">₹${(order.total || 0).toLocaleString('en-IN')}</span>
                                    </div>
                                    <button type="button" class="btn-customer-view-order" data-order-id="${order.orderId}">
                                        <span>VIEW FULL ORDER</span>
                                        <span>&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;

                // Bind View Full Order click listeners
                dashboardOrdersList.querySelectorAll('.btn-customer-view-order').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const orderId = btn.dataset.orderId;
                        if (orderId) openCustomerOrderDossier(orderId);
                    });
                });
            } else if (cartItems.length > 0 || wishlistItems.length > 0) {
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

    window.addEventListener('pavelia_order_placed', updateDashboardDetails);
    window.addEventListener('pavelia_order_status_updated', updateDashboardDetails);

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

    if (window.PaveliaRouter) {
        window.PaveliaRouter.registerModalCloser('auth', closeAuthModal);
        window.PaveliaRouter.registerModalOpener('auth', () => openAuthModal('signin'));
        window.PaveliaRouter.registerModalCloser('cust-dossier', closeCustomerOrderDossier);
    }

    verifySession();
}

/* ==========================================================================
   7. BOOTSTRAP APPLICATION
   ========================================================================== */
function initApp() {
    runClassicPreloader();
    if (window.PaveliaRouter) {
        window.PaveliaRouter.init();
    }
    initializePaveliaCommerce();
    initializeNavigation();
    initializeCheckoutFlow();
    initializeAdminDashboard();
    initializeAuth();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
