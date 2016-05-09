
How to use
--------

#### You should take a look if
1. Are going to add any component to Angular or edit an existent
2. Want to edit any SASS style
3. Want to add style without editing SASS (only adding classes to Angular components)

#### Notes
1. All the custom classes start by `xtg-` and the type. Eg. `xtg-shadow--2dp` or `xtg-color--grey-300`.
2. All the utilities classes have simple name followed by the type. Eg. `display--block` and `display--inline`.

Utilities
-------

These classes are helpers that can be used anywhere in the website with any (or almost) element.

<h3 class="sg-section-heading">Static</h3>

### Display block

Use the `display--block` class.

Useful for: <br/>
`anchor`, `button`, `label`

    @example
    a.btn.display--block Block anchor

### Display inline

Use the `display--inline` class.

Useful for: <br/>
`p`, `checkbox`, `div`, `checkbox`, `radio`

    @example
    p.display--inline.xtg-color--grey-300 Inline paragraph with background color

### Position relative

Use the `pos--rel` class.

Useful for `everything`.

    @example
    p.pos--rel.xtg-color--grey-300 Relative paragraph with background color

### Position fixed

Use the `pos--fix` class.

Useful for `everything`.

    @example
    p.pos--fix.xtg-color--grey-300 Fixed paragraph with background color

### Position absolute

Use the `pos--abs` class.

Useful for `everything`.

    @example
    p.pos--abs.xtg-color--grey-300 Absolute paragraph with background color

### Float left

Use the `float--left` class.

Useful for everything.

    @example
    p.float--left.xtg-color--grey-300 Floated paragraph to left
    br

### Float right

Use the `float--right` class.

Useful for everything.

    @example
    p.float--right.xtg-color--grey-300 Floated paragraph to right
    br

### Text uppercase

Use the `text--uppercase` class.

Useful for any text.

    @example
    p.text--uppercase text in uppercase

### Border top for cards

Use the `card--border-top` class.

Use a border for divide providers from manual info in cards.

Useful for `cards`.

    @example
    div.xtg-card.xtg-shadow--2dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Card title
      div.xtg-card__content
      div.xtg-card__content.card--border-top
        p Here are the border top

### Highlight

Use the `highlight` class.

For highlight content.

Useful for `data provider container`.

    @example
    div.data__provider.highlight.padding-10
      p.xtg-label.xtg-color--indigo-500.xtg-color-text--white TOU
      p.xtg-label.xtg-color--light-blue-500.xtg-color-text--white Hotel 1
      div.checkbox.checkbox-adv.display--inline
        label(for='checkbox-2')
          input.access-hide(type='checkbox', name='property_desc', id='checkbox-2')
          | Select all
          span.checkbox-circle
          span.checkbox-circle-check
          span.checkbox-circle-icon.material-icons.icon done
      div.xtg-option
        div.xtg-select__label--textarea
          span.xtg-select__label--lang.xtg-color--amber-500.xtg-color-text--white.xtg-grid--center es_ES
          span.xtg-select__label--text
            |Lorem ipsum dolor sit amet, consectetur adipisicing
            |elit. Officia iure, architecto reiciendis, impedit
            |reprehenderit aliquam quia cum ratione, minus
            |laudantium sed labore voluptatem dolor facilis
            |molestias tempora deserunt. Praesentium, enim.

<h3 class="sg-section-heading">Dynamic</h3>

These classes are helpers that can be used anywhere in the website with any (or almost) element. Are dynamic styles made for make faster design.

### Width

Use the `width-[quantity]` class.

For choose width of an element. Goes from 0 to 100, every ten and uses percentage.

Useful for everything.

    @example
    p.width-20.xtg-color--grey-300 Width 20%
    p.width-50.xtg-color--teal-300 Width 50%

### Height

Use the `height-[quantity]` class.

For choose height of an element. Goes from 0 to 100, every ten and uses percentage.

