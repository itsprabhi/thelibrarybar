import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter,Route } from 'react-router-dom';

//CSS
import './css/navbar.css'
import './css/footer.css'
import './css/home.css'
import './css/forms.css'

//Pages
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Menu from './pages/menu'
import PostMeal from './pages/admin/postMeal'
import Login from './pages/login'
import Signup from './pages/signup'
import Meal from './pages/meal'
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
          <Route path = '/login' component = {Login} />
          <Route path = '/signup' component = {Signup} />
          <Route path = '/admin/add/meal' component = {PostMeal} />
          <Route path = '/meal/:id' component = {Meal} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 