'use strict';
const path = require('path');
const Browser = require('zombie');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = 7777;
const app = express();
const browser = new Browser();
const server = `http://localhost:${PORT}/`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `../../../`)));
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

describe('First Website', function(){

  beforeEach(function(done) {
    browser.visit(server, done);
  });

  describe('basic markup', function() {
    const singleTags = ['head', 'title', 'body', 'nav', 'main'];

    singleTags.forEach(tag => {
      it(`should have <${tag}> tag`, function(done) {
        browser.assert.elements(tag, { atLeast: 1 }, `<${tag}> tag does not exist`);
        browser.assert.elements(tag, 1, `More than 1 <${tag}> tag exists`);
        done();
      });
    });

    it('should have <title> tag inside <head> tag', function(done) {
      browser.assert.elements('title', { atLeast: 1 }, '<title> tag does not exist');
      browser.assert.elements('title', 1, 'More than 1 <title> tag exists');
      browser.assert.elements('head > title', 1, '<title> tag is not inside <head> tag');
      done();
    });

    it('should have <div> tag with id "all-contents"', function(done) {
      browser.assert.elements('div', { atLeast: 1 }, `<div> tag does not exist`);
      browser.assert.elements('div#all-contents', 1, `<div> tag does not have id #all-contents`);
      done();
    });
  });

  describe('nav layout', function() {
    it('should have <nav> tag inside <div> tag with id "all-contents"', function(done) {
      browser.assert.elements('nav', { atLeast: 1 }, 'More than 1 <nav> tag exists');
      browser.assert.elements('nav', 1, 'More than 1 <nav> tag exists');
      browser.assert.elements('div#all-contents > nav', 1, '<nav> tag is not inside <div> tag with id "all-contents"');
      done();
    });
    
//     it('should have <header> tag inside <nav> tag', function(done) {
//       browser.assert.elements('header', { atLeast: 1 }, '<header> tag does not exist');
//       browser.assert.elements('nav > header', 1, '<header> tag is not inside <nav> tag');
//       done();
//     });


    it('should have <ul> tag inside <nav> tag', function(done) {
      browser.assert.elements('ul', { atLeast: 1 }, '<ul> tag does not exists');
      browser.assert.elements('nav > ul', 1, '<ul> tag is not inside <nav> tag');
      done();
    });

    it('should have at least 2 <li> tags inside <ul>', function(done) {
      browser.assert.elements('li', { atLeast: 2 }, 'Two <li> tags do not exist');
      browser.assert.elements('ul > li', { atLeast: 2 }, '<li> tags are not inside <ul> tag');
      done();
    });

    it('should have <a> tags inside each <li> tag', function(done) {
      browser.assert.elements('a', { atLeast: 2 }, 'Two <a> tags do not exist');
      browser.assert.elements('li > a', { atLeast: 2 }, '<a> tags are not inside <li> tags');
      done();
    });
  });

  describe('main layout', function() {
    it('should have <main> tag inside <div> tag with id "all-contents"', function(done) {
      browser.assert.elements('main', { atLeast: 1 }, '<main> tag does not exist');
      browser.assert.elements('main', 1, 'More than 1 <main> tag exists');
      browser.assert.elements('div#all-contents > main', 1, '<main> tag is not inside <div> tag with id "all-contents"');
      done();
    });

    it('should have <div> tag, with class "sidebar," inside <main> tag', function(done) {
      browser.assert.elements('div', { atLeast: 2 }, 'Second <div> tag does not exist');
      browser.assert.elements('main > div', { atLeast: 1 }, '<div> tag is not inside <main> tag');
      browser.assert.elements('main > div.sidebar', { atLeast: 1 }, '<div> tag does not have class "sidebar"');
      done();
    });

    it('should have <img> tag inside <div> tag with class "sidebar"', function(done) {
      browser.assert.elements('img', { atLeast: 1 }, 'Second <div> tag does not exist');
      browser.assert.elements('main > div.sidebar > img', { atLeast: 1 }, '<div> tag does not have class "sidebar"');
      done();
    });

    it('should have <div> tag, with class "content," inside <main> tag', function(done) {
      browser.assert.elements('div', { atLeast: 3 }, 'Third <div> tag does not exist');
      browser.assert.elements('main > div', { atLeast: 2 }, 'Second <div> tag is not inside <main> tag');
      browser.assert.elements('main > div.content', { atLeast: 1 }, '<div> tag does not have class "content"');
      done();
    });
    
//     it('should have <header> tag inside <div> tag with class "content"', function(done) {
//       browser.assert.elements('header', { atLeast: 1 }, '<header> tag does not exist');
//       browser.assert.elements('header', { atLeast: 2 }, 'Second <header> tag does not exist');
//       browser.assert.elements('div.content > header', 1, '<header> tag is not inside <div> tag with class "content');
//       done();
//     });

    it('should have <p> tag inside <div> tag with class "content"', function(done) {
      browser.assert.elements('p', { atLeast: 1 }, '<p> tag does not exist');
      browser.assert.elements('div.content > p', 1, '<p> tag is not inside <div> tag with class "content');
      done();
    });
    
    
//     it('should have <section> tag, with class "interests," inside <div> tag with class "content"', function(done) {
//       browser.assert.elements('section', { atLeast: 1 }, '<section> tag does not exist');
//       browser.assert.elements('div.content > section', 1, '<section> tag is not inside <div> tag with class "content');
//       browser.assert.elements('div.content > section.interests', 1, '<section> tag does not have class "interests');
//       done();
//     });

//     it('should have <header> tag inside <section> tag with class "interests"', function(done) {
//       browser.assert.elements('header', { atLeast: 1 }, '<header> tag does not exist');
//       browser.assert.elements('header', { atLeast: 2 }, 'Second <header> tag does not exist');
//       browser.assert.elements('header', { atLeast: 3 }, 'Third <header> tag does not exist');
//       browser.assert.elements('section.interests > header', 1, '<header> tag is not inside <section> tag with class "interests"');
//       done();
//     });

    
//     it('should have <ul> tag inside <section> tag with class "interests"', function(done) {
//       browser.assert.elements('ul', { atLeast: 1 }, '<ul> tag does not exist');
//       browser.assert.elements('ul', { atLeast: 2 }, 'Second <ul> tag does not exist');
//       browser.assert.elements('section.interests > ul', 1, '<ul> tag is not inside <section> tag with class "interests"');
//       done();
//     });

    it('should have 3 <li> tags for interests inside <ul>', function(done) {
      browser.assert.elements('li', { atLeast: 1 }, '<li> tag does not exist');
      browser.assert.elements('li', { atLeast: 3 }, 'Third <li> tags does not exist');
      browser.assert.elements('li', { atLeast: 4 }, 'Fourth <li> tags does not exist');
      browser.assert.elements('li', { atLeast: 5 }, 'Fifth <li> tags does not exist');
      //browser.assert.elements('section.interests > ul > li', 3, '<ul> tag is not inside <section> tag with class "interests"');
      done();
    });
  });
});
