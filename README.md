###Prerequisites

Students should have basic knowledge of HTML and gone through the [Intro to HTML](https://github.com/OperationSpark/javascript-wiki/wiki/HTML-Intro) lesson. 

####Objectives

* At the end of the lesson students will have built and designed their own website that is viewable on the web.
* The website will be hosted on Github with their own accounts and is something they can build upon on over time. 
* The website will be the student's own and will feature a short profile of them.

First things first, setup a new workspace in Cloud9. 

[Cloud 9 instructions here]

Create a new file and call it index.html

###Write some HTML

You need to tell the browser you're writing an HTML page by adding the following at the top:

```HTML
<!DOCTYPE html>
```

Then we need our `<html>` tags with `<head>` tags and `<body>` tags nested within. 

Like this: 

```HTML
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    
    <body>
    </body>
</html>
```

We made the structure of the site so now we need some content! Give your site a title. 
You should remember from the last lesson that you can do that with the `<title>` tag inside of
the `<head>`. 

```
<title>Sheba's Amazing Website</title>
```

Now we'll add some content within the `<body>` tag.

* Create an `<h1>` element and put your name inside of it.
* Below that make a `<p>` element and put your position or job title such as "Student at XYZ High."
* Save your work and click 'Preview' at the top to view it.

It should look something like this:

<img src="img/first-shot.png">

### Image and list 

* Above the `<h1>` tag add an `<img>` tag. More on image tags [here](http://www.w3schools.com/tags/tag_img.asp).
* We need to add the URL of an actual image with the **src** attribute. Find an image of yourself on the web, right-click on the image, and choose 'Copy Image URL.'
* Paste that URL into the **src** attribute. 

Like this:

`<img src="http://www.adweek.com/tvspy/files/2013/08/turk2_cropped.jpg">`

Save your page and preview it. You should see the image now. If you don't, go back and double check there are no
errors in your `<img>` tag.

Next add some of your interests below the `<p>` tag with a list.

* Give the list a title with the `<h3>` tag and called it 'Interests'
* Below that create an unordered list with the `<ul>` tag and three sets of `<li>` tags nested inside

```HTML
<h3>Interests</h3>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

Add an interest of your's inside of each `<li>` tag. Save and view your changes.

Should look something like this:

<img src="img/second-shot.png">

###Navigation

We're going to make a menu so students know how to do it although there aren't any other pages to visit just yet.

* Above the image right under the first `<body>` tag create a menu with the `<nav>` tag. 
* Inside of that create an unordered list with three list items just like we did in the last step.
* Create a link inside of each list item using the `<a>` tag. 
* We need to link to something with the **href** attribute but since we don't have other pages just use a # symbol.
* Finally give each menu item a name: Home, About, Contact

```HTML
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

Save and view your work. 

###Make it pretty

We now have a fairly plain website but it's a website! Let's add some style.

Copy the entire below section and place it inside the `<head>` below the `<title>` tag.

```html
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
```

Check it out! We have some style but not much and some elements are too close together. Let's fix that.

* Find the nav selector and add `margin-bottom: 20px;`
* Save and view the changes. The menu now has some space underneath it!
* The text is smashed up against the image. We can add a margin to give it some room.
* Under the img selector add `margin-right: 40px;`

###Extra Credit

* Google border radius and add it to the `<nav>` element.
* Add a border around the image
* Change the color of the background

### Make your site live on the web

Head over to [Github](http://github.com) and [create a new repository](https://github.com/new) named username.github.io, where `username` is your username on GitHub.

If you don't alread have an account you can create one. If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.

Copy the following commands into the terminal at the bottom of the screen and press ENTER after each one:

`git init`

`git add .`

`git commit -m 'First commit'`


You'll need to replace 'username' with your username in the following command:

`git remote add origin https://github.com/username/username.github.io`

`git remote -v`

`git push origin master`

Give it a couple minutes and you should be able to view your website live on the web at http://username.github.io! (Where 'username' us your own username.)




