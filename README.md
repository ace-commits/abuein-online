# abuein-online

This is a README.md FILE

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
   **<i className = {value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></>**
5. **HTML <span> tag**: This is an inline container that is used in order to markup a part of the text or a part of the document
