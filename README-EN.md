# Frontend developer recruiting test - TechDivision GmbH

* Duration: 2.5 hours
* Languages: HTML, CSS (SASS/LESS), JS.

You will edit and save the files you create or customize directly into your cloned git fork of the recruiting test repository. 
Upon completion, commit the entire repository, including your files, and push your changes back to your fork. Once you're done, let us know, so we can look at and evaluate your solution.

Our evaluation will take the following factors into account:

1. The time until completion (maximum 2.5 hours)
2. Quality of your implementation
3. Usability of your solution
4. Correct rendering, even on different devices and screen sizes
5. Use of up-to-date approaches
6. Quantity of implemented tasks

## Preparation

The recruitment test assumes that you already have basic knowledge of using npm or yarn, although they are not necessarily required. The test consists of the following files:

* This `README-EN.md` file with information about the procedure
* A `package.json` as a framework in case you want to add dependencies
* A minimal project structure within the `src` folder including two images that can be used
* The wireframes that are included in this readme

After you have successfully cloned your forked repository via git, you can think about any dependencies you may need.
If you use a CSS preprocessor, which is optional but preferred, you should set it up now.

To do so, change to the project directory and start editing.

```shell
cd recruiting-test-fe
```

## Tasks

Below you can see the mockup wireframes of a web interface.
Your task is to build it in several steps. There are deliberately several small additional tasks,
whose implementation will be taken into account in the evaluation.

The order in which you work on the tasks is up to you.

In a fictitious customer project we need an overview of individual CMS content entries, e.g. for a cooking blog.

The overview should look similar to the following wireframe.

    It is not necessary to copy it pixel by pixel though!

![Entry overview](mockups/overview.png "Entry overview")

Create such an overview within the given `index.html` file.
It is important that the elements within a row have the same height, regardless of their respective content.
Above all, make sure that the individual elements are displayed consistently and that the page can be viewed on different devices.

    Since we want to get to know your "manual" skills, the use of ready-made CSS frameworks such as Bootstrap is not desired here.

### Responsive
Make sure that content is responsive, i.e. dynamically adapts to changing viewport sizes.

### Breakpoint
In order to make the page appealing to mobile users, you should include a breakpoint at 480 pixels. Below this limit the
elements become a single-column display, showing all elements below each other.

### "More" overlay

As you can see from the first wireframe, the individual post previews have a *More* button.
Clicking on this button should open a modal similar to the one shown in the following wireframe:

![Detail modal](mockups/overlay.png "Detail modal")

As a bonus, you can also include the usual functions of a modal, such as closing when you click the *X* or press the escape key.

### Special icons

The "customers" CI/CD requires some special icons. Use an external font (e.g. [Font Awesome](https://fontawesome.com/)) and use it for the *Help* icon on the overlay.

### Filter list

Sticking with our cooking blog example, the open modal contains a collection of recipe suggestions.
Exemplarily represented by this Lorem Ipsum list:

- Lorem ipsum dolor sit amet
- Dolor parturient dapibus
- Risus augue
- Enim facilisis
- Inceptos etiam pulvinar
- Blandit mattis
- Sed dolor bibendum
- Velit vestibulum
- Egestas fringilla
- Suspendisse at dictum

These should be filterable with the help of Javascript in real time.
For example, when entering the letter *l* in the search field, the list should be reduced to all entries that also contain an *l*.
When entering another letter, e.g. *o* filtering should be done showing all entries that contain the letter combination *lo* and so on.

This behavior can be achieved both by using a ready-made Javascript library as well as self-developed pure JS code.
Self-developed JS code is considered a bonus here.
