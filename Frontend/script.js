const API_BASE = 'http://127.0.0.1:8000';

// --- Image Helpers for Authentic Visuals ---
function getRestaurantImageUrl(cuisine, name) {
    const rName = (name || '').toLowerCase();
    if (rName.includes('spicy kitchen')) {
        return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop';
    } else if (rName.includes('royal biryani')) {
        return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop';
    } else if (rName.includes('pizza bella')) {
        return 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop';
    } else if (rName.includes('noodle bowl')) {
        return 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&auto=format&fit=crop';
    } else if (rName.includes('burger bistro')) {
        return 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop';
    } else if (rName.includes('curry palace')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop';
    }
    
    // Fallback based on cuisine (Top Rated fine dining interiors)
    const cuisineLower = (cuisine || '').toLowerCase();
    if (cuisineLower.includes('south indian')) return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop';
    if (cuisineLower.includes('north indian')) return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop';
    if (cuisineLower.includes('italian')) return 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop';
    if (cuisineLower.includes('chinese')) return 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&auto=format&fit=crop';
    if (cuisineLower.includes('fast food')) return 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop';
}

function getFoodImageUrl(foodName, category) {
    const name = (foodName || '').toLowerCase();
    
    if (name.includes('mutton biryani')) {
        return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop';
    } else if (name.includes('chicken biryani')) {
        return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop';
    } else if (name.includes('masala dosa')) {
        return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop';
    } else if (name.includes('idli')) {
        return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop';
    } else if (name.includes('coffee')) {
        return 'https://images.unsplash.com/photo-1608651076454-e1772b8a48f4?w=500&auto=format&fit=crop';
    } else if (name.includes('butter chicken')) {
        return 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop';
    } else if (name.includes('garlic naan')) {
        return 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop';
    } else if (name.includes('roti') || name.includes('naan')) {
        return 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop';
    } else if (name.includes('margherita')) {
        return 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop';
    } else if (name.includes('pepperoni')) {
        return 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop';
    } else if (name.includes('breadsticks')) {
        return 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&auto=format&fit=crop';
    } else if (name.includes('coke')) {
        return 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop';
    } else if (name.includes('hakka noodle') || name.includes('noodle')) {
        return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop';
    } else if (name.includes('fried rice')) {
        return 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop';
    } else if (name.includes('spring roll')) {
        return 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop';
    } else if (name.includes('chili chicken')) {
        return 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop';
    } else if (name.includes('double cheese burger') || name.includes('cheese burger')) {
        return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop';
    } else if (name.includes('french fries') || name.includes('fries')) {
        return 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop';
    } else if (name.includes('shake')) {
        return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop';
    } else if (name.includes('veg supreme') || name.includes('veg burger')) {
        return 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop';
    } else if (name.includes('paneer tikka')) {
        return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop';
    } else if (name.includes('dal makhani')) {
        return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop';
    } else if (name.includes('samosa')) {
        return 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop';
    } else if (name.includes('lassi')) {
        return 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop';
    } else if (name.includes('brownie')) {
        return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop';
    }
    
    // Category fallbacks
    const cat = (category || '').toLowerCase();
    if (cat.includes('dessert')) return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop';
    if (cat.includes('beverage')) return 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop';
}


// --- Toast Utility ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    
    // Trigger entry transition
    setTimeout(() => {
        toast.classList.add('active');
    }, 10);
    
    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// --- Customer Auth State ---
function getCurrentCustomer() {
    const cust = localStorage.getItem('current_customer');
    return cust ? JSON.parse(cust) : null;
}

function setCurrentCustomer(cust) {
    localStorage.setItem('current_customer', JSON.stringify(cust));
}

function logoutCustomer() {
    localStorage.removeItem('current_customer');
    showToast('Logged out successfully', 'info');
    setTimeout(() => {
        window.location.reload();
    }, 800);
}

function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    const navAuth = document.getElementById('nav-auth-section');
    const customer = getCurrentCustomer();
    
    // Get the current page filename
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    if (navLinks) {
        if (customer && customer.role === 'admin') {
            navLinks.innerHTML = `
                <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                <li><a href="restaurants.html" class="${currentPath === 'restaurants.html' ? 'active' : ''}">Restaurants</a></li>
                <li><a href="dashboard.html" class="${currentPath === 'dashboard.html' ? 'active' : ''}">Admin Panel</a></li>
            `;
        } else {
            // Customer or Guest
            navLinks.innerHTML = `
                <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                <li><a href="restaurants.html" class="${currentPath === 'restaurants.html' ? 'active' : ''}">Restaurants</a></li>
                <li><a href="cart.html" class="${currentPath === 'cart.html' ? 'active' : ''} cart-icon-container">Cart <span id="cart-badge-count" class="cart-badge" style="display:none;">0</span></a></li>
                <li><a href="orders.html" class="${currentPath === 'orders.html' ? 'active' : ''}">My Orders</a></li>
            `;
        }
    }
    
    if (navAuth) {
        if (customer) {
            navAuth.innerHTML = `
                <div class="user-widget">
                    Hi, <span class="user-name">${customer.full_name}</span>
                    <span style="font-size:0.75rem; background:var(--primary); color:white; padding:2px 6px; border-radius:4px; margin-left:5px;">
                        ${customer.role === 'admin' ? 'Admin' : 'Customer'}
                    </span>
                </div>
                <button onclick="logoutCustomer()" class="btn btn-secondary btn-sm">Logout</button>
            `;
        } else {
            navAuth.innerHTML = `
                <a href="login.html" class="btn btn-secondary btn-sm">Login</a>
                <a href="register.html" class="btn btn-primary btn-sm">Register</a>
            `;
        }
    }
    
    updateCartBadge();
}

