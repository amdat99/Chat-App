import React from 'react';

const Navigation = ({onRouteChange}) => {
   
    return(
    	
    	<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <label onClick= {()=>onRouteChange('login')} className='f3 link dim black underline pa2 pointer'>Log Out</label>
        </nav> 
       
        )
    	}
    
     export default Navigation;
