import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/services/"

const EditService = ()=>{
    const [user_id, setUserId] = useState(0);
    const [pet_id, setPetId] = useState(0);
    const [service_name, setServiceName] = useState("");
    const [service_price, setServicePrice] = useState(0);
    const [additional_comments, setAdditionalComments] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) =>{
        event.preventDefault();
        
        await axios.put(`${endpoint}${id}`,{
            user_id:user_id,
            pet_id:pet_id,
            service_name:service_name,
            service_price: service_price,
            additional_comments:additional_comments
            
        })

        

        navigate("/services")
    }

    useEffect(()=>{
       
        const getServiceById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            
            setUserId(response.data.user_id);
            setPetId(response.data.pet_id);
            setServiceName(response.data.service_name);
            setServicePrice(response.data.service_price);
            setAdditionalComments(response.data.additional_comments);
            
        }
        
        getServiceById();

    },[])

    return (
        <div>

        <h3>Edit Services</h3>

        <form onSubmit={update}>

            <div className="mb-3">
                <label className="form-label">User Id</label>
                <input 
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                    type="number" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Pet Id</label>
                <input 
                    value={pet_id}
                    onChange={(e) => setPetId(e.target.value)}
                    type="number" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input 
                    value={service_name}
                    onChange={(e) => setServiceName(e.target.value)}
                    type="text"
                    
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Service Price</label>
                <input 
                    value={service_price}
                    onChange={(e) => setServicePrice(e.target.value)}
                    type="number"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">

                <label className="form-label">Aditional Comments</label>
                <input 
                    value={additional_comments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <button type="submit" className="btn btn-primary">Update Services</button>
        </form>

    </div>
    )

}

export default EditService;