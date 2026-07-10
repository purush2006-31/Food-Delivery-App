import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'db.sqlite3')

def get_db_connection():
    conn = sqlite3.connect(DB_PATH, timeout=20)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create Customers Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS customers (
            customer_id INTEGER PRIMARY KEY,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            address TEXT,
            city TEXT
        )
    """)
    
    # Create Restaurants Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS restaurants (
            restaurant_id INTEGER PRIMARY KEY,
            restaurant_name TEXT NOT NULL,
            owner_name TEXT,
            location TEXT,
            cuisine TEXT,
            rating REAL
        )
    """)
    
    # Create Food Menu Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS foods (
            food_id INTEGER PRIMARY KEY,
            restaurant_name TEXT NOT NULL,
            food_name TEXT NOT NULL,
            category TEXT,
            price REAL NOT NULL,
            availability TEXT NOT NULL
        )
    """)
    
    # Create Cart Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS cart (
            cart_id INTEGER PRIMARY KEY,
            customer_name TEXT NOT NULL,
            food_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            price REAL NOT NULL,
            total_price REAL NOT NULL
        )
    """)
    
    # Create Orders Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            order_id INTEGER PRIMARY KEY,
            customer_name TEXT NOT NULL,
            restaurant_name TEXT NOT NULL,
            order_items TEXT NOT NULL,
            total_amount REAL NOT NULL,
            payment_status TEXT NOT NULL,
            delivery_status TEXT NOT NULL
        )
    """)
    
    # Create Admins Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS admins (
            admin_id INTEGER PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    
    conn.commit()
    
    # Seed sample data if customers table is empty
    cursor.execute("SELECT COUNT(*) FROM customers")
    if cursor.fetchone()[0] == 0:
        # Seed Customer
        cursor.execute("""
            INSERT INTO customers (customer_id, full_name, email, phone, address, city)
            VALUES (101, 'Rahul Sharma', 'rahul@gmail.com', '9876543210', 'KPHB Colony', 'Hyderabad')
        """)
        
        # Seed Restaurants
        restaurants = [
            (201, 'Spicy Kitchen', 'Kiran Kumar', 'Hyderabad', 'South Indian', 4.6),
            (202, 'Royal Biryani House', 'Amit Singhal', 'Hyderabad', 'North Indian', 4.8),
            (203, 'Pizza Bella', 'Marco Rossi', 'Hyderabad', 'Italian', 4.4),
            (204, 'The Noodle Bowl', 'Chen Wei', 'Hyderabad', 'Chinese', 4.3),
            (205, 'Burger Bistro', 'John Doe', 'Hyderabad', 'Fast Food', 4.5),
            (206, 'Curry Palace', 'Rajesh Patel', 'Hyderabad', 'North Indian', 4.2)
        ]
        cursor.executemany("""
            INSERT INTO restaurants (restaurant_id, restaurant_name, owner_name, location, cuisine, rating)
            VALUES (?, ?, ?, ?, ?, ?)
        """, restaurants)
        
        # Seed Foods
        foods = [
            # Spicy Kitchen (South Indian)
            (301, 'Spicy Kitchen', 'Chicken Biryani', 'Main Course', 299.0, 'Available'),
            (302, 'Spicy Kitchen', 'Masala Dosa', 'Starters', 80.0, 'Available'),
            (303, 'Spicy Kitchen', 'Idli (2 Pcs)', 'Starters', 50.0, 'Available'),
            (304, 'Spicy Kitchen', 'Filter Coffee', 'Beverages', 40.0, 'Available'),
            
            # Royal Biryani House (North Indian)
            (305, 'Royal Biryani House', 'Mutton Biryani', 'Main Course', 380.0, 'Available'),
            (306, 'Royal Biryani House', 'Butter Chicken', 'Main Course', 320.0, 'Available'),
            (307, 'Royal Biryani House', 'Garlic Naan', 'Starters', 60.0, 'Available'),
            (308, 'Royal Biryani House', 'Tandoori Roti', 'Starters', 30.0, 'Available'),
            
            # Pizza Bella (Italian)
            (309, 'Pizza Bella', 'Margherita Pizza', 'Main Course', 249.0, 'Available'),
            (310, 'Pizza Bella', 'Pepperoni Feast Pizza', 'Main Course', 349.0, 'Available'),
            (311, 'Pizza Bella', 'Garlic Breadsticks', 'Starters', 120.0, 'Available'),
            (312, 'Pizza Bella', 'Coke (500ml)', 'Beverages', 50.0, 'Available'),
            
            # The Noodle Bowl (Chinese)
            (313, 'The Noodle Bowl', 'Veg Hakka Noodles', 'Main Course', 180.0, 'Available'),
            (314, 'The Noodle Bowl', 'Chicken Fried Rice', 'Main Course', 210.0, 'Available'),
            (315, 'The Noodle Bowl', 'Veg Spring Rolls', 'Starters', 120.0, 'Available'),
            (316, 'The Noodle Bowl', 'Chili Chicken', 'Starters', 240.0, 'Available'),
            
            # Burger Bistro (Fast Food)
            (317, 'Burger Bistro', 'Double Cheese Burger', 'Main Course', 199.0, 'Available'),
            (318, 'Burger Bistro', 'Crispy French Fries', 'Starters', 99.0, 'Available'),
            (319, 'Burger Bistro', 'Chocolate Shake', 'Beverages', 140.0, 'Available'),
            (320, 'Burger Bistro', 'Veg Supreme Burger', 'Main Course', 159.0, 'Out of Stock'),
            
            # Curry Palace (North Indian)
            (321, 'Curry Palace', 'Paneer Tikka Masala', 'Main Course', 260.0, 'Available'),
            (322, 'Curry Palace', 'Dal Makhani', 'Main Course', 210.0, 'Available'),
            (323, 'Curry Palace', 'Vegetable Samosa (2 Pcs)', 'Starters', 60.0, 'Available'),
            (324, 'Curry Palace', 'Mango Lassi', 'Beverages', 90.0, 'Available')
        ]
        cursor.executemany("""
            INSERT INTO foods (food_id, restaurant_name, food_name, category, price, availability)
            VALUES (?, ?, ?, ?, ?, ?)
        """, foods)
        
        # Seed Cart
        cursor.execute("""
            INSERT INTO cart (cart_id, customer_name, food_name, quantity, price, total_price)
            VALUES (401, 'Rahul Sharma', 'Chicken Biryani', 2, 299.0, 598.0)
        """)
        # Seed Order
        cursor.execute("""
            INSERT INTO orders (order_id, customer_name, restaurant_name, order_items, total_amount, payment_status, delivery_status)
            VALUES (501, 'Rahul Sharma', 'Spicy Kitchen', 'Chicken Biryani x2', 598.0, 'Paid', 'Preparing')
        """)
        
        # Seed default Admin
        cursor.execute("""
            INSERT INTO admins (admin_id, username, password)
            VALUES (1, 'admin', 'admin123')
        """)
        conn.commit()
        
    conn.close()

# Initialize DB on import
init_db()

# --- Admin Authentication ---

def verify_admin(username, password):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM admins WHERE username = ? AND password = ?", (username, password))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

# --- Customer CRUD ---

def add_customer(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    c_id = data.get('customer_id')
    if not c_id:
        cursor.execute("SELECT MAX(customer_id) FROM customers")
        val = cursor.fetchone()[0]
        c_id = (val + 1) if val else 101
        
    cursor.execute("""
        INSERT INTO customers (customer_id, full_name, email, phone, address, city)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        c_id,
        data.get('full_name'),
        data.get('email'),
        data.get('phone'),
        data.get('address'),
        data.get('city')
    ))
    conn.commit()
    cursor.execute("SELECT * FROM customers WHERE customer_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def get_customers():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def get_customer_by_id(c_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers WHERE customer_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def update_customer(c_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers WHERE customer_id = ?", (c_id,))
    if not cursor.fetchone():
        conn.close()
        return None
        
    cursor.execute("""
        UPDATE customers
        SET full_name = ?, email = ?, phone = ?, address = ?, city = ?
        WHERE customer_id = ?
    """, (
        data.get('full_name'),
        data.get('email'),
        data.get('phone'),
        data.get('address'),
        data.get('city'),
        c_id
    ))
    conn.commit()
    cursor.execute("SELECT * FROM customers WHERE customer_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_customer(c_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers WHERE customer_id = ?", (c_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return False
    cursor.execute("DELETE FROM customers WHERE customer_id = ?", (c_id,))
    conn.commit()
    conn.close()
    return True

# --- Restaurant CRUD ---

def add_restaurant(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    r_id = data.get('restaurant_id')
    if not r_id:
        cursor.execute("SELECT MAX(restaurant_id) FROM restaurants")
        val = cursor.fetchone()[0]
        r_id = (val + 1) if val else 201
        
    cursor.execute("""
        INSERT INTO restaurants (restaurant_id, restaurant_name, owner_name, location, cuisine, rating)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        r_id,
        data.get('restaurant_name'),
        data.get('owner_name'),
        data.get('location'),
        data.get('cuisine'),
        float(data.get('rating', 0.0))
    ))
    conn.commit()
    cursor.execute("SELECT * FROM restaurants WHERE restaurant_id = ?", (r_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def get_restaurants():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM restaurants")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def get_restaurant_by_id(r_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM restaurants WHERE restaurant_id = ?", (r_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def update_restaurant(r_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM restaurants WHERE restaurant_id = ?", (r_id,))
    if not cursor.fetchone():
        conn.close()
        return None
        
    cursor.execute("""
        UPDATE restaurants
        SET restaurant_name = ?, owner_name = ?, location = ?, cuisine = ?, rating = ?
        WHERE restaurant_id = ?
    """, (
        data.get('restaurant_name'),
        data.get('owner_name'),
        data.get('location'),
        data.get('cuisine'),
        float(data.get('rating', 0.0)),
        r_id
    ))
    conn.commit()
    cursor.execute("SELECT * FROM restaurants WHERE restaurant_id = ?", (r_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_restaurant(r_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM restaurants WHERE restaurant_id = ?", (r_id,))
    if not cursor.fetchone():
        conn.close()
        return False
    cursor.execute("DELETE FROM restaurants WHERE restaurant_id = ?", (r_id,))
    conn.commit()
    conn.close()
    return True

# --- Food CRUD ---

def add_food(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    f_id = data.get('food_id')
    if not f_id:
        cursor.execute("SELECT MAX(food_id) FROM foods")
        val = cursor.fetchone()[0]
        f_id = (val + 1) if val else 301
        
    cursor.execute("""
        INSERT INTO foods (food_id, restaurant_name, food_name, category, price, availability)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        f_id,
        data.get('restaurant_name'),
        data.get('food_name'),
        data.get('category'),
        float(data.get('price', 0.0)),
        data.get('availability', 'Available')
    ))
    conn.commit()
    cursor.execute("SELECT * FROM foods WHERE food_id = ?", (f_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def get_foods():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM foods")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def get_food_by_id(f_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM foods WHERE food_id = ?", (f_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def update_food(f_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM foods WHERE food_id = ?", (f_id,))
    if not cursor.fetchone():
        conn.close()
        return None
        
    cursor.execute("""
        UPDATE foods
        SET restaurant_name = ?, food_name = ?, category = ?, price = ?, availability = ?
        WHERE food_id = ?
    """, (
        data.get('restaurant_name'),
        data.get('food_name'),
        data.get('category'),
        float(data.get('price', 0.0)),
        data.get('availability', 'Available'),
        f_id
    ))
    conn.commit()
    cursor.execute("SELECT * FROM foods WHERE food_id = ?", (f_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_food(f_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM foods WHERE food_id = ?", (f_id,))
    if not cursor.fetchone():
        conn.close()
        return False
    cursor.execute("DELETE FROM foods WHERE food_id = ?", (f_id,))
    conn.commit()
    conn.close()
    return True

# --- Cart CRUD ---

def add_cart_item(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    c_id = data.get('cart_id')
    if not c_id:
        cursor.execute("SELECT MAX(cart_id) FROM cart")
        val = cursor.fetchone()[0]
        c_id = (val + 1) if val else 401
        
    quantity = int(data.get('quantity', 1))
    price = float(data.get('price', 0.0))
    total_price = quantity * price
    cursor.execute("""
        INSERT INTO cart (cart_id, customer_name, food_name, quantity, price, total_price)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        c_id,
        data.get('customer_name'),
        data.get('food_name'),
        quantity,
        price,
        total_price
    ))
    conn.commit()
    cursor.execute("SELECT * FROM cart WHERE cart_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def get_cart_items():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cart")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def get_cart_item_by_id(c_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cart WHERE cart_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def update_cart_item(c_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cart WHERE cart_id = ?", (c_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return None
    
    current_item = dict(row)
    quantity = int(data.get('quantity', current_item['quantity']))
    price = float(data.get('price', current_item['price']))
    total_price = quantity * price
    
    cursor.execute("""
        UPDATE cart
        SET customer_name = ?, food_name = ?, quantity = ?, price = ?, total_price = ?
        WHERE cart_id = ?
    """, (
        data.get('customer_name', current_item['customer_name']),
        data.get('food_name', current_item['food_name']),
        quantity,
        price,
        total_price,
        c_id
    ))
    conn.commit()
    cursor.execute("SELECT * FROM cart WHERE cart_id = ?", (c_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_cart_item(c_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cart WHERE cart_id = ?", (c_id,))
    if not cursor.fetchone():
        conn.close()
        return False
    cursor.execute("DELETE FROM cart WHERE cart_id = ?", (c_id,))
    conn.commit()
    conn.close()
    return True

# --- Order CRUD ---

def add_order(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    o_id = data.get('order_id')
    if not o_id:
        cursor.execute("SELECT MAX(order_id) FROM orders")
        val = cursor.fetchone()[0]
        o_id = (val + 1) if val else 501
        
    cursor.execute("""
        INSERT INTO orders (order_id, customer_name, restaurant_name, order_items, total_amount, payment_status, delivery_status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (
        o_id,
        data.get('customer_name'),
        data.get('restaurant_name'),
        data.get('order_items'),
        float(data.get('total_amount', 0.0)),
        data.get('payment_status', 'Pending'),
        data.get('delivery_status', 'Preparing')
    ))
    conn.commit()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (o_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def get_orders():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def get_order_by_id(o_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (o_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def update_order(o_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (o_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return None
    
    current_order = dict(row)
    cursor.execute("""
        UPDATE orders
        SET customer_name = ?, restaurant_name = ?, order_items = ?, total_amount = ?, payment_status = ?, delivery_status = ?
        WHERE order_id = ?
    """, (
        data.get('customer_name', current_order['customer_name']),
        data.get('restaurant_name', current_order['restaurant_name']),
        data.get('order_items', current_order['order_items']),
        float(data.get('total_amount', current_order['total_amount'])),
        data.get('payment_status', current_order['payment_status']),
        data.get('delivery_status', current_order['delivery_status']),
        o_id
    ))
    conn.commit()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (o_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_order(o_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (o_id,))
    if not cursor.fetchone():
        conn.close()
        return False
    cursor.execute("DELETE FROM orders WHERE order_id = ?", (o_id,))
    conn.commit()
    conn.close()
    return True
