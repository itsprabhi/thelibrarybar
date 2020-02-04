import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter,Route } from 'react-router-dom';

//CSS
import './css/navbar.css'
import './css/footer.css'
import './css/home.css'

//Pages
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Menu from './pages/menu'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path = '/' component = {Home} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/about' component = {About} />
          <Route path = '/menu' component = {Menu} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 