async function updateCartBadge() {
    const badge = document.getElementById('cart-badge-count');
    if (!badge) return;
    
    const customer = getCurrentCustomer();
    if (!customer) {
        badge.style.display = 'none';
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/cart/`);
        if (response.ok) {
            const items = await response.json();
            const userItems = items.filter(item => item.customer_name === customer.full_name);
            const totalQty = userItems.reduce((acc, curr) => acc + curr.quantity, 0);
            if (totalQty > 0) {
                badge.textContent = totalQty;
                badge.style.display = 'inline-block';
            } else {
                badge.style.display = 'none';
            }
        }
    } catch (e) {
        console.error("Error updating cart badge", e);
    }
}

// --- Home Page Logic ---
async function initHomePage() {
    updateNavbar();
    
    const featuredContainer = document.getElementById('featured-foods-list');
    const popularContainer = document.getElementById('popular-restaurants-list');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    let allFoods = [];
    let allRestaurants = [];
    
    try {
        // Fetch Foods
        const foodsRes = await fetch(`${API_BASE}/foods/`);
        if (foodsRes.ok) allFoods = await foodsRes.json();
        
        // Fetch Restaurants
        const restRes = await fetch(`${API_BASE}/restaurants/`);
        if (restRes.ok) allRestaurants = await restRes.json();
        
        // Render top 3 foods as featured
        renderFoods(allFoods.slice(0, 3), featuredContainer);
        // Render top 3 restaurants as popular
        renderRestaurants(allRestaurants.slice(0, 3), popularContainer);
        
    } catch (error) {
        console.error("Error loading home data", error);
        showToast("Error loading home page content", "danger");
    }
    
    // Search handler
    if (searchBtn && searchInput) {
        const executeSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            if (!query) {
                renderFoods(allFoods.slice(0, 3), featuredContainer);
                renderRestaurants(allRestaurants.slice(0, 3), popularContainer);
                return;
            }
            
            // Filter foods matching food_name, category, or restaurant_name
            const filteredFoods = allFoods.filter(f => 
                f.food_name.toLowerCase().includes(query) || 
                f.category.toLowerCase().includes(query) || 
                f.restaurant_name.toLowerCase().includes(query)
            );
            
            // Filter restaurants matching restaurant_name, cuisine, or location
            const filteredRests = allRestaurants.filter(r => 
                r.restaurant_name.toLowerCase().includes(query) || 
                r.cuisine.toLowerCase().includes(query) || 
                r.location.toLowerCase().includes(query)
            );
            
            renderFoods(filteredFoods, featuredContainer);
            renderRestaurants(filteredRests, popularContainer);
            
            // Scroll down to features to display results
            featuredContainer.scrollIntoView({ behavior: 'smooth' });
        };
        
        searchBtn.addEventListener('click', executeSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') executeSearch();
        });
    }
}

function renderRestaurants(list, container) {
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No restaurants found.</p>`;
        return;
    }
    
    container.innerHTML = list.map(r => `
        <div class="card">
            <img src="${getRestaurantImageUrl(r.cuisine, r.restaurant_name)}" alt="${r.restaurant_name}" class="card-img">
            <div class="card-body">
                <h3 class="card-title">${r.restaurant_name}</h3>
                <div class="card-meta">
                    <span class="rating-badge">⭐ ${r.rating.toFixed(1)}</span>
                    <span class="cuisine-badge">${r.cuisine}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">📍 ${r.location}</p>
                <div class="card-footer">
                    <span style="font-size: 0.85rem; font-weight: 500;">Owner: ${r.owner_name}</span>
                    <a href="menu.html?restaurant=${encodeURIComponent(r.restaurant_name)}" class="btn btn-primary btn-sm">View Menu</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFoods(list, container) {
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No food items found.</p>`;
        return;
    }
    
    container.innerHTML = list.map(f => `
        <div class="card">
            <img src="${getFoodImageUrl(f.food_name, f.category)}" alt="${f.food_name}" class="card-img">
            <div class="card-body">
                <h3 class="card-title">${f.food_name}</h3>
                <div class="card-meta">
                    <span class="cuisine-badge">${f.category}</span>
                    <span class="availability-badge ${f.availability === 'Available' ? 'available' : 'out-of-stock'}">
                        ${f.availability}
                    </span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Restaurant: ${f.restaurant_name}</p>
                <div class="card-footer">
                    <span class="card-price">₹${f.price}</span>
                    <a href="menu.html?restaurant=${encodeURIComponent(f.restaurant_name)}" class="btn btn-secondary btn-sm">Order from Menu</a>
                </div>
            </div>
        </div>
    `).join('');
}

