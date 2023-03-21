import React    ,{useEffect} from 'react';
import {Link} from 'react-router-dom';

//images
import pic from './../../assets/images/project/large/pic1.jpeg';
import avatar from './../../assets/images/avatar/avatar1.jpg';

const StoryBlog = () => {
    function isScrolledIntoView(elem){
        const spliBox = document.querySelectorAll(elem);
        
        spliBox.forEach(myFunction)
        function myFunction(item) {

            const docViewTop = window.scrollY;

            const docViewBottom = docViewTop + window.innerHeight;

            let elemTop = item.getBoundingClientRect().top + docViewTop;

            const elemBottom = elemTop + item.offsetHeight;

            if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){               
                item.classList.add('split-active');
            }
          }
    }
    window.addEventListener("scroll", () => {
        isScrolledIntoView('.split-box');
    });   
    return(
        <>
           
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="section-head">
                        <h5 className="sub-title">SUCCESS STORY</h5>
                        <h2 className="title">Read The Story With PanINVEST</h2>
                        <p>How Paninvest contributed in the growth of the company</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 m-b30 text-end d-none d-lg-block wow fadeInUp" data-wow-delay="0.4s">
                    <Link to={"/project-story"} className="btn btn-primary btnhover2">View More <i className="fa-solid fa-angle-right ms-2"></i></Link>
                </div>
            </div>
            <div className="row align-items-center project-bx left m-b30">
                <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">	
                    <div 
                        
                        //className={`dz-media split-box ${abc ? "split-active" : ""}`} 
                        className={`dz-media split-box`} 
                        //id="content"
                    >
                        <div>
                            <img src={pic} alt="" className="app-1" />
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="dz-content wow fadeInUp" data-wow-delay="0.4s">
                        <h3 className="title m-b15">NanoFoamer PRO - An Automatic Hands-Free Microfoam Maker.</h3>
                        <p className="m-b0">Speed up your workflow by synchronizing your milk heating and foaming alongside your espresso preparation so both are ready simultaneously. This ensures your espresso crema is still intact when your microfoam is ready. Pour yourself a satisfying latte art masterpiece, then enjoy it at leisure.</p>
                        <div className="fund-count m-t30 m-md-t20">
                            <div className="icon-content">
                                <h2 className="text-primary">$ <span className="counter">6,57,710</span></h2>
                                <h6>Total funded</h6>
                            </div>
                        </div>
                        <div className="author-wrappper">
                            <div className="author-media">
                                <img src={avatar} alt="" /> 
                            </div>
                            <div className="author-content">
                                <div className="author-head">
                                    <h6 className="author-name">Manish</h6>
                                    <ul className="rating-list">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                        <li><i className="fa fa-star gray-light"></i></li>
                                    </ul>
                                </div>
                                <ul className="author-meta">
                                    <li className="campaign">12 Campaign</li>
                                    <li className="location">Hyderabad, India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               


            {/* <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">	
                <div                     
                    className={`dz-media split-box`} 
                   // id="content"
                >
                    <div>
                        <img src={pic} alt="" className="app-1" />
                    </div>
                </div> 
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">	
                <div                     
                    className={`dz-media split-box`} 
                   // id="content"
                >
                    <div>
                        <img src={pic} alt="" className="app-1" />
                    </div>
                </div> 
            </div> */}
        </>
    )
}
export default StoryBlog;