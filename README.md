## Project overview
The idea behind this project is to create a SPA (within 3 hours) that connects to a REST API and returns a list of images. Each image will have a button were the user can click through and see more details about that image. 

## Project criteria
**Initial screen**
In the initial screen, I want to display 50 images, with the following 
* thumbnail of each image (64px wide)
* author
* more details button (that clicks through to another page showing more details)

**More details screen**
Once the user clicks on the more details button, i want the user to see the following
* full width version of image
* author details
* dimensions details
* download button
* button to return to home screen

## Approach
As there is a time limit on the project, I have opted to use frameworks that I am familiar with

* ReactJS (Create React App to save time setting up webpack)
* Bootstrap (for styling)
* React Testing Library (for testing)

## What would i do differently
I really wanted to maximise how much I could complete before running out of time on this project but ideally, as it's such a small project, I would like to rip out CRA and create the project from scratch. I would also like to remove Bootstrap and apply my own styles, using the BEM naming conventions, CSS Grid/Flexbox and SASS. Because of the criteria on the thumbnail size, i have opted to display the data in a table, however, I think increasing the thumbnail size and changing the layout to a gallery style will be more aesthetically pleasing to the user. It would also be beneficial to add pagination to the results to reduce the load time on the page, either by allowing the user to page through or use a load more button.

## Issues
The biggest issue i had with the project was applying the Download button. Normally, the HTML5 download attribute would allow a user to download a file however browsers only support same-origin file downloads. To get around this issue, I searched for possible solutions, and came across the javascript Blob. By creating a Blob object, I was able to store the image url and download.

## Run project locally
Once you have downloaded the source code to your local machine, within the project directory, run the following commands

1. npm install - this will install all the dependencies needed to run the application
2. npm start (should automatically open up the application in the browser, if not you can view it at http://localhost:3000/)

**Testing**
If you would like to run the tests, simply run the following command
1. npm test -- --coverage --watchAll