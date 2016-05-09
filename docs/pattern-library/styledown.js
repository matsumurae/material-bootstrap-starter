(function () {
  function ready(fn) {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'interactive') fn();
      });
    }
  }

  // create expando buttons
  ready(function () {
    var elements = document.querySelectorAll('h2');

    // Create <nav>, <ul>, <li> and <a>
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');

    // Add class to elements
    nav.className = 'navbar navbar-fixed-top';
    ul.className = 'nav navbar-nav';

    // Append childs
    nav.appendChild(ul);
    document.body.appendChild(nav);

    var codes = document.querySelectorAll('.sg-example .sg-code');

    for (var i = codes.length-1; i >= 0; i--) {
      var code = codes[i];
      var parent = code.parentNode;
      addButton(parent, code);
    }

    // Obtain id and name of each h2 of the page
    for (var i = 0; i <= elements.length - 1; i++) {
      var li = document.createElement('li');
      var link = document.createElement('a');

      li.className = 'nav-item';
      link.className = 'nav-link';

      li.appendChild(link);
      ul.appendChild(li);

      link.innerText = elements[i].innerText;
      link.href = '#' + elements[i].id;
    }
  });

  function addButton (parent, code) {
    // hide the <pre>
    code.className += ' sg-hidden';

    // create the <button>
    var btn = document.createElement('div');
    btn.className = 'sg-expando sg-expando-reveal';
    parent.appendChild(btn);

    btn.addEventListener('click', function () {
      if (~code.className.indexOf('sg-hidden')) {
        code.className = code.className.replace('sg-hidden', 'sg-visible');
        btn.className  = btn.className.replace('sg-expando-reveal', 'sg-expando-contract');
      } else {
        code.className = code.className.replace('sg-visible', 'sg-hidden');
        btn.className  = btn.className.replace('sg-expando-contract', 'sg-expando-reveal');
      }
    });
  }

})();
