# abuein-online

This is a README.md FILE

## Frontend Part 1

### React-Bootstrap Setup, Header & Footer Components

1. Go into src folder and create a folder called components to create header and footer components
2. Header.js. The convention for React.js components is an uppercase first letter
3. rafce snippet to create arrow functional components
4. Import the header and footer components into App.js
5. When a component is exported as "export default", you don't need to wrap it in curly braces when you import the component in App.js
6. <main> tag specifies the main content of a document
7. React bootstrap: CSS framework. Easier to work with compared to material UI. To create a navbar in material UI, you will have to bring in many components
8. To install React bootstrap, use bootswatch.com => bootstrap customized files. Download the boostrap.min.css file for Lux, and put it in the src folder
9. Import the bootstrap.min.css in the index.js file
10. Now install react boostrap, npm i react-boostrap
11. For column, className = "text-center py-3" => center the column and give it a 3 padding on the y-axis from the bottom and above
12. index.css is where we are going to put custom styles
13. rem => root element font size
14. In the header, you want to create a navbar. Copy the react bootstrap navbar.
15. variant = "dark", bg = "dark"
16. Use fontawesome icons' cdn using cdnjs.com
17. Put the cdn into the public index.html file

### HomeScreen Product Listing using dummy data (not fetching from DB yet)

1. Put your product images into the public folder. This is for dummy data, we are not going to fetch from the database for now.
2. Create dummy product info in an array in a file called products.js
3. Create a screens folder
   1. All the screens are components and follow the structure of components
   2. products.map(product -> ()), this means that for each product, what do we want to show.
      - map creates a new array that is populated with the results of calling a function on each element of the array
   3. Small screen take up 12 columns ( a whole row), for medium take 6 columns, for a large screen take 4 columns within the row.
      - This means that for a small screen, like a mobile phone, a single column will take the entire row, for a large screen, a row will take on 4 products (columns)
4. Create the Product component, components can take in props. Product will take the {product} in the map as a prop.
5. The component will be a bootstrap Card. The card is an extensible content container. You can have a footer and header in a card, in addition to a thumbnail. It's p cool.
6. my-3 p-3 => this means a 1 rem margin on top and bottom and a 3 rem padding all around
7. You can use destructuring to access props.product directly by doing const Product = ({ product }) =>

### Rating Component

1. The ratings component is imported into the product.js component=> each product has a ratings.
2. Importing a component from the same folder => ./Rating => import Rating from './Rating'
3. **text = {`${product.numReviews} reviews`}** => here we are combining the reviews string and the product.numReviews JS variable. We used the curly braces for the backticks.
4. If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater than or equal to 0.5, show a half star. Else, show an empty star
   **className = {value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}**

5. **HTML span tag**: This is an inline container that is used in order to markup a part of the text or a part of the document
6. **{text && text}**: If there is text, then show it
7. We want to change the color of the stars, therefore, we will pass in to the Rating component a color prop.
   We added this line in the icon tag **style = {{ color: color}}**
8. In the Rating.js, we can set a default value for color without having to set the value in Product.js.
   We do this in the Rating.js: Rating.defaultProps = {color: '#B7950B'}
9. propTypes => specify the type of each prop. Impt for importing propTypes.
10. When creating a list such as in HomeScreen.js, the element has to have a key

### React Router: have different routes

1. npm i react-router-dom react-router-bootstrap
2. Import the BrowserRouter (uses the html5 history API: pushState, replaceState and the popstate event) as Router in App.js
3. Wrap everything within the Router
4. Also import Route, which is the component that will be used to link a path to our component
5. Add property: exact, so it exactly matches the path
6. **/product/:id** => This represents a placeholder for the id (can be anything)
7. This is a single page application, we don't want it to refresh when we click on a link. To do this, replace the a tags with Link tags from the react-router-dom
8. For the header to fix the issue in (7), we will use react-router-bootstrap: import { LinkContainer } from 'react-router-bootstrap'

### Product Screen (product page)

1. In ProductScreen.js, do the following imports
   1. import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
   2. import Rating
   3. import products
2. Find the product where the product ID matches the ID in the URL; product.find(p=> p.\_id === match.params.id )
   1. match is a prop of the ProductScreen component
   2. A match object contains information about how a **Route path matched the URL**. match objects contain the following properties:
      - params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path. **We will use the id param in this project**
      - isExact - (boolean) true if the entire URL was matched (no trailing characters)
      - path - (string) The path pattern used to match. Useful for building nested Routes
      - url - (string) The matched portion of the URL. Useful for building nested Links
   3. '../' refers to moving into the parent folder
   4. **IN JSX, you should put the JS code before the return statement**
      - You might be asking, what is JSX?: it is a syntax extension to JavaScript that helps describe what the UI will look like
      - It is basically putting markup in JS
      - You don't need to use it with React, but it is recommended. React embraces the fact that rendering logical is inherently couple with other UI logic.
   5. In react bootstrap, we use thye grid, where we have sm, md, lg, xl. If sm = {12}, it means that if you are at a small screen, then use the whole row. The row is 12 units.
   6. ListGroup => variant = 'flush' takes away the line surrounding the ListGroup
   7. To keep image in its container/column (on the left), use the fluid property
   8. use Image alt, in order to give the image alternate text if it cannot be displayed
   9. For the button, we did: disabled = {product.countInStock === 0}, this means that you will disable the button if the product is no longer in stock

