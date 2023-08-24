import http.server
import json
from twilio.rest import Client
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

@app.route('/', methods=['POST'])
def send_sms():
    payload = request.json

    # Your Twilio Account SID and Auth Token
    account_sid = 'ACbfed5e8cfa3c3732250bfdd553a3508b'
    auth_token = '17e264c513e1435d7ee73ace2d63f594'
    client = Client(account_sid, auth_token)

    try:
        client.messages.create(
            body=payload['message'],
            from_='+12184534837',
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
