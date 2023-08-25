import http.server
import json
from twilio.rest import Client
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def send_sms():
    payload = request.json

    account_sid = 'ACd24869f924a2e9ce0bfc2d6e5bf5e9f5'
    auth_token = '782d49f87bf9f7bb718cd9fe55237a81'
    client = Client(account_sid, auth_token)

    try:
        client.messages.create(
            body=payload['message'],
            from_='+12518423142',
            to=payload['phoneNumber']
        )
        response = {'success': True, 'message': 'SMS sent successfully'}
        status_code = 200
    except Exception as e:
        response = {'success': False, 'error': str(e)}
        status_code = 500

    return json.dumps(response), status_code, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    app.run(port=3000)
