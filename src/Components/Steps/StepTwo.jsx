import React,{useState} from 'react';
import { FaCheck, FaArrowLeft} from 'react-icons/fa'; 
import { IoIosArrowDown} from 'react-icons/io';
import './steps.css';
import flag from'../svg/flag.svg'
import Button from '../Button.jsx'
import Modal from './Modal.jsx'
import { Link } from 'react-router-dom';

export const StepTwo = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='steps'>
            <div className='first-stepOne'>
                <span className='pageTwoStepOne'>Step1
                    <FaCheck className='check-icon' />
                </span>
                <span className='pageTwoStepTwo'>Step2</span>
                <span className='pageTwoStepThree'>Success</span>
            </div>
            <div className='second-stepTwo'>
                <div className='nameText'>
                    Name Surname
                    <input type="text" placeholder="Enter your name" className='nameInput' />
                </div>
                <div className='nameText'>
                    <div>Phone Number</div>    
                    <div className='stepTwoContainer'>
                        <div className="numberFirstInput">
                            <img src={flag} className="flag-icon" alt="Flag" />
                            <span className='phoneText'>+90</span>
                            <IoIosArrowDown className='arrowDown-icon' />
                        </div>
                        <input 
                            type="tel" 
                            placeholder="(___) ___-____" 
                            data-slots="-"  
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            maxLength="10"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            className='numberInput'
                        />         
                    </div>                         
                </div>
                <div className='nameText'>
                    E-mail
                    <input type="text" placeholder="Enter your e-mail" className='nameInput' />
                </div>
                <div className='nameText'>
                    Message
                    <input type="text" placeholder="Include a message..." className='messageInput' />
                </div>
                <div className='checkContainer'>
                    <input type="checkbox" id="checkbox" name="checkbox" className='checkBox' 
                      onClick={() => {
                        setModalOpen(true);
                      }}/>
                    <span className='checkText'>
                        You agree to our friendly 
                        <span class='underline'>privacy policy.</span>
                    </span>
                </div>
                <div className='stepTwoButtonContainer'>                    
                    <div>
                        <Link to="/stepOne">
                            <Button className='backButton'>
                                <FaArrowLeft className='arrow-left' />
                                <span className='backText'>Back</span>
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/success">
                            <Button className='completeButton'>
                                <span className='completeText'>Complete</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default StepTwo;