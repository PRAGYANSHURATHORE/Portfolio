import React, { useState } from "react";
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(apiUrl, formData)

      if (response.status === 200) {
        setStatus("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "",})
      } else {
        setStatus("Failed sending message");        
      }  
    } catch (error) {
      console.error("Error Sending Message:", error);
      setStatus("An error occurred. Please try again.");
    }
  }

  return (
    <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
            <div class="column left">
            <p>
              You're welcome to reach out for opportunities, or even just a
              friendly conversation.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 20,
                fontWeight: 600
              }}
            >
              <li>pragyanshuxxxxxxx@gmail.com</li>
              <li>Shahjahanpur, Uttar Pradesh</li>
              <li>+91 73552XXXX</li>
              <li></li>
            </ul>
          </div>
          <div class="column right">
            <div class="text">Send Me A Message </div>
            <form onSubmit={handleSubmit} >
            {/* action="http://localhost:5000/api/contact" method="POST" */}
              <div class="fields">
                <div class="field name">
                  <input type="text" name="name" placeholder="Name" value={formData.name}
                  onChange={handleChange} required />
                </div>
                <div class="field email">
                  <input type="email" name="email" placeholder="Email" value={formData.email}
                  onChange={handleChange} required />
                </div>
              </div>
              <div class="field ">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject}
                  onChange={handleChange} required />
              </div>
              <div class="field textarea ">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div class="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
