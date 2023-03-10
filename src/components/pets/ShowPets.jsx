import React, { useEffect, useState } from 'react'
import axios from 'axios'


import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowPets = () => {
const [pets, setPets] = useState( [] ) 
useEffect ( ()=> {
  getAllPets()
}, [])


const getAllPets = async () =>{
  const response = await axios.get(`${endpoint}/pets`)
  setPets(response.data);
 
 }

const deletePets = async (id) => {
  console.log(id);
  await axios.delete(`${endpoint}/pets/${id}`)
  getAllPets()
}

  return (
    <div>
{pets.map( (pets,i) => (
<section className="vh-100" style={{backgroundColor: '#f4f5f7'}} key={i}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="cardDog mb-3" style={{borderRadius: '.5rem'}}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                    <img src={pets.image} alt="Avatar" className="rounded-circle my-4" style={{width: '80px'}} />
                    <h5>{pets.id}</h5>
                    <h5>{pets.name}</h5>
                    <p>{pets.date_of_birth}</p>
                   <Link to={`/editPet/${pets.id}`}>edit</Link> 
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Type</h6>
                          <p className="text-muted">{pets.type}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Gender</h6>
                          <p className="text-muted">{pets.gender}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Size</h6>
                          <p className="text-muted">{pets.size}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Description</h6>
                          <p className="text-muted">{pets.description}</p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       ))}
</div>

  )
}

export default ShowPets