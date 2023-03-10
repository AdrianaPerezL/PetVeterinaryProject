import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const endpoint = "http://localhost:8000/api/pets";

const CreatePets = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    await axios.post(endpoint, {
      name: name,
      gender: gender,
      type: type,
      size: size,
      description: description,
      date_of_birth: date_of_birth,
      image: image,
    });
    navigate("/pets");
  };
  return (
    <div>
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html"><img src="..\src\assets\img\logo.png" alt="" width="100px" /></a></h1>
  
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/#about">About</a></li>
          <li><a className="nav-link scrollto" href="/#services">Services</a></li>
          <li><a className="nav-link scrollto" href="/#portfolio">Pet Shop</a></li>
          <li><a className="nav-link scrollto" href="/#team">Team</a></li>
          <li><Link className="getstarted scrollto" to='/'>Log in</Link></li>
          <li><Link className="getstarted scrollto" to='/'>Register</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  </header>
  

    <section className="sectionForm">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
        <div className="col col-lg-6 mt-10">
     
              <div className="modal-body w-75">
                <div className="card1 mb-30">
                  <form
                    className="formPets"
                    onSubmit={store}
                  >
                        <div>
                <h1 className="form-title" >
                  Add your pet data
                </h1>
               
              </div>
                    <div className="m-3">
                      <label className="createLabel">Name</label>
                      <input
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Pets name"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Gender</label>
                      <input
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        type="text"
                        placeholder="Gender"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Type</label>
                      <input
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        type="text"
                        placeholder="Type"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Size</label>
                      <input
                        className="form-control"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        type="text"
                        placeholder="Size"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Description</label>
                      <input
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Description"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Date of birth</label>
                      <input
                        className="form-control"
                        value={date_of_birth}
                        onChange={(e) => setDate_of_birth(e.target.value)}
                        type="Date"
                        placeholder="Description"
                        required
                      />
                    </div>
                    <div className="m-3">
                      <label className="createLabel">Photo</label>
                      <input
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        placeholder="Photo"
                        required
                      />
                    </div>
                    <br />
                    <div className="buttonadd">
                    <button
                      type="submit"
                      className="addButton"
                      
                    >
                      Add Pet
                    </button>
                    </div>
                  </form>
                </div>
        </div>
        </div>
        <div className="col col-lg-5 d-none d-lg-block">
            <div>
                <img className="pet-img" src="assets/img/dogs1.png" alt="" />
            </div>
        </div>
      
        </div>
      </div>
    </section>
    </div>
  )
}

export default CreatePets;
