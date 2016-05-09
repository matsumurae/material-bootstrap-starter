# Styleguide options

### Head

    meta(name="viewport" content="width=device-width, initial-scale=1")
    link(rel="stylesheet" href="../../css/main.css")
    link(rel='stylesheet' href='styledown.css')
    script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js')
    script(src='../../js/material.js')
    script(src='styledown.js')

### Body

    .heading
      .container
        h1 HotelB2B styleguides
        p
          | This is the styleguide for all the styles used in HotelB2B design.
        p
          a(href="https://gitlab.xmltravelgate.com/frontcommon/HotelB2B/tree/design"
            class='btn waves-attach waves-button waves-light xtg-color--light-blue-300 xtg-color-text--white waves-effect') Gitlab repository
    .container
      div(sg-content)
    footer
      p
        | Made with
        i.material-icons.md-18.xtg-color-text--red-300 favorite
        | 
        | by Amanda with
        a(href="https://github.com/styledown/styledown") Styledown
