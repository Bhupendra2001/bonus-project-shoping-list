import React from "react";
import './Navbar.css'

 function Navbar(){
    return(
       <>
      <nav className="nav">
     <ul>
       <li><a className="active" href="">Home</a></li>
         <li><a href="">Fruits</a>
           <ul>
              <li><a href="">Mango</a>
               <ul>
               <li><a href="">Unit Rate</a>
               <ul>
               <select id="currency" onchange="updateTotal()">
               <option  className="o" value="USD">USD</option>
               <option  className="o"value="EUR">EUR</option>
              <option className="o" value="GBP">GBP</option>
              </select>
               </ul>

               </li>
               <li><a href="">Weight price</a>
               <select id="weight" onchange="updateTotal()">
               <option  className="o" value="1">1kg</option>
               <option  className="o"value="2">2kg</option>
              <option className="o" value="3">3kg</option>
              </select>
                </li>
            </ul>
            </li>
            <li><a href="">Apple</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight price</a> </li>
            </ul>
            </li>
            <li><a href="">Banana</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight Price</a> </li>
            </ul>
            </li>
            <li><a href="">Grapes</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight Price</a> </li>
            </ul>
            </li>
            <li><a href="">Orange</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight Price</a></li>
            </ul>
            </li>
            <li><a href="">Strawberry</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight Price</a> </li>
            </ul>
            </li>

         </ul>
       </li>
      <li><a href="">vegetables</a>
       <ul>
            <li><a href="">tomato</a>
            <ul>
               <li><a href="">Unit Rate</a></li>
               <li><a href="">Weight Price</a> </li>
            </ul>
            </li>
            <li><a href="">patato</a>
              <ul>
                 <li><a href="">Unit Rate</a></li>
                 <li><a href="">Weight Price</a> </li>
              </ul>
            </li>
            <li><a href="">Onion</a>
            <ul>
                 <li><a href="">Unit Rate</a></li>
                 <li><a href="">Weight Price</a> </li>
              </ul>
             </li>
            <li><a href="">cabbage</a>
            <ul>
                 <li><a href="">Unit Rate</a></li>
                 <li><a href="">Weight Price</a> </li>
              </ul>
            </li>
            <li><a href="">broccoli</a>
            <ul>
                 <li><a href="">Unit Rate</a></li>
                 <li><a href="">Weight Price</a> </li>
              </ul>
            </li>
            <li><a href="">carrot</a>
            <ul>
                 <li><a href="">Unit Rate</a></li>
                 <li><a href="">Weight Price</a> </li>
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

export default Navbar