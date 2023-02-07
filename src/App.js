import React from "react";
import './App.css'

 function App(){
    return(
       <>
       
    
      <nav className="nav">
     <ul>
       <li><a className="active" href="#">Home</a></li>
       <li><a href="#">features</a>
         <ul>
            <li><a href="#">javascript</a></li>
            <li><a href="#">mongodb</a></li>
            <li><a href="#">nodejs</a></li>
         </ul>
       </li>
      <li><a href="#">web Design</a>
       <ul>
            <li><a href="#">front end</a></li>
            <li><a href="#">back end</a></li>
            <li><a href="#">full stack</a>
            <ul>
            <li><a href="#">links</a></li>
            <li><a href="#">works</a></li>
            <li><a href="#">status</a></li>
         </ul>
            
            </li>
       </ul>
      </li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
     </ul>
      </nav>
      <section>
      <img  className="mg" src="https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <img className="mg1" src="https://images.pexels.com/photos/4617832/pexels-photo-4617832.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
      </section>

       </>
    )
}

export default App