import React, { useState } from 'react'
import Card from './Card';

function App() {


  return (<div>
      <h1 style={{textAlign:'center',fontFamily:'fantasy',color:'green'}}>SHOPDAILY</h1>

      <div style={{width:'100px',}}>
        <img style={{width:'300px',height:'200px', float:'left'}}src="https://cdnb.artstation.com/p/assets/images/images/018/870/019/large/ethan-taylor-omnitrix.jpg?1561042105" alt="" />
      </div>
      <div style={{float:'left', width:'300px'}} >
      <Card name='omnitrix' price='RS.31000' desc ='100Aliens only'/></div>
      <div style={{width:'100px',}}>
        <img style={{width:'300px',height:'200px', float:'left'}}src="https://www.cnet.com/a/img/resize/ddbd12cdcdd270b3082b098842b66eb3c32123e7/hub/2021/11/05/d96e913d-9bc2-41f0-a3d8-c1d5d0a03184/hisense-ug8-tv-promo-2021-cnet-guide.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
      </div>
      <div style={{float:'left', width:'300px'}} >
      <Card name='TV' price='RS.41000' desc ='52 inch'/></div>
      <div style={{width:'100px',}}>
        <img style={{width:'300px',height:'200px', float:'left'}}src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/1/d/y/-original-imaghxcpvtta2hzs.jpeg?q=90" alt="" />
      </div>
      <div style={{float:'left', width:'300px'}} >
      <Card name='APPLE iPhone 14' desc ='64GB' price='RS.61,000'/></div>
      </div>
  
  )

}
export default App