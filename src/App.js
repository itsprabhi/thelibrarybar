import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter,Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import axios from 'axios'

//CSS
import './css/navbar.css'
import './css/footer.css'
import './css/home.css'
import './css/forms.css'

//UTILS
import AuthRoute from './util/authroute'
import UserRoute from './util/userroute'



//Pages
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Menu from './pages/menu'
import PostMeal from './pages/admin/postMeal'
import Login from './pages/login'
import Signup from './pages/signup'
import Meal from './pages/meal'
import User from './pages/user'
import MealType from './pages/mealType'
import MealPref from './pages/mealPref'


axios.defaults.baseURL = 'https://us-central1-thelibrarybar-fe0ca.cloudfunctions.net/api';

let authenticated;
const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    authenticated = false;
  }else{
    authenticated = true;
  }
}


class App extends Component {
  constructor(){
    super();
    this.order = this.order.bind(this)
    this.state = {
      cart:[]
    }
  }
  order = (meal) => {
    console.log('hi')
      this.state.cart.push(meal);
      this.setState({
        cart:this.state.cart
      })
      console.log(this.state.cart)
  } 
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path = '/' component = {Home} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/about' component = {About} />
          <Route path = '/menu' component = {Menu} />
          <AuthRoute path = '/login' component = {Login} authenticated = {authenticated} />
          <AuthRoute path = '/signup' component = {Signup} authenticated = {authenticated}/>
          <Route path = '/admin/add/meal' component = {PostMeal} />
          <Route path = '/meal/:id' component = {(props) => <Meal {...props} order = {this.order} />} />
          <Route path = '/meals/type/:mealType' component = {MealType} />
          <Route path = '/meals/pref/:mealPref' component = {MealPref} />
          <UserRoute path = '/user' component = {(props) => <User user = {this.state.user} {...props} />} authenticated = {authenticated} user = {this.state.user} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 