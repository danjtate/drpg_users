
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {userApi} from './config';
import './css/getAllUsers.css';

function GetAllUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
    axios({
        method: 'get',
        url: userApi.baseURL + userApi.allUsersEndpoint
    }).then(data => {
        setUsers(data.data.data)
    }).catch(err => {
        console.log(err)
    })
    }, [])
    return(
        <div>
            <table className='userTable'>
                <tr>
                    <th className='tableHeading'>Avatar</th>
                    <th className='tableHeading'>First Name</th>
                    <th className='tableHeading'>Last Name</th>
                    <th className='tableHeading'>Email Address</th>
                    <th className='tableHeading'>Edit</th>
                </tr>
                {users.map(users => <tr key={users.id}>
                        <td><img src={users.avatar}></img></td>
                        <td>{users.first_name}</td>
                        <td>{users.last_name}</td>
                        <td>{users.email}</td>
                        <td>edit</td>
                    </tr>)}
            </table>
        </div>
    )
}

export default GetAllUsers
