var React = require('react');
var ReactDom = require('react-dom');

var Logo = require('./Logo');
var AddPerson = require('./AddPerson');
var AddParty = require('./AddParty');

var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);

      this.state = {
        currentUser: '',
        partyName: '',
        inventory: {}
      };
  }

  setCurrentUser(currentUser) {
    this.setState({ currentUser });
  }

  setPartyName(partyName) {
    this.setState({ partyName })
  }

  render () {
    return <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <AddParty setCurrentUser={this.setPartyName} />} />
            <Route path="/party/:party" renter={() => <AddPerson setCurrentUser={this.setCurrentUser} />} />
            <Route path="/party/:party/plan" render={() => <Inventory name={this.state.currentUser} />} />
          </Switch>
        </div>
      </Router>;
  }
}

module.exports = App;