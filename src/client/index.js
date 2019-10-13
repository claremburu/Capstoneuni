import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import User from './user';
import Auth from './auth';
import notFound from './404';

const routing = (
    <Router>
         <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/auth">Register/Login</Link>
        </li>
      </ul>
      <div>
          <switch>
        <Route exact path="/" component={App} />
        <Route path="/user/:id" component={User} />
        <Route path="/auth" component={Register/Login} />
        <Route component={Notfound} />
        </switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
