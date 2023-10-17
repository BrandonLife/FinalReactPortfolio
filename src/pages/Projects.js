import React from 'react'
import '../styles/Projects.css'
function Projects() {
  return (
    
      <div className="card-home-container">
          <div className='projects-header-container'>
          <h1 className='projects-header'>Projects</h1>   
          </div>
         
        <div className='card'>
        <div className='card-title'>
            <h1><a href='#'>title</a></h1>
            </div>
            <div className='summary'>
            <span>Summary</span> 
            </div>
        </div> {/*end of card  */}

        <div className='card'>
            <div className='card-title'>
            <h1><a href='#'>title</a></h1>
            </div>
            <div className='summary'>
            <span>Summary</span> 
            </div>
        </div> {/*end of card  */}
          
        <div className='card'>
            <div className='card-title'>
            <h1><a href='#'>title</a></h1>
            </div>
            <div className='summary'>
            <span>Summary</span> 
            </div>
          </div> {/*end of card  */}
        
          
    </div>
  )
}

export default Projects