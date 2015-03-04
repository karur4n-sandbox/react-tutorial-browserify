var React  = require('react');
var view   = React.createFactory(require('./view.jsx'));

React.render(
  view(),
  document.getElementById('content')
);
