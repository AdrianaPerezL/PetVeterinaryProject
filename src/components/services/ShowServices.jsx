import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/"

const ShowServices = ()=> {
    const [services, setServices] = useState([])

    const getAllServices = async () =>{
        const response = await axios.get(`${endpoint}services`)
        setServices(response.data)
    }

    const deleteService = async (id) => {
        await axios.delete(`${endpoint}services/${id}`);
        getAllServices();
     }

     useEffect (()=>{
        getAllServices();
    },[])
    return (
        <div>
        <div className="d-gird gap-2">
            <Link to="/createService" className="btn btn-success btn.lg mt-2 mb-2 text-white">Create Service</Link>
        </div>
        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <td>User Id</td>
                    <td>Pet Id</td>
                    <td>Service Name</td>
                    <td>Service Price</td>
                    <td>Aditional Comments</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service) => (
                        <tr key={service.id}>
                            <td>{service.user_id}</td>
                            <td>{service.pet_id}</td>
                            <td>{service.service_name}</td>
                            <td>{service.service_price}</td>
                            <td>{service.additional_comments}</td>
                            
                            <td>
                                <Link to={`/editService/${service.id}`} className="btn btn-warning" >Editar</Link>
                                <button className="btn btn-danger" onClick={()=>{deleteService(service.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        


    </div>
    )




}

export default ShowServices