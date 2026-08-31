/**
 * PAVELIA JEWELS - Classic Opening Experience & Carousel Coordinator
 * Orchestrates the premium preloader timeline, loading progress,
 * transition fades, homepage cursor parallax, and the OTT banner carousel.
 */

// Disable browser automatic scroll restoration to ensure homepage hero renders first
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function runClassicPreloader() {
    const overlay = document.getElementById('intro-overlay');
    const appContainer = document.getElementById('app-container');
    const loaderLine = document.querySelector('.loader-line');
    const parallaxBg = document.getElementById('parallax-bg');
    const parallaxContent = document.getElementById('parallax-content');

    // Force scroll reset to top at start
    window.scrollTo(0, 0);

    // Return early if overlay does not exist to prevent script failure
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

    // Lock scrolling initially during loading
    document.body.classList.add('lock-scroll');

    // Simulate loading progress increments
    let progress = 0;
    const startTime = Date.now();
    const minAnimationDuration = 2800; // Complete full preloader sequence (~3s)

    const updateLoader = (value) => {
        progress = value;
        if (loaderLine) {
            loaderLine.style.transform = `scaleX(${progress / 100})`;
        }
    };

    setTimeout(() => updateLoader(25), 300);
    setTimeout(() => updateLoader(55), 1000);
    setTimeout(() => updateLoader(85), 1800);

    const completeIntro = () => {
        updateLoader(100);

        // Wait for final loader line transition
        setTimeout(() => {
            // Force reset scroll to top before revealing homepage
            window.scrollTo(0, 0);

            // 1. Reveal app wrapper
            if (appContainer) {
                appContainer.classList.remove('hidden');
                void appContainer.offsetHeight; // Force reflow
                appContainer.classList.add('visible');
            }

            // 2. Fade out overlay
            overlay.classList.add('fade-out');

            // 3. Clean up overlay and activate features after transitions end
            setTimeout(() => {
                overlay.style.display = 'none';
                document.body.classList.remove('lock-scroll');

                // Force reset scroll to top once body scroll is unlocked on all browsers
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;

                // Initialize parallax interactions and banner carousel
                initDOMParallax();
                initCarousel();
            }, 1400); // Synchronized with CSS 1.4s fade-out transition

        }, 400);
    };

    // Wait for page assets and timer to complete
    window.addEventListener('load', () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minAnimationDuration - elapsedTime);
        setTimeout(completeIntro, remainingTime);
    });

    // Fail-safe fallback timer
    setTimeout(() => {
        if (progress < 100) {
            completeIntro();
        }
    }, 5500);

    /* -------------------------------------------------------------
     * Homepage Cursor Parallax Interaction
     * ------------------------------------------------------------- */
    function initDOMParallax() {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            return;
        }

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
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
                const bgX = currentX * -28;
                const bgY = currentY * -28;
                parallaxBg.style.transform = `translate3d(${bgX}px, ${bgY}px, -60px) scale(1.1)`;
            }

            if (parallaxContent) {
                const textX = currentX * 28;
                const textY = currentY * 28;
                parallaxContent.style.transform = `translate3d(${textX}px, ${textY}px, 40px)`;
            }

            requestAnimationFrame(animateDOMParallax);
        }

        requestAnimationFrame(animateDOMParallax);
    }

    /* -------------------------------------------------------------
     * Premium OTT-Style Banner Carousel Controller
     * ------------------------------------------------------------- */
    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(document.querySelectorAll('.carousel-slide'));
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dots = Array.from(document.querySelectorAll('.indicator-dot'));
        const container = document.querySelector('.carousel-container');

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        let slideInterval = null;
        const slideDuration = 6000; // Slide duration: 6 seconds
        let isHovered = false;

        const moveToSlide = (index) => {
            // Loop index boundaries
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            currentIndex = index;

            // Slide translation along track
            track.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;

            // Update active status on slides (triggers Ken Burns scales & text reveals)
            slides.forEach((slide, i) => {
                if (i === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // Update progress dot status
            dots.forEach((dot, i) => {
                const progress = dot.querySelector('.indicator-progress');
                if (i === currentIndex) {
                    dot.classList.add('active');
                    if (progress) {
                        // Reset line to 0%, trigger layout reflow, then animate to 100%
                        progress.style.transition = 'none';
                        progress.style.width = '0%';
                        void progress.offsetWidth; // Reflow

                        if (!isHovered) {
                            progress.style.transition = `width ${slideDuration}ms linear`;
                            progress.style.width = '100%';
                        } else {
                            dot.classList.add('paused');
                        }
                    }
                } else {
                    dot.classList.remove('active');
                    dot.classList.remove('paused');
                    if (progress) {
                        progress.style.transition = 'none';
                        progress.style.width = '0%';
                    }
                }
            });
        };

        // Initialize first slide positions
        moveToSlide(0);

        const startAutoSlide = () => {
            stopAutoSlide();
            slideInterval = setInterval(() => {
                if (!isHovered) {
                    moveToSlide(currentIndex + 1);
                }
            }, slideDuration);
        };

        const stopAutoSlide = () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };

        // Arrow controls click handlers
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
                startAutoSlide(); // Reset duration timer
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
                startAutoSlide(); // Reset duration timer
            });
        }

        // Dot navigation indicators click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveToSlide(index);
                startAutoSlide(); // Reset duration timer
            });
        });

        // Hover events to pause sliding progression
        if (container) {
            container.addEventListener('mouseenter', () => {
                isHovered = true;
                const activeDot = container.querySelector('.indicator-dot.active');
                if (activeDot) {
                    activeDot.classList.add('paused');
                    const progress = activeDot.querySelector('.indicator-progress');
                    if (progress) {
                        // Freeze loader line at current width
                        const computedWidth = window.getComputedStyle(progress).width;
                        progress.style.transition = 'none';
                        progress.style.width = computedWidth;
                    }
                }
                stopAutoSlide();
            });

            container.addEventListener('mouseleave', () => {
                isHovered = false;
                const activeDot = container.querySelector('.indicator-dot.active');
                if (activeDot) {
                    activeDot.classList.remove('paused');
                    const progress = activeDot.querySelector('.indicator-progress');
                    if (progress) {
                        // Restart loader line duration from 0
                        progress.style.transition = 'none';
                        progress.style.width = '0%';
                        void progress.offsetWidth; // Reflow
                        progress.style.transition = `width ${slideDuration}ms linear`;
                        progress.style.width = '100%';
                    }
                }
                startAutoSlide();
            });
        }

        // Launch auto-slide sequence
        startAutoSlide();
    }
}

