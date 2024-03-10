import React,{useState} from 'react';
import { Card } from 'reactstrap';
import { FaArrowRight,FaEnvelope,FaPlayCircle } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';
import { IoIosAddCircle,IoIosRemoveCircle } from 'react-icons/io';
import { BsBarChart } from 'react-icons/bs';
import Button from '../Button.jsx'
import './home.css'
import '../icon.css'
import '../button.css'
import firstSvg from'../svg/first.svg'
import secondSvg from'../svg/second.svg'
import thirdSvg from'../svg/third.svg'
import fourthSvg from'../svg/fourth.svg'
import fifthSvg from'../svg/fifth.svg'
import foto from '../foto.png'; 
import { Link } from 'react-router-dom';
import {Footer} from '../Footer/Footer.jsx'

export const Body = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleIconClick = () => {
        setShowDescription(!showDescription);
    };
    return (
        <div className='body'>
            <div className='first'>
                <div className='first-div'>
                    <div className='badge'>
                        <span className='badge-text'>New feature</span>
                        <span className='second-badge-text'>
                            Check out the team dashboard
                            <FaArrowRight className='arrow-icon'/>
                        </span>
                    </div>
                    <div>
                        <span className='display-xl'>Beautiful analytics to grow smarter</span>
                    </div>
                    <div>
                        <span className='text-xl'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</span>
                    </div>
                    <div className="button-container">                    
                        <Button className="demo-button">
                            <FaPlayCircle className='play-icon'/>
                            Demo
                        </Button>
                        <Link to="/stepOne" style={{ textDecoration: 'none' }}>
                            <Button className="contact-button">Contact us</Button>
                        </Link>
                    </div>
                </div>                          
                <img src={foto} className="bottom-image" />
                <div className='join'>
                    <div className='join-text'>Join 4,000+ companies already growing</div>     
                    <div className='body-container'>
                        <div className='join-div'>
                            <img src={firstSvg} className="first-svg" />
                            <span className='layers'>Layers</span>
                        </div>
                        <div className='join-div'>
                            <img src={secondSvg} className="second-svg" />
                            <span className='sisyphus'>Sisyphus</span>
                        </div>
                        <div className='join-div'>
                            <img src={thirdSvg} className="third-svg" />
                            <span className='circooles'>Circooles</span>
                        </div>
                        <div className='join-div'>
                            <img src={fourthSvg} className="fourth-svg" />
                            <span className='catalog'>Catalog</span>
                        </div>
                        <div className='join-div'>
                            <img src={fifthSvg} className="fifth-svg" />
                            <span className='quotient'>Quotient</span>
                        </div>
                    </div>
                </div>     
                <div className='features'>
                    <div className='analy'>
                        <div className='feature-first-text'>
                            Features
                        </div>
                        <div className='feature-second-text'>
                            Analytics that feels like it’s from the future
                        </div>
                        <div className='feature-third-text'>
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.                        
                        </div>
                    </div>
                    <div className='team'>
                        <div className='column'>
                            <div className='mail-icon'>
                                <FaEnvelope  className='mailicon-inner' />
                            </div>
                            <div className='share-div'>
                                <div>
                                    <span className='share-text'>Share team inboxes</span>
                                </div>
                                <div>
                                    <span className='whether-text'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</span>
                                </div>
                            </div>                     
                        </div>
                        <div className='column'>
                            <div className='mail-icon'>
                                <FiZap  className='mailicon-inner' />
                            </div>
                            <div className='share-div'>
                                <div>
                                    <span className='share-text'>Deliver instant answers</span>
                                </div>
                                <div>
                                    <span className='whether-text'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</span>
                                </div>
                            </div>                     
                        </div>
                        <div className='column'>
                            <div className='mail-icon'>
                                <BsBarChart  className='mailicon-inner' />
                            </div>
                            <div className='share-div'>
                                <div>
                                    <span className='share-text'>Manage your team with reports</span>
                                </div>
                                <div>
                                    <span className='whether-text'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</span>
                                </div>
                            </div>                     
                        </div>
                    </div>
                </div>    
                <div className='ask'>
                    <div className='first-ask'>
                        <div className='ask-question'>Frequently asked questions</div>
                        <div className='ask-every'>Everything you need to know about the product and billing.</div>
                    </div>
                    <div className='second-ask'>
                        <Card className='mb-1 ml-2 border-0'>
                            <div className='free'>
                                <div className='there'>
                                    <div className='first-there'>Is there a free trial available?</div>
                                    {showDescription ? (
                                        <IoIosRemoveCircle className='circle-icon' onClick={handleIconClick} />
                                    ) : (
                                        <IoIosAddCircle className='circle-icon' onClick={handleIconClick} />
                                    )}
                                </div>
                                {showDescription && (
                                    <div className='second-there'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>
                                )}
                            </div>
                        </Card>
                        <div className='change-div'>
                            <span className='first-change'>Can I change my plan later?</span>
                            <IoIosAddCircle className='circle-icon' />
                        </div>
                        <div className='change-div'>
                            <span className='first-change'>What is your cancellation policy?</span>
                            <IoIosAddCircle className='circle-icon' />
                        </div>
                        <div className='change-div'>
                            <span className='first-change'>Can other info be added to an invoice?</span>
                            <IoIosAddCircle className='circle-icon' />
                        </div>
                        <div className='change-div'>
                            <span className='first-change'>How does billing work?</span>
                            <IoIosAddCircle className='circle-icon' />
                        </div>
                        <div className='change-div'>
                            <span className='first-change'>How do I change my account email?</span>
                            <IoIosAddCircle className='circle-icon' />
                        </div>
                   </div>
                </div>
                <div className='start'>
                    <div className='first-start'>
                        <div className='first-join'>
                           Start your free trial
                        </div>
                        <div className='second-join'>
                           Join over 4,000+ startups already growing with us.
                        </div>                        
                    </div>
                    <div className='start-button'>                    
                        <div>
                            <Button className='learn-button'>
                                <span className='first-learn-button'>Learn More</span>
                            </Button>
                        </div>
                        <div>
                            <Link to="/stepOne" style={{ textDecoration: 'none' }}>
                                <Button className='contact-learn-button'>
                                    <span className='second-learn-button'>Contact us</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>      
            </div>
            <Footer/>
        </div>
      
    );
}