Useful for:<br/>
`xtg-option anchor`, `xtg-option button`

    @example
    div.xtg-option
      div.xtg-select__label--textarea
        span.xtg-select__label--lang.xtg-color--amber-500.xtg-color-text--white.xtg-grid--center es_ES
        span.xtg-select__label--text
          |Lorem ipsum dolor sit amet, consectetur adipisicing
          |elit. Officia iure, architecto reiciendis, impedit
          |reprehenderit aliquam quia cum ratione, minus
          |laudantium sed labore voluptatem dolor facilis
          |molestias tempora deserunt. Praesentium, enim.
      div.xtg-buttons
        a.display--block.xtg-grid--center.height-50.xtg-btn--edit.xtg-color--amber-300.xtg-color-text--white
          i.icon.material-icons create
          a.display--block.xtg-grid--center.height-50.xtg-btn--edit.xtg-color--red-A700.xtg-color-text--white
            i.icon.material-icons delete


### Padding with position

Use the `padding--[position]-[quantity]` class.

For add padding to the side you want. Goes from 0 to 100, every ten and uses px.

Useful for everything.

    @example
    p.padding--left-20.xtg-color--grey-300 Padding left 20px
    p.padding--right-10.xtg-color--teal-300 Padding right 10px
    p.padding--top-40.xtg-color--lime-300 Padding top 40px
    p.padding--bottom-30.xtg-color--amber-300 Padding bottom 30px

### Padding without position

Use the `padding-[quantity]` class.

For add padding to all the sides. Goes from 0 to 100, every ten and uses px.

Useful for everything.

    @example
    p.padding-20.xtg-color--grey-300 Padding 20px
    p.padding-10.xtg-color--teal-300 Padding 10px

### Margin with position

Use the `margin--[position]-[quantity]` class.

For add margin to the side you want. Goes from 0 to 100, every ten and uses px.

Useful for everything.

    @example
    p.margin--left-20.xtg-color--grey-300 Margin left 20px
    p.margin--right-10.xtg-color--teal-300 Margin right 10px
    p.margin--top-40.xtg-color--lime-300 Margin top 40px
    p.margin--bottom-30.xtg-color--amber-300 Margin bottom 30px

### Margin without position

Use the `margin-[quantity]` class.

For add margin to all the sides. Goes from 0 to 100, every ten and uses px.

Useful for everything.

    @example
    p.margin-20.xtg-color--grey-300 margin 20px
    p.margin-10.xtg-color--teal-300 margin 10px

<h3 class="sg-section-heading">Shadows</h3>

Box shadow for add in any element.  **Styles stealed from MDL.**

### Small

Use the `xtg-shadow--2dp` class.

Mandatory use with `cards` as base, instead it will don't have border around it because shadow makes the job.

    @example
    div.xtg-card.xtg-shadow--2dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Small shadow
      div.xtg-card__content

### Medium-small

Use the `xtg-shadow--3dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--3dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Medium small shadow
      div.xtg-card__content

### Medium

Use the `xtg-shadow--4dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--4dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Medium shadow
      div.xtg-card__content

### Medium-large

Use the `xtg-shadow--6dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--6dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Medium large shadow
      div.xtg-card__content

### Large

Use the `xtg-shadow--8dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--8dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Large shadow
      div.xtg-card__content

### Extra large

