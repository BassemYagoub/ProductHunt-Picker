1. API key
First, you should get an API Key from ProductHunt.
One easy way to do that would be to create an account and request one here : https://www.producthunt.com/v2/oauth/applications
You can specify the requested URL with this one : http://localhost:3000/products (try with https if not working).
Then, put it in the .env file located in the "node_backend" folder, in the API_KEY field.

2. Run the project
Execution :
From the root :
- Backend  : "cd node-backend"
             "npm start"
- Frontend : "cd product-hunt-picker"
             "ng serve --open"


PS : The node_modules folder is imported so no need to install anything