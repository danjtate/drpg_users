import React, { useState, useEffect } from 'react';
import './css/modal.css';
import FormFields from './FormField';
import axios from 'axios';
import {userApi} from '../api/config';

const Modal = (props) => {

    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function submit(details) {
        axios({
            method: 'put',
            url: `${userApi.baseURL}${userApi.allUsersEndpoint}/${details.id}`,
            body: {
                first_name: firstName,
                last_name: lastName,
                email: email
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            setError(err)
        })
    }

    if(!props.show) {
        return null
    }

    if (error) {
        return <>{error.message}</>;
    } else {
        return (
            <div className = 'modal'>
                <div className = 'modalContent'>
                    <div className = 'modalHeader'>
                        <img src={props.details.avatar}></img>
                    </div>
                    <div className = 'modalBody'>
                        <FormFields label='First Name' detail={props.details.first_name}  value={firstName}/>
                        <FormFields label='Last Name' detail={props.details.last_name}  value={lastName}/>
                        <FormFields label='Email' detail={props.details.email} value={email}/>
                    </div>
                    <div className = 'modalFooter'>
                        <button onClick={props.onClose} className='btn'>Close</button>
                        <button onClick={() => submit(props.details)} className='btn'>Update User</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;