import React,{Component} from 'react';
//import {Link} from 'react-router-dom';
import About from './components/About';
import Signup from './components/signup';
import Navbar from './components/Navbar';
import {BrowserRouter,Route } from 'react-router-dom';
import Home from './components/home';
import './App.css'


class App extends Component{
render(){

  return(
    <BrowserRouter>
      <div className="App" >
        <Navbar/>
        <Route exact path="/home" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/signup" component={Signup}/>
        
      <h4 className="center pink-text">Welcome to foodyelp


      </h4><p>
        </p><p>

        </p>
      <h5 className="center grey-text">Kindly select home page on the navbar to review some food images
      </h5> <p>
        </p><p>
          </p><p>

          </p>
      <p className="center">



        Writing some text,
        This webpage is currently underdevelopment. 


      </p>
<a href="www.iupui.edu">Click this link to visit Indiana university webpage</a>

    </div>
    </BrowserRouter>
    
  );
}
}

export default App;
