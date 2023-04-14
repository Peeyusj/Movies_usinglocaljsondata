import React from 'react'
import '../style/section.css'     //
const Section = () => {
  return (
    <div>
      <div class="txtouter" >
<h2 class="txt" style={{fontSize: "6vw",marginLeft:"200px"}}>Welcome to Divi <br /><br /><br /><br /><br /> Theater</h2><div class="et_pb_slide_content" style={{marginLeft:"200px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  <div style={{fontSize: "6vw",marginLeft:"200px"}} className="sht"> <button style={{backgroundColor:"red",color:'white' ,border:"none",height:"50px",width:"150px"}}>Showtimes</button> </div>
</div>
<div className="out">
  <div className='out2'>
    <div className='bt1'><button>VIEW SHOWTIMES</button></div>
    <div className='bt1'><button>BUY TICKETS</button></div>
    <div className='bt1'><button>PRE-ORDER SNACKS</button></div>
  </div>
  <div style={{marginRight:"650px",color:"red",fontSize:"20px"}}>FEATURED</div>
  <div style={{marginRight:"330px",color:"white",fontSize:"60px"}}><span style={{fontWeight:"bold"}}>NOW</span> SHARING</div>
</div>
    </div>
  )
}

export default Section
