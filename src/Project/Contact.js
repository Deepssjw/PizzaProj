// import React from "react";
// // import PizzaLeft from "../assets/contact.jfif";
// import "./Edit.css";

// function Contact() {
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());
//     console.log('Form data:', data);

//     // Add logic to send data to the server or perform other actions
//   };

//   return (
//     <div className="contact">
//       <div
//         className="leftSide"
        
        
    
//       ></div>
//       <div className="rightSide">
//         <h1>Contact Us</h1>

//         <form id="contact-form" method="POST" onSubmit={handleFormSubmit}>
//           <label htmlFor="name">Full Name</label>
//           <input id="name" name="name" placeholder="Enter full name..." type="text" />

//           <label htmlFor="contactNo">Contact Number</label>
//           <input
//             id="contactNo"
//             name="contactNo"
//             placeholder="Enter contact number..."
//             type="tel"
//           />

//           <label htmlFor="email">Email</label>
//           <input id="email" name="email" placeholder="Enter email..." type="email" />

//           <label htmlFor="message">Description</label>
//           <textarea
//             rows="6"
//             placeholder="Enter message..."
//             name="message"
//             required
//           ></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;





import React, { useState } from "react";
import { Link } from "react-router-dom";
// import pizzaBackground from "../shared/images/demo.avif";
 // Replace with the actual path to your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit user data");
      }
    } catch (error) {
      console.error("Error submitting user data", error);
    }
  };

  return (
    <div style={ {backgroundImage : "URL(https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148698592.jpg)"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "500px", width: "100%", margin: "0 auto", borderRadius: "10px", overflow: "hidden" }}>
          <h1 style={{ color: "white" }} className="mb-4 text-center">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="mt-5 border p-4 bg-light shadow">
            <div className="mb-3">
              <label style={{ marginTop: "10px" }}>
                Your Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-3">
              <label>
                Your Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label>
                Your Message<span className="text-danger">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Type your message here..."
                style={{ height: "170px" }}
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {/* <div className='footer4'> 
                                <h5>Location</h5>
                                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15560.606591055875!2d80.2207721788675!3d12.833475458937379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1700209768784!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
        </div>
      </div><br></br>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15560.606591055875!2d80.2207721788675!3d12.833475458937379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1700209768784!5m2!1sen!2sin" width="600" height="100"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    
      
  );
};

export default Contact;