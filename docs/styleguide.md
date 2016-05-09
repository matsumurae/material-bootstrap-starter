# Sass style guide
*A mostly reasonable approach to Sass with [Sass Guidelines](http://sass-guidelin.es/), [Css Guidelines](http://cssguidelin.es/) and [Airbnb css/sass styleguide](https://github.com/airbnb/css/blob/master/README.md#terminology) as a base and a spice of Amanda's taste*

## Table of contents
[TOC]

## What is
Is a document which details how to organize, structure, format and write Sass.

> Contains the DO's and DONT's to use SASS in the project based on the designer's taste.

## What not
### It's not a pattern library
*What is a Pattern Library?*
Is a collection of components, modules and patterns with the code and visual style behind them. Also, named **living document**.

> Contains all the pieces that create your front-end UI.

### It's not a documentation
*What is a Documentation?*
Is a document that shows how to use a library or framework.

> Contains all the mixins, functions and variables used in SASS and documented thoroughly.

## Conventions
We are going to use [CSS Guidelines](http://cssguidelin.es/), [Sass Guidelines](http://sass-guidelin.es/) and [Airbnb CSS/Sass styleguide](https://github.com/airbnb/css) for this job. For architecture / structure of pattern we are going to use the [7-1 pattern defined in Sass Guidelines](http://sass-guidelin.es/#architecture).

### Architecture
The 7-1 pattern: 7 folders, 1 file. Basically, you have all your partials stuffed into 7 different folders, and a single file at the root level (usually named main.scss) which imports them all to be compiled into a CSS stylesheet.

- `base/`
- `components/`
- `layout/`
- `pages/`
- `themes/`
- `abstracts/`
- `vendors/`
- `main.scss`

*Note:* All quoted with `optional` are not neccesary if you are going to develop in React, because you need **components** not **pages**.

#### Base `mandatory`
The `base/` folder holds what we might call the boilerplate code for the project.

There you will find (exactly these):
- `_base.scss` contains standard styles for commonly used html elements
- `_reset.scss` contains reset styles
- `_typography.scss` contains typographic specific rules
- `_fonts.scss` contains fonts imports and variables for it
- `_grid.scss` contains the grid system rules

#### Components `mandatory`
There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules. Is more focused on widgets. It contains all kind of specific modules.

There you might find:
- `_button.scss`
- `_carousel.scss`
- `_thumbnail.scss`
- ...

#### Layout `optional`
The `layout/` folder contains everything that takes part in laying out the site or application. Also be called `partials/`.

There you might find:
- `_header.scss`
- `_footer.scss`
- `_sidebar.scss`
- `_navigation.scss`
- ...

#### Pages `optional`
If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page.

There you might find:
- `_home.scss`
- `_contact.scss`
- ...

#### Themes `optional`
There you can have differents themes for your application.

There you might find:
- `_theme.scss`
- `_admin.scss`
- ...

#### Utilities `mandatory`
Also called `abstracts/` or `helpers/`. Contains all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

There you might find:
- `_variables.scss`
- `_mixins.scss`
- `_functions.scss`
- `_placeholders.scss`

When working on a very large project with a lot of abstract utilities, it might be interesting to group them by topic rather than type, for instance typography (`_typography.scss`), theming (`_theming.scss`), etc. Each file contains all the related helpers: variables, functions, mixins and placeholders. Doing so can make the code easier to browse and maintain, especially when files are getting very long.

#### Vendors `optional`
Contains all the CSS files from external libraries and frameworks.

There you might find:
- `_bootstrap.scss`
- `_fontawesome.scss`
- ...

#### main.scss
The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:
1. `utilities/`
2. `vendors/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`
7. `themes/`

**Rules:**
- One `@import` per folder
- Linebreak after `@import`
- Each file on it is own line
- New line after the last import from a folder
- File extensions and leading underscores omitted

```sass
@import
  'abstracts/variables',
  'abstracts/functions',
  'abstracts/mixins',
  'abstracts/placeholders';

@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
```

### Naming
### Variables
Use dash-cased variables `$my-variable`. If you need to use a variable within the same file with an underscore `$_my-variable`.

#### Constants
Use lowercase [Hypen Delimited](http://cssguidelin.es/#naming-conventions).

```sass
// Yep
.page-head {}

// Nope
.pageHead {}

// Nope
.sub_content {}
```

#### Components
Use [BEM](http://getbem.com/) methodology.

**Why this and not another?**
- It is easy to use and to learn
- Makes your Sass modular and reusable
- Start think in components, which is a good approach if you want to use React

### Syntax
- Use the `.scss` instead of `.sass`.
- Add `@include` declarations under CSS properties.
    ```sass
    .btn-green {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);
      // ...
    }
    ```

- Add nested selectors last and nothing goes after them.
    ```sass
    .btn {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);

      .icon {
        margin-right: 10px;
      }
    }
    ```

- If have a single-line rule, use one line to define.
    ```sass
    .foo { background-color: red; }
    ```

### Comments
**Use single-line comments `//` always.**
Avoid using multi-line comments `/* */` because all documenting tools for *pattern library* uses and it can cause problems if you overuse.

### Placeholders
Placeholders are classes that do not output when sass is compiled. *It is like add sass comments (//).*

If you want to use variables inside, use *mixins* instead. Placeholder do not accept variables.

```sass
%center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container {
  @extend %center;
}
```

### Mixins
Mixins returns CSS rules inside class you use `@include`. Use for any css rules you need to use in some sites. That sounds like *use it for repeated code* and that is not the idea. For reuse code, go to **Placeholders** section.

*Remember: sass will duplicate the output of the mixin every time you use it.*

**Use it for add css rules inside the class where you import. You can do argument-less mixins or mixins with arguments.**

```sass
// Mixin argument-less
@mixin center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Use
.my-module {
  @include center;
}
```

```sass
// Mixin with arguments
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}

// Use
.foo {
  @include prefix(transform, rotate(90deg), ('webkit', 'ms'));
}
```

### Functions
Functions returns a single value. Use for reusable logic like math calcs and anything you can imagine.

**Use it for any logic you need (calculations)**

```sass
// Function
@function my-calculation-function($some-number, $another-number){
  @return $some-number + $another-number
}

// Use
.my-module {
  padding: my-calculation-function(10px, 5px);
}
```

### `@extend` and `@include`
**Avoid using `@extend` when you can. Use only with placeholders.**

1. Use `@extend` **always** as the first statement of the class. Otherwise, it you put lastly, it will overwrite your styles.
2. `@include` can go first or last, depends on the context. If includes sass styles, add first. Otherwise, add lastly.

### Loops
#### While
**Avoid using it. REALLY.**

#### For
The `@for` loop might be useful when combined with CSS’ `:nth-*` pseudo-classes. Except for these scenarios, prefer an `@each` loop if you have to iterate over something.

```sass
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
```

Always use `$i` as a variable name to stick to the usual convention and unless you have a really good reason to, never use the `to` keyword: always use `through`. Many developers do not even know Sass offers this variation; using it might lead to confusion.

#### Each
It provides a clean API to iterate over a list or a map. When iterating on a map, always use `$key` and `$value` as variable names to enforce consistency.

```sass
// Single key
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}

// Key, value
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
```

### Selectors
#### Nested selectors
**Do not nest selectors more than one levels deep.** If you can avoid nesting, AVOID IT. They are not reusable and specific to that class, what means that we can not reuse in other parts of the web.
