import React, {Component} from 'react';


class Login extends Component{
  constructor(props){
    super(props);

 this.state= {
    name: ''
 }
}

onNameChange = (event) =>{
    this.setState({name: event.target.value})
  }  

  onLogin =() =>{
   fetch('http://localhost:3000/login',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name:this.state.name
    })
   })
   .then(response => response.json())
   .then(user=>{
       if (!this.state.name){
      return alert('blank entry')
            }
    if (user){

    this.props.onRouteChange('home')
    this.props.loadUser(user)
  }
    
    
  })
   
}

  render(){
  return( 
    <article className="br ma7 shadow-5 ba dark-gray b--black-10 mv4 w-200 w-100 m w-25-l mw7 bg-grey center">
  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
   
  <div className="mt3">
        <label className="db fw4 lh-copy f6 " htmlFor="Username">Enter A Username:</label>
        <input onChange= {this.onNameChange} className="pa2 input-resset ba bg-white w-100 measure"  name="Username"  id="Username"/>
      </div>
    </fieldset>
    <div className="mt3">
    <input 
    onClick= {this.onLogin}          
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
    type="submit" value="Login"/>

    </div>
  </div>
</article>
    );
}

}

export default Login;
