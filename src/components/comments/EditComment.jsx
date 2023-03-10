import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/comments/"

const EditComment = () => {
    const [comment, setComment] = useState("")

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) =>{
        event.preventDefault();
        
        await axios.put(`${endpoint}${id}`,{
            text:comment

        })
        navigate("/comments")
    }

    useEffect(()=>{
       
        const getCommentById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            
            setComment(response.data.text);
            
            
        }
        
        getCommentById();

    },[])

  return (
    <div>

        <h3>Edit Comment</h3>

        <form onSubmit={update}>

            <div className="mb-3">
                <label className="form-label">Comment</label>
                <input 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            
            <button type="submit" className="btn btn-primary">Update Comment</button>
        </form>

    </div>
  )
}

export default EditComment