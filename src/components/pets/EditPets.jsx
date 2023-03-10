import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/pets'

const EditPets = () =>{
    const [name,setName] = useState('')
    const [gender,setGender] = useState(0)
    const [type,setType] = useState(0)
    const [size,setSize] = useState(0)
    const [description,setDescription] = useState(0)
    const [date_of_birth,setDate_of_birth] = useState(0)
    const [image,setImage] = useState(0)
    const [user_id, setUserId] = useState(0)

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`,{
            name: name,
            gender: gender, 
            type: type,
            size: size,
            description: description,
            date_of_birth: date_of_birth,
            image: image,
            user_id: user_id
        })
        navigate('/pets')
    }

    useEffect( () =>{
        const getPetsById = async () =>{
        const response =  await axios.get(`${endpoint}/${id}`)
        console.log(response.data);
        setName(response.data.name)
        setGender(response.data.gender)
        setType(response.data.type)
        setSize(response.data.size)
        setDescription(response.data.description)
        setDate_of_birth(response.data.date_of_birth)
        setImage(response.data.image)
        setUserId(response.data.user_id)

        }

        getPetsById()
        console.log(size);
    }, [])
    return(
        <div>

        <h3>Edit Pet</h3>

        <form onSubmit={update}>

            <div className="mb-3">
                <label className="form-label">Pet Name</label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Gender</label>
                <input 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Type</label>
                <input 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    type="text" 
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">Size</label>
                <input 
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">description</label>
                <input 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">date of birth</label>
                <input 
                    value={date_of_birth}
                    onChange={(e) => setDate_of_birth(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">user id</label>
                <input 
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                    type="number"  
                    className="form-control"
                />   
            </div>

            <div className="mb-3">
                <label className="form-label">image</label>
                <input 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"  
                    className="form-control"
                />   
            </div>

            <button type="submit" className="btn btn-primary">Update Pet</button>
        </form>

    </div>
    )
}

export default EditPets