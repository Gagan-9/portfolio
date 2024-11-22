import React from "react";
import contactCSS from './../Contact/Contact.module.css'; 
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Contact() {
    return (
        <div id="contact" className={`${contactCSS.ContactWrapper} section`}> 
            <h3 className="sectionheading"><i className="ri-shining-fill">Contact</i></h3>
            <h1 className="section_Title">Contact Details</h1>
            <div className={contactCSS.ContactDetails}>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay]}
                    className={contactCSS.swiper} // Added class for Swiper
                >
                    <SwiperSlide>
                        <div className={contactCSS.TestimonialWrapper}>
                            <div className={contactCSS.Profile}>
                                <FaMapMarkerAlt size={70} color="#0077B5" />
                                <h3>Location 
                                    <span><a href="https://www.google.com/maps/place/India" target="_blank" rel="noopener noreferrer"> India</a></span>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={contactCSS.TestimonialWrapper}>
                            <div className={contactCSS.Profile}>
                                <FaEnvelope size={60} color="#0077B5" />
                                <h3>E-Mail 
                                    <span><a href="mailto:deepgagan.2309@gmail.com"> deepgagan.2309@gmail.com</a></span>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={contactCSS.TestimonialWrapper}>
                            <div className={contactCSS.Profile}>
                                <FaLinkedin size={60} color="#0077B5" />
                                <h3>LinkedIn 
                                    <span><a href="https://www.linkedin.com/in/gagank9/" target="_blank" rel="noopener noreferrer"> Gagank9</a></span>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Contact;
