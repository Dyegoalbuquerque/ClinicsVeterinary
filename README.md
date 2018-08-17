# Clinics veterinary


This project was developed for listing veterinary clinics. It's using technologies as backbonejs, nodejs and jquery. The style was made with bootstrap 4.

It consist of two pages, the first is list grid, second is details of veterinary clinic. It also have an input search on table records.

it must be served with a web server.

When I opened index.html from the local disk with file:// URL on browser.

No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
application/json


# Installation

- Install nodejs

Install Http Server 

```
npm install http-server -g
```

Install JSON Server 

```
npm install -g json-server
```

Run Http Server  

```
http-server . -o
```

Run JSON Server 

```
json-server --watch clinics.json
```

- For running web api fake, Note: browsering to folder 'data' from project


# Structure project
	
+-- assets
¦   +-- css
¦   ¦   +-- style.css
¦   +-- images
¦   ¦   +-- image-pet.jpg
¦   +-- js
¦       +-- libs
¦           +-- backbone-1.1.2.js
¦           +-- underscore.js
¦           
+-- index.html
+-- README.md
+-- src
     +-- js 
     	 +-- view
             +-- veterinaryList.js
	     ¦   +-- veterinaryDetai.js
		 +-- model
		 ¦   +-- veterinary.js
		 +-- route.js
		 ¦   
		 +-- search-filter.js
		 ¦   
	 +-- template
		 +-- veterinaryList.html
         +-- veterinaryDetail.html
     +-- data
		 +-- clinics.json


# WEB API

GET  /veterinary
GET  /veterinary/1


# Links 
https://github.com/typicode/json-server



