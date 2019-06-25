import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import "./css/Style.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    let token = "0d8107707440401facb408e1326dbec1";
    fetch("https:/api.github.com/users", { apikey: token })
      .then(res => res.json())
      .then(res => this.setState({ users: res, loading: false }))
      .catch(error => console.log(`Sorry, there's been an error ${error}`));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={() => <Home users={this.state.users} />}
            />
            <Route exact path="/Search" render={() => <Search />} />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
