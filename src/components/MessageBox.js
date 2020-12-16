import React, {Component} from 'react';


class MessageBox extends Component{
  constructor(props){
    super(props);

 this.state= {

    message: [],
    username: '',
    
 
 } }

onMessageChange = (event) =>{
    this.setState({message: event.target.value})
  }  

	onSend =() =>{
   fetch('http://localhost:3000/messages',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    
     message:this.state.message
    })
   })
   .then(response => response.json())
   .then(data=> {
   
   	})

}
    

    
 
 render(){
	return(

	<div className= 'tc pt6  box center'>
 	<div >
      	<input 
      		style = {{ position: 'relative',top:'-100px'}}
      		className = ' tc  mBox center ;   'type ='text' 
			onChange= {this.onMessageChange} />
		<input 
			onClick= {this.onSend}  
			style ={{ position: 'relative',top:'-100px'}}        
    		className=" pa2ph3 pv2 input-reset ba b--white bg-green grow pointer f6" 
    		type="submit" value="Send"/>
    	</div>
      	</div>
		
		)

}
}


export default MessageBox