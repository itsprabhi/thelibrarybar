import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter,Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

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

let authenticated;

const token = localStorage.FBIdToken
console.log(token)

if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  if(decodedToken.exp * 1000 < Date.now()){
    authenticated = false;
  }else{
    authenticated = true;
  }
}


class App extends Component {
  render(){
    console.log(this.props)
    console.log(authenticated)
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
          <Route path = '/meal/:id' component = {Meal} />
          <Route path = '/meals/type/:mealType' component = {MealType} />
          <Route path = '/meals/pref/:mealPref' component = {MealPref} />
          <UserRoute path = '/user' component = {User} authenticated = {authenticated}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 