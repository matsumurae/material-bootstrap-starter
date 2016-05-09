# Material + Bootstrap starter kit
A starter kit made with the best of bootstrap and material design, suited for everything.

## Why make another kit?
There are a lot of kits made with bootstrap, but anyone fits my work needs. Is mandatory to use bootstrap, but with a spice of Material. Daemonite made an amazing job making it.

And here is the combination of this!

## Changelog
- **v0.0.1** (09/05/16) - First upload

### Styleguides and conventions used
#### CSS & SASS
- [CSS Guidelines](http://cssguidelin.es/)
- [Sass Guidelin](http://sass-guidelin.es/)
- [Airbnb CSS/Sass styleguide](https://github.com/airbnb/css)
- [7-1 pattern defined in Sass Guidelin](http://sass-guidelin.es/#architecture)

### Cheatsheet
#### Style Guide
*What is a Style Guide?*
Is a document which details how to organize, structure, format and write Sass.

> Contains the DO's and DONT's to use SASS in the project based on the designer's taste.

Are in `docs/` folder inside the `html_static` folder. Name of the file: `styleguide.md`.

#### Documentation
*What is a Documentation?*
Is a document that shows how to use a library or framework.

> Contains all the mixins, functions and variables used in SASS and documented thoroughly.

Are in `docs/sassdoc/` folder inside the `html_static` folder. Name of the file: `index.html`.

There you will see mixins and functions which can contain a lot of annotiations, but the basics and must-have are:
- Description
- Parameters used with it's name, description, type and default value
- Author
- Example - use case of it
- Output - output of the mixin used
- Group - to which belongs

With variables, you will find:
- Description
- Type - if it's a color
- If it's a color, you will see the color behind the variable.

#### Pattern Library
*What is a Pattern Library?*
Is a collection of components, modules and patterns with the code and visual style behind them. Also, named **living document**.

> Contains all the pieces that create your front-end UI.

Are in `docs/pattern-library/` folder inside the `html_static` folder. Name of the file: `styleguide.html`.

There you will see:
- An introduction to that styleguide with name and description
- Each component used in the application grouped by type. `Eg. btn-group and btn are inside Buttons group`
- In component you have: a description of that component, the class used, an example of use and the code

##### Use
`styledown docs/pattern-library/pattern.md docs/pattern-library/config.md > docs/pattern-library/styleguide.html`

- `pattern.md` contains the components definition in Markdown language.
- `config.md` contains the styledown options like head and body. Useful for insert stylesheets, page title and customize the heading of the page.

### Used tools
`Full package use`
- [Bootstrap](http://v4-alpha.getbootstrap.com)
- [MDL Icons](http://google.github.io/material-design-icons/)

`Some parts of package used`
- [MDL Colors from MDL](ps://github.com/google/material-design-lite)
- [Bootstrap MD Components](http://daemonite.github.io/material/)

`Documentation`
- [Styledown](https://github.com/styledown/styledown)
- [SassDoc](http://sassdoc.com/)

### TO DO
- [ ] Finish pattern library for class reference
- [ ] Make sass documentation
- [ ] Convert bootstrap jQuery to pure JS
- [ ] Remove unnecessary parts of bootstrap and material
- [ ] Combine Bootstrap & material in a single framework (another project)
- [ ] Starter index.html page

### Thanks
- To twbs for made [bootstrap](https://github.com/twbs/bootstrap/tree/v4-dev)
- To Daemonite for made [material UI](https://github.com/Daemonite/material) using bootstrap as a base
