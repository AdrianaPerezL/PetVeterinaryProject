import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/categories/"

const EditCategory = () => {
    const [type, setType] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) =>{
        event.preventDefault();
        
        await axios.put(`${endpoint}${id}`,{
            type:type

        })
        navigate("/categories")
    }

    useEffect(()=>{
       
        const getCategoryById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            
            setType(response.data.type);
            
            
        }
        
        getCategoryById();

    },[])

  return (
    <div>

        <h3>Edit Category</h3>

        <form onSubmit={update}>

            <div className="mb-3">
                <label className="form-label">Type Category</label>
                <input 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            
            <button type="submit" className="btn btn-primary">Update Category</button>
        </form>

    </div>
  )
}

export default EditCategory