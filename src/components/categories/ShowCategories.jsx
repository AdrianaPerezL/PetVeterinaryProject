import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/"

const ShowCategories = () => {

    const [categories, setCategories] = useState([]);


    const getAllCategories = async () =>{
        const response = await axios.get(`${endpoint}categories`)
        setCategories(response.data)
    }

    const deleteCategory = async (id) => {
        await axios.delete(`${endpoint}categories/${id}`);
        getAllCategories();
     }

    useEffect(()=>{
        getAllCategories();
    },[])

  return (
    <div>
        <div className="d-gird gap-2">
            <Link to="/createCategory" className="btn btn-success btn.lg mt-2 mb-2 text-white">Create Category</Link>
        </div>
        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <td>Type Category</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.type}</td>                         
                            <td>
                                <Link to={`/editCategory/${category.id}`} className="btn btn-warning" >Editar</Link>
                                <button className="btn btn-danger" onClick={()=>{deleteCategory(category.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        


    </div>
  )
}

export default ShowCategories