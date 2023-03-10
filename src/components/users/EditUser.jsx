import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/users/"



const EditUser = ()=>{
    const [name, setName] = useState("");
    const [last_name, setLast_name] = useState("");
    const [phone_number, setPhone_number] = useState(0);
    const [address, setAddress] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) =>{
        event.preventDefault();
        
        await axios.put(`${endpoint}${id}`,{
            name:name,
            last_name:last_name,
            phone_number:phone_number,
            address: address,
            date_of_birth:date_of_birth,
            email:email,
            password:password,
            image: image
        })

        

        navigate("/users")
    }

    useEffect(()=>{
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name);
            setLast_name(response.data.last_name);
            setPhone_number(response.data.phone_number);
            setAddress(response.data.address);
            setDate_of_birth(response.data.date_of_birth);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setImage(response.data.image);
        }
        
        getUserById();

    },[])


    return (
        <div>

        <h3>Edit User</h3>

        <form onSubmit={update}>

            <div className="mb-3">
                <label className="form-label">Name</label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input 
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input 
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    type="number"
                    maxLength={8}
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Address</label>
                <input 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Date Of Birth</label>
                <input 
                    value={date_of_birth}
                    onChange={(e) => setDate_of_birth(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Image</label>
                <input 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>  

            <button type="submit" className="btn btn-primary">Update User</button>
        </form>

    </div>
    )
}

export default EditUser