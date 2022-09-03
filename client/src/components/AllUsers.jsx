import {Table ,TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';


import {getUsers} from '../service/api';




const AllUsers = () => {

    const[users,setUser]=useState([]);

    useEffect(() =>{
        getUsers();

    },[]);

    const getAllUsers=async()=>{
        let response=await getUsers();
        setUser(response);
        
    }


    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>
    );
}

export default AllUsers;