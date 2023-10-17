import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='about-container'>
    <div className='profile-pic'>
     <img src='https://cdn.openart.ai/stable_diffusion/0c480ea1c0b315bf879f88c41e529dad78207e39_2000x2000.webp'></img>
    </div>
    <div className='about-facts'>
    <h1>About Me</h1>
        <div className='stats'>
     <p>Name: Brandon</p>
        </div>
        <div className='stats'>
     <p>Future Occupation: Full Stack Developer</p>
        </div>
        <div className='stats'>
     <p>Technologies: MongoDB, ExpressJs, ReactJs, NodeJs</p>
        </div>
        <div className='stats'>
     <p>Hobbies: Working out, video games, marvel movies</p>
        </div>
     </div> {/* end of about facts div */}
     
      <div className='work-experience'>
       <h1>Work Experience</h1>
       <div className='work-detail'>
         <div><p>Date:</p></div>
         <div><p>Company:</p></div>
         <div><p>Occupation:</p></div>
         <div><p>Summary of duties:</p></div>
         <hr></hr>
       </div> {/* end of work detail */}
       <div className='work-detail'>
         <div><p>Date:</p></div>
         <div><p>Company:</p></div>
         <div><p>Occupation:</p></div>
         <div><p>Summary of duties:</p></div>
         <hr></hr>
       </div> {/* end of work detail */}
       <div className='work-detail'>
         <div><p>Date:</p></div>
         <div><p>Company:</p></div>
         <div><p>Occupation:</p></div>
         <div><p>Summary of duties:</p></div>
       </div> {/* end of work detail */}
      </div>{/* end of work experience */}
 </div>
  )
}

export default Home