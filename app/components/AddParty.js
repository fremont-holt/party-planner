var React = require("react");
var ReactDom = require("react-dom");

var Logo = require("./Logo");

class AddParty extends React.Component {
  constructor() {
    super();
    this.goToName = this.goToName.bind(this);
  }

  goToName(event) {
    event.prevenDefault();
    this.props.setPartyName(this.partyInput.value);
    this.context.router.transitionTo(`/party/${this.props.partyName}`);
  }

  render() {
    return <div className="add-party">
        <h1 className="heading heading--main">Party Planner</h1>

        <Logo width="93" height="150" />

        <form className="form form--center form--top--margin--large" onSubmit={this.goToName}>
          <label className="label" htmlFor="name">
            What is the name of your party?
          </label>
          <input type="text" name="name" id="add-party-name" className="input" ref={input => (this.partyInput = input)} />
          <button type="submit" className="button button--form">
            Let's Party
          </button>
        </form>
      </div>;
  }
}

module.exports = AddParty;