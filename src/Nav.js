import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav(){

    const[show,handleShow]=useState(false);
    const history=useHistory();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);

        });
        return ()=>{
            window.removeEventListener("scroll",()=>{
                if(window.scrollY>100){
                    handleShow(true);
                }
                else handleShow(false);
            });
        };

    },[]);

    return(
        <div className={`nav ${show&&"nav_black"}`}>
            <div className="nav_contents">

            {/**netflix logo */}
            <img
            onClick={()=>history.push("/")}
            className="nav_logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            
            {/**avatar logo */}
            <img 
            onClick={()=>history.push("/profile")}
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""/>

            </div>
            
        </div>
    )
}

export default Nav