// Showroom Cart, Toast, Cart Drawer & Quick View Modal Logic
function initializeShowroom() {
    // 1. Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.luxury-toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'luxury-toast-container';
        document.body.appendChild(toastContainer);
    }

    const cartCountEl = document.querySelector('.cart-count');
    const addCartBtns = document.querySelectorAll('.btn-add-cart');
    const buyNowBtns = document.querySelectorAll('.btn-buy-now');
    
    // Cart Drawer Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartLink = document.querySelector('.cart-link');
    const cartCloseBtn = document.getElementById('cart-drawer-close-btn');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const cartBody = document.getElementById('cart-drawer-body');
    const cartSubtotalDisplay = document.getElementById('cart-subtotal-display');
    const checkoutBtn = document.getElementById('btn-checkout-drawer');
    const shopNowDrawerBtn = document.getElementById('btn-shop-now-drawer');

    // Quick View Elements
    const quickviewModal = document.getElementById('quickview-modal');
    const quickviewOverlay = document.getElementById('quickview-overlay');
    const quickviewCloseBtn = document.getElementById('quickview-close-btn');
    const quickviewContent = document.getElementById('quickview-content');
    const productImages = document.querySelectorAll('.product-img-wrapper');

    // Cart State
    let cart = JSON.parse(localStorage.getItem('pavelia_cart')) || [];

    // Toast generator function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'luxury-toast';
        toast.innerHTML = `
            <span class="luxury-toast-icon">&#10022;</span>
            <span class="luxury-toast-message">${message}</span>
            <button class="luxury-toast-close" aria-label="Close">&times;</button>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => toast.classList.add('visible'), 50);

        const closeBtn = toast.querySelector('.luxury-toast-close');
        closeBtn.addEventListener('click', () => removeToast(toast));

        const dismissTimeout = setTimeout(() => removeToast(toast), 4000);
        toast.dataset.timeoutId = dismissTimeout;
    }

    function removeToast(toast) {
        if (toast.dataset.timeoutId) {
            clearTimeout(parseInt(toast.dataset.timeoutId, 10));
        }
        toast.classList.remove('visible');
        toast.style.transform = 'translateX(40px) scale(0.9)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 500);
    }

    // Update Cart GUI
    function updateCart() {
        localStorage.setItem('pavelia_cart', JSON.stringify(cart));
        if (window.syncCartToCloud) {
            window.syncCartToCloud(cart);
        }
        
        // Update header count
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountEl) {
            cartCountEl.textContent = totalCount;
            cartCountEl.style.transform = 'scale(1.3)';
            setTimeout(() => cartCountEl.style.transform = 'scale(1)', 200);
        }

        // Render Cart Drawer Body
        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-empty-message">
                    <p>Your bag is currently empty.</p>
                    <a href="#showroom" class="btn-shop-now" id="btn-shop-now-drawer">EXPLORE COLLECTIONS</a>
                </div>
            `;
            // Bind the shop now inside drawer
            const shopNowDrawer = document.getElementById('btn-shop-now-drawer');
            if (shopNowDrawer) {
                shopNowDrawer.addEventListener('click', (e) => {
                    closeCartDrawer();
                });
            }
            if (cartSubtotalDisplay) cartSubtotalDisplay.textContent = '₹0';
        } else {
            let cartHTML = '<div class="cart-items-list">';
            let subtotal = 0;

            cart.forEach((item, index) => {
                const itemPriceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
                const itemTotal = itemPriceNum * item.quantity;
                subtotal += itemTotal;

                cartHTML += `
                    <div class="cart-item" data-id="${item.id}" data-variant-metal="${item.variantMetal || ''}" data-variant-size="${item.variantSize || ''}">
                        <div class="cart-item-img-wrapper">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-meta">
                                <h5 class="cart-item-name">${item.name}</h5>
                                ${item.variantMetal || item.variantSize ? `
                                    <span class="cart-item-variant">${item.variantMetal || ''}${item.variantMetal && item.variantSize ? ' / ' : ''}${item.variantSize ? 'Size: ' + item.variantSize : ''}</span>
                                ` : ''}
                                <span class="cart-item-price">${item.price}</span>
                            </div>
                            <div class="cart-item-controls">
                                <div class="cart-qty-selector">
                                    <button class="btn-qty btn-minus" data-index="${index}">&minus;</button>
                                    <span class="cart-qty-value">${item.quantity}</span>
                                    <button class="btn-qty btn-plus" data-index="${index}">&plus;</button>
                                </div>
                                <button class="btn-remove-item" data-index="${index}">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            cartHTML += '</div>';
            cartBody.innerHTML = cartHTML;
            if (cartSubtotalDisplay) {
                cartSubtotalDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
            }

            // Bind Qty and Remove Actions
            cartBody.querySelectorAll('.btn-minus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    if (cart[idx].quantity > 1) {
                        cart[idx].quantity--;
                    } else {
                        cart.splice(idx, 1);
                    }
                    updateCart();
                });
            });

            cartBody.querySelectorAll('.btn-plus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    cart[idx].quantity++;
                    updateCart();
                });
            });

            cartBody.querySelectorAll('.btn-remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index, 10);
                    const itemName = cart[idx].name;
                    cart.splice(idx, 1);
                    updateCart();
                    showToast(`Removed "${itemName}" from your bag.`);
                });
            });
        }
    }

    // Open/Close Drawer Functions
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

    // Event listeners for Drawer
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    }

    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    if (shopNowDrawerBtn) {
        shopNowDrawerBtn.addEventListener('click', (e) => {
            closeCartDrawer();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showToast('Initiating secure premium checkout with white-glove logistics...');
            closeCartDrawer();
        });
    }

    // Add to Cart helper
    function addToCart(product) {
        // Check duplicate considering variations
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
                variantMetal: product.variantMetal || '925 Sterling Silver',
                variantSize: product.variantSize || 'Standard',
                quantity: 1
            });
        }
        updateCart();
        openCartDrawer();
        showToast(`Added "${product.name}" to your atelier bag.`);
    }

    // Bind standard showroom add-cart buttons
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.product-card');
            if (card) {
                const id = card.dataset.productId;
                const name = card.querySelector('.product-name').textContent;
                const price = card.querySelector('.product-price').textContent;
                const image = card.querySelector('.product-img').src;

                // Detect category size labels based on id
                let defaultSize = 'Standard';
                if (id.includes('ring')) defaultSize = '7';
                else if (id.includes('bracelet')) defaultSize = 'M';

                addToCart({
                    id, name, price, image,
                    variantMetal: '925 Sterling Silver',
                    variantSize: defaultSize
                });
            }
        });
    });

    // Buy Now Direct Checkout Action
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.product-card');
            if (card) {
                const name = card.querySelector('.product-name').textContent;
                showToast(`Bespoke checkout initiated for "${name}".`);
            }
        });
    });

    // -------------------------------------------------------------
    // Product Quick View Modal Controller
    // -------------------------------------------------------------
    const mockProductDetails = {
        'ring-1': { desc: 'A stunning brilliant-cut central solitaire diamond set in an elevated 4-claw sterling silver crown. Hand-crafted to mirror the morning stars.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['6', '7', '8'] } },
        'ring-2': { desc: 'Interlacing twisted ropes of pavé set round diamonds and polished gold bands, representing infinite binding devotion.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['6', '7', '8'] } },
        'ring-3': { desc: 'A vintage-inspired baguette-cut emerald centered on a cluster of brilliant-cut diamonds and fine sterling silver framework.', options: { metal: ['925 Sterling Silver', '18K White Gold Plated'], size: ['5', '6', '7', '8'] } },
        'ring-4': { desc: 'A raw architectural design highlighting clean, minimalist bands with a polished platinum finish for modern everyday luxury.', options: { metal: ['925 Sterling Silver', '950 Platinum Finish'], size: ['6', '7', '8', '9'] } },
        'ring-5': { desc: 'Rows of diamonds stacked elegantly into a singular broad statement band, creating deep light reflections.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['6', '7', '8'] } },
        'earring-1': { desc: 'Delicately suspended pearls dangling from fine pavé link hooks, bringing classic movement and soft luster.', options: { metal: ['925 Sterling Silver', '18K Rose Gold Plated'], size: ['Standard'] } },
        'earring-2': { desc: 'Sophisticated small Huggies set with continuous round diamonds, hugging the earlobe for a timeless luxury touch.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['Standard'] } },
        'earring-3': { desc: 'Elongated linear diamond drop bars that cascade light, designed to elongate the neckline for evening events.', options: { metal: ['925 Sterling Silver', '18K White Gold Plated'], size: ['Standard'] } },
        'earring-4': { desc: 'Brilliant solitaire studs held in micro-basket claws, reflecting maximum light fire for minimal daily wear.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil', '950 Platinum Finish'], size: ['0.5 Carat', '1.0 Carat', '2.0 Carat'] } },
        'earring-5': { desc: 'Geometric rectangular hoops wrapped in hand-finished sterling silver casing, bringing architectural poise.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['Standard'] } },
        'necklace-1': { desc: 'A delicate sterling silver chain holding a custom-minted luxury emblem pendant with an intricate filigree core.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['16 inches', '18 inches', '20 inches'] } },
        'necklace-2': { desc: 'Interlaced thick choker links forming a majestic statement collar. Expresses bold contemporary luxury heritage.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['14 inches', '16 inches'] } },
        'necklace-3': { desc: 'An asymmetric drop necklace featuring a teardrop diamond pendant offset by small gold spheres.', options: { metal: ['925 Sterling Silver', '18K Rose Gold Plated'], size: ['16 inches', '18 inches'] } },
        'necklace-4': { desc: 'A minimalist horizontal silver bar set with micro-diamonds, hanging flush on a invisible fine chain.', options: { metal: ['925 Sterling Silver', '18K White Gold Plated'], size: ['16 inches', '18 inches'] } },
        'necklace-5': { desc: 'A triple-layered cascading chain necklace alternating polished silver beads and diamond droplets.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['18 inches'] } },
        'bracelet-1': { desc: 'Polished silver infinity shape loops linked together in a continuous chain, expressing boundless style.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['S', 'M', 'L'] } },
        'bracelet-2': { desc: 'A stiff luxury bangle set with continuous round diamonds, securing with a sleek side-press clasp.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['S', 'M', 'L'] } },
        'bracelet-3': { desc: 'A broad gold cuff with hammered detailing, hand-finished by master artisans to catch shifting light.', options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['Standard'] } },
        'bracelet-4': { desc: 'A classic tennis layout featuring micro-set round diamonds side-by-side on an ultra-flexible setting.', options: { metal: ['925 Sterling Silver', '950 Platinum Finish'], size: ['S', 'M', 'L'] } },
        'bracelet-5': { desc: 'A layered link chain with subtle round lock details, matching modern streetwear minimal elegance.', options: { metal: ['925 Sterling Silver', '18K Rose Gold Plated'], size: ['S', 'M'] } }
    };

    function openQuickview(productId, card) {
        if (!quickviewModal || !quickviewContent) return;

        const name = card.querySelector('.product-name').textContent;
        const price = card.querySelector('.product-price').textContent;
        const image = card.querySelector('.product-img').src;
        
        // Get details from mock or generate fallbacks
        const details = mockProductDetails[productId] || {
            desc: 'A signature design from our luxury atelier, hand-crafted in 925 sterling silver with a brilliant high-polish finish.',
            options: { metal: ['925 Sterling Silver', '18K Yellow Gold Vermeil'], size: ['Standard'] }
        };

        // Render Quickview Layout
        quickviewContent.innerHTML = `
            <div class="quickview-grid">
                <div class="quickview-img-side">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="quickview-info-side">
                    <div>
                        <p class="quickview-pretitle">PAVELIA Fine Jewels</p>
                        <h3 class="quickview-title">${name}</h3>
                        <p class="quickview-price">${price}</p>
                        <p class="quickview-desc">${details.desc}</p>
                        
                        <!-- Metal Option Selection -->
                        <div class="quickview-selector-group">
                            <span class="quickview-label">Metal Finish</span>
                            <div class="quickview-options" id="qv-metal-options">
                                ${details.options.metal.map((metal, i) => `
                                    <button class="option-btn ${i === 0 ? 'active' : ''}" data-value="${metal}">${metal}</button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Size Option Selection -->
                        ${details.options.size && details.options.size.length > 0 && details.options.size[0] !== 'Standard' ? `
                            <div class="quickview-selector-group">
                                <span class="quickview-label">${productId.includes('ring') ? 'Ring Size' : productId.includes('bracelet') ? 'Wrist Size' : 'Option'}</span>
                                <div class="quickview-options" id="qv-size-options">
                                    ${details.options.size.map((size, i) => `
                                        <button class="option-btn ${i === 0 ? 'active' : ''}" data-value="${size}">${size}</button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="quickview-actions">
                        <button class="btn-qv-add-cart" id="btn-qv-add-to-cart">ADD TO ATELIER BAG</button>
                    </div>
                </div>
            </div>
        `;

        // Bind option buttons toggle behaviors
        const bindOptions = (containerId) => {
            const container = document.getElementById(containerId);
            if (container) {
                const btns = container.querySelectorAll('.option-btn');
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        btns.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    });
                });
            }
        };

        bindOptions('qv-metal-options');
        bindOptions('qv-size-options');

        // Bind internal Add to Cart button
        const qvAddBtn = document.getElementById('btn-qv-add-to-cart');
        if (qvAddBtn) {
            qvAddBtn.addEventListener('click', () => {
                const selectedMetalBtn = document.querySelector('#qv-metal-options .option-btn.active');
                const selectedSizeBtn = document.querySelector('#qv-size-options .option-btn.active');

                const selectedMetal = selectedMetalBtn ? selectedMetalBtn.dataset.value : '925 Sterling Silver';
                const selectedSize = selectedSizeBtn ? selectedSizeBtn.dataset.value : 'Standard';

                addToCart({
                    id: productId,
                    name: name,
                    price: price,
                    image: image,
                    variantMetal: selectedMetal,
                    variantSize: selectedSize
                });
                closeQuickview();
            });
        }

        // Open Modal
        quickviewModal.classList.add('active');
        document.body.classList.add('lock-scroll');
    }

    function closeQuickview() {
        if (quickviewModal) {
            quickviewModal.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    }

    // Bind images click events to open Quickview
    productImages.forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            e.preventDefault();
            const card = wrapper.closest('.product-card');
            if (card) {
                const productId = card.dataset.productId;
                openQuickview(productId, card);
            }
        });
    });

    if (quickviewCloseBtn) quickviewCloseBtn.addEventListener('click', closeQuickview);
    if (quickviewOverlay) quickviewOverlay.addEventListener('click', closeQuickview);

    // ESC Key Listener to close modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeQuickview();
        }
    });

    // Run initial rendering
    updateCart();

    // Newsletter Subscription Form Action
    const newsletterForm = document.getElementById('newsletter-subscription');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const emailValue = emailInput ? emailInput.value : '';
            
            if (emailInput) emailInput.value = '';
            
            showToast(`Welcome to the Pavelia World. A validation link has been sent to ${emailValue || 'your email'}.`);
        });
    }
}

