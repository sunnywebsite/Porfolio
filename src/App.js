import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
     
      <section className="hero-section">
      <div className="home-container">
      <div className="section" id="section1">
        <div className="section-content">
          <h2>Introduction</h2>
          <p>Hover to see more details about Introduction.</p>
          <div className="detailed-content">
            <h3>Details for Introduction </h3>
            <p>Sunny Technical is a web development company specializing in creating high-quality, effective websites for businesses and individuals.  We focus on crafting user-friendly, responsive designs that not only look great but also drive results. From simple landing pages to complex e-commerce platforms, Sunny Technical offers a range of web solutions tailored to meet your specific needs and budget. We're passionate about helping our clients establish a strong online presence and achieve their digital goals. </p>
          </div>
        </div>
      </div>

      <div className="section" id="section2">
        <div className="section-content">
          <h2>Introduction about yourself</h2>
          <p>Hover to see more details about "Introduction about yourself"</p>
          <div className="detailed-content">
            <h3>Detailed Content for "Introduction about yourself"</h3>
            <p> Sunny is a passionate and innovative web developer who has dedicated his career to crafting visually stunning and highly functional websites. With a keen eye for design and a deep understanding of modern web technologies, Sunny brings ideas to life by creating user-friendly and responsive digital experiences. His expertise spans across front-end development, where he excels in HTML, CSS, and JavaScript, as well as back-end development, where he leverages frameworks like React and Node.js to build robust and scalable web applications. Sunny’s commitment to staying updated with the latest industry trends ensures that his websites are not only aesthetically pleasing but also optimized for performance and accessibility.</p>
            </div>
        </div>
      </div>

      <div className="section" id="section3">
        <div className="section-content">
          <h2>Aim and goals</h2>
          <p>Hover to see more details about "Aim and goals"</p>
          <div className="detailed-content">
            <h3>Detailed Content for "Aim and goals"</h3>
            <p>Beyond his technical skills, Sunny is driven by a genuine passion for helping businesses and individuals establish a strong online presence. He believes that a well-designed website is more than just a digital storefront—it’s a powerful tool for connecting with audiences and achieving goals. Sunny’s dedication to his craft, combined with his enthusiasm for innovation, makes him a standout web developer who continues to make a meaningful impact in the world of web development. With every project, Sunny strives to push boundaries and create websites that inspire and engage.</p>
            </div>
        </div>
      </div>
    </div>
      </section>
      <Footer />

    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>About us</h1>
        <p>At Sunny Technical, we believe that a strong online presence is crucial for success in today's digital world.  We're a team of experienced web developers dedicated to helping businesses and individuals establish and grow their online footprint. Our passion lies in crafting visually appealing, functional, and user-friendly websites that not only look great but also achieve your specific business objectives. We prioritize understanding your unique needs and target audience to deliver tailored solutions that drive results.  From concept to launch and beyond, we're committed to providing exceptional service and support every step of the way. </p>
      </section>
      <Footer />
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Our Services</h1>
        <p>
          <ul>
            <li>
              <strong>Website Design and Development:</strong> We create custom websites from scratch, tailored to your specific requirements.  This includes everything from initial design and layout to front-end and back-end development.
            </li>
            <li>
              <strong>Responsive Design:</strong> We ensure your website looks and functions flawlessly across all devices, including desktops, tablets, and smartphones.
            </li>
            <li>
              <strong>E-commerce Solutions:</strong> We build robust and secure online stores that enable you to sell your products or services online.
            </li>
            <li>
              <strong>Content Management Systems (CMS):</strong> We implement user-friendly CMS platforms that allow you to easily manage and update your website content.
            </li>
            <li>
              <strong>Website Maintenance and Support:</strong> We provide ongoing maintenance and support to ensure your website remains secure, up-to-date, and performs optimally.
            </li>
          </ul>
        </p>
      </section>
      <Footer />
    </>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Contact Us</h1>

        <div className="contact-container">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-subheading">We'd love to hear from you!</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
