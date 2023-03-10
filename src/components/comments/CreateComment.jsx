import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/comments";

const CreateComment = () => {

    const [comment, setComment] = useState("")

    const navigate = useNavigate()

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, {
            text: comment
            
        })

        navigate("/comments");

    }

  return (
    <div>

        <h3>Create Comment</h3>

        <form onSubmit={store}>

            <div className="mb-3">
                <label className="form-label">Comment</label>
                <input 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <button type="submit" className="btn btn-primary">Store Comment</button>
        </form>

    </div>
  )
}

export default CreateComment