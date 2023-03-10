import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/"





const ShowUsers = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () =>{
        const response = await axios.get(`${endpoint}users`)
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
       await axios.delete(`${endpoint}users/${id}`);
       getAllUsers();
    }

    useEffect (()=>{
        getAllUsers();
    },[])


  return (
    <div>
        <div className="d-gird gap-2">
            <Link to="/createUser" className="btn btn-success btn.lg mt-2 mb-2 text-white">Create User</Link>
        </div>
        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>Phone number</td>
                    <td>Address</td>
                    <td>Date_of_birth</td>
                    <td>Email</td>
                    <td>image</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.address}</td>
                            <td>{user.date_of_birth}</td>
                            <td>{user.email}</td>
                            <td>{user.image}</td>
                            <td>
                                <Link to={`/editUser/${user.id}`} className="btn btn-warning" >Editar</Link>
                                <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        


    </div>
  )
}

export default ShowUsers