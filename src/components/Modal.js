import React, { useState, useEffect } from 'react';
import './css/modal.css';
import axios from 'axios';
import {userApi} from '../api/config';

const Modal = (props) => {

    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState(props.details.first_name);
    const [lastName, setLastName] = useState(props.details.last_name);
    const [email, setEmail] = useState(props.details.email);

    function submit(details) {
        console.log('INFO: submit fn: Updating information for userID: ' + details.id)
        axios({
            method: 'put',
            url: `${userApi.baseURL}${userApi.allUsersEndpoint}/${details.id}`,
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email
            }
        }).then(data => {
            console.log('INFO: submit fn: Successful API call updating single user')
            console.log('DEBUG: submit fn: API response: ' + JSON.stringify(data))
        }).catch(err => {
            console.log('ERROR: submit fn: Error in API call for updating single user:' + err)
            setError(err)
        })
    }

    const getFirstName = (t) => {
        setFirstName(t);
      };

      const getLastName = (t) => {
        setLastName(t);
      };

      const getEmail = (t) => {
        setEmail(t);
      };

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
                    <div>
                        <div className = 'label'>First Name</div>
                            <div>
                                <input onChange={(e) => getFirstName(e.target.value)} className = 'formInput' id = {props.details.id} placeholder={props.details.first_name}></input>  
                            </div>

                            <div className = 'label'>Last Name</div>
                            <div>
                                <input onChange={(e) => getLastName(e.target.value)} className = 'formInput' id = {props.details.id} placeholder={props.details.last_name}></input>  
                            </div>

                            <div className = 'label'>Email</div>
                            <div>
                                <input onChange={(e) => getEmail(e.target.value)} className = 'formInput' id = {props.details.id} placeholder={props.details.email}></input>  
                            </div>
                        </div>
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