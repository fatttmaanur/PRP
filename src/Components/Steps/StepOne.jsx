import React from 'react';
import './steps.css'
import stepOne from'../svg/stepOne.svg'
import stepTwo from'../svg/stepTwo.svg'
import stepThree from'../svg/stepThree.svg'
import Button from '../Button.jsx'
import { Link } from 'react-router-dom';

export const StepOne = () => {
    return (
            <div className='steps'>
                <div className='first-stepOne'>
                    <span className='stepOne-text'>Step1</span>
                    <span className='stepTwo-text'>Step2</span>
                    <span className='stepTwo-text'>Success</span>
                </div>
                <div className='second-stepTwo'>
                    <div className='second-stepTwo-text'>What kind of plan is most suitable for you?</div>
                        <div className="boxOne">
                            <a className='order'>
                                <div className="order">
                                    <img src={stepOne} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div className="order-content">
                                    <span className='boxOne-textOne'>Individual</span>
                                    <span className='boxOne-textTwo'>For individual designer and developer.</span>
                                </div>
                            </a>
                        </div>
                        <div className="boxOne">
                            <a className='order'>
                                <div className="order">
                                    <img src={stepTwo} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div className="order-content">
                                    <span className='boxOne-textOne'>Team</span>
                                    <span className='boxOne-textTwo'>For small team of designers and developers.</span>
                                </div>
                            </a>
                        </div>
                        <div className="boxOne">
                            <a className='order'>
                                <div className="order">
                                    <img src={stepThree} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div className="order-content">
                                    <span className='boxOne-textOne'>Corporate</span>
                                    <span className='boxOne-textTwo'>For larger design and development teams.</span>
                                </div>
                            </a>
                        </div>
                    </div>
                <Link to="/stepTwo">
                    <Button className="step-button">
                        <span className='stepButton-text'>Next Step</span>
                    </Button>
                </Link>
            </div>
        
    );
}