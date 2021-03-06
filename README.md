# Piece of Cake: Delicious Desserts that are a Piece of Cake to Make

![Image of the project on various devices]()

For my Practical Python and Data-Centric Development Milestone Project I have decided to create an interactive Dessert Recipe website that provides an enjoyable user experience which in turn will encourage repeat use.

Users can browse the attractively displayed range of desserts and then click to view the full recipe, or use the seach functionality to quickly find something already in mind. Users are encouraged to Register/Log In to submit a recipe of their own.

You can view my project [here](https://ms3-piece-of-cake.herokuapp.com/get_recipes)

## UX
 
I was inspired to create Piece of Cake from a combination of my love of delicious desserts and my non-existant baking knowledge. My experiance of existing dessert websites is that the recipes are written by proffesional chefs and assume a high level of knowledge and skill. As a layman, I found this intimidaing and off-putting. I want to provide a resource where recipes can be submitted by real people, for real people.  

I took a Mobile-First approach to developing Piece of Cake but the website is equally enjoyable when accessed on all devices and screen sizes. 

### User Stories

- As a user, I want the opening page to look great and inspire me to explore the recipes.
- As a user, I want the range of desserts to be displayed in an attractive fashion and with the key bits of information easily viewable.
- As a user, I want to be able to view full details of a recipe with just one click.
- As a user, I want navigation and use to be simple and intuative.
- As a user, I want to be able to search for a recipe that I'm interested.
- As a user, I want to be able to easily submit my own recipes.
- As a user, I want to be able to view the recipes I have submitted and have the option to edit or delete them.


## Wireframes

I used [Balsamiq](https://balsamiq.com/) to design some wireframes which can be seen [here](https://github.com/JimEv87/MS3/tree/master/wireframes)

## Information architecture

My MongoDB database consists of just two collections.

![database structure](wireframes/DB_structure.png)

## Features

### Existing Features

#### Home Page

- The home page features the Piece of Cake logo as a heading and options to login or register.
- The home page also acts as the main recipe page with a revolving slideshow displaying all of the recipes held on the site.
- An easy to use search bar for finding a specific recipe 
- Each recipe displays key info (Dish Name, Image, Prep Time and Cook Time) and also acts a link to a full recipe page for the recipe selected.
- A clear and uncluttered layout allows the recipes themselves to take full focus.
- A 'glowing' call to action button to encourage users to Sign Up.

#### Recipe Page

- An enlarged image of the selected dessert, prep and cook time details are repeated, a clear list of the required ingredients, and full details on the method of making the selected dessert.

#### Register and Login Pages

- The Piece of Cake logo header acts as a link back to the homepage.
- Users must provide a username and password to register. No personal details are required to use Piece of Cake; this is to encourage more users to sign up.
- Defensive programming here ensures all inputs are between 5 - 15 characters and are numbers & letters only.

#### Add Recipe

- Once registered and logged in, users can access the Add Recipe page.
- A clear and simple form is presented to the user for them to submit their recipe details.
- Providing an image is optional to increase accessibility. If no image is provided then a 'Pending Image' is provided. 
- Defensive programming here ensures all time entries are numbers only, and double spacing is prevented to discourage blank entries.

#### Profile Page

- Once logged in, users can view their Profile page which displays all recipes submitted by that user.
- Users can read, update and delete their recipes from their Profile page.
- Defensive programming here ensures you can only view the Profile page if you are logged in, otherwise you are redirected to the custom error page with links for returning Home or to Sign Up.

### Features Left to Implement

- An 'Upload Photo' feature as opposed to the current URL input method.
- A rating system which allows users to rate other recipes, and the top ones be displayed in a prominant position on the homepage.
- An improved and more detailed search function.
- Further defensive programming to prevent completely blank entries

## Technologies Used

### Front End

- [HTML5](https://en.wikipedia.org/wiki/HTML5) 
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) 
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 
- [Materialize](https://materializecss.com/) 

### Back End

- [MongoDB](https://en.wikipedia.org/wiki/MongoDB) 
- [Flask](https://en.wikipedia.org/wiki/Flask_(web_framework))
- [bson.objectid](https://www.npmjs.com/package/bson-objectid)
- [werkzeug.security](https://werkzeug.palletsprojects.com/en/1.0.x/utils/)
- [Python](https://www.python.org/)

## Deployment

### Requirements 
- Python3 
- Github account 
- MongoDB account 
- Heroku account

### Clone the project 
To make a local clone follow these steps: 
1. Log in to GitHub and navigate to the repository. 
2. Click on “Code” (green button).
3. Click on “Open with GitHub Desktop” and follow the prompts. 

### Working with the local copy
1. After installing the requirements goo to the workspace of your local copy and type pip3 install -r requirements.txt in the terminal window of your IDE.
2. Create a MongoDB database    
    - Login to your MongoDB account.
    - Create a cluster and a database.
    - Create collections in the database for recipes and users.
    - Add values as required
3. Create the environment variables 
    - Create a .gitignore file in the root directory of the project.
    - Create the file env.py. This  will contain all the envornment variables.
    ```
    Import os
    os.environ.setdefault("IP", "Added by developer")
    os.environ.setdefault("PORT", "Added by developer")
    os.environ.setdefault("SECRET_KEY", "Added by developer")
    os.environ.setdefault("MONGO_URI", "Added by developer")
    os.environ.setdefault("MONGO_DBNAME", "Added by developer")
    ```
    - Add the env.py file in the .gitignore.
4. To run the app open your terminal window in your IDE and type python3 app.py.

### Heroku Deployment  
1. Set up local workspace for Heroku 
    - Type pip3 freeze -- local > requirements.txt in the terminal window of your IDE so that Heroku knows which file to install.
    - Type python app.py > Procfile in termial window of your IDE.
2. Set up Heroku: create a Heroku account and create a new app and select your region. 
3. Deployment method 'Github'
    - Click on 'Connect to GitHub' in the deploy tab in Heroku. 
    - Search your repository and then click Connect to connect your repository with the Heroku. 
    - Go to Config Vars in the settings app in Heroku. Click on Reveal Config Vars.
    - Enter the variables contained in your env.py file for IP, PORT, SECRET_KEY, MONGO_URI, MONGO_DBNAME
4. Push the requirements.txt and Procfile to repository. 
     ```
    $ git add requirements.txt
    $ git commit -m "Add requirements.txt"

    $ git add Procfile 
    $ git commit -m "Add Procfile"
    ```
5. Automatic deployment: Go to the deploy tab in Heroku and navigate to Automatic deployments. Click on Enable Automatic Deploys. By Manual deploy click on Deploy Branch.

Heroku will receive the code from Github and host the app using the required packages. 
Click on Open app in Heroku and the app wil open. 

## Testing

### Validation

- [HTML Validator](https://validator.w3.org/nu/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JavaScript Validator](https://jshint.com/) 
- [Python Validator](http://pep8online.com/)

### Design and Presentation

- [Balsamiq](https://balsamiq.com/) to design the wireframes
- [Am I Responsive?](http://ami.responsivedesign.is/#) to test the view of the site on different devices

                                                                    

## Credits

