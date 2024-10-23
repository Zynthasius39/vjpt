from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import requests
import random
import json

app = Flask(__name__)
api = Api(app)
CORS(app, origins=['*'])

apiKeys = []

def apiKey():
    return random.choice(apiKeys)

class Update(Resource):
    def get(self):
        return "OK"

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('contest')
        parser.add_argument('problem')
        args = parser.parse_args()
        with open("config.json", "w") as f:
            f.write(json.dumps(args))
        return jsonify({"status": "OK"})
        

class Get(Resource):
    def get(self):
        with open('config.json', 'r') as f:
            js = json.loads(f.read())
            return jsonify({"contest": js["contest"], "problem": js["problem"]})
    
class ApiGet(Resource):
    def get(self):
        return jsonify({"key": apiKey()})

class Ai(Resource):
    def post(self):
        response = requests.post("https://api.groq.com/openai/v1/chat/completions", json=request.json, headers= {
            "Authorization": "Bearer " + apiKey(),
            "Content-Type": "application/json"
        })
        return jsonify(response.json())

api.add_resource(Get, '/')
api.add_resource(Ai, '/ai')
api.add_resource(ApiGet, '/api')
api.add_resource(Update, '/update')

if __name__ == '__main__':
    with open(".token.json", "r") as f:
        apiKeys = json.load(f)
    app.run(host="0.0.0.0", debug=True)