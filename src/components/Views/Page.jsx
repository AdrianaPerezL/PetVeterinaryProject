import React from "react"

import {Link} from "react-router-dom"

import ShowAppointments from '../appointments/ShowAppointments'
import CreateAppointment from '../appointments/CreateAppointment'
import EditAppointment from '../appointments/EditAppointment'
import ShowUsers from '../users/ShowUsers'
import CreateUser from '../users/CreateUser'
import EditUser from '../users/EditUser'
import ShowServices from '../services/ShowServices'
import CreateService from "../services/CreateService"
import EditService from '../services/EditService'
import ShowCategories from '../categories/ShowCategories'
import CreateCategory from '../categories/CreateCategory'
import EditCategory from '../categories/EditCategory'
import ShowPets from '../pets/ShowPets'
import CreatePets from '../pets/CreatePets'
import EditPets from '../pets/EditPets'
import ShowComments from '../comments/ShowComments'
import CreateComment from '../comments/CreateComment'
import EditComment from '../comments/EditComment'
import Login from "./Login"
import { useContext } from "react"

class Page extends React.Component{
  
    render(){
          return (
            <div>
              <meta charSet="utf-8" />
              <meta content="width=device-width, initial-scale=1.0" name="viewport" />
              <title>Pet Veterinary</title>
              <meta content name="description" />
              <meta content name="keywords" />
           
        
              {/* ======= Header ======= */}
              <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                  <h1 className="logo me-auto"><a href="index.html"><img src="..\src\assets\img\logo.png" alt="" width="100px" /></a></h1>
              
                  <nav id="navbar" className="navbar">
                    <ul>
                      <li><a className="nav-link scrollto active" href="/">Home</a></li>
                      <li><a className="nav-link scrollto" href="#about">About</a></li>
                      <li><a className="nav-link scrollto" href="#services">Services</a></li>
                      <li><a className="nav-link scrollto" href="#portfolio">Pet Shop</a></li>
                      <li><a className="nav-link scrollto" href="#team">Team</a></li>
                      <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                      <li><Link className="getstarted scrollto" to='/login'>Log in</Link></li>
                      <li><Link className="getstarted scrollto" to='/register'>Register</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                  </nav>
                </div>
              </header>{/* End Header */}
              {/* ======= Hero Section ======= */}
              <section id="hero" className="d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
                      <h1>Welcome</h1>
                      <h2>Veterinary clinic for your pets</h2>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                        <Link to="/createPet" className="btn-get-started scrollto">Add your Pet</Link>
{/*                         <a href="/createPet" className="btn-get-started scrollto">Add your Pet</a>
 */}                        <a href="https://youtu.be/VR42w4hh_5s" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
                      <img src="assets/img/perro.png" className="img-fluid animated" alt="" />
                    </div>
                  </div>
                </div>
              </section>{/* End Hero */}
              <main id="main">
                {/* ======= Clients Section ======= */}
                <section id="clients" className="clients section-bg">
                  <div className="container">
                    <div className="row" data-aos="zoom-in">
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/dogui.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/felix.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/pedigree.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/purina.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/royal.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/arion.png" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </section>{/* End Cliens Section */}
                {/* ======= About Us Section ======= */}
                <section id="about" className="about">
                  <div className="container" data-aos="fade-up">
                    <div className="section-title">
                      <h2>About Us</h2>
                    </div>
                    <div className="row content">
                      <div className="col-lg-6">
                        <img className="dog2" src="assets/img/cat.png" alt="" width="400px" />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0">
                        <p className="p1">
                          Since 2001, we've been providing pets and owners with the very best care and advice.
                          <br /><br />
                          Every pet we see benefits from personalised care supported by the latest technology, not to mention the gentle touch of our expert vet team. Our aim is to make your pet’s time with us as comfortable as we can – and to send him or her home happy, healthy and well. 
                        </p>
                        <a href="https://www.vets4pets.com/" className="btn-learn-more">Learn More</a>
                      </div>
                    </div>
                  </div>
                </section>{/* End About Us Section */}
                {/* ======= Why Us Section ======= */}
                <section id="why-us" className="why-us section-bg">
                  <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content">
                          <h3>Learn about your pet<strong> care</strong></h3>
                          <p>
                            As every pet lover we know how important is to know how take care of your animals, see these advices </p>
                        </div>
                        <div className="accordion-list">
                          <ul>
                            <li>
                              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>Dog Advice <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                <p>
                                  Dogs can be trusted companions, fun friends and great company. Owning a dog is a big responsibility, but put in the time to train and really get to know your four-legged friend, and you will enjoy one of the most rewarding relationships of your life. We can supply the hints, tips, advice and healthcare if you supply the infinite quantities of love and affection!
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span>Cat Advice<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                              <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                  Cats have been popular household pets for thousands of years, so if you share your home with a feline friend, you’re joining an ancient tradition! Whether your cat is a cuddly kitten or an elderly bundle of love, we’ll help you care for them like an expert and enjoy a long and happy life with this most enigmatic of pets. Read our expert advice articles below to help keep them happy and healthy. Our advice articles range from choosing your cat to caring for your cat’s teeth. At Vets4Pets we cover all veterinary aspects of caring for your cat from vaccinations to dental care. Find out more by clicking on the articles below.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span>Rabbit Advice<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                              <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                  Did you know rabbits are actually social creatures, who ideally need another rabbit for company? Caring for rabbits means giving them lots of love and attention, and our expert advice will tell you all the key information you need to know.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/fish.png")', width: '450px'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
                    </div>
                  </div>
                  {/* ======= Services Section ======= */}
                  <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                      <div className="section-title">
                        <h2>Services</h2>
                        <p>Every Vets practice offers these services and facilities</p>
                      </div>
                      <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                          <div className="icon-box">
                            <div className="icon"><img src="assets/img/service1.svg" alt="" /></div>
                            <h4><a href>Vaccination</a></h4>
                            <p>Treat your pet as we would our own.</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                          <div className="icon-box">
                            <div className="icon"><img src="assets/img/service2.svg" alt="" /></div>
                            <h4><a href>Biochemistry</a></h4>
                            <p>Tailor our advice to fit your pet’s needs.</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
                          <div className="icon-box">
                            <div className="icon"><img src="assets/img/service3.svg" alt="" /></div>
                            <h4><a href>X-Ray</a></h4>
                            <p>Provide your pet with a high standard of healthcare</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={400}>
                          <div className="icon-box">
                            <div className="icon"><img src="assets/img/service4.svg" alt="" /></div>
                            <h4><a href>Dentistry Services</a></h4>
                            <p>Inform you about treatments your pet needs and why.</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>{/* End Services Section */}
                  {/* ======= Cta Section ======= */}
                  <section id="cta" className="cta">
                    <div className="container" data-aos="zoom-in">
                      <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                          <h3>Ask for a service</h3>
                          <p>Join the club for expert advice and tailored offers</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                          <a className="cta-btn align-middle" href="/createService">Ask for a service</a>
                        </div>
                      </div>
                    </div>
                  </section>{/* End Cta Section */}
                  {/* ======= Portfolio Section ======= */}
                  <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
                      <div className="section-title">
                        <h2>Pet Shop</h2>
                        <p>Find all the important things to your pets</p>
                      </div>
                      <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">Dogs</li>
                        <li data-filter=".filter-card">Cats</li>
                        <li data-filter=".filter-web">Others</li>
                      </ul>
                      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Dog house</h4>
                            <p>$125</p>
                            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Fishbowl</h4>
                            <p>$85</p>
                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Dog Coat</h4>
                            <p>$35</p>
                            <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Cats Dickey</h4>
                            <p>$15</p>
                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Hamster Cage</h4>
                            <p>$49.99</p>
                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpeg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Dog food</h4>
                            <p>$5</p>
                            <a href="assets/img/portfolio/portfolio-6.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Cats collar</h4>
                            <p>$7.99</p>
                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Cats food</h4>
                            <p>$5</p>
                            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
                          <div className="portfolio-info">
                            <h4>Snake cage</h4>
                            <p>$81.90</p>
                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title><i className="bx bx-plus" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{/* End Portfolio Section */}
                  {/* ======= Team Section ======= */}
                  <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">
                      <div className="section-title">
                        <h2>Team</h2>
                        <p>Our vet practice teams put their heart and soul into protecting pets every day. But there’s nothing everyday about it.</p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                          <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Walter White</h4>
                              <span>Veterinary Specialist</span>
                              <div className="social">
                                <a href="https://twitter.com/?lang=es"><i className="ri-twitter-fill" /></a>
                                <a href="https://es-la.facebook.com/"><i className="ri-facebook-fill" /></a>
                                <a href="https://www.instagram.com/"><i className="ri-instagram-fill" /></a>
                                <a href="https://sv.linkedin.com/"> <i className="ri-linkedin-box-fill" /> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={200}>
                          <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Sarah Jhonson</h4>
                              <span>Livestock veterinarian</span>
                              <div className="social">
                                <a href="https://twitter.com/?lang=es"><i className="ri-twitter-fill" /></a>
                                <a href="https://es-la.facebook.com/"><i className="ri-facebook-fill" /></a>
                                <a href="https://www.instagram.com/"><i className="ri-instagram-fill" /></a>
                                <a href="https://sv.linkedin.com/"> <i className="ri-linkedin-box-fill" /> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={300}>
                          <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>William Anderson</h4>
                              <span>Laboratory Veterinarian</span>
                              <div className="social">
                                <a href="https://twitter.com/?lang=es"><i className="ri-twitter-fill" /></a>
                                <a href="https://es-la.facebook.com/"><i className="ri-facebook-fill" /></a>
                                <a href="https://www.instagram.com/"><i className="ri-instagram-fill" /></a>
                                <a href="https://sv.linkedin.com/"> <i className="ri-linkedin-box-fill" /> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={400}>
                          <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Jack Jepson</h4>
                              <span>Ophthalmology</span>
                              <div className="social">
                                <a href="https://twitter.com/?lang=es"><i className="ri-twitter-fill" /></a>
                                <a href="https://es-la.facebook.com/"><i className="ri-facebook-fill" /></a>
                                <a href="https://www.instagram.com/"><i className="ri-instagram-fill" /></a>
                                <a href="https://sv.linkedin.com/"> <i className="ri-linkedin-box-fill" /> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{/* End Team Section */}
                  {/* ======= Contact Section ======= */}
                  <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                      <div className="section-title">
                        <h2>Contact</h2>
                        <p>If you have any queries please feel free to contact our friendly team on the details below:</p>
                      </div>
                      <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                          <div className="info">
                            <div className="address">
                              <i className="bi bi-geo-alt" />
                              <h4>Location:</h4>
                              <p>A108 1<sup>st</sup> Street, San Salvador, El Salvador</p>
                            </div>
                            <div className="email">
                              <i className="bi bi-envelope" />
                              <h4>Email:</h4>
                              <p>info@vetpets.sv</p>
                            </div>
                            <div className="phone">
                              <i className="bi bi-phone" />
                              <h4>Call:</h4>
                              <p>+503 2223 2423</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62023.0983300061!2d-89.25027152935391!3d13.691559132595588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067b411775d%3A0x1f75978893fb5c96!2sSan%20Salvador!5e0!3m2!1ses-419!2ssv!4v1677026337703!5m2!1ses-419!2ssv" style={{border: 0, width: '100%', height: '290px'}} allowFullScreen frameBorder={0} />
                          </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" className="form-control" id="name" required />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="name">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Subject</label>
                              <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Message</label>
                              <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                            </div>
                            <div className="my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message" />
                              <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit"><a className="a1" href="mailto:adrianaperez1796@gmail?Subject=Querie">Send Message</a></button></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>{/* End Contact Section */}
                </section></main>{/* End #main */}
              {/* ======= Footer ======= */}
              <footer id="footer">
                <div className="footer-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 footer-contact">
                        <img src="assets/img/logo2.png" alt="" width="125px" />
                        <p>A108 1<sup>st</sup> Street, San Salvador, El Salvador <br />
                          <strong>Phone:</strong> +503 2223 2423<br />
                          <strong>Email:</strong> info@vetpets.sv<br />
                        </p>
                      </div>
                      <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                          <li><i className="bx bx-chevron-right" /> <a href>Home</a></li>
                          <li><i className="bx bx-chevron-right" /> <a href="#about">About us</a></li>
                          <li><i className="bx bx-chevron-right" /> <a href="#services">Services</a></li>
                          <li><i className="bx bx-chevron-right" /> <a href="#portfolio">Pet Shop</a></li>
                          <li><i className="bx bx-chevron-right" /> <a href="#team">Team</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-5 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p className="GetP">Get informed, follow us in</p>
                        <div className="social-links mt-3">
                          <a href="https://twitter.com/?lang=es" className="twitter"><i className="bx bxl-twitter" /></a>
                          <a href="https://es-la.facebook.com/" className="facebook"><i className="bx bxl-facebook" /></a>
                          <a href="https://www.instagram.com/" className="instagram"><i className="bx bxl-instagram" /></a>
                          <a href="https://sv.linkedin.com/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container footer-bottom clearfix">
                  <div className="copyright">
                    © Copyright <strong><span>Pet Veterinary</span></strong>. All Rights Reserved 2023
                  </div>
                </div>
              </footer>
              <div id="preloader" />
              <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>
          );
    }
}

export default Page;


    