// --- Login Page Logic ---
function initLoginPage() {
    const form = document.getElementById('login-form');
    const toggleCustomer = document.getElementById('toggle-customer');
    const toggleAdmin = document.getElementById('toggle-admin');
    
    const grpCustName = document.getElementById('group-customer-name');
    const grpCustEmail = document.getElementById('group-customer-email');
    const grpAdminUser = document.getElementById('group-admin-username');
    const grpAdminPass = document.getElementById('group-admin-password');
    
    const titleText = document.getElementById('login-title-text');
    const descText = document.getElementById('login-desc-text');
    const registerFooter = document.getElementById('register-footer-text');
    
    let loginMode = 'customer'; // or 'admin'
    
    if (toggleCustomer && toggleAdmin) {
        toggleCustomer.addEventListener('click', () => {
            toggleCustomer.classList.add('active');
            toggleAdmin.classList.remove('active');
            loginMode = 'customer';
            
            grpCustName.style.display = 'block';
            grpCustEmail.style.display = 'block';
            grpAdminUser.style.display = 'none';
            grpAdminPass.style.display = 'none';
            
            titleText.textContent = "Customer Login";
            descText.textContent = "Login to your customer profile to place food orders.";
            if (registerFooter) registerFooter.style.display = 'block';
            
            document.getElementById('login-name').required = true;
            document.getElementById('login-email').required = true;
            document.getElementById('login-username').required = false;
            document.getElementById('login-password').required = false;
        });
        
        toggleAdmin.addEventListener('click', () => {
            toggleAdmin.classList.add('active');
            toggleCustomer.classList.remove('active');
            loginMode = 'admin';
            
            grpCustName.style.display = 'none';
            grpCustEmail.style.display = 'none';
            grpAdminUser.style.display = 'block';
            grpAdminPass.style.display = 'block';
            
            titleText.textContent = "Admin Control Login";
            descText.textContent = "Enter administrator credentials to access management panels.";
            if (registerFooter) registerFooter.style.display = 'none';
            
            document.getElementById('login-name').required = false;
            document.getElementById('login-email').required = false;
            document.getElementById('login-username').required = true;
            document.getElementById('login-password').required = true;
        });
    }
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (loginMode === 'customer') {
            const name = document.getElementById('login-name').value.trim();
            const email = document.getElementById('login-email').value.trim();
            
            try {
                const response = await fetch(`${API_BASE}/customers/`);
                if (response.ok) {
                    const customers = await response.json();
                    const matched = customers.find(c => 
                        c.full_name.toLowerCase() === name.toLowerCase() && 
                        c.email.toLowerCase() === email.toLowerCase()
                    );
                    
                    if (matched) {
                        matched.role = 'customer'; // guarantee role
                        setCurrentCustomer(matched);
                        showToast(`Welcome back, ${matched.full_name}!`, 'success');
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 1000);
                    } else {
                        showToast('Profile not found. Please register or verify spelling.', 'danger');
                    }
                } else {
                    showToast('Failed to fetch customers from server.', 'danger');
                }
            } catch (err) {
                console.error(err);
                showToast('Network error while logging in.', 'danger');
            }
        } else {
            // Admin Login
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            
            try {
                const response = await fetch(`${API_BASE}/admin/login/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    setCurrentCustomer({
                        full_name: 'Administrator',
                        username: data.username,
                        role: 'admin'
                    });
                    showToast('Admin logged in successfully!', 'success');
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1000);
                } else {
                    const errData = await response.json();
                    showToast(errData.error || 'Invalid admin credentials.', 'danger');
                }
            } catch (err) {
                console.error(err);
                showToast('Network error during admin login.', 'danger');
            }
        }
    });
}

// --- Register Page Logic ---
function initRegisterPage() {
    const form = document.getElementById('register-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const payload = {
            full_name: document.getElementById('full_name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim(),
            city: document.getElementById('city').value.trim()
        };
        
        try {
            const response = await fetch(`${API_BASE}/customers/add/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                const newCustomer = await response.json();
                setCurrentCustomer(newCustomer);
                showToast('Account registered successfully!', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                const errData = await response.json();
                showToast(errData.error || 'Registration failed.', 'danger');
            }
        } catch (err) {
            console.error(err);
            showToast('Network error during registration.', 'danger');
        }
    });
}

// --- Restaurants Page Logic ---
async function initRestaurantsPage() {
    updateNavbar();
    
    const container = document.getElementById('restaurants-list-container');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const searchInput = document.getElementById('restaurant-search');
    
    let restaurants = [];
    
    const loadAndRender = async () => {
        try {
            const res = await fetch(`${API_BASE}/restaurants/`);
            if (res.ok) {
                restaurants = await res.json();
                applyFilters();
            }
        } catch (e) {
            console.error(e);
            showToast("Failed to load restaurants list.", "danger");
        }
    };
    
    const applyFilters = () => {
        const cuisine = cuisineFilter.value;
        const search = searchInput.value.toLowerCase().trim();
        
        let filtered = restaurants;
        
        if (cuisine) {
            filtered = filtered.filter(r => r.cuisine === cuisine);
        }
        if (search) {
            filtered = filtered.filter(r => 
                r.restaurant_name.toLowerCase().includes(search) || 
                r.location.toLowerCase().includes(search)
            );
        }
        
        renderRestaurants(filtered, container);
    };
    
    cuisineFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    
    await loadAndRender();
}