Use the `xtg-shadow--16dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--16dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Extra large shadow
      div.xtg-card__content

### Ultra large

Use the `xtg-shadow--24dp` class.

Useful for:<br/>
`cards`, `button`, `anchor`, `modal`

    @example
    div.xtg-card.xtg-shadow--24dp
      div.xtg-card__title
        h3.xtg-typo--display-3 Ultra large shadow
      div.xtg-card__content

<h3 class="sg-section-heading">Grid</h3>

Custom grid for elements.

### Center-center

Use the `xtg-grid--center` class. It will not work everywhere.

Useful for:<br/>
`button`, `anchor`, `text`

    @example
    div.xtg-select__label--textarea
      span.xtg-select__label--lang.xtg-color--amber-500.xtg-color-text--white.xtg-grid--center es_ES
      span.xtg-select__label--text
        |Language tag is aligned depending on the size
        |of the text, so... do not need to worry about the label, it's
        |position is calculated depending on this! Let's see it!<br/>
        |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        |eiusmod tempor incididunt ut labore et dolore magna aliqua.
        |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        |nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        |reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        |pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        |culpa qui officia deserunt mollit anim id est laborum.


Icons
--------

We use Material Icons specified in the [Google Project](https://design.google.com/icons/). Go there for know available icons and their names.

### Use

Use the `material-icons` class inside a `span` or `i` tags.

Remember to add `icon` class with it, instead the icon will have font-size defined in the font-face of material icons.

    @example
    div.col-md-6
      p icon class added
      a.btn.xtg-color--red-A700.xtg-color-text--white
        span.material-icons.icon pets
      a.btn.xtg-color--lime-600.xtg-color-text--white
        span.material-icons.icon visibility
    div.col-md-6
      p icon class not added
      a.btn.xtg-color--indigo-500.xtg-color-text--white
        span.material-icons star rate

### Size

Use `md-[size]` with `material-icons` class.

Have 4 diferent size: `18`, `24`, `36` and `48`. **Remember**
not use `icon` class here!

    @example
    div.col-md-3
      i.material-icons.md-18 face
      p 18px
    div.col-md-3
      i.material-icons.md-24 face
      p 24px
    div.col-md-3
      i.material-icons.md-36 face
      p 36px
    div.col-md-3
      i.material-icons.md-48 face
      p 48px

### State

Use `md-dark` class for dark icon or `md-light` class for light icon.

Also, you can define the state of the icon with `md-inactive` class. This will set icon in a disabled style.

    @example
    div.col-md-6
      i.material-icons.md-dark.md-24 face
      i.material-icons.md-dark.md-inactive.md-24 face
    div.col-md-6.xtg-color--blue-grey-900
      i.material-icons.md-light.md-24 face
      i.material-icons.md-light.md-inactive.md-24 face

### Color

You can use all `xtg-color-text` classes available for use with it. **Remember**
not to use `xtg-color` class, because it colors the background!

    @example
    div.col-md-6
      p good
      i.material-icons.md-24.xtg-color-text--amber-300 face
      i.material-icons.md-24.xtg-color-text--red-300 face
    div.col-md-6
      p bad
      i.material-icons.md-24.xtg-color--amber-300 face
      i.material-icons.md-24.xtg-color--red-300 face


Alerts
----------

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. They are created dynamically using Bootstrap alerts as a base and designed custom alerts.

### Alert size

Use `xtg-alert--[size]` class with `xtg-alert` if you want your alert smaller.

There are available three sizes: big, normal (no need to use any class) and small.

    @example
    div.xtg-alert--warning.xtg-alert--big
      p.xtg-alert__title This is big size.
    div.xtg-alert--success
      p.xtg-alert__title This is normal size.
    div.xtg-alert--info.xtg-alert--small
      p.xtg-alert__title This is small size.

### Alert colors

There are available six colors, defined by type: `danger`, `success`, `info`, `warning`, `default` and `primary`.

    @example
    div.xtg-alert--success
      p.xtg-alert__title
        strong Well done!
        <br/>
        |You successfully read this important alert message.
    div.xtg-alert--info
      p.xtg-alert__title
        strong Heads up!
        <br/>
        |This alert needs your attention, but it's not super important.
    div.xtg-alert--warning
      p.xtg-alert__title
        strong Warning!
        <br/>
        |Better check yourself, you're not looking too good.
    div.xtg-alert--danger
      p.xtg-alert__title
        strong Oh snap!
        <br/>
        |Change a few things up and try submitting again.
    div.xtg-alert--default
      p.xtg-alert__title
        strong Here we are!
        <br/>
        |This is a default alert using grey as base.
    div.xtg-alert--primary
      p.xtg-alert__title
        strong Oh dear!
        <br/>
        |This is a primary alert using the page base color.


Modals
---------

Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults. Material Design style.

### Size

There are available two sizes: normal and small.

Use `modal-xs` for small size.

    @example
    a(class='btn waves-attach waves-button waves-light waves-effect',
      data-toggle='modal',
      data-target='#modal') Open normal modal
    a(class='btn waves-attach waves-button waves-light waves-effect',
      data-toggle='modal',
      data-target='#modal-xs') Open small modal

    div(class='modal fade',
        id='modal-xs', tabindex='-1',
        role='dialog',
        aria-labelledby='myModalLabel',
        aria-hidden='true')
      div(class='modal-dialog modal-xs', role='document')
        div.modal-content
          div.modal-heading
            p.modal-title Small modal
          div.modal-inner
            p.text-black-hint
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          div.modal-footer
            p.text-right
              a(class='btn btn-flat xtg-color-text--grey-400', data-dismiss='modal') Cancel
              a(class='btn btn-flat btn-brand-accent', data-dismiss='modal') Accept

    div(class='modal fade',
        id='modal', tabindex='-1',
        role='dialog',
        aria-labelledby='myModalLabel',
        aria-hidden='true')
      div(class='modal-dialog', role='document')
        div.modal-content
          div.modal-heading
            p.modal-title Normal modal
          div.modal-inner
            p.text-black-hint
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          div.modal-footer
            p.text-right
              a(class='btn btn-flat xtg-color-text--grey-400', data-dismiss='modal') Cancel
              a(class='btn btn-flat btn-brand-accent', data-dismiss='modal') Accept

### Modal with title

Basic modal with title.

    @example
    a(class='btn waves-attach waves-button waves-light waves-effect',
      data-toggle='modal',
      data-target='#modal1') Open modal

    div(class='modal fade',
        id='modal1', tabindex='-1',
        role='dialog',
        aria-labelledby='myModalLabel',
        aria-hidden='true')
      div(class='modal-dialog modal-xs', role='document')
        div.modal-content
          div.modal-heading
            p.modal-title Use location service?
          div.modal-inner
            p.text-black-hint
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          div.modal-footer
            p.text-right
              a(class='btn btn-flat xtg-color-text--grey-400', data-dismiss='modal') Cancel
              a(class='btn btn-flat btn-brand-accent', data-dismiss='modal') Accept


### Loading modal

Basic loading modal with a load spin, change text dynamically and insert what you like.

    @example
    a(class='btn waves-attach waves-button waves-light waves-effect',
      data-toggle='modal',
      data-target='#modal2') Open modal

    div(class='modal fade',
        id='modal2', tabindex='-1',
        role='dialog',
        aria-labelledby='myModalLabel',
        aria-hidden='true')
      div(class='modal-dialog modal-xs', role='document')
        div.modal-content
          div.text-center.margin--top-30
            div.loader Loading...
          div.modal-inner
            p.text-black-hint.text-center Estamos cargando unas cosas...
          div.modal-footer
            p.text-center
              a(class='btn btn-flat btn-brand-accent', data-dismiss='modal') Cancelar

### Block click

Use this modal for prevent modal disappear when click outside of the modal.

Only need to add `data-backdrop='static'` and `data-keyboard='false'` to modal container (`modal` class).

    @example
    a(class='btn waves-attach waves-button waves-light waves-effect',
      data-toggle='modal',
      data-target='#modal3') Open modal

    div(class='modal fade',
        id='modal3', tabindex='-1',
        role='dialog',
        aria-labelledby='myModalLabel',
        aria-hidden='true',
        data-backdrop='static',
        data-keyboard='false')
      div(class='modal-dialog modal-xs', role='document')
        div.modal-content
          div.modal-heading
            p.modal-title Use location service?
          div.modal-inner
            p.text-black-hint
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          div.modal-footer
            p.text-right
              a(class='btn btn-flat xtg-color-text--grey-400', data-dismiss='modal') Cancel
              a(class='btn btn-flat btn-brand-accent', data-dismiss='modal') Accept