## Integrating Backend

### Frontend/Backend Workflow Explanation

1. Frontend is our React.js application
2. Backend will be created with:
   - Node.js=> it is a JS runtime, it allows us to run JS on the server
   - express => backend framework, allows us to create routes and stuff like that
   - to communicate with our DB, we will use mongoose, which is an object data mapper
   - The backend will only send back JSON data, which is the product data
   - Before we use the DB, we will move the products.js file to the backend and make it JSON
3. Database will be MongoDB
4. To get product JSON data from the backend, we will send an HTTP request from React (frontend) to the backend:
   - GET: fetching data
   - POST: adding data
   - PUT: update data
   - DELETE: delete data
5. **RESTFUL: Representational State Transfer, software archetitural style that defines a set of constraints to use web APIs and web services**

##### JSON

1. JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.
2. It is **_text_** that is written with the object notation of JS. This is because any data exchanged between the browser and the server should only be text
3. JSON is **not** the same as a JS object, it is a string with object notation. You can convert a JS object into JSON with stringify and parse a JSON string into a JS object with JSON.parse
4. Example:
   - {"name":"John","age":31,"city":"New York"}

### Serving Products - Back End Routes

1. Create a folder in the root called backend
2. Initialize package.json. Make sure you are in the root and do npm innit.
3. npm i express
4. Create a server.js file in the backend folder
5. Create a folder called data
6. Copy product.js into the data folder
7. In server.js
   - const express = require('express')
   - This syntax is node.js, we don't use imports like in the frontend
   - const app = express()
   - app.listen(5000, console.log('Server is running on port 5000)) => initializing the server on port 5000
8. To run your server with npm start, go to package.json, and make "start": "node backend/server"
9. If we have a GET request for '/', then we will run a function with a req,res parameters and send back something to the client:
   - res.send('API is running'); => sending back to the client API is running
10. res.json => converts product.js into JSON

### Fetching products using React (useEffect)

1. npm axios
   - It is an HTTP library
   - We use axios to make HTTP requests from React
2. We want to add products as component level state (eventually they will become global when we integrate the DB)=> bring in the useState hook
   - Enables us to useState with functional components
   - Traditionally, we were only able to initialize states (constructor), store states, and use them in class based components
   - const [products, setProducts] = useState([])
     1. products: the state
     2. setProducts: function that we use to manipulate the state
     3. []: the default/initial value of products (empty array), we passed it into useState
3. useEffect hook: we will use it in order to make a request to our backend
   - Takes in an array function that will run as soon as the product loads.
   - As soon as homeScreen loads, this will fire up
   - This is why we will need it, as soon as the homeScreen loads, we want to fire a get request for the products
   - We will make our axios request here:
     - axios.get('/api/)
     - This returns a promise, thus, we will use async/await
     - Create a separate function in the useEffect() hook because you can't just have async on the useEffect hook:
       1. Const fetchProducts = async() =>{
          const res = await axios.get()
          }
       2. res has a data object associated with it. Thus, we can destructure it.
       3. Const fetchProducts = async() =>{
          const { data } = await axios.get('/api/products')
          setProducts(data)
          }
   - useEffect uses an array of dependencies=> [test] => dependencies that fire off when useEffect fires off.
   - We want to add a proxy such that instead of having React look at localhost:3000, let it look at the server (localhost:5000)
     1. Go to package.json in the front end
     2. add proxy after your name
     3. proxy: "http://127.0.0.1:5000"

#### asyc() explained

### Nodemon and Concurrently Setup

1. We will install them with -D, which means that they will be installed as dev dependencies. nodemon and concurrently will only be used for development.
2. nodemon resets the server automatically
3. add a script for nodemon.
4. npm start --prefix frontend => go to the frontend folder and run npm start there. This will start our react.js frontend
5. We use concurrently to run the server and the client at the same time in the same terminal process
6. in the package.json, go to scripts=>

### Environment variables

1. Environment variables are a set of variables with values that stored within the system and are used by applications
2. Use package .env
3. Create a file called .env
4. Whenever you want to use environment variables, you can just do process.env.varName
5. npm i dotenv
6. In the server do:
   1. const dotenv = require('dotenv)
   2. dotenv.config
7. In the root, create a .env file:
   1. NODE_ENV = development
   2. PORT = 5000
8. In the server, const PORT = process.env.PORT || 5000
9. We use backticks in JS to include variables into strings
10. Make sure that .env is in gitignore, because it can contain sensitive information, like paypal key or credit card information
    and you don't want it to be pushed to github.

## Making the webapp RTL for arabic support

1. Use the webpack-rtl-plugin, which will generate a different CSS file on the fly that is RTL compatible.
2. Instead of create two CSS files, you can author the LTR version and this plugin will automatically create the RTL counterpart for you
3.
