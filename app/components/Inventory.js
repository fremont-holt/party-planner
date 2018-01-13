var React = require('react');
var ReactDom = require('react-dom');

function Inventory(props) {
  return (
    <div className="inventory">
      <p>{props.name}</p>
    </div>
  );
}

module.exports = Inventory;