// --- Menu Page Logic ---
async function initMenuPage() {
    updateNavbar();
    
    const params = new URLSearchParams(window.location.search);
    const restName = params.get('restaurant');
    
    if (!restName) {
        showToast("No restaurant selected.", "danger");
        setTimeout(() => { window.location.href = 'restaurants.html'; }, 1000);
        return;
    }
    
    // Set static header details first
    document.getElementById('restaurant-header-name').textContent = restName;
    
    const foodsContainer = document.getElementById('foods-list-container');
    const filterContainer = document.getElementById('food-category-filters');
    
    let allFoods = [];
    let currentCategory = '';
    
    try {
        // Fetch restaurant details to show in header
        const restRes = await fetch(`${API_BASE}/restaurants/`);
        if (restRes.ok) {
            const restaurants = await restRes.json();
            const matched = restaurants.find(r => r.restaurant_name.toLowerCase() === restName.toLowerCase());
            if (matched) {
                document.getElementById('restaurant-header-rating').textContent = `⭐ ${matched.rating.toFixed(1)}`;
                document.getElementById('restaurant-header-cuisine').textContent = matched.cuisine;
                document.getElementById('restaurant-header-location').textContent = `📍 ${matched.location}`;
            }
        }
        
        // Fetch foods
        const foodsRes = await fetch(`${API_BASE}/foods/`);
        if (foodsRes.ok) {
            const list = await foodsRes.json();
            allFoods = list.filter(f => f.restaurant_name.toLowerCase() === restName.toLowerCase());
            
            // Build Category Filters
            const categories = ['All', ...new Set(allFoods.map(f => f.category))];
            filterContainer.innerHTML = categories.map(cat => `
                <button class="btn btn-secondary btn-sm filter-btn ${cat === 'All' ? 'active' : ''}" onclick="filterMenuCategory('${cat}', this)">
                    ${cat}
                </button>
            `).join('');
            
            renderMenuItems(allFoods);
        }
    } catch (e) {
        console.error(e);
        showToast("Error loading menu data", "danger");
    }
    
    window.filterMenuCategory = (cat, element) => {
        // Update active class
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
        
        if (cat === 'All') {
            renderMenuItems(allFoods);
        } else {
            renderMenuItems(allFoods.filter(f => f.category === cat));
        }
    };
    
    function renderMenuItems(list) {
        if (!foodsContainer) return;
        if (list.length === 0) {
            foodsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No food items on the menu.</p>`;
            return;
        }
        
        foodsContainer.innerHTML = list.map(f => {
            const isAvail = f.availability === 'Available';
            return `
                <div class="card">
                    <img src="${getFoodImageUrl(f.food_name, f.category)}" alt="${f.food_name}" class="card-img">
                    <div class="card-body">
                        <h3 class="card-title">${f.food_name}</h3>
                        <div class="card-meta">
                            <span class="cuisine-badge">${f.category}</span>
                            <span class="availability-badge ${isAvail ? 'available' : 'out-of-stock'}">
                                ${f.availability}
                            </span>
                        </div>
                        <div class="card-footer">
                            <span class="card-price">₹${f.price}</span>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                ${isAvail ? `
                                    <div class="quantity-control" style="margin-right: 0.25rem;">
                                        <button class="quantity-btn" onclick="adjustMenuQty('${f.food_id}', -1)">-</button>
                                        <span class="quantity-value" id="qty-val-${f.food_id}">1</span>
                                        <button class="quantity-btn" onclick="adjustMenuQty('${f.food_id}', 1)">+</button>
                                    </div>
                                    <button class="btn btn-primary btn-sm" onclick="addToCart('${f.food_name}', ${f.price}, '${f.food_id}')">Add</button>
                                ` : `
                                    <button class="btn btn-secondary btn-sm" disabled>Unavailable</button>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    window.adjustMenuQty = (id, delta) => {
        const qtySpan = document.getElementById(`qty-val-${id}`);
        if (!qtySpan) return;
        let val = parseInt(qtySpan.textContent) + delta;
        if (val < 1) val = 1;
        qtySpan.textContent = val;
    };
    
    window.addToCart = async (foodName, price, foodId) => {
        const customer = getCurrentCustomer();
        if (!customer) {
            showToast("Please login as a customer first to place orders.", "warning");
            setTimeout(() => { window.location.href = 'login.html'; }, 1000);
            return;
        }
        
        const qtySpan = document.getElementById(`qty-val-${foodId}`);
        const quantity = qtySpan ? parseInt(qtySpan.textContent) : 1;
        
        const payload = {
            customer_name: customer.full_name,
            food_name: foodName,
            quantity: quantity,
            price: price
        };
        
        try {
            const response = await fetch(`${API_BASE}/cart/add/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                showToast(`Added ${quantity}x ${foodName} to cart!`, 'success');
                updateCartBadge();
                if (qtySpan) qtySpan.textContent = "1"; // Reset quantity
            } else {
                showToast('Failed to add item to cart', 'danger');
            }
        } catch (e) {
            console.error(e);
            showToast('Network error while updating cart.', 'danger');
        }
    };
}

