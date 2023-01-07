import { Button } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react';
import "./slider.css";

const Slider = () => {

  return (
      <>
    {/* <div className="slider-cont">
    <div className="arrow aleft" onClick={()=>handleClick("left")}>
    <ArrowLeft/>
    </div>
    
    <div className="slide_wrapper"> */}

    {/* //SLIDE 1 */}
      {/* <div className="slide">

      <div className="slide-imageCont">
      <img src="https://www.kindpng.com/picc/m/788-7889882_fashon-shopping-png-clipart-shopping-fashion-girl-png.png" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/>
       </div>

      <div className="slide-info">
          <h1>BLACK FRIDAY OFFER</h1>
          <p>Shop With Heartscontained This Friday With Big Offers</p>
          <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

      </div>

      </div>

    </div> */}

    {/* //slide 2 */}
      {/* <div className="slide">

      <div className="slide-imageCont">
      <img src="https://www.kindpng.com/picc/m/788-7889882_fashon-shopping-png-clipart-shopping-fashion-girl-png.png" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/>
       </div> */}

      {/* <div className="slide-info">
          <h1>WINTER SALE</h1>
          <p>Shop With Heartscontained This Friday With Big Offers</p>
          <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

      </div>
      </div>

     */}

    {/* //slide 3 */}
      {/* <div className="slide">

      <div className="slide-imageCont">
      <img src="https://www.kindpng.com/picc/m/788-7889882_fashon-shopping-png-clipart-shopping-fashion-girl-png.png" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/>
       </div> */}

      {/* <div className="slide-info">
          <h1>DIWALI OFFER</h1>
          <p>Shop With Heartscontained This Friday With Big Offers</p>
          <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

      </div>

      </div>

     */}

{/* 
    <div className="arrow aright" onClick={()=>handleClick("right")}>
      <ArrowRight/>
    </div>
    </div>
 */}



{/* ======================================================================================================================================== */}
<div className="slider-cont">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner slide_wrapper">

  {/* <div className="slide_wrapper"> */}
    <div className="carousel-item active">
    <div className="slide" style={{backgroundColor:"#fcf1ed"}}>

<div className="slide-imageCont">
{/* <img src="https://www.kindpng.com/picc/m/788-7889882_fashon-shopping-png-clipart-shopping-fashion-girl-png.png" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/> */}
<img src="carosol1.jpg" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/>
 </div>

<div className="slide-info">
    <h1>DIWALI OFFER</h1>
    <p>Shop With Heartscontained This Friday With Big Offers</p>
    <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

</div>

</div>   
 </div>
 {/* </div> */}


    <div className="carousel-item" >
    <div className="slide"  style={{backgroundColor:"#fbf0f4"}}>

<div className="slide-imageCont">
<img src="slideImg-1.jpg" alt="Fashon Shopping Png Clipart - Shopping Fashion Girl Png, Transparent Png@kindpng.com"/>
 </div>

<div className="slide-info">
    <h1>WINTER COLLECTION</h1>
    <p>Shop With Heartscontained This Friday With Big Offers</p>
    <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

</div>
</div>    
</div>


    <div className="carousel-item">
    <div className="slide"  style={{backgroundColor:"rgba(125, 233, 233, 0.962)"}}>

<div className="slide-imageCont">
<img src="carosol3.jpg" alt="summer"/>
 </div>

<div className="slide-info">
    <h1>BLACK FRIDAY SALE</h1>
    <p>Shop With Heartscontained This Friday With Big Offers</p>
    <Button style={{fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>Shop Now</Button>

</div>
</div>    
</div>


  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon arrow" aria-hidden="true"><ArrowRight/></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon arrow" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>









</> )
}

export default Slider;