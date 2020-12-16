
import './App.css';
import React from 'react';
import Messages from './components/Messages'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Greeting from './components/Greeting'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route:'login',
    
        user:{
       name: ''
      }
    } 
  }

 loadUser = (data) => {
        this.setState({
            user: {
      name: data.name
    }} )}

  onRouteChange= (route) => { 
  this.setState({route: route})
  }



  render(){
 

    


  return (
    <div className="App">
    
    {this.state.route ==='login'
    ?<Login onRouteChange ={this.onRouteChange} loadUser={this.loadUser}   />
     :<div>
        <Greeting name = {this.state.user.name}  />
        <Navigation onRouteChange ={this.onRouteChange} />
      
        <Messages />
     </div>}
     </div>
  )
}
}

export default App;