// --- Cart Page Logic ---
async function initCartPage() {
    updateNavbar();
    
    const customer = getCurrentCustomer();
    if (!customer) {
        showToast("Please login to view your cart.", "warning");
        setTimeout(() => { window.location.href = 'login.html'; }, 1000);
        return;
    }
    
    const cartList = document.getElementById('cart-items-list');
    const subtotalSpan = document.getElementById('subtotal-amount');
    const grandTotalSpan = document.getElementById('grand-total-amount');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    let cartItems = [];
    
    const loadCart = async () => {
        try {
            const response = await fetch(`${API_BASE}/cart/`);
            if (response.ok) {
                const list = await response.json();
                cartItems = list.filter(item => item.customer_name === customer.full_name);
                renderCart();
            }
        } catch (e) {
            console.error(e);
            showToast("Failed to fetch cart items", "danger");
        }
    };
    
    const renderCart = () => {
        if (cartItems.length === 0) {
            cartList.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Your cart is empty.</p>
                    <a href="restaurants.html" class="btn btn-primary">Find Food</a>
                </div>
            `;
            subtotalSpan.textContent = '₹0.00';
            grandTotalSpan.textContent = '₹0.00';
            checkoutBtn.disabled = true;
            return;
        }
        
        cartList.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4>${item.food_name}</h4>
                    <p>₹${item.price} each</p>
                </div>
                <div class="cart-item-actions">
                    <div style="font-weight: 600; color: var(--secondary);">₹${item.total_price}</div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateCartQty('${item.cart_id}', ${item.quantity - 1})">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQty('${item.cart_id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteCartItem('${item.cart_id}')">🗑️</button>
                </div>
            </div>
        `).join('');
        
        // Compute subtotal
        const subtotal = cartItems.reduce((acc, curr) => acc + curr.total_price, 0);
        const deliveryFee = 40.0;
        const taxFee = 15.0;
        const grandTotal = subtotal + deliveryFee + taxFee;
        
        subtotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
        grandTotalSpan.textContent = `₹${grandTotal.toFixed(2)}`;
        checkoutBtn.disabled = false;
    };
    
    window.updateCartQty = async (cartId, newQty) => {
        if (newQty < 1) {
            deleteCartItem(cartId);
            return;
        }
        
        try {
            const response = await fetch(`${API_BASE}/cart/update/${cartId}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: newQty })
            });
            if (response.ok) {
                loadCart();
                updateCartBadge();
            }
        } catch (e) {
            console.error(e);
            showToast("Failed to update quantity.", "danger");
        }
    };
    
    window.deleteCartItem = async (cartId) => {
        try {
            const response = await fetch(`${API_BASE}/cart/delete/${cartId}/`, {
                method: 'DELETE'
            });
            if (response.ok) {
                showToast("Item removed from cart.", "info");
                loadCart();
                updateCartBadge();
            }
        } catch (e) {
            console.error(e);
            showToast("Failed to delete cart item.", "danger");
        }
    };
    
    checkoutBtn.addEventListener('click', async () => {
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = "Processing...";
        
        try {
            // Find restaurant name. Let's fetch /foods/ to see where our food names belong.
            let restaurantName = "Spicy Kitchen";
            const foodRes = await fetch(`${API_BASE}/foods/`);
            if (foodRes.ok) {
                const foods = await foodRes.json();
                const firstCartItem = cartItems[0];
                const matchedFood = foods.find(f => f.food_name.toLowerCase() === firstCartItem.food_name.toLowerCase());
                if (matchedFood) {
                    restaurantName = matchedFood.restaurant_name;
                }
            }
            
            // Build items text
            const itemsStr = cartItems.map(i => `${i.food_name} x${i.quantity}`).join(', ');
            
            // Calculate total
            const subtotal = cartItems.reduce((acc, curr) => acc + curr.total_price, 0);
            const finalAmount = subtotal + 40 + 15; // subtotal + fee + tax
            
            // Create Order
            const orderPayload = {
                customer_name: customer.full_name,
                restaurant_name: restaurantName,
                order_items: itemsStr,
                total_amount: finalAmount,
                payment_status: 'Paid',
                delivery_status: 'Preparing'
            };
            
            const orderRes = await fetch(`${API_BASE}/orders/add/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload)
            });
            
            if (orderRes.ok) {
                showToast("Order placed successfully!", "success");
                
                // Clear cart items from database
                for (let item of cartItems) {
                    await fetch(`${API_BASE}/cart/delete/${item.cart_id}/`, { method: 'DELETE' });
                }
                
                updateCartBadge();
                setTimeout(() => {
                    window.location.href = 'orders.html';
                }, 1000);
                
            } else {
                showToast("Failed to place order.", "danger");
                checkoutBtn.disabled = false;
                checkoutBtn.textContent = "Proceed to Checkout";
            }
            
        } catch (e) {
            console.error(e);
            showToast("Network error during checkout.", "danger");
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = "Proceed to Checkout";
        }
    });
    
    await loadCart();
}

