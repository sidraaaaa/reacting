import React from 'react';
import cup from "./cup.png"
import pizza from "./pizza.png"


const home=()=>{
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <p> This is Home page </p>
            <h3 className="pink-text ">Start your day with our food

</h3>
<h4 className="grey-text"> CUPCAKES</h4>
<img src={cup}   alt="food"/>

<h4 className="grey-text">Fresh PIZZA</h4>
<img src={pizza}  alt="food"/>

        </div>
        
     
         
     )
}
  export default home