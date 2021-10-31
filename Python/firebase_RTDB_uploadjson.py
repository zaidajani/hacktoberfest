import firebase_admin
import json
from firebase_admin import db
#Replace the sdk name with your own path after downloading
cred_obj = firebase_admin.credentials.Certificate('sdk/fir-test-usman-firebase-adminsdk-3h6p9-25ca0ae22d.json')
default_app = firebase_admin.initialize_app(cred_obj, {
'databaseURL':	'enter your url here'
	})
#enter your own url
#firebase_admin.initialize_app(cred_obj)
ref = db.reference("/")
with open("new.json", "r") as f:
	file_contents = json.load(f)
ref.child("2").set(file_contents)
#ref.set(file_contents)
for i in range(int('1'),int('14')):
	ref.child(str(i)).set(file_contents)
