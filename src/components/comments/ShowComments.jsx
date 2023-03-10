import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/"

const ShowComments = () => {
    const [comments, setComments] = useState([]);

    const getAllComments = async () =>{
        const response = await axios.get(`${endpoint}comments`)
        setComments(response.data)
    }

    const deleteComment = async (id) => {
        await axios.delete(`${endpoint}comments/${id}`);
        getAllComments();
     }

     useEffect(()=>{
        getAllComments();
    },[])

  return (
    <div>
        <div className="d-gird gap-2">
            <Link to="/createComment" className="btn btn-success btn.lg mt-2 mb-2 text-white">Create Comment</Link>
        </div>
        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <td>Comentario</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((comment) => (
                        <tr key={comment.id}>
                            <td>{comment.text}</td>                         
                            <td>
                                <Link to={`/editComment/${comment.id}`} className="btn btn-warning" >Editar</Link>
                                <button className="btn btn-danger" onClick={()=>{deleteComment(comment.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        


    </div>
  )
}

export default ShowComments