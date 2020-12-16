import React from 'react';

const Ml = ({ name, message,key }) =>{
	  return (

	  	<div >
 			
            <ul  className = 'left'>   
            <ul  className ='b '   >{` ${name}:`} </ul> 
            <ul  className= ' grow shadow-5 bg-lightest-blue ' style= {{maxWidth: '600px'}}> 
            <p className = 'textw courier' >{` ${message}`} </p> </ul></ul>
            
		 
      </div>
  
    )
}


export default Ml 