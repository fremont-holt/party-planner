var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');
require('./styles/index.scss');

ReactDom.render(<App />, document.getElementById('app'));