// Luxurious Navigation Drawer and Scroll Handling
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const closeBtn = document.getElementById('nav-menu-close-btn');
    const navLinks = document.querySelectorAll('.nav-menu-item');
    const exploreBtn = document.querySelector('.btn-primary-block');

    // Toggle menu open
    if (navToggle && navOverlay) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navOverlay.classList.add('active');
            document.body.classList.add('lock-scroll');
        });
    }

    // Toggle menu close
    const closeMenu = () => {
        if (navOverlay) {
            navOverlay.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    }

    // Close on overlay background click
    if (navOverlay) {
        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) {
                closeMenu();
            }
        });
    }

    // Handle menu links clicks & autoscroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll after drawer close transition
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });

    // Handle explore collection button click & autoscroll to showroom
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const showroomSection = document.getElementById('showroom');
            if (showroomSection) {
                showroomSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Customer Authentication and Database Profile Manager
function initializeAuth() {
    const accountBtn = document.getElementById('account-btn');
    const authModal = document.getElementById('auth-modal');
    const authOverlay = document.getElementById('auth-overlay');
    const authCloseBtn = document.getElementById('auth-close-btn');

    // Panels
    const signinPanel = document.getElementById('signin-panel');
    const signupPanel = document.getElementById('signup-panel');
    const dashboardPanel = document.getElementById('dashboard-panel');

    // Forms
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    // Switch buttons
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');
    const logoutBtn = document.getElementById('btn-logout');

    // Errors
    const signinError = document.getElementById('signin-error');
    const signupError = document.getElementById('signup-error');

    // Dashboard info
    const dashboardWelcome = document.getElementById('dashboard-welcome');
    const dashboardEmailDisplay = document.getElementById('dashboard-email-display');

    // State
    let userToken = localStorage.getItem('pavelia_token') || null;
    let currentUser = null;

    // Toast wrapper
    function showAuthToast(msg) {
        const toastContainer = document.querySelector('.luxury-toast-container') || document.body;
        const toast = document.createElement('div');
        toast.className = 'luxury-toast visible';
        toast.innerHTML = `
            <span class="luxury-toast-icon">&#10022;</span>
            <span class="luxury-toast-message">${msg}</span>
            <button class="luxury-toast-close" aria-label="Close">&times;</button>
        `;
        toastContainer.appendChild(toast);
        toast.querySelector('.luxury-toast-close').addEventListener('click', () => toast.remove());
        setTimeout(() => toast.remove(), 4000);
    }

    // Toggle Modals
    const openAuthModal = () => {
        authModal.classList.add('active');
        document.body.classList.add('lock-scroll');
        
        // Show correct panel depending on auth status
        if (userToken) {
            showPanel(dashboardPanel);
        } else {
            showPanel(signinPanel);
        }
    };

    const closeAuthModal = () => {
        authModal.classList.remove('active');
        document.body.classList.remove('lock-scroll');
        // Clear errors
        signinError.textContent = '';
        signupError.textContent = '';
    };

    const showPanel = (panelToShow) => {
        [signinPanel, signupPanel, dashboardPanel].forEach(panel => {
            if (panel) panel.classList.add('hidden');
        });
        if (panelToShow) panelToShow.classList.remove('hidden');
    };

    // Form switches
    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            showPanel(signupPanel);
        });
    }

    if (switchToSignin) {
        switchToSignin.addEventListener('click', (e) => {
            e.preventDefault();
            showPanel(signinPanel);
        });
    }

    if (accountBtn) {
        accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openAuthModal();
        });
    }

    if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
    if (authOverlay) authOverlay.addEventListener('click', closeAuthModal);

    // Dynamic Header Account State Styling
    const updateHeaderAuthState = (user) => {
        let welcomeBadge = document.getElementById('header-welcome-badge');
        if (!welcomeBadge && accountBtn) {
            welcomeBadge = document.createElement('span');
            welcomeBadge.id = 'header-welcome-badge';
            welcomeBadge.className = 'header-user-welcome';
            accountBtn.parentNode.insertBefore(welcomeBadge, accountBtn);
            
            welcomeBadge.addEventListener('click', (e) => {
                e.preventDefault();
                openAuthModal();
            });
        }

        if (user) {
            currentUser = user;
            if (welcomeBadge) {
                welcomeBadge.textContent = `Client: ${user.firstName}`;
                welcomeBadge.style.display = 'inline-block';
            }
            if (accountBtn) {
                accountBtn.style.color = 'var(--color-gold)';
            }
            if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${user.firstName} ${user.lastName || ''}`;
            if (dashboardEmailDisplay) dashboardEmailDisplay.textContent = user.email;
        } else {
            currentUser = null;
            userToken = null;
            localStorage.removeItem('pavelia_token');
            if (welcomeBadge) welcomeBadge.style.display = 'none';
            if (accountBtn) accountBtn.style.color = '';
        }
    };

    // Verify Session Token on Load
    const verifySession = async () => {
        if (!userToken) return;
        try {
            const res = await fetch('/api/auth/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            const data = await res.json();
            if (res.ok && data.user) {
                updateHeaderAuthState(data.user);
                loadCloudCart();
            } else {
                updateHeaderAuthState(null);
            }
        } catch (err) {
            console.error('Session verification failed:', err);
        }
    };

    // Load Cart from MongoDB
    const loadCloudCart = async () => {
        if (!userToken) return;
        try {
            const res = await fetch('/api/cart/sync', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            const data = await res.json();
            if (res.ok && data.items) {
                if (data.items.length > 0) {
                    localStorage.setItem('pavelia_cart', JSON.stringify(data.items));
                    if (window.initializeShowroom) {
                        initializeShowroom();
                    }
                }
            }
        } catch (err) {
            console.error('Failed to load cloud cart:', err);
        }
    };

    // Save Cart to MongoDB
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
            console.error('Failed to sync cart to cloud:', err);
        }
    };

    // Handle Registration Submit
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            signupError.textContent = '';

            const firstName = document.getElementById('signup-firstname').value;
            const lastName = document.getElementById('signup-lastname').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            try {
                const res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, password })
                });
                const data = await res.json();

                if (res.ok) {
                    showAuthToast('Atelier registration successful. Welcome!');
                    signupForm.reset();
                    showPanel(signinPanel);
                } else {
                    signupError.textContent = data.error || 'Registration failed.';
                }
            } catch (err) {
                signupError.textContent = 'Network error. Please try again.';
            }
        });
    }

    // Handle Login Submit
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            signinError.textContent = '';

            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;

            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();

                if (res.ok && data.token) {
                    userToken = data.token;
                    localStorage.setItem('pavelia_token', userToken);
                    updateHeaderAuthState(data.user);
                    
                    showAuthToast('Signed in securely to Pavelia.');
                    signinForm.reset();
                    closeAuthModal();

                    // Sync local cart to cloud
                    const localCart = JSON.parse(localStorage.getItem('pavelia_cart')) || [];
                    if (localCart.length > 0) {
                        await window.syncCartToCloud(localCart);
                    }
                    loadCloudCart();
                } else {
                    signinError.textContent = data.error || 'Invalid email or password.';
                }
            } catch (err) {
                signinError.textContent = 'Network error. Please try again.';
            }
        });
    }

    // Handle Logout Click
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateHeaderAuthState(null);
            localStorage.removeItem('pavelia_cart'); // Clear cart on logout
            if (window.initializeShowroom) {
                initializeShowroom(); // Draw empty cart
            }
            showAuthToast('Signed out successfully.');
            closeAuthModal();
        });
    }

    // Run verification on start
    verifySession();
}

// Bootstrapping
function initApp() {
    runClassicPreloader();
    initializeShowroom();
    initializeNavigation();
    initializeAuth();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

