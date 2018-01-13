var React = require("react");
var Logo = require("./Logo");

class AddPerson extends React.Component {
  constructor() {
    super();
    this.goToParty = this.goToParty.bind(this);
  }

  goToParty(event) {
    event.prevenDefault();
    this.props.setCurrentUser(this.nameInput.value);
    this.context.router.transitionTo(`/party/${this.props.partyName}/plan`);
  }

  render() {
    return <div className="add-person">
        <h1 className="heading heading--main">Party Planner</h1>

        <Logo width="93" height="150" />

        <form className="form form--center form--top--margin--large" onSubmit={this.goToParty}>
          <label className="label" htmlFor="name">
            What is your name?
          </label>
          <input type="text" name="name" id="add-person-name" className="input" ref={input => (this.nameInput = input)}  />
          <button type="submit" className="button button--form">
            Let's Party
          </button>
        </form>
      </div>;
  }
}

module.exports = AddPerson;