import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from Backend import db

# Helper to load JSON body
def load_json(request):
    try:
        return json.loads(request.body)
    except Exception:
        return {}

# --- Customer APIs ---

@csrf_exempt
def add_customer(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    if not data.get('full_name') or not data.get('email'):
        return JsonResponse({'error': 'Missing required fields: full_name and email'}, status=400)
    customer = db.add_customer(data)
    return JsonResponse(customer, status=201)

@csrf_exempt
def get_customers(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET method is allowed'}, status=405)
    customers = db.get_customers()
    return JsonResponse(customers, safe=False, status=200)

@csrf_exempt
def update_customer(request, id):
    if request.method != 'PUT':
        return JsonResponse({'error': 'Only PUT method is allowed'}, status=405)
    data = load_json(request)
    updated = db.update_customer(id, data)
    if not updated:
        return JsonResponse({'error': f'Customer with ID {id} not found'}, status=404)
    return JsonResponse(updated, status=200)

@csrf_exempt
def delete_customer(request, id):
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Only DELETE method is allowed'}, status=405)
    success = db.delete_customer(id)
    if not success:
        return JsonResponse({'error': f'Customer with ID {id} not found'}, status=404)
    return JsonResponse({'message': f'Customer {id} deleted successfully'}, status=200)


# --- Restaurant APIs ---

@csrf_exempt
def add_restaurant(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    if not data.get('restaurant_name'):
        return JsonResponse({'error': 'Missing required field: restaurant_name'}, status=400)
    restaurant = db.add_restaurant(data)
    return JsonResponse(restaurant, status=201)

@csrf_exempt
def get_restaurants(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET method is allowed'}, status=405)
    restaurants = db.get_restaurants()
    return JsonResponse(restaurants, safe=False, status=200)

@csrf_exempt
def update_restaurant(request, id):
    if request.method != 'PUT':
        return JsonResponse({'error': 'Only PUT method is allowed'}, status=405)
    data = load_json(request)
    updated = db.update_restaurant(id, data)
    if not updated:
        return JsonResponse({'error': f'Restaurant with ID {id} not found'}, status=404)
    return JsonResponse(updated, status=200)

@csrf_exempt
def delete_restaurant(request, id):
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Only DELETE method is allowed'}, status=405)
    success = db.delete_restaurant(id)
    if not success:
        return JsonResponse({'error': f'Restaurant with ID {id} not found'}, status=404)
    return JsonResponse({'message': f'Restaurant {id} deleted successfully'}, status=200)


# --- Food Menu APIs ---

@csrf_exempt
def add_food(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    if not data.get('restaurant_name') or not data.get('food_name') or data.get('price') is None:
        return JsonResponse({'error': 'Missing required fields: restaurant_name, food_name, price'}, status=400)
    food = db.add_food(data)
    return JsonResponse(food, status=201)

@csrf_exempt
def get_foods(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET method is allowed'}, status=405)
    foods = db.get_foods()
    return JsonResponse(foods, safe=False, status=200)

@csrf_exempt
def update_food(request, id):
    if request.method != 'PUT':
        return JsonResponse({'error': 'Only PUT method is allowed'}, status=405)
    data = load_json(request)
    updated = db.update_food(id, data)
    if not updated:
        return JsonResponse({'error': f'Food Item with ID {id} not found'}, status=404)
    return JsonResponse(updated, status=200)

@csrf_exempt
def delete_food(request, id):
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Only DELETE method is allowed'}, status=405)
    success = db.delete_food(id)
    if not success:
        return JsonResponse({'error': f'Food Item with ID {id} not found'}, status=404)
    return JsonResponse({'message': f'Food Item {id} deleted successfully'}, status=200)


# --- Cart APIs ---

@csrf_exempt
def add_cart_item(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    if not data.get('customer_name') or not data.get('food_name') or data.get('price') is None:
        return JsonResponse({'error': 'Missing required fields: customer_name, food_name, price'}, status=400)
    item = db.add_cart_item(data)
    return JsonResponse(item, status=201)

@csrf_exempt
def get_cart(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET method is allowed'}, status=405)
    items = db.get_cart_items()
    return JsonResponse(items, safe=False, status=200)

@csrf_exempt
def update_cart(request, id):
    if request.method != 'PUT':
        return JsonResponse({'error': 'Only PUT method is allowed'}, status=405)
    data = load_json(request)
    updated = db.update_cart_item(id, data)
    if not updated:
        return JsonResponse({'error': f'Cart item with ID {id} not found'}, status=404)
    return JsonResponse(updated, status=200)

@csrf_exempt
def delete_cart(request, id):
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Only DELETE method is allowed'}, status=405)
    success = db.delete_cart_item(id)
    if not success:
        return JsonResponse({'error': f'Cart item with ID {id} not found'}, status=404)
    return JsonResponse({'message': f'Cart item {id} deleted successfully'}, status=200)


# --- Order APIs ---

@csrf_exempt
def add_order(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    if not data.get('customer_name') or not data.get('restaurant_name') or not data.get('order_items') or data.get('total_amount') is None:
        return JsonResponse({'error': 'Missing required fields: customer_name, restaurant_name, order_items, total_amount'}, status=400)
    order = db.add_order(data)
    return JsonResponse(order, status=201)

@csrf_exempt
def get_orders(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET method is allowed'}, status=405)
    orders = db.get_orders()
    return JsonResponse(orders, safe=False, status=200)

@csrf_exempt
def update_order(request, id):
    if request.method != 'PUT':
        return JsonResponse({'error': 'Only PUT method is allowed'}, status=405)
    data = load_json(request)
    updated = db.update_order(id, data)
    if not updated:
        return JsonResponse({'error': f'Order with ID {id} not found'}, status=404)
    return JsonResponse(updated, status=200)

@csrf_exempt
def delete_order(request, id):
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Only DELETE method is allowed'}, status=405)
    success = db.delete_order(id)
    if not success:
        return JsonResponse({'error': f'Order with ID {id} not found'}, status=404)
    return JsonResponse({'message': f'Order {id} deleted successfully'}, status=200)

@csrf_exempt
def admin_login(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    data = load_json(request)
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return JsonResponse({'error': 'Username and password are required'}, status=400)
    admin = db.verify_admin(username, password)
    if admin:
        return JsonResponse({'success': True, 'username': admin['username'], 'role': 'admin'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid username or password'}, status=401)
