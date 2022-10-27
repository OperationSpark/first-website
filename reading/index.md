# First Website
---

We're gonna go live on GitHub with your very own website!

**Table of Contents**

- [First Website](#first-website)
  - [Prerequisites](#prerequisites)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Take Away](#take-away)
    - [Work Flow](#work-flow)
    - [Type of App](#type-of-app)
    - [The Big 3](#the-big-3)
    - [HTML in 3 Minutes](#html-in-3-minutes)
  - [Lesson Steps](#lesson-steps)
    - [TODO 1 : Create index.html](#todo-1--create-indexhtml)
    - [TODO 2 : Add a Title](#todo-2--add-a-title)
    - [TODO 3 : Create Sections for the Menu and Main Content](#todo-3--create-sections-for-the-menu-and-main-content)
    - [TODO 4 : Create Structure for our Content](#todo-4--create-structure-for-our-content)
    - [TODO 5 : Add Content](#todo-5--add-content)
    - [TODO 6 : Add More Content - Interests](#todo-6--add-more-content---interests)
    - [TODO 7 : Add an Image and List](#todo-7--add-an-image-and-list)
    - [TODO 8 : Navigation and Site Title](#todo-8--navigation-and-site-title)
    - [TODO 9 : Make it Pretty](#todo-9--make-it-pretty)
      - [CSS Selectors in a Nutshell](#css-selectors-in-a-nutshell)
      - [Selecting HTML Elements by ID, Class, or by Tag Type](#selecting-html-elements-by-id-class-or-by-tag-type)
    - [TODO 10 : Play around with the CSS](#todo-10--play-around-with-the-css)
    - [Extra Credit](#extra-credit)
    - [TODO 11 : Add to gitignore](#todo-11--add-update-gitignore)
    - [TODO 12 : Go Live](#todo-12--go-live)

## Required Prerequisites

* [GitHub account](https://github.com/join) - GitHub is a place on the Internet where we can store code! It's a cool social coding platform, kind of like Facebook for coders.
	* ***Don't forget your GitHub username and password!***
* [Gitpod account](https://gitpod.io/) - Gitpod is a place on the Internet where we can _work_ on code and create virtual workspaces for our coding projects.
    
 
## Overview

### Specs

* At the end of the lesson students will have built and designed their own website that is viewable on the web.
* The website will be hosted on GitHub under student's own account, and is something they can build upon on over time.
* The live website is hosted using a service called GitHub Pages: <a href="https://pages.github.com/" target="_blank">If you want to learn more about GitHub Pages, have a look here...</a>
* The website will be the student's own and will feature a short profile of the student.

### Take Away

* Basic HTML5, including HTML (content) and CSS (style).
* Basic web page navigation
* Using git and GitHub

### Work Flow

You'll be creating a whole web page from scratch, from creating the `index.html` file, to writing all the `<html>` tags, adding content and style with CSS.

To complete the assignment, below you'll find numbered **TODO** lesson steps.  While reading this lesson, whenever you come across a **TODO** step, you are expected to do this step, which may require you to create a file, or insert some HTML, CSS or JavaScript in the appropriate place.

Please follow the instructions closely. Sometimes, however, we may be showing you code examples to make a point, so you only need to add code if we're explicitly telling you to do a lesson step, so please be aware of the actual lesson steps.

### Type of App

We are building a website, to be viewed live on the web at your GitHub page, and it will be viewed in a web browser, like Chrome.

## The Big 3

There's really three parts at play in a webpage:

* HTML: Hypertext Markup Language - A set of tags to mark or section-off the structure and content of a webpage.
* CSS: Cascading Style Sheets - A syntax for specifying a set of rules that _style_ web pages.  CSS is responsible for how a webpage looks!
* JavaScript: A programming language that allows web pages to respond to user input, to dynamically change the content or appearance of a webpage, or make request to load data into a webpage.  Essentially, JavaScript is responsible for the _behaviour_ of a webpage.

### HTML in 3 Minutes

Very simply put, HTML is a set of text-tags that tell a web browser how to structure and identify the content of a web page. Developers _markup_ or _section off_ the structure and content of a webpage using HTML tags to _section off_ the parts of the page. Take a look at any webpage, and you'll see things like a header with some type of navigation, maybe a sidebar with more navigation options, and then headings, paragraph text, images and buttons.  All of these _page elements_ are marked as such using HTML tags.

Before we start marking-up our webpage, here's a few things to note about HTML Tags:

Try to remember that most HTML tags have both an opening and closing tag.  So, when you create a `<div>` tag, which stands for _document division_ (a way of sectioning off page content), you must also create its closing tag, like so:

```HTML
<div>
    <!-- All other tags and content in here belong to the <div></div> tag -->
</div>
```

Some HTML tags, like the `<img>` tag, do not require a closing tag, because they are not designed to hold content between the opening and closing tag.  The image tag specifies the source of the image it should display using what's called a tag _attribute_, which is a property of the tag, not content of the tag.  Check it out:

```HTML
<img src="path/to/my-image.jpg">
```

Notice, above, that the `src` attribute is located _inside_ the `<img>` tag.

Also note that HTML tags are hierarchical, and **need to be indented to illustrate their hierarchical relationship!**  Tags can contain content, like text or images, but can also contain or _nest_ other tags. Have a look:

```HTML
<div id="content">
    <div id="sidebar">
        <!-- sidebar content goes here -->
    </div>
    <div id="main">
        <!-- main content goes here -->
    </div>
</div>
```

Above, you'll see this pattern often - notice that we have one `<div>` tag with an id attribute of `content`, and inside this tag, we have two other `<div>` tags, one for a sidebar and one for a main section of the page.  The _content_ `<div>` is the parent of both the _sidebar_ and _main_ `<div>`, while _sidebar_ and _main_ are siblings.  Notice the indentation - this is extremely important as it clearly and visually spells out these hierarchical relationship.  Indentation and relationships of tags (and code blocks) are the things newcomers struggle with the most! Be vigilant here!

## Lesson Steps

### TODO 1 : Create index.html

1. On the left side of your workspace, locate your github.io repository folder.
2. Right click on the folder and select “New File” (See below)
3. Make sure to name the file `index.html` (See below)

Add the following boilerplate code to get started:

````HTML
<!DOCTYPE HTML>
<html>
    <head>
      
    </head>
    
    <body>
      
    </body>
</html>
````

If you're not familiar with the basic tags needed for the structure of an HTML page, you'll want to memorize them.

At least for now, every HTML page contains the DOCTYPE, html, head and body tags.  The `<!DOCTYPE HTML>` tag tells the browser you want to render the document using the most recent version of HTML.  The opening and closing tags of `<html></html>` wrap our html page, but are in fact somewhat redundant.

The next two tag sets make up the two sections of any well formed HTML page: The `<head></head>` tag represents metadata for a webpage, that is, information about the web page used by the browser, providing extra information about the webpage, but is not content.  This is similar to the information on the outside of a postal envelope - the to and from address, the stamp, the processing stamp from the post office - information important to the delivery of the letter, but _nothing_ to do with the _content_ of the letter.

Finally, every page has a `<body></body>` tag, and it is between the body tag that all visible content will be placed.  That's right, all content you want to show to the user will be children of the `<body>`, so pay careful attention to ensure that when you're adding navigation, paragraphs and images tags, you're doing so within the `<body>` tag.

Ok then, we made the structure of the site so now we need some content! Give your site a title.

### TODO 2 : Add a Title

The `<title>` tag of a webpage belongs inside of the `<head>` tag. So go ahead and add your title `<title></title>` tag to your `<head>` tag. This will add your title text to the browser tab.  When your done step 4, your whole `index.html` file should look like this:

````HTML
<!DOCTYPE HTML>
<html>
    <head>
        <title>Sheba's Amazing Website</title>
    </head>
    
    <body>
      
    </body>
</html>
````

### TODO 3 : Create Sections for the Menu and Main Content

**Please note:** All of the tags used to mark our HTML content will reside _between_ the opening and closing of the `<body>` tag.  So for rest of the HTML tags you create, _make sure_ you place them _between_ `<body>` and `</body>` like so:

```HTML
<body>
    <!-- YOUR HTML TAGS GO HERE  -->
</body>
```

We're going to create `<div>` tags to group our content together.  The `<div>` tag stand for _document division_, and they are special tags that help us divide or group together content on our web page.  You can consider them sort of like containers, into which we group content, and those containers can be invisible or _styled_ with visible properties, like a background color, a border, etc.

Go ahead and add the following structure, so that your `<body>` looks like this:

```HTML
<body>
    <div id="all-contents"> 
        <nav>

        </nav>

        <main>

        </main>
    </div>
</body>
```

So, to start grouping together our content in a meaningful way, inside the `<body>` tag, we created a new document division using the `<div>` tag.  This is going to contain all the site content so we annotated it as such by setting its _id_ attribute to `id="all-contents"`.  Attributes are properties that tell us something more specialized about the tag, and you'll come to understand how these work as you work more with HTML.

In particular, the `id` attribute allows us to _uniquely_ identify an HTML element in our webpage. Technically speaking, when giving an id to an element, this id _should be_ unique within the page - no two elements should share the same id in the same webpage, and this is an important distinction.

Finally, inside our _all-contents_ div, we're going to put the site navigation menu and the main content of our site, so we created opening and closing tags for `<nav>` and `<main>`.

### TODO 4 : Create Structure for our Content

Inside the `<main>` element, create two new `<div>` elements. These will act as the two columns of our page - the sidebar and the main content, as noted by the class we give each:

```HTML
<main>
    <div class="sidebar">
      
    </div>

    <div class="content">
      
    </div>
</main>
```

Ok, so far, we've sectioned of our webpage, now we need to add some content...

### TODO 5 : Add Content

Add the following tags inside of the `<div class="content">` tag:

* Create a `<h2> </h2>` element and put your name inside of it.
* Below that make a `<p> </p>` element and inside it put your position or job title such as "Student at XYZ High."

### TODO 6 : Add More Content - Interests

Inside of the `<div class='content'>` element, let's create a section where we can list your interests. Below the `<p>` tag add the following:

* Create a `<div> </div>` element with an `class="interests"` attribute.
* Give the list a title with the `<h3>` tag and the text `Interests`.
* Create an unordered list with the `<ul>` tag and three sets of `<li>` tags nested inside

````HTML
<div id="interests">
    <h3>Interests</h3>
    <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
    </ul>
</div>
````

Update the list to display your own interests!

**Save your page and preview it. To preview your page, right click on the `index.html` file and select "Preview" (See Below)**


### TODO 7 : Add an Image and List 

* Inside of the `<div class="sidebar">` tag, add an `<img>` tag. More on image tags [here](http://www.w3schools.com/tags/tag_img.asp).
* We need to add the URL of an actual image with the **src** attribute. Find an image you would like on your page, you can find an image of yourself from Facebook, or anything else using a Google image search. Right-click on the image, and choose 'Copy Image URL.'
* Paste that URL into the **src** attribute. 

So, your full image tag should look this this:


````HTML
<div class="sidebar">
      <img src="https://github.com/OperationSpark/first-website/blob/master/img/hallebot.png?raw=true">
</div>
````

Save your code and refresh your preview. It should look something like this:

<img src="https://raw.githubusercontent.com/OperationSpark/first-website/master/img/second-shot.png">

You should see the image now. If you don't, go back and double check that there are no
errors in your `<img>` tag.


### TODO 8 : Navigation and Site Title

Your site needs a title! Inside of the `<nav>` add an `<h1> </h1>` element (as in, _header size 1_). Inside the opening and closing brackets, put your website's title, like this:

````HTML
<nav>
    <h1>Hallebot's Glorious Website</h1>
</nav>
````

Next, we're going to make a menu. Linking to other pages forms the foundation of the web. Early on, the web was nothing but a bunch of HTML pages linked to one another. That's still true today although there's a lot more going on as well. We're going to link to a portfolio page and create it in the next lesson.

* Below your `<h1>` element, create an unordered list using the `<ul>` tag. Inside it create two `<li>` tags to contain your list items
* Create a link inside of each list item using the `<a>` tag. 
* Finally give each menu item a name by inserting Home and Portfolio between the opening and closing tags.  See the example below.

````HTML
<nav>
    <h1>Hallebot's Glorious Website</h1>
    <ul>
        <li>
          <a href="index.html"> Home </a>
        </li>
        <li>
          <a href="portfolio.html"> Portfolio </a>
      </li>
    </ul>
</nav>
````

Save and view your work. You now have some menu items! The *Home* link even works since it simply links to the page we are currently working on. The other link is for our portfolio page which we'll build out in the next lesson.

Save and view your work. You should see your title inside of the navbar to the left. 

### TODO 9 : Make it Pretty

We now have a fairly plain website but it's a website! Let's add some style.  Here's where CSS comes in!

Copy the entire below section and place it inside the `<head>` below the `<title>` tag.

```HTML
<style>
    body {
        background: rgb(125, 198, 205);
        color: rgb(45, 45, 45);
        padding: 10px;
        font-family: arial;
    }
    #all-contents {
        max-width: 800px;
        margin: auto;
    }

    /* navigation menu */
    nav {
        background: rgb(239, 80, 41);
        margin: 0 auto;
        display: flex;
        padding: 10px;
    }
    nav h1 {
        display: flex;
        align-items: center;
        color: white;
        flex: 1;
        margin: 0;
    }
    nav ul {
        list-style-image: none;
    }
    nav li {
        display: inline-block;
        padding: 0 10px;
    }
    nav a {
        text-decoration: none;
        color: #fff;
    }

    /* main container area beneath menu */
    main {
        background: rgb(245, 238, 219);
        display: flex;
    }
    .sidebar {
        margin-right: 25px;
        padding: 10px;
    }
    .sidebar img {
        width: 200px;
    }
    .content {
        flex: 1;
        padding: 15px;
    }
    h2, h3 {
        margin: 0px;
    }
</style>
```

Ok, we've pasted-in a bunch of style rules between the `<style></style>` tag, and if we save your work and reload your website, you should see that your page is now styled with some colors and some positioning.

#### CSS Selectors in a Nutshell

CSS allows us to specify styling rules for our HTML elements.  When we say _elements_, we're talking about all the HTML tags within a webpage.  In best practice, we separate the content of an HTML document from the style or presentation of the content.  This allows us to change appearence without modifying content, allows styles to be better managed across multiple pages, and creates a cleaner code base.

In order to style HTML elements, we need a way to _select_ the elements.

#### Selecting HTML Elements by ID, Class, or by Tag Type

When we create HTML elements, we can assign them an id or a class. In our HTML so far, we've given one element an id of _all-contents_ and another a class of _sidebar_. We did this by using the id and class attributes of the `<div>`. For example:

````HTML
<div id="all-contents">
    <div class="sidebar"></div>
</div>
````
By more concretely describing HTML elements by id or class, we can then select those elements by their id or class, and style them the way we like, and for this reason, the rules we specify in CSS are called _selectors_. We can also select elements by their tag type, as in, `body`, `p`, `h1`, `nav`.

Selectors and their styling rules tell the web browser which elements to select, and how to style them.  In a moment, we are going to add some more style to our `<nav>` element, and by doing so using the `nav` selector, we are creating a style rule that will be applied to _all nav tags_ on our webpage.

Selecting an element by id should only return one element, if your web page is well formed, so applying a style rule by id should only style one element on the page.

Selecting an element by its tag type or by its class will style all tags of that type, or all tags of that class.

Finally, in our CSS, we've also shown you two ways to specify selectors, the long form, which is more explicit, and the short form. This is the long form of for an id selector:

````CSS
[id=all-contents] {
    max-width: 800px;
    margin: auto;
}
````

However, the same selector can be spelled using the number symbol `#`, for id, like this:

````CSS
#all-contents {
    max-width: 800px;
    margin: auto;
}
````

The short form to specify a CSS selector by class is the dot `.`, as in:

````CSS
.sidebar {
    margin-right: 25px;
    padding: 10px;
}
````

The long form of sidebar class selector is:

````CSS
[class=sidebar] {
    margin-right: 25px;
    padding: 10px;
}
````

|Type  | Long form                      | Short form            | 
|------| ------------------------------ |-----------------------|
|class | [class=all-contents] { ... }   | .all-contents { ... } |
|id    | [id=portfolio] { ... }         | #portfolio { ... }    |


### TODO 10 : Play around with the CSS

Check it out! We have some style but not much and some elements are too close together. Let's fix that.

Find the `nav` CSS selector within the `<style>` you just pasted in place, it looks like this:

````CSS
nav {
        background: rgb(239, 80, 41);
        margin: 0 auto;
        display: flex;
        padding: 10px;
    }
````

* Under the style rule: `margin: 0 auto;` add `margin-bottom: 20px;`
* Save and view the changes. The menu now has some space underneath it!
* Do you like these colors? Remember that all colors can be represented as a combination of red, green, and blue numbers 0-255. See the `rgb(...)` functions above? Play around with the values in the `rgb(...)` function calls to use your own colors.


### Extra Credit

* Google `border-radius` and add it to the `<nav>` element.
* Add a border around the image

### TODO 11 : Add Update Gitignore

We need to do some cleanup before putting your site onto the internet. This step will make working with our site easier in the future by making our site ignore files and other special directories that we don't need.

* Open the `.gitignore` file
* Delete line 32 which contains `bower_components`
* Then, at the bottom of the `.gitignore` file, make a new blank line by hitting Enter and then type `.*`
* Save the `.gitignore` file, and close it.

### TODO 12 : Go Live

Let's put our site on the Internet so that anyone can look at it!

With <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, once you push your changes from your Gitpod workspace up to your GitHub repository, your page will be live on the Internet!

To do so, you'll need to enter the following git commands into your bash terminal. In the bottom window pane click the plus sign and select "New Terminal".

Enter the following commands, and be careful to place your spaces correctly and press `ENTER` after each one. Read the results of each command and check for errors.

1. Change directories into your github folder. The result should look something like this: `cd "hallebot.github.io"` (the github username of the user in this example is `hallebot`). Once your command looks similar to this, press enter to move on to the next command:
    ```sh
    cd "replace this with your github repository folder"
```

2. First, **add** all the files we worked into git so that they can be archived into a set of changes in our source control:
    ```sh
    git add -A
```
3. Then **commit** everything that has been added to the set of changes:
 	```sh
    git commit -m 'A basic website'
```
4. Finally, sync the repository in Gitpod with the one on github by **pushing** your set of changes. **If** you are prompted, just type 'yes' to proceed, but you may not be asked.
   	```sh
    git push
```
If asked, enter your Github username and password. 
**Note:** While entering your password, the cursor will _not_ move as you type. This is an intentional security feature so that if someone is looking at your screen, they can not see the what you're typing.

You just sent your code to github where it will be backed up and made into a website anyone can see. You should be able to see your code should now appear on the github page from the Setup step above.

Give it a couple minutes and you should be able to view your website live on the web at http://username.github.io/username.github.io! (Where 'username' is your own GitHub username.)

Congratulations!  You are LIVE ON THE INTERNET!