'use strict';
const path = require('path');
const Browser = require('zombie');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 7777;
const app = express();
const browser = new Browser();
const server = `http://localhost:${PORT}/`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../../')));
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

describe('First Website', function(){

  beforeEach(function(done) {
    browser.visit(server, done);
  });

  it('should have basic layout', function(done){
    browser.assert.elements('head', 1);
    browser.assert.elements('head > title', 1);
    browser.assert.elements('body', 1);
    browser.assert.elements('nav', 1);
    browser.assert.elements('main', 1);
    done();
  });

  it('should have basic layout for nav tag', function(done){
    browser.assert.elements('nav > header', 1);
    browser.assert.elements('nav > ul', 1);
    browser.assert.elements('nav > ul > li', {atLeast: 2});
    browser.assert.elements('nav > ul > li > a', {atLeast: 2});
    done();
  });

  it('should have basic layout for main tag', function(done){
    browser.assert.elements('main > div.sidebar', 1);
    browser.assert.elements('main > div.sidebar > img', {atLeast: 1});
    browser.assert.elements('main > div.content', 1);
    browser.assert.elements('main > div.content > p', {atLeast: 1});
    browser.assert.elements('main > div.content > section.interests', 1);
    browser.assert.elements('main > div.content > section.interests > header', 1);
    browser.assert.elements('main > div.content > section.interests > ul', 1);
    browser.assert.elements('main > div.content > section.interests > ul > li', {atLeast: 3});
    done();
  });
});
