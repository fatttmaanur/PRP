import React from "react";
import Button from '../Button.jsx'
import "./modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalContainer">
            <div className="title">
              <span className="firstTitle">Privacy Policy </span>
              <span className="secondTitle">Your privacy is important to us. We respect your privacy regarding any information we may collect from you across our website.</span>
            </div>
            <div className="bodyModal">
              <span className="firstBody"> 
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
              </span>
              <span className="secondBody">
                What information do we collect?
              </span>
              <span className="thirdBody">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
              </span>
            </div>
            <div className="modalFooter">
              <div className='stepTwoButtonContainer'>                    
                <div>
                  <Button 
                    onClick={() => { 
                    setOpenModal(false); 
                    }} 
                    id="cancelBtn" 
                    className='modalButton'
                   >
                    <span className='cancelText'>Cancel</span>
                  </Button>
                </div>
                <div>
                  <Button className='confirmButton'
                    onClick={() => { 
                    setOpenModal(false); 
                    }} 
                    id="cancelBtn" 
                    >
                    <span className='confirmText'>Confirm</span>
                  </Button>
                </div>
              </div>
            </div>
        </div>
    );
  }
  
  export default Modal;