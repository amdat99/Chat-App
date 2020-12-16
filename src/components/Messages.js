import React, {Component} from 'react';
import Ml from './MessageList';

class Messages extends Component{
  constructor(props){
    super(props);

 this.state= {

    postmessage: [],
    postusername:'',
    message: [],
    name: '',
    currentuser: '',
    messageSearch: ''
  } }

 onMessageChange = (event) =>{
    this.setState({message: event.target.value})
    this.onMessage()
    
   
  }  
loadUser = (user) => {
    this.setState({
      name: user.name
    
  })}
  
onSend =() =>{
   fetch('http://localhost:3000/messages',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    
     message:this.state.message ,
     name: this.state.name
    })
   })
   .then(response => response.json())
   .then(data=> {
     if (!this.state.message ||!this.state.name){
      return alert('blank entry')
            }
    if(data) {
     
      this.onMessage()
    }
     })}
   
  onMessage =() =>{

    fetch('http://localhost:3000/postmessage',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      postmessage:this.state.postmessage ,
        currentuser: this.state.currentuser
      })
   })
   .then(response => response.json())
   .then(data=> {
    this.setState({ postmessage: data})
    this.setState({ currentuser: data})

    
  })
  }
    componentDidMount() {
      fetch('http://localhost:3000/postuser',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      postusername:this.state.postusername
    })
   })
   .then(response => response.json())
   .then(user=> { 

      this.loadUser(user)
      this.onMessage()
  }
)
}

   onSearchChange = (event) => {
      this.setState({messageSearch: event.target.value})
 }

render(){
	   const { postmessage,messageSearch}= this.state;
      const messages= postmessage.filter(message =>{
       return message.name.toLowerCase().includes(messageSearch.toLowerCase());
})
 
 return(
      
      <div >
		  <div >
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search name'
          onChange={this.onSearchChange}
          />
      <div className= 'center'>
 			  <form style={{  overflowY: 'scroll',overflowX: 'hidden', border: '1px solid black', height: '600px', width: '1200px',background: 'white' }}  >
          {messages.flatMap((data,i,id) => {
            return ( 
              <Ml
              
              name={messages[i].name}
              message={messages[i].message}
              />
            )})  }
		    </form>
       </div>
        <div  >
          <textarea  
             className = 'mBox center sticky'  
              onChange= {this.onMessageChange}> </textarea>
         <input 
            onClick= {this.onSend}
            className="  pa2 ph3 pv2 input-reset ba b--white  grow pointer f6" 
            type="text" value="Send"/>
       </div>
      </div>
      </div>
		
		)
  }
}


export default Messages
