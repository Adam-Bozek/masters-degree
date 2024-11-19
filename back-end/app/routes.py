from flask import Blueprint, jsonify, request

# Create a Blueprint for API routes
api = Blueprint('api', __name__)

# Example GET route
@api.route('/api/data', methods=['GET'])
def get_data():
    # Simulate data to send to the frontend
    data = {
        "message": "This is a GET response",
        "items": [1, 2, 3, 4]
    }
    return jsonify(data), 200

# Example POST route
@api.route('/api/data', methods=['POST'])
def create_data():
    # Access data sent by the frontend
    frontend_data = request.get_json()
    return jsonify({"received": frontend_data}), 201

# Example PUT route
@api.route('/api/data/<int:item_id>', methods=['PUT'])
def update_data(item_id):
    updated_data = request.get_json()
    return jsonify({"item_id": item_id, "updated": updated_data}), 200

# Example DELETE route
@api.route('/api/data/<int:item_id>', methods=['DELETE'])
def delete_data(item_id):
    return jsonify({"message": f"Item {item_id} deleted"}), 200
