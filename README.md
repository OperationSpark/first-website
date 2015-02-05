First Website
===

We're gonna go live on GitHub with your very own website!

##Prerequisites

* Students will require a GitHub account and will need to remember their GitHub username and password.
* Students will require a Cloud9 account - they will login to Cloud9 using their GitHub credentials.
* Students should have basic knowledge of HTML and gone through the [Intro to HTML](https://github.com/OperationSpark/javascript-wiki/wiki/HTML-Intro) lesson.

##Overview

###Specs

* At the end of the lesson students will have built and designed their own website that is viewable on the web.
* The website will be hosted on GitHub under their own account, and is something they can build upon on over time. 
* The website will be the student's own and will feature a short profile of the student.

### Take Away

* Basic HTML5, including HTML (content) and CSS (style).
* Basic web page navigation
* Using git and GitHub

### Work Flow

You'll be creating a whole web page from scratch, from creating the `index.html` file, to writing all the `<html>` tags, adding content and style with CSS.  Because you're creating this page from scratch, there will be no TODO's to find in our code in this project.

### Type of App

We are building a website, to be viewed live on the web at your GitHub page, and it will be viewed in a web browser, like Chrome.

##Setup

###Creating a New GitHub Repo For Your Site

First things first, we need to create a new repository on GitHub, named using your GitHub username.

The very awesome GitHub will host a website for each user and organization for free.  The feature is called <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.

Using this feature is actually really easy.  If you create a repository on GitHub and name it in the pattern of:

    yoursusername.github.io
    
...GitHub will host the files of that repo at that URL, provided that repo contains a website.

* We're going to give you the link right here to click to create a new repository on GitHub.

    NOTE: If you're not signed-in to GitHub, you might see a web page that says 404 (This is not the web page you are looking for).  Just sign-in to GitHub on this page and you will be forward to the _create new repository_ page.
    
    Follow these steps and see the screen shot to create a new repository:
    
    <a href="https://github.com/new" target="_blank">Click here to open a new browser tab and create create a new repository</a>.
    
<ol style="list-style-type: upper-alpha;">
    <li>On the Create New Repository page, in the box for **Repository name**, name the repository like `your-github-username.github.io`, replacing `your-github-username` with you actual GitHub username.  MAKE SURE your username is spelled correctly, otherwise you'll have problems (See A).</li>
    <li>Enter a description for your repository in the **Description** box, like `My own awesome website!' (See B).</li>
    <li>Select the Public radio button to allow anyone to see this repository (See C).</li>
    <li>Check the "Initialize this repository with a README" box (See D).</li>
    <li>Click the "Add .gitignore" button, and select "Yeoman" from the dropdown.  Here, we're just selecting Yeoman because it gives us some default ignore patterns... we'll explain later (See E).</li>
    <li>Click "Create Repository" (See F).</li>
</ol>

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/create-repo.png">

    Awesome, you created your repository!

2.  Next step, we need to _clone_ our repository into our Cloud9 workspace, where we will do our work.  After creating the repository, you'll be brought to the repository's default view.  In the bottom right corner of the screen, you will want to:
    
    A) Select SSH by clicking the blue text, SSH (See A).
    
    B) Click the "Copy URL to clipboard" button (See B).
    
    <img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/copy-repo-url.png">

###Creating a New Cloud9 Workspace For Your Site

Nice, you've copied the required URL to clone your repository into Cloud9, which is what we're gonna do next.

1. If you do not have Cloud9 open, open it now in a new browser tab and from your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace" > "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the dialogue that pops up: "Source URL" form input, copy and paste in the URL you copied from step 2 (it should still be on your clipboard).
    
    Then, in the environment selection box, select "HTML5" (see B).  Finally, click the green button "Create" (see C).
    
    <img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/clone-workspace.png">

3. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar), and once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/start-editing.png">

When the workspace loads, you'll see something like this:

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/workspace.png">

Awesome, we're ready to create our website!

##Lesson Steps

### TODO 1 : Create index.html

Right-click in the file system and select `New File`

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/create-new-file.png">

Name the file, `index.html`, (press return after naming it to save the new name) like so:

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/name-it-index.png">

Next, double click the `index.html` file to open it so we can begin editing the file, like so:

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/open-index-html.png">

Ok great!  We've created our `index.html` file and opened it in the text editor to start devleoping our website!

### TODO 2 : Add the DOCTYPE

You need to tell the browser you're writing an HTML page by adding the following at the top:

````HTML
<!DOCTYPE html>
````
### TODO 3 : Add Required HTML Tags

By now, you should be familiar with the basic tags needed for the structure of an HTML5 page.  Let's add our `<html>` tags with `<head>` tags and `<body>` tags nested within. 

Like this: 

````HTML
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    
    <body>
    </body>
</html>
````

We made the structure of the site so now we need some content! Give your site a title.

### TODO 4 : Add a Title

You should remember from our previous lessons on HTML5 that you create a title with the `<title>` tag inside of the `<head>`. 

````
<title>Sheba's Amazing Website</title>
````
### TODO 5 : Add Content

Now we'll add some content within the `<body>` tag.

* Create an `<h1>` element and put your name inside of it.
* Below that make a `<p>` element and put your position or job title such as "Student at XYZ High."
* Save your work and click 'Preview' at the top to view it.

It should look something like this:

<img src="img/first-shot.png">

#### Image and list 

* Above the `<h1>` tag add an `<img>` tag. More on image tags [here](http://www.w3schools.com/tags/tag_img.asp).
* We need to add the URL of an actual image with the **src** attribute. Find an image of yourself on the web, right-click on the image, and choose 'Copy Image URL.'
* Paste that URL into the **src** attribute. 

Like this:

`<img src="http://www.adweek.com/tvspy/files/2013/08/turk2_cropped.jpg">`

Save your page and preview it. You should see the image now. If you don't, go back and double check there are no
errors in your `<img>` tag.

### TODO 6 Add More Content : Interests

Next add some of your interests below the `<p>` tag with a list.

* Give the list a title with the `<h3>` tag and called it 'Interests'
* Below that create an unordered list with the `<ul>` tag and three sets of `<li>` tags nested inside

````HTML
<h3>Interests</h3>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
````

Add an interest of your's inside of each `<li>` tag. Save and view your changes.

Should look something like this:

<img src="img/second-shot.png">

### TODO 7 : Navigation

We're going to make a menu so students know how to do it although there aren't any other pages to visit just yet.

* Above the image right under the first `<body>` tag create a menu with the `<nav>` tag. 
* Inside of that create an unordered list with three list items just like we did in the last step.
* Create a link inside of each list item using the `<a>` tag. 
* We need to link to something with the **href** attribute but since we don't have other pages just use a # symbol.
* Finally give each menu item a name: Home, About, Contact

````HTML
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
````

Save and view your work.

### TODO 8 : Make it Pretty

We now have a fairly plain website but it's a website! Let's add some style.

Copy the entire below section and place it inside the `<head>` below the `<title>` tag.

````html
<style>
        body {
            background: #FD7673;
            color: #fff;
            padding: 10px;
            font-family: arial;
        }
        
        img {
            width: 200px;
            float: left;
            margin-bottom: 100px;
        }
        
        p {
            width: 600px;
        }
        
        nav {
            background: #7C0F0A;
            padding: 1px;
        }
    
        nav ul {
            list-style-image: none;
        }
        
        nav ul li {
            display: inline;
            padding-right: 10px;
        }
        
        nav a {
            text-decoration: none;
            color: #fff;
        }
    </style>
````

Check it out! We have some style but not much and some elements are too close together. Let's fix that.

* Find the nav selector and add `margin-bottom: 20px;`
* Save and view the changes. The menu now has some space underneath it!
* The text is smashed up against the image. We can add a margin to give it some room.
* Under the img selector add `margin-right: 40px;`

###Extra Credit

* Google border radius and add it to the `<nav>` element.
* Add a border around the image
* Change the color of the background

### Add C9 to gitignore

If you don't see the `.gitignore`, click on the _gear_ icon in the file system and select "Show Hidden Files.

At the bottom of the `.gitignore` file, add the following:

    .c9
    
Save the `.gitignore` file, and close it.  We've asked git to ignore the Cloud9 IDE configuration files - there's no need for us to manage these in our git version control.

### Go Live


With <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, once you push your changes from your Cloud9 workspace up to your GitHub repository, you page will be live on the Internet.

To do so, you'll need to enter the following git commands into your bash terminal.  Select the bash terminal in the Console View - the bottom window pane in Cloud9.

Enter the following commands, pressing ENTER after each one:

`git add .`

`git commit -m 'First commit'`

`git push`

Give it a couple minutes and you should be able to view your website live on the web at http://username.github.io! (Where 'username' is your own username.)

You are LIVE ON THE INTERNET!