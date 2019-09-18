import React from 'react';
import { render } from 'react-dom';
import Root from './root.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//require("../styles/main.styl");

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Root} />
          <Route path="/:value" render={({ match, location }) => (
            <div>
              {match.params.value}
            </div>
          )}
          />
        </div>
      </Router>
    );
  }
};

render((
  <Routers />
), document.getElementById('root'));

export default Routers;