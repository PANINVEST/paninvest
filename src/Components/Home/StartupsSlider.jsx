import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import team2 from './../../assets/images/team/team2.png'
import team3 from './../../assets/images/team/team3.png'
import team4 from './../../assets/images/team/team4.png'


// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [
	
	{image: team2, title:'Falhari', subtitle:'Fresh Fruit anytime'},
	{image: team3, title:'Cocofit', subtitle:'Natural Coconut drinks'},
	{image: team4, title:'EventBeep', subtitle:'Social media with event hosting'}
];

const StartupsSlider = () => {
    return (
        <>
            <Swiper className="team-slider"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {3}
				spaceBetween= {5}
				loop={true}
				autoplay= {{
				   delay: 3000,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					1200: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    500: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 1,
                    },
				}}
			>	
               
				{dataBlog.map((d,i)=>(
					<SwiperSlide key={i}>						
                        <div className="dz-team style-1 m-b30">
                            <div className="dz-media">
                                <Link to={"/instructor"}><img src={d.image} alt="" /></Link>
                                <ul className="team-social">
                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fab fa-facebook-f"></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="fab fa-instagram"></a></li>
                                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fab fa-twitter"></a></li>
                                </ul>
                            </div>
                            <div className="dz-content">
                                <h5 className="dz-name">{d.title}</h5>
                                <span className="dz-position text-primary">{d.subtitle}</span>
                            </div>
                        </div>			
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    );
};


export default StartupsSlider;