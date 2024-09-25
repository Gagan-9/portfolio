import React from "react";
import contactCSS from './../Contact/Contact.module.css'; 
import {Swiper, SwiperSlide} from "swiper/react";
import Testimonialimg1 from './../../assets/testimonial1.webp'
import Testimonialimg2 from  './../../assets/testimonial2.webp'
import 'swiper/css'
import { Autoplay } from "swiper/modules";

function Contact() {
    return (
        <div id = "contact" className={`${contactCSS.ContactWrapper} section`}> 
        <h3 className="sectionheading"><i className="ri-shining-fill">Contact</i></h3>
        <h1 className="section_Title">Contact Details</h1>
        <form >
            <div className={contactCSS.inputWrapper}>
                <div className={contactCSS.input_Container}>
                    <input type="text" placeholder="Name" className={contactCSS.input} />
                </div>
                <div className={contactCSS.input_Container}>
                    <input type="email" placeholder="Enter Email" className={contactCSS.input} />
                </div>
                <div className={contactCSS.input_Container}>
                    <input type="text" placeholder="Enter Phoner Number" className={contactCSS.input} />
                </div>
            </div>
            <textarea placeholder="Messege"></textarea>
            <button>Submit</button>
        </form>
        <div className={contactCSS.ContactDeatils}>
            <div className={contactCSS.card}>
                <h3>Location <span>India</span></h3>
            </div>
            <div className={contactCSS.card}>
                <h3>Email <span>deepgagan.2309@gmail.com</span></h3>
            </div>
            <div className={contactCSS.card}>
                <h3>LinkedIn <span>Gagank9</span></h3>
            </div> 
        </div>
        <div id = "skills"className={contactCSS.Testimonials}>  <h1 className="section_Title"> What  My<br/> Client Says</h1>
            <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            onAutoplay={
                {
                    delay: 2000,
                }
            }
            modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={contactCSS.TestmonialWrapper}>
                        <div className={contactCSS.Profile}>
                            <img src={Testimonialimg1} alt="" />
                            <h3>John Doe <span>Brand Manager at Sting Designing</span></h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={contactCSS.TestmonialWrapper}>
                        <div className={contactCSS.Profile}>
                            <img src={Testimonialimg2} alt="" />
                            <h3>John Doe <span>Brand Manager at Sting Designing</span></h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            </div>
        </div>
    )
}

export default Contact;
