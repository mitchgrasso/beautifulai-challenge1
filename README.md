# beautiful.ai-engineer-challenge-1

This is the first of two engineer challenges for software developers applying for a position at Beautiful.ai.

## Summary
Beautiful.ai is a single-page application at the core of which is a complicated view hierarchy that handles 
rendering and laying out the elements that appear on a slide. This project contains a extremely simplified set of view classes
that demonstrate a rough facsimile of the full application's structure. While Beautiful.ai utilizes backbone.js and SVG, for simplification purposes, this project has been written using vanilla JS without any MV frameworks and using divs instead of SVG to render the elements.

The default project creates a SlideCanvas view that fills the browser window. 
A SimpleContainer element view is added to the SlideCanvas and then layed out to fill the available space. 
The SimpleContainer element contains a single SimpleBox child element that is layed out to fill the parent SimpleContainer. 
The SimpleContainer renders a simple UI button that can be used to modify the color of it's SimpleBox child element. 
The SlideCanvas is responsive and will resize itself and it's elements if the browser window is resized.

## Goal
- Review and comprehend the existing code and extend it to add a new element.  
- Code layout logic to position and size multiple elements relative to each other.

## Your Task
Extend this project using the existing classes and patterns to add your own custom container element that can render and layout
one or more SimpleBox child elements with the following constraints:
- Your container element should render a button that adds another SimpleBox child element each time it is clicked.
- Your container element should contain one SimpleBox child element by default.
- Your container element should layout it's child SimpleBoxes horizontally across it's entire width with each child SimpleBox taking
the maximum available width within your container element evenly divided across all the child SimpleBoxes.
- Each child SimpleBox should be 100 pixels in height and vertically centered within your container element.
- There should be a 50 pixel gap between the edges of your container element and it's child SimpleBoxes and a 20 pixel gap between each child SimpleBox.
- Each child SimpleBox should display a number indicating it's index within your container element.

- IMPORTANT: Your new container element should be a new class that inherits from one of the existing classes. You should not need to modify the existing classes.

Your project should look something like this if there are 3 SimpleBoxes added to your container element.

![Example](/example.png)

## Project Constraints
- Build your project from the existing classes using vanilla ES6 javascript and jQuery. Do not add additional 3rd-party javascript libraries.
- All layout and positioning should be done via javascript/jquery. Do not use stylesheets for positioning or sizing of your elements.

## Bonus Tasks
- Utilize the existing animation code so that all the SimpleBoxes animate into their new layout whenever a new SimpleBox is added.
- Extend your class to render a delete button within each child SimpleBox that will remove that SimpleBox from your container element when clicked (hint: you may need to modify the existing classes to implement this behavior)

## Submitting Your Work
Please clone this repo and check it into your own github account. Send an email to jobs@beautiful.ai with a link to the repository and your resume or portfolio links.

Thanks! And Good Luck!
