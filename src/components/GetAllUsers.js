
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import {userApi} from '../api/config';
import Modal from './Modal';
import './css/getAllUsers.css';

const UserTable = (props) => {
    console.log('INFO: UserTable fn: Mapping API response into table')
    const [show, setShow] = useState(false);
    return (
        <tr key={props.id}>
                <td><img src={props.avatar}></img></td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td id='edit' onClick={() => setShow(true)}>Edit Details</td>
                <Modal details={props} onClose={() => setShow(false)}   show={show}/>
        </tr>
    )
}

function GetAllUsers() {
    console.log('INFO: GetAllUsers fn: Loading all users')
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([])
    const [pageCount, setPageCount] = useState(0);
    let [currentPage, setcurrentPage] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        axios({
            method: 'get',
            url: `${userApi.baseURL}${userApi.allUsersEndpoint}?page=${currentPage}`
        }).then(data => {
            console.log('INFO: handleFetch fn: Successful API call for all users')
            console.log('DEBUG: handleFetch fn: API response: ' + JSON.stringify(data))
            setIsLoaded(true)
            setUsers(data.data.data)
            setPageCount(data.data.total_pages);
        }).catch(err => {
            console.log('ERROR: handleFetch fn: Error in API call for all users:' + err)
            setError(err)
        })
    }

    const handlePageChange = (selectedObject) => {
        console.log('INFO: handlePageChange fn: Changing page of results')
        if(selectedObject.selected === 1){
            setcurrentPage(currentPage++)
        } else {
            setcurrentPage(currentPage--)
        }
		handleFetch();
	};

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div>
                <div>
                    <table className='userTable'>
                        <tr>
                            <th className='tableHeading'>Avatar</th>
                            <th className='tableHeading'>First Name</th>
                            <th className='tableHeading'>Last Name</th>
                            <th className='tableHeading'>Email Address</th>
                            <th className='tableHeading'>Edit</th>
                        </tr>
                        {users.map((users) => {
                            return (
                                <UserTable
                                    id={users.id}
                                    avatar={users.avatar} 
                                    first_name={users.first_name}
                                    last_name={users.last_name}
                                    email={users.email}
                                />
                            )
                        })
                    }
                    </table>
                </div>
                <div><ReactPaginate
                        pageCount={pageCount}
                        pageRange={2}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName={'container'}
                        previousLinkClassName={'page'}
                        breakClassName={'page'}
                        nextLinkClassName={'page'}
                        pageClassName={'page'}
                        disabledClassNae={'disabled'}
                        activeClassName={'active'}
                    /></div>
            </div>
        )
    }
}

export default GetAllUsers
