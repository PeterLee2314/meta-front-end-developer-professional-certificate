import React from 'react'
import './Reservation.css'
import { Button } from '@chakra-ui/react';

function Reservation(props){
    return (props.trigger) ?(
        <div className="popup">
            <div className='popup-inner'>
            <Button className='close-btn' onClick={() => props.setTrigger(false)}>close</Button>
                {props.children}
            </div>
        </div>
     ) : "";
}

export default Reservation;