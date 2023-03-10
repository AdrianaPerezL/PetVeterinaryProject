import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const endpoint = "http://127.0.0.1:8000/api/appointment"



const CreateAppointment = () => {

    const [petName, setPetname] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [date, setDate] = useState("");
    const [service, setService] = useState("");




    const navigate = useNavigate()



    
    const store = async (event)=>{
        event.preventDefault();
        await axios.post(endpoint, {
            pet_name: petName, 
            species:species,
            breed:breed,
            age:age,
            date:date,
            service:service});
        navigate("/appointments");
    }

  return (
    <div>

        <h3>Create Appointment</h3>

        <form onSubmit={store}>

            <div className="mb-3">
                <label className="form-label">pet_Name</label>
                <input 
                    value={petName}
                    onChange={(e) => setPetname(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Species</label>
                <input 
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">breed</label>
                <input 
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Age</label>
                <input 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Date</label>
                <input 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="Date"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Service</label>
                <input 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

           <button type="submit" className="btn btn-primary">Send</button>
        </form>

    </div>
  )
}

export default CreateAppointment