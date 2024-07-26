from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello, World!",
        "items": [1, 2, 3, 4, 5]
    }
    return jsonify(data)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    return jsonify({"message": f"Thank you, {name}! We have received your email: {email}."})

if __name__ == '__main__':
    app.run(debug=True)
