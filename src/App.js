import React from "react";
import './App.css'

 function App(){
    return(
       <>
       
    
      <nav className="nav">
     <ul>
       <li><a className="active" href="#">Home</a></li>
       <li><a href="#">Fruits</a>
         <ul>
            <li><a href="#">mangos</a></li>
            <li><a href="#">apple</a></li>
            <li><a href="#">banana</a></li>
         </ul>
       </li>
      <li><a href="#">vegetables</a>
       <ul>
            <li><a href="#">tomato</a></li>
            <li><a href="#">patato</a></li>
            <li><a href="#">Onion</a>
            <ul>
            <li><a href="#">cabbage</a></li>
            <li><a href="#">broccoli</a></li>
            <li><a href="#">carrot</a></li>
         </ul>
            
            </li>
       </ul>
      </li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
      <li><a href="#">logout</a></li>
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