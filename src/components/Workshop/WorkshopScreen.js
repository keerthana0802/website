import React, { Component } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Carousel from "react-elastic-carousel";
import "./styles.css";
import Vector from "../../assets/Vector.png";

class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 4 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 6 },
      { width: 1750, itemsToShow: 8 }
    ];
  }
  render() {
    return (
      <div>
        <div>
        <Carousel breakPoints={this.breakPoints}>
        <div className="boxa">
        
        <img
          className="image"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/co111st"
          alt=""
          style={{ width: "100%", height: "200px" }}
        />
       
       <div className="upbox">  <h1 className="free">FREE</h1></div>
        <p className="p">Art of Storytelling</p>
        <p className="p1">Learn to communicate ideas by learning to build stories. Practice narration and voice modulation.</p>
           
     <div id = "boxes1">
       
          
       <div id = "leftbox">
       <p className="dot"><p className="p2">Confidence</p></p> 
         
       </div> 
         
       <div id = "middlebox">
       <p className="dot1"><p className="p3">Communication</p></p>  
       </div>
         
       <div id = "rightbox">
       <p className="dot"><p className="p2">Creativity</p></p>   
       </div>
   </div>
      </div>

          <div className="box">
        
        <img
          className="image"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/vi3110ar"
          alt=""
          style={{ width: "100%", height: "200px" }}
        />
       
          <div className="upbox">  <h1 className="free">FREE</h1></div>
        <p className="p">Art Explorer</p>
      
        <p className="p1">Learn fundamentals techniques, explore and get inspired by global artists, and find your own artistic style</p>
        
         <div id = "boxes">
           
              
            <div id = "leftbox">
              <p className="dot"><p className="p2">Creativity</p></p> 
              
            </div> 
              
            <div id = "middlebox">
            <p className="dot1"><p className="p3">Active Listening</p></p> 
            </div>
              
            <div id = "rightbox">
            <p className="dot"><p className="p2">Confidence</p></p>  
            </div>
        </div>
       </div>
    
      
                  

      <div className="boxa">
        
            <img
              className="image"
              src="https://dscez7qzsy4h5.cloudfront.net/courses/co212ps"
              alt=""
              style={{ width: "100%", height: "200px" }}
            />
           
           <div className="upbox">  <h1 className="free">FREE</h1></div>
            <p className="p">Public Speaking</p>
            <p className="p1">Master the most sought-after 21st century skill - oratory, through interactive speaking activities
            </p>
            
         <div id = "boxes1">
           
              
           <div id = "leftbox">
           <p className="dot"><p className="p2">Confidence</p></p> 
             
           </div> 
             
           <div id = "middlebox">
           <p className="dot1"><p className="p3">Communication</p></p>  
           </div>
             
           <div id = "rightbox">
           <p className="dot"><p className="p2">Fluency</p></p>   
           </div>
       </div>
          
          </div>
         
          
          <div className="box">
        
        <img
          className="image"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/vi2113ph"
          alt=""
          style={{ width: "100%", height: "200px" }}
        />
       
       <div className="upbox">  <h1 className="free">FREE</h1></div>
        <p className="p">Photography</p>
        <p className="p1">Put your unique lens on the world as you learn to capture stunning pictures armed with techniques and tricks</p>
        <div id = "boxes">
           
              
           <div id = "leftbox">
             <p className="dot"><p className="p2">Confidence</p></p> 
             
           </div> 
             
           <div id = "middlebox">
           <p className="dot1"><p className="p3">Communication</p></p> 
           </div>
             
           <div id = "rightbox">
           <p className="dot"><p className="p2">Creativity</p></p>  
           </div>
       </div>
      </div>
      <div className="boxa">
        
            <img
              className="image"
              src="https://dscez7qzsy4h5.cloudfront.net/courses/co111st"
              alt=""
              style={{ width: "100%", height: "200px" }}
            />
             <div className="upbox">  <h1 className="free">FREE</h1></div>
           
            <p className="p">Debate</p>
            <p className="p1">Got an opinion? Now learn to be a formidable communicator!</p>
            <div id = "boxes1">
       
          
       <div id = "leftbox">
       <p className="dot"><p className="p2">Confidence</p></p> 
         
       </div> 
         
       <div id = "middlebox">
       <p className="dot1"><p className="p3">Critical Thinking</p></p>  
       </div>
         
       <div id = "rightbox">
       <p className="dot8"><p className="p8">Communication</p></p>   
       </div>
   </div>
        
          </div> 
         
        </Carousel>
       
     
      </div>

     
      <section className="large-trial-card1">
     
      
      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="/book-a-trial"
        shine={true}
      />
    </section>
  
    <div class="row">
  <div class="column" >
  <img
          className="image1"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/co111st"
          alt=""
          style={{ width: "106%", height: "386px" }}
        />
         <div className="upbox1">  <h1 className="free">FREE</h1></div>
  </div>
  <div class="column" >
   <h2 className="para">Art of Storytelling</h2><br/><br/><br/>
   <p className="para1"><img  src={Vector} alt="person"></img> 5-7 years</p>
   <p className="para2"><img src="http://localhost:3000/static/media/durationIcon.8f545a06.svg" alt="person"></img> 1 session, 60 minutes</p>
   <br/> <br/> <br/> <br/> <br/>
   <div className="des"> <p >All children love stories. What better way to learn than through stories!<br/>

In this workshop, students will learn about elements of a story and do activities to use that to spin their own tales. They will also learn how voice modulation makes a difference to the message being communicated.<br/><br/>
<p className="des1">Available Time Slots:</p><p className="des2">a) 12:00 pm – 1:00 pm IST, Sat 26 June<br/>

b) 4:00 pm – 5:00 pm IST, Sat, 26 June </p>
</p>
<a className="bookbtn" href="https://at.sparkstudio.co/book-workshop/" target="_self"  >
      <span >Book Now!</span>
 </a>
      
