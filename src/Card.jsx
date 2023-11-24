import React, { useState } from 'react'



function Card(props) {
    const [order,setOrder]=useState(true);
    const [count,setCount]=useState(0);
 
    function Clicked(){
        
        if (order == true) {
            console.log('Button clicked!');
            setCount(count+1)
            setOrder(false);
          } else {
            console.log('Button unclicked!');
            setOrder(true);
            setCount(count-1)
          }
        };
  return (
    <div>
        <div className="card mb-3" style={{maxwidth: '500px',height:'200px'}}>
  <div className="row g-0">
    <div className="col-md-4">
        {props.img}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text"><small className="text-body-secondary">{props.desc}</small></p>
        <button type="button" class="btn btn-success" onClick={Clicked}  >{order?'Add TO CART' : 'Remove From Cart'}</button>
        <p>({count})added to Cart</p>
        {console.log(count)}
        {console.log(count+1)}
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Card