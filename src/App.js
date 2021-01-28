import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./starWars/Nav"
import Vehicle from "./starWars/Vehicle"
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <h1>Star Wars Vehicles</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />
        <Nav />
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/vehicle/:vehicleId"
            component={Vehicle}
          />

          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
  // const [authenticated, setAuthenticated] = useState(false);

  // const doLogIn = () => {
  //   setAuthenticated(true)
  // }

  // const doLogOut = () => {
  //   setAuthenticated(false)
  // }

  // return (
  //   <div className="App">
  //     <h1>Hello World!</h1>
  //     <Router>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/about/123">About John</Link>
  //         </li>
  //         <li>
  //           <Link to="/contact">Contact</Link>
  //         </li>
  //       </ul>

  //       <Switch>
  //         {/* <Route path="/" exact component={Home} /> */}
  //         <Route path="/" exact render={() => {
  //           return (
  //             authenticated ? (
  //               <Redirect to="/account" />
  //             ) : (
  //               <>
  //                 <Home />
  //                 <p>Please log in!</p>
  //                 <button onClick={doLogIn}>Log in</button>
  //               </>
  //             )
  //           )
  //         }} />

  //         <Route path="/account" render={() => {
  //           return (
  //             authenticated ? (
  //               <>
  //                 <Home />
  //                 <p>Welcome Back!</p>
  //                 <button onClick={doLogOut}>Log out</button>
  //               </>
  //             ) : (
  //               <Redirect to="/" />
  //             )
  //           )
  //         }} />

  //         {/* for redirection */}
  //         <Redirect from="/info/:userId" to="/info/:userId" />
  //         <Route path="/about/:userId" component={About} />

  //         <Redirect from="/about" to="/info" />
  //         <Route path="/info" component={About} />

  //         <Route path="/contact" component={Contact} />

  //         {/* default */}
  //         <Route component={Error} />
  //       </Switch>
  //     </Router>
  //   </div>
  // );
}

export default App;