// --- Orders Page Logic ---
async function initOrdersPage() {
    updateNavbar();
    
    const customer = getCurrentCustomer();
    if (!customer) {
        showToast("Please login to view orders.", "warning");
        setTimeout(() => { window.location.href = 'login.html'; }, 1000);
        return;
    }
    
    const container = document.getElementById('orders-list-container');
    
    try {
        const response = await fetch(`${API_BASE}/orders/`);
        if (response.ok) {
            const list = await response.json();
            const userOrders = list.filter(o => o.customer_name === customer.full_name);
            
            if (userOrders.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 3rem 1rem;">
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">You haven't placed any orders yet.</p>
                        <a href="restaurants.html" class="btn btn-primary">Order Now</a>
                    </div>
                `;
                return;
            }
            
            // Sort by order_id descending to show latest orders first
            userOrders.sort((a, b) => b.order_id - a.order_id);
            
            container.innerHTML = userOrders.map(o => {
                const isCancelled = o.delivery_status === 'Cancelled';
                
                // Define active steps for timeline
                let step1Class = 'completed'; // Preparing is always completed or cancelled
                let step2Class = '';
                let step3Class = '';
                
                if (o.delivery_status === 'Out for Delivery') {
                    step2Class = 'active';
                } else if (o.delivery_status === 'Delivered') {
                    step2Class = 'completed';
                    step3Class = 'completed';
                } else if (o.delivery_status === 'Preparing') {
                    step1Class = 'active';
                }
                
                return `
                    <div class="order-card">
                        <div class="order-header">
                            <div class="order-meta-info">
                                <h3>Order #${o.order_id}</h3>
                                <p>Restaurant: <strong>${o.restaurant_name}</strong></p>
                            </div>
                            <div class="order-status-badges">
                                <span class="status-pill ${o.payment_status.toLowerCase()}">${o.payment_status}</span>
                                <span class="status-pill ${o.delivery_status.toLowerCase().replace(/\s+/g, '-')}">${o.delivery_status}</span>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <p style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">
                                Items Ordered: <strong>${o.order_items}</strong>
                            </p>
                            <p style="font-size: 1.1rem; color: var(--secondary); font-weight: 700;">
                                Total Amount Paid: ₹${o.total_amount}
                            </p>
                        </div>
                        
                        ${!isCancelled ? `
                            <div class="timeline">
                                <div class="timeline-step ${step1Class}">
                                    <div class="timeline-node">1</div>
                                    <div class="timeline-label">Preparing</div>
                                </div>
                                <div class="timeline-step ${step2Class}">
                                    <div class="timeline-node">2</div>
                                    <div class="timeline-label">Out for Delivery</div>
                                </div>
                                <div class="timeline-step ${step3Class}">
                                    <div class="timeline-node">3</div>
                                    <div class="timeline-label">Delivered</div>
                                </div>
                            </div>
                        ` : `
                            <div style="background: #fef2f2; border: 1px solid #fca5a5; padding: 1rem; border-radius: var(--radius-md); text-align: center; color: var(--danger); font-weight: 500;">
                                This order was cancelled.
                            </div>
                        `}
                    </div>
                `;
            }).join('');
        }
    } catch (e) {
        console.error(e);
        showToast("Failed to fetch orders list.", "danger");
    }
}

// --- Admin Dashboard Page Logic ---
let activeTab = 'customers';
let modalMode = 'add'; // 'add' or 'edit'
let currentEditId = null;

function initDashboardPage() {
    updateNavbar();
    
    // Sidebar tabs listeners
    const tabs = [
        { id: 'tab-customers', name: 'customers', title: 'Manage Customers' },
        { id: 'tab-restaurants', name: 'restaurants', title: 'Manage Restaurants' },
        { id: 'tab-foods', name: 'foods', title: 'Manage Food Items' },
        { id: 'tab-orders', name: 'orders', title: 'Manage Orders' }
    ];
    
    tabs.forEach(t => {
        const btn = document.getElementById(t.id);
        if (btn) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeTab = t.name;
                document.getElementById('dashboard-section-title').textContent = t.title;
                
                // Toggle "Add Record" button visibility (Orders should not have an Add button)
                const addBtn = document.getElementById('dashboard-add-btn');
                if (activeTab === 'orders') {
                    addBtn.style.display = 'none';
                } else {
                    addBtn.style.display = 'block';
                }
                
                fetchAndRenderDashboardTable();
            });
        }
    });
    
    // Add button handler
    const addBtn = document.getElementById('dashboard-add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            openAdminModal('add');
        });
    }
    
    // Modal controls
    const modalCloseX = document.getElementById('modal-close-x');
    const modalCancel = document.getElementById('modal-cancel-btn');
    const modalOverlay = document.getElementById('admin-modal');
    
    if (modalCloseX) modalCloseX.addEventListener('click', closeAdminModal);
    if (modalCancel) modalCancel.addEventListener('click', closeAdminModal);
    
    const form = document.getElementById('modal-form');
    if (form) {
        form.addEventListener('submit', handleModalSubmit);
    }
    
    // Initial fetch
    fetchAndRenderDashboardTable();
}

async function fetchAndRenderDashboardTable() {
    const thead = document.getElementById('dashboard-table-thead');
    const tbody = document.getElementById('dashboard-table-tbody');
    
    if (!thead || !tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:2rem; color:var(--text-secondary);">Loading records...</td></tr>`;
    
    try {
        let endpoint = `${API_BASE}/${activeTab}/`;
        if (activeTab === 'foods') endpoint = `${API_BASE}/foods/`; // correct URL mapping
        
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("API call failed");
        
        const data = await response.json();
        
        if (data.length === 0) {
            thead.innerHTML = '';
            tbody.innerHTML = `<tr><td style="text-align:center; padding:2rem; color:var(--text-secondary);">No records found.</td></tr>`;
            return;
        }
        
        if (activeTab === 'customers') {
            thead.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            `;
            tbody.innerHTML = data.map(c => `
                <tr>
                    <td><strong>${c.customer_id}</strong></td>
                    <td>${c.full_name}</td>
                    <td>${c.email}</td>
                    <td>${c.phone || '-'}</td>
                    <td>${c.address || '-'}</td>
                    <td>${c.city || '-'}</td>
                    <td class="action-btns">
                        <button class="btn btn-secondary btn-sm" onclick="openAdminModal('edit', ${c.customer_id}, ${encodeURIComponent(JSON.stringify(c))})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteAdminRecord(${c.customer_id})">Delete</button>
                    </td>
                </tr>
            `).join('');
            
        } else if (activeTab === 'restaurants') {
            thead.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Restaurant Name</th>
                    <th>Owner</th>
                    <th>Location</th>
                    <th>Cuisine</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
            `;
            tbody.innerHTML = data.map(r => `
                <tr>
                    <td><strong>${r.restaurant_id}</strong></td>
                    <td>${r.restaurant_name}</td>
                    <td>${r.owner_name || '-'}</td>
                    <td>${r.location || '-'}</td>
                    <td><span class="cuisine-badge">${r.cuisine || '-'}</span></td>
                    <td>⭐ ${r.rating.toFixed(1)}</td>
                    <td class="action-btns">
                        <button class="btn btn-secondary btn-sm" onclick="openAdminModal('edit', ${r.restaurant_id}, ${encodeURIComponent(JSON.stringify(r))})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteAdminRecord(${r.restaurant_id})">Delete</button>
                    </td>
                </tr>
            `).join('');
            
        } else if (activeTab === 'foods') {
            thead.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Food Name</th>
                    <th>Restaurant</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Actions</th>
                </tr>
            `;
            tbody.innerHTML = data.map(f => `
                <tr>
                    <td><strong>${f.food_id}</strong></td>
                    <td>${f.food_name}</td>
                    <td>${f.restaurant_name}</td>
                    <td><span class="cuisine-badge">${f.category || '-'}</span></td>
                    <td>₹${f.price}</td>
                    <td>
                        <span class="availability-badge ${f.availability === 'Available' ? 'available' : 'out-of-stock'}">
                            ${f.availability}
                        </span>
                    </td>
                    <td class="action-btns">
                        <button class="btn btn-secondary btn-sm" onclick="openAdminModal('edit', ${f.food_id}, ${encodeURIComponent(JSON.stringify(f))})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteAdminRecord(${f.food_id})">Delete</button>
                    </td>
                </tr>
            `).join('');
            
        } else if (activeTab === 'orders') {
            thead.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Restaurant</th>
                    <th>Items</th>
                    <th>Total Price</th>
                    <th>Payment</th>
                    <th>Delivery Status</th>
                    <th>Actions</th>
                </tr>
            `;
            
            // Sort by order_id descending for admin to see newest first
            data.sort((a,b) => b.order_id - a.order_id);
            
            tbody.innerHTML = data.map(o => `
                <tr>
                    <td><strong>${o.order_id}</strong></td>
                    <td>${o.customer_name}</td>
                    <td>${o.restaurant_name}</td>
                    <td>${o.order_items}</td>
                    <td>₹${o.total_amount}</td>
                    <td><span class="status-pill ${o.payment_status.toLowerCase()}">${o.payment_status}</span></td>
                    <td><span class="status-pill ${o.delivery_status.toLowerCase().replace(/\s+/g, '-')}">${o.delivery_status}</span></td>
                    <td class="action-btns">
                        <button class="btn btn-secondary btn-sm" onclick="openAdminModal('edit', ${o.order_id}, ${encodeURIComponent(JSON.stringify(o))})">Update Status</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteAdminRecord(${o.order_id})">Delete</button>
                    </td>
                </tr>
            `).join('');
        }
        
    } catch (e) {
        console.error(e);
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:2rem; color:var(--danger);">Failed to retrieve records.</td></tr>`;
    }
}

// Make functions available globally so onclick attributes work
window.openAdminModal = (mode, id = null, encodedDataStr = null) => {
    modalMode = mode;
    currentEditId = id;
    
    const modal = document.getElementById('admin-modal');
    const title = document.getElementById('modal-title');
    const container = document.getElementById('modal-fields-container');
    
    title.textContent = mode === 'add' ? `Add New ${getEntitySingularName()}` : `Edit ${getEntitySingularName()}`;
    
    let itemData = {};
    if (encodedDataStr) {
        itemData = JSON.parse(decodeURIComponent(encodedDataStr));
    }
    
    // Inject correct fields
    if (activeTab === 'customers') {
        container.innerHTML = `
            ${mode === 'add' ? `
            <div class="form-group">
                <label for="m_customer_id">Customer ID (Optional)</label>
                <input type="number" id="m_customer_id" placeholder="Auto-generated if left empty">
            </div>
            ` : ''}
            <div class="form-group">
                <label for="m_full_name">Full Name</label>
                <input type="text" id="m_full_name" required value="${itemData.full_name || ''}">
            </div>
            <div class="form-group">
                <label for="m_email">Email</label>
                <input type="email" id="m_email" required value="${itemData.email || ''}">
            </div>
            <div class="form-group">
                <label for="m_phone">Phone</label>
                <input type="text" id="m_phone" value="${itemData.phone || ''}">
            </div>
            <div class="form-group">
                <label for="m_address">Address</label>
                <input type="text" id="m_address" value="${itemData.address || ''}">
            </div>
            <div class="form-group">
                <label for="m_city">City</label>
                <input type="text" id="m_city" value="${itemData.city || ''}">
            </div>
        `;
    } else if (activeTab === 'restaurants') {
        container.innerHTML = `
            ${mode === 'add' ? `
            <div class="form-group">
                <label for="m_restaurant_id">Restaurant ID (Optional)</label>
                <input type="number" id="m_restaurant_id" placeholder="Auto-generated if left empty">
            </div>
            ` : ''}
            <div class="form-group">
                <label for="m_restaurant_name">Restaurant Name</label>
                <input type="text" id="m_restaurant_name" required value="${itemData.restaurant_name || ''}">
            </div>
            <div class="form-group">
                <label for="m_owner_name">Owner Name</label>
                <input type="text" id="m_owner_name" value="${itemData.owner_name || ''}">
            </div>
            <div class="form-group">
                <label for="m_location">Location</label>
                <input type="text" id="m_location" value="${itemData.location || ''}">
            </div>
            <div class="form-group">
                <label for="m_cuisine">Cuisine</label>
                <select id="m_cuisine" required>
                    <option value="South Indian" ${itemData.cuisine === 'South Indian' ? 'selected' : ''}>South Indian</option>
                    <option value="North Indian" ${itemData.cuisine === 'North Indian' ? 'selected' : ''}>North Indian</option>
                    <option value="Chinese" ${itemData.cuisine === 'Chinese' ? 'selected' : ''}>Chinese</option>
                    <option value="Italian" ${itemData.cuisine === 'Italian' ? 'selected' : ''}>Italian</option>
                    <option value="Fast Food" ${itemData.cuisine === 'Fast Food' ? 'selected' : ''}>Fast Food</option>
                </select>
            </div>
            <div class="form-group">
                <label for="m_rating">Rating (0.0 to 5.0)</label>
                <input type="number" id="m_rating" step="0.1" min="0" max="5" value="${itemData.rating || '4.0'}">
            </div>
        `;
    } else if (activeTab === 'foods') {
        container.innerHTML = `
            ${mode === 'add' ? `
            <div class="form-group">
                <label for="m_food_id">Food ID (Optional)</label>
                <input type="number" id="m_food_id" placeholder="Auto-generated if left empty">
            </div>
            ` : ''}
            <div class="form-group">
                <label for="m_food_name">Food Name</label>
                <input type="text" id="m_food_name" required value="${itemData.food_name || ''}">
            </div>
            <div class="form-group">
                <label for="m_restaurant_name">Restaurant Name</label>
                <input type="text" id="m_restaurant_name" required value="${itemData.restaurant_name || ''}">
            </div>
            <div class="form-group">
                <label for="m_category">Category</label>
                <select id="m_category" required>
                    <option value="Main Course" ${itemData.category === 'Main Course' ? 'selected' : ''}>Main Course</option>
                    <option value="Starters" ${itemData.category === 'Starters' ? 'selected' : ''}>Starters</option>
                    <option value="Desserts" ${itemData.category === 'Desserts' ? 'selected' : ''}>Desserts</option>
                    <option value="Beverages" ${itemData.category === 'Beverages' ? 'selected' : ''}>Beverages</option>
                </select>
            </div>
            <div class="form-group">
                <label for="m_price">Price (₹)</label>
                <input type="number" id="m_price" required value="${itemData.price || ''}">
            </div>
            <div class="form-group">
                <label for="m_availability">Availability</label>
                <select id="m_availability">
                    <option value="Available" ${itemData.availability === 'Available' ? 'selected' : ''}>Available</option>
                    <option value="Out of Stock" ${itemData.availability === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
                </select>
            </div>
        `;
    } else if (activeTab === 'orders') {
        container.innerHTML = `
            <div class="form-group">
                <label>Order ID</label>
                <input type="text" disabled value="${itemData.order_id}">
            </div>
            <div class="form-group">
                <label>Customer Name</label>
                <input type="text" disabled value="${itemData.customer_name}">
            </div>
            <div class="form-group">
                <label>Restaurant Name</label>
                <input type="text" disabled value="${itemData.restaurant_name}">
            </div>
            <div class="form-group">
                <label>Ordered Items</label>
                <input type="text" disabled value="${itemData.order_items}">
            </div>
            <div class="form-group">
                <label>Total Price (₹)</label>
                <input type="text" disabled value="${itemData.total_amount}">
            </div>
            <div class="form-group">
                <label for="m_payment_status">Payment Status</label>
                <select id="m_payment_status">
                    <option value="Pending" ${itemData.payment_status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Paid" ${itemData.payment_status === 'Paid' ? 'selected' : ''}>Paid</option>
                </select>
            </div>
            <div class="form-group">
                <label for="m_delivery_status">Delivery Status</label>
                <select id="m_delivery_status">
                    <option value="Preparing" ${itemData.delivery_status === 'Preparing' ? 'selected' : ''}>Preparing</option>
                    <option value="Out for Delivery" ${itemData.delivery_status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
                    <option value="Delivered" ${itemData.delivery_status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    <option value="Cancelled" ${itemData.delivery_status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </div>
        `;
    }
    
    modal.classList.add('active');
};

function closeAdminModal() {
    const modal = document.getElementById('admin-modal');
    if (modal) modal.classList.remove('active');
    currentEditId = null;
}

function getEntitySingularName() {
    if (activeTab === 'customers') return 'Customer';
    if (activeTab === 'restaurants') return 'Restaurant';
    if (activeTab === 'foods') return 'Food Item';
    if (activeTab === 'orders') return 'Order';
    return 'Record';
}

async function handleModalSubmit(e) {
    e.preventDefault();
    
    // Prepare payload
    let payload = {};
    let endpoint = '';
    
    if (activeTab === 'customers') {
        payload = {
            full_name: document.getElementById('m_full_name').value.trim(),
            email: document.getElementById('m_email').value.trim(),
            phone: document.getElementById('m_phone').value.trim(),
            address: document.getElementById('m_address').value.trim(),
            city: document.getElementById('m_city').value.trim()
        };
        if (modalMode === 'add') {
            const customId = document.getElementById('m_customer_id').value;
            if (customId) payload.customer_id = parseInt(customId);
            endpoint = `${API_BASE}/customers/add/`;
        } else {
            endpoint = `${API_BASE}/customers/update/${currentEditId}/`;
        }
        
    } else if (activeTab === 'restaurants') {
        payload = {
            restaurant_name: document.getElementById('m_restaurant_name').value.trim(),
            owner_name: document.getElementById('m_owner_name').value.trim(),
            location: document.getElementById('m_location').value.trim(),
            cuisine: document.getElementById('m_cuisine').value,
            rating: parseFloat(document.getElementById('m_rating').value || 4.0)
        };
        if (modalMode === 'add') {
            const customId = document.getElementById('m_restaurant_id').value;
            if (customId) payload.restaurant_id = parseInt(customId);
            endpoint = `${API_BASE}/restaurants/add/`;
        } else {
            endpoint = `${API_BASE}/restaurants/update/${currentEditId}/`;
        }
        
    } else if (activeTab === 'foods') {
        payload = {
            food_name: document.getElementById('m_food_name').value.trim(),
            restaurant_name: document.getElementById('m_restaurant_name').value.trim(),
            category: document.getElementById('m_category').value,
            price: parseFloat(document.getElementById('m_price').value),
            availability: document.getElementById('m_availability').value
        };
        if (modalMode === 'add') {
            const customId = document.getElementById('m_food_id').value;
            if (customId) payload.food_id = parseInt(customId);
            endpoint = `${API_BASE}/foods/add/`;
        } else {
            endpoint = `${API_BASE}/foods/update/${currentEditId}/`;
        }
        
    } else if (activeTab === 'orders') {
        // Only updates status fields
        payload = {
            payment_status: document.getElementById('m_payment_status').value,
            delivery_status: document.getElementById('m_delivery_status').value
        };
        endpoint = `${API_BASE}/orders/update/${currentEditId}/`;
    }
    
    // Execute API Call
    try {
        const method = modalMode === 'add' ? 'POST' : 'PUT';
        const response = await fetch(endpoint, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            showToast(`${getEntitySingularName()} saved successfully!`, 'success');
            closeAdminModal();
            fetchAndRenderDashboardTable();
        } else {
            const errData = await response.json();
            showToast(errData.error || `Failed to save ${getEntitySingularName()}.`, 'danger');
        }
    } catch (err) {
        console.error(err);
        showToast('Network error while saving details.', 'danger');
    }
}

window.deleteAdminRecord = async (id) => {
    if (!confirm(`Are you sure you want to delete ${getEntitySingularName()} #${id}?`)) {
        return;
    }
    
    try {
        let endpoint = `${API_BASE}/${activeTab}/delete/${id}/`;
        if (activeTab === 'foods') endpoint = `${API_BASE}/foods/delete/${id}/`;
        
        const response = await fetch(endpoint, { method: 'DELETE' });
        
        if (response.ok) {
            showToast(`${getEntitySingularName()} deleted.`, 'info');
            fetchAndRenderDashboardTable();
            updateCartBadge();
        } else {
            showToast(`Failed to delete record.`, 'danger');
        }
    } catch (e) {
        console.error(e);
        showToast(`Network error while deleting record.`, 'danger');
    }
};
