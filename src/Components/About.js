import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
     
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
           
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I am 27 years old and have done a three-month bootcamp for web development, because the mainly theoretical part of my studies was not enough for me. I always wanted and wanted to program and now I have a basic framework and can build on it. Here I can bring in my creativity, flexibility and my love for challenges.Every day while coding I get excited about new technologies, like animations with three.js. I forget the time when I'm programming.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Victoria Brandes</span><br />
						   <span>Oslostraße 12<br />
						         München 81829 
                   </span><br />
						   <span>{phone}</span><br />
                     <span>vick.brandes@gmail.com</span>
					   </p>
               </div>
              
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
