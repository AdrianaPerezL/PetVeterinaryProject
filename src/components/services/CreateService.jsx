import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/services";

const CreateService = ()=>{

    const [user_id, setUserId] = useState(0);
    const [pet_id, setPetId] = useState(0);
    const [service_name, setServiceName] = useState("");
    const [service_price, setServicePrice] = useState(0);
    const [additional_comments, setAdditionalComments] = useState("");


    const navigate = useNavigate()

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, {
            user_id: user_id,
            pet_id: pet_id,
            service_name: service_name,
            service_price: service_price,
            additional_comments: additional_comments,
            
        })

        navigate("/services");

    }



    return (
        <div>

        <h3>Create Service</h3>

        <form onSubmit={store}>

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
                <label className="form-label">Additional Comments</label>
                <input 
                    value={additional_comments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>
            <button type="submit" className="btn btn-primary">Store Service</button>
            <Link to="/"><button type="button" className="btn btn-primary mg-2px bg-danger">Cancel</button></Link>
        </form>

    </div>
    )
}

export default CreateService;