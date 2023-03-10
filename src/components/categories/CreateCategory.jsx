import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/categories";


const CreateCategory = () => {
    const [type, setType] = useState("");
    const navigate = useNavigate()

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, {
            type: type,
            
        })

        navigate("/categories");

    }



  return (
    <div>

        <h3>Create Category</h3>

        <form onSubmit={store}>

            <div className="mb-3">
                <label className="form-label">Type Category</label>
                <input 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <button type="submit" className="btn btn-primary">Store Category</button>
        </form>

    </div>
  )
}

export default CreateCategory