</div>
   </div> 
</div>


<div class="row">
  <div class="column" >
  <img
          className="image1"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/vi3110ar"
          alt=""
          style={{ width: "106%", height: "386px" }}
        />
         <div className="upbox1">  <h1 className="free">FREE</h1></div>
  </div>
  <div class="column" >
   <h2 className="para">Art Explorer</h2><br/><br/><br/>
   <p className="para1"><img  src={Vector} alt="person"></img> 5-7 years</p>
   <p className="para2"><img src="http://localhost:3000/static/media/durationIcon.8f545a06.svg" alt="person"></img> 1 session, 60 minutes</p>
   <br/> <br/> <br/> <br/> <br/>
   <div className="des"> <p >All kids love art. Beyond fun, engaging in art also develops motor skills, builds a child’s ability to interact with the world around them,<br/> and provides a new set of skills for self-expression and communication.

In this workshop, students will enjoy playing with colors and learn the technique of finger painting to create their own art work..<br/><br/><br/>
<p className="des1">Available Time Slots:</p><p className="des2">a) 4:00 – 5:00 pm IST, Sat, 26 June </p>
</p>
<a className="bookbtn" href="https://at.sparkstudio.co/book-workshop/" target="_self"  >
      <span >Book Now!</span>
 </a>
      
</div>


  
   </div>
  
</div>

<div class="row">
  <div class="column" >
  <img
          className="image1"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/co212ps"
          alt=""
          style={{ width: "106%", height: "386px" }}
        />
         <div className="upbox1">  <h1 className="free">FREE</h1></div>
  </div>
  <div class="column" >
   <h2 className="para">Public Speaking</h2><br/><br/><br/>
   <p className="para1"><img  src={Vector} alt="person"></img> 8-10 years</p>
   <p className="para2"><img src="http://localhost:3000/static/media/durationIcon.8f545a06.svg" alt="person"></img> 1 session, 60 minutes</p>
   <br/> <br/> <br/> <br/> <br/>
   <div className="des"> <p >Regardless of age, children often shy away from speaking in public, while being talkative otherwise.<br/> With some guidance and practice, children can develop confidence, critical and creative thinking, and build comfort in delivering speech to an audience.<br/><br/>
<p className="des1">Available Time Slots:</p><p className="des2">a) 4:00 pm – 5:00 pm IST, Sat, 26 June <br/>

b) 11:00 am – 12:00 pm IST, Sun, 27 June</p>
</p>
<a className="bookbtn" href="https://at.sparkstudio.co/book-workshop/" target="_self"  >
      <span >Book Now!</span>
 </a>
      
</div>


  
   </div>
  
</div>

<div class="row">
  <div class="column" >
  <img
          className="image1"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/vi2113ph"
          alt=""
          style={{ width: "106%", height: "386px" }}
        />
         <div className="upbox1">  <h1 className="free">FREE</h1></div>
  </div>
  <div class="column" >
   <h2 className="para">Photography</h2><br/><br/><br/>
   <p className="para1"><img  src={Vector} alt="person"></img> 7+ years</p>
   <p className="para2"><img src="http://localhost:3000/static/media/durationIcon.8f545a06.svg" alt="person"></img> 1 session, 60 minutes</p>
   <br/> <br/> <br/> <br/> <br/>
   <div className="des"> <p >Put your unique lens on the world as you learn to capture stunning pictures armed with techniques and tricks.<br/>

In this workshop, students will learn the fundamentals of composing pictures. All you need is a smartphone and a lot of imagination!<br/><br/>
<p className="des1">Available Time Slots:</p><p className="des2">a) 5:00 – 6:00 pm IST, Sat, 26 June <br/>

b) 6:30 – 7:30 pm IST, Sun, 27 June</p>
</p>
<a className="bookbtn" href="https://at.sparkstudio.co/book-workshop/" target="_self"  >
      <span >Book Now!</span>
 </a>
      
</div>


  
   </div>
  
</div>

<div class="row">
  <div class="column" >
  <img
          className="image1"
          src="https://dscez7qzsy4h5.cloudfront.net/courses/co111st"
          alt=""
          style={{ width: "106%", height: "386px" }}
        />
         <div className="upbox1">  <h1 className="free">FREE</h1></div>
  </div>
  <div class="column" >
   <h2 className="para">Debate</h2><br/><br/><br/>
   <p className="para1"><img  src={Vector} alt="person"></img> 10+ years</p>
   <p className="para2"><img src="http://localhost:3000/static/media/durationIcon.8f545a06.svg" alt="person"></img> 1 session, 60 minutes</p>
   <br/> <br/> <br/> <br/> <br/>
   <div className="des"> <p >Some of the most impressive public leaders are ex-debators – from Barack Obama, Nelson Mandela and Jeff Bezos to Oprah Winfrey. Debating is a powerful activity that develops cognitive and communication skills in children. Children learn to speak confidently in public, and express their thoughts with clarity and logic.

In this workshop, students will learn how to express their opinion.

<br/><br/>
<p className="des1">Available Time Slots:</p><p className="des2">a) 5:00 pm- 6:00 pm IST, Sat, 26 June </p>
</p>
<a className="bookbtn" href="https://at.sparkstudio.co/book-workshop/" target="_self"  >
      <span >Book Now!</span>
 </a>
      
</div>


  
   </div>
  
</div>




    
      </div>
    );
  }
}

export default Workshop;
