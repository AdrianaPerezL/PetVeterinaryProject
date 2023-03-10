
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const endpoint = "http://127.0.0.1:8000/api/"
const ShowAppointments = () => {

    const [appointments, setAppointments] = useState([])


    const getAllAppointments = async ( )=>{
       const response =  await axios.get(`${endpoint}appointment`)
       setAppointments(response.data)
    }

    const deleteAppointments = async ( id)=>{
        await axios.delete(`${endpoint}appointment/${id}`)
        getAllAppointments()
    }

    useEffect (()=>{
        getAllAppointments()
    }, [])

  return (
    <div>
        <div className="d-gird gap-2">
            <Link to="/createAppointment" className="btn btn-success btn.lg mt-2 mb-2 text-white">Create Appointment</Link>
        </div>

        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <td>PET NAME</td>
                    <td>SPECIES</td>
                    <td>BREED</td>
                    <td>AGE</td>
                    <td>DATE</td>
                    <td>SERVICE</td>
                    <td>ACTIONS</td>

                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment)=>(
                        <tr key={appointment.id}>
                            <td>{appointment.pet_name}</td>
                            <td>{appointment.species}</td>
                            <td>{appointment.breed}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.service}</td>
                            <td>
                                <Link to={`/editAppointment/${appointment.id}`} className="btn btn-warning" >Editar</Link>
                                <button className="btn btn-danger" onClick={()=>{deleteAppointments(appointment.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAppointments