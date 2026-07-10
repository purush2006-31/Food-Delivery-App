import urllib.request
import json
import time

BASE_URL = 'http://127.0.0.1:8000'

def make_request(url, method='GET', data=None):
    req_url = f"{BASE_URL}{url}"
    req_data = None
    headers = {}
    
    if data is not None:
        req_data = json.dumps(data).encode('utf-8')
        headers = { 'Content-Type': 'application/json' }
        
    req = urllib.request.Request(req_url, data=req_data, headers=headers, method=method)
    
    try:
        with urllib.request.urlopen(req) as res:
            res_data = res.read().decode('utf-8')
            return res.status, json.loads(res_data) if res_data else {}
    except urllib.error.HTTPError as e:
        err_content = e.read().decode('utf-8')
        print(f"HTTP Error {e.code} for {method} {url}: {err_content}")
        return e.code, {}
    except Exception as e:
        print(f"Connection failed for {method} {url}: {e}")
        return 500, {}

def run_tests():
    print("==================================================")
    print("   Starting Food Delivery API Tests (20 CRUDs)   ")
    print("==================================================")
    
    # ------------------ CUSTOMER MODULE ------------------
    print("\n--- Testing Customers Module ---")
    
    # 1. POST /customers/add/ (Add Customer)
    customer_payload = {
        "customer_id": 999,
        "full_name": "Test Customer",
        "email": "test@gmail.com",
        "phone": "1234567890",
        "address": "Test Street",
        "city": "Hyderabad"
    }
    status, res = make_request('/customers/add/', 'POST', customer_payload)
    print(f"POST /customers/add/ status: {status}, ID: {res.get('customer_id')}")
    assert status == 201 and res.get('customer_id') == 999
    
    # 2. GET /customers/ (Get Customers)
    status, res_list = make_request('/customers/', 'GET')
    print(f"GET /customers/ status: {status}, Count: {len(res_list)}")
    assert status == 200 and len(res_list) >= 2 # includes seed + our test
    
    # 3. PUT /customers/update/999/ (Update Customer)
    update_payload = {
        "full_name": "Updated Customer Name",
        "email": "test@gmail.com",
        "phone": "9999999999",
        "address": "Updated Street",
        "city": "Hyderabad"
    }
    status, res = make_request('/customers/update/999/', 'PUT', update_payload)
    print(f"PUT /customers/update/999/ status: {status}, Name: {res.get('full_name')}")
    assert status == 200 and res.get('full_name') == "Updated Customer Name"
    
    # 4. DELETE /customers/delete/999/ (Delete Customer)
    status, res = make_request('/customers/delete/999/', 'DELETE')
    print(f"DELETE /customers/delete/999/ status: {status}")
    assert status == 200
    
    # Verify deletion
    status, res_list = make_request('/customers/', 'GET')
    ids = [c['customer_id'] for c in res_list]
    assert 999 not in ids
    print("Customer CRUD tests passed successfully!")
    
    # ------------------ RESTAURANT MODULE ------------------
    print("\n--- Testing Restaurants Module ---")
    
    # 5. POST /restaurants/add/
    restaurant_payload = {
        "restaurant_id": 999,
        "restaurant_name": "Test Restaurant",
        "owner_name": "Test Owner",
        "location": "Test City",
        "cuisine": "Chinese",
        "rating": 4.2
    }
    status, res = make_request('/restaurants/add/', 'POST', restaurant_payload)
    print(f"POST /restaurants/add/ status: {status}, ID: {res.get('restaurant_id')}")
    assert status == 201 and res.get('restaurant_id') == 999
    
    # 6. GET /restaurants/
    status, res_list = make_request('/restaurants/', 'GET')
    print(f"GET /restaurants/ status: {status}, Count: {len(res_list)}")
    assert status == 200 and len(res_list) >= 2
    
    # 7. PUT /restaurants/update/999/
    update_rest_payload = {
        "restaurant_name": "Updated Restaurant Name",
        "owner_name": "Test Owner",
        "location": "Test City",
        "cuisine": "Chinese",
        "rating": 4.5
    }
    status, res = make_request('/restaurants/update/999/', 'PUT', update_rest_payload)
    print(f"PUT /restaurants/update/999/ status: {status}, Rating: {res.get('rating')}")
    assert status == 200 and res.get('rating') == 4.5
    
    # 8. DELETE /restaurants/delete/999/
    status, res = make_request('/restaurants/delete/999/', 'DELETE')
    print(f"DELETE /restaurants/delete/999/ status: {status}")
    assert status == 200
    print("Restaurant CRUD tests passed successfully!")
    
    # ------------------ FOOD MENU MODULE ------------------
    print("\n--- Testing Foods Module ---")
    
    # 9. POST /foods/add/
    food_payload = {
        "food_id": 999,
        "restaurant_name": "Spicy Kitchen",
        "food_name": "Paneer Butter Masala",
        "category": "Main Course",
        "price": 180,
        "availability": "Available"
    }
    status, res = make_request('/foods/add/', 'POST', food_payload)
    print(f"POST /foods/add/ status: {status}, ID: {res.get('food_id')}")
    assert status == 201 and res.get('food_id') == 999
    
    # 10. GET /foods/
    status, res_list = make_request('/foods/', 'GET')
    print(f"GET /foods/ status: {status}, Count: {len(res_list)}")
    assert status == 200 and len(res_list) >= 2
    
    # 11. PUT /foods/update/999/
    update_food_payload = {
        "restaurant_name": "Spicy Kitchen",
        "food_name": "Paneer Butter Masala",
        "category": "Main Course",
        "price": 195,
        "availability": "Out of Stock"
    }
    status, res = make_request('/foods/update/999/', 'PUT', update_food_payload)
    print(f"PUT /foods/update/999/ status: {status}, Price: {res.get('price')}, Avail: {res.get('availability')}")
    assert status == 200 and res.get('price') == 195 and res.get('availability') == "Out of Stock"
    
    # 12. DELETE /foods/delete/999/
    status, res = make_request('/foods/delete/999/', 'DELETE')
    print(f"DELETE /foods/delete/999/ status: {status}")
    assert status == 200
    print("Food Menu CRUD tests passed successfully!")
    
    # ------------------ CART MODULE ------------------
    print("\n--- Testing Cart Module ---")
    
    # 13. POST /cart/add/
    cart_payload = {
        "cart_id": 999,
        "customer_name": "Rahul Sharma",
        "food_name": "Paneer Butter Masala",
        "quantity": 3,
        "price": 180
    }
    status, res = make_request('/cart/add/', 'POST', cart_payload)
    print(f"POST /cart/add/ status: {status}, Total Price: {res.get('total_price')}")
    assert status == 201 and res.get('total_price') == 540
    
    # 14. GET /cart/
    status, res_list = make_request('/cart/', 'GET')
    print(f"GET /cart/ status: {status}, Count: {len(res_list)}")
    assert status == 200 and len(res_list) >= 2
    
    # 15. PUT /cart/update/999/
    update_cart_payload = {
        "quantity": 4
    }
    status, res = make_request('/cart/update/999/', 'PUT', update_cart_payload)
    print(f"PUT /cart/update/999/ status: {status}, Qty: {res.get('quantity')}, Total: {res.get('total_price')}")
    assert status == 200 and res.get('quantity') == 4 and res.get('total_price') == 720
    
    # 16. DELETE /cart/delete/999/
    status, res = make_request('/cart/delete/999/', 'DELETE')
    print(f"DELETE /cart/delete/999/ status: {status}")
    assert status == 200
    print("Cart CRUD tests passed successfully!")
    
    # ------------------ ORDER MODULE ------------------
    print("\n--- Testing Orders Module ---")
    
    # 17. POST /orders/add/
    order_payload = {
        "order_id": 999,
        "customer_name": "Rahul Sharma",
        "restaurant_name": "Spicy Kitchen",
        "order_items": "Chicken Biryani x1, Butter Naan x2",
        "total_amount": 450,
        "payment_status": "Pending",
        "delivery_status": "Preparing"
    }
    status, res = make_request('/orders/add/', 'POST', order_payload)
    print(f"POST /orders/add/ status: {status}, ID: {res.get('order_id')}")
    assert status == 201 and res.get('order_id') == 999
    
    # 18. GET /orders/
    status, res_list = make_request('/orders/', 'GET')
    print(f"GET /orders/ status: {status}, Count: {len(res_list)}")
    assert status == 200 and len(res_list) >= 2
    
    # 19. PUT /orders/update/999/
    update_order_payload = {
        "payment_status": "Paid",
        "delivery_status": "Out for Delivery"
    }
    status, res = make_request('/orders/update/999/', 'PUT', update_order_payload)
    print(f"PUT /orders/update/999/ status: {status}, Payment: {res.get('payment_status')}, Delivery: {res.get('delivery_status')}")
    assert status == 200 and res.get('payment_status') == "Paid" and res.get('delivery_status') == "Out for Delivery"
    
    # 20. DELETE /orders/delete/999/
    status, res = make_request('/orders/delete/999/', 'DELETE')
    print(f"DELETE /orders/delete/999/ status: {status}")
    assert status == 200
    print("Order CRUD tests passed successfully!")
    
    # 21. POST /admin/login/ (Admin Auth Verification)
    print("\n--- Testing Admin Auth Module ---")
    admin_payload = {
        "username": "admin",
        "password": "admin123"
    }
    status, res = make_request('/admin/login/', 'POST', admin_payload)
    print(f"POST /admin/login/ status: {status}, Success: {res.get('success')}, Role: {res.get('role')}")
    assert status == 200 and res.get('success') is True and res.get('role') == 'admin'
    
    # Test invalid admin login
    bad_admin_payload = {
        "username": "admin",
        "password": "wrongpassword"
    }
    status, res = make_request('/admin/login/', 'POST', bad_admin_payload)
    print(f"POST /admin/login/ (invalid) status: {status}")
    assert status == 401
    
    print("\n==================================================")
    print("      ALL 20 API CRUD TESTS COMPLETED PASSED!     ")
    print("==================================================")

if __name__ == '__main__':
    run_tests()
