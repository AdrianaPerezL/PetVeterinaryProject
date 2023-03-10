import { useState } from 'react'
import './App.css'
import './styles.css'

import ShowAppointments from './components/appointments/ShowAppointments'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAppointment from './components/appointments/CreateAppointment'
import EditAppointment from './components/appointments/EditAppointment'
import ShowUsers from './components/users/ShowUsers'
import CreateUser from './components/users/CreateUser'
import EditUser from './components/users/EditUser'
import ShowServices from './components/services/ShowServices'
import CreateService from './components/services/CreateService'
import EditService from './components/services/EditService'
import ShowCategories from './components/categories/ShowCategories'
import CreateCategory from './components/categories/CreateCategory'
import EditCategory from './components/categories/EditCategory'
import ShowPets from './components/pets/ShowPets'
import CreatePets from './components/pets/CreatePets'
import EditPets from './components/pets/EditPets'
import ShowComments from './components/comments/ShowComments'
import CreateComment from './components/comments/CreateComment'
import EditComment from './components/comments/EditComment'
import Page from './components/Views/Page';
import login from './components/Views/Login';

function App() {
  return (
 <div className="App">
 <BrowserRouter>
        <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
          
          <Route path='/appointments' element={<ShowAppointments/>}/>
          <Route path='/createAppointment' element={<CreateAppointment/>}/>
          <Route path='/editAppointment/:id' element={<EditAppointment/>}/>

          <Route path='/users' element={<ShowUsers/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>
          <Route path='/editUser/:id' element={<EditUser/>}/>

          <Route path='/services' element={<ShowServices/>}/>
          <Route path='/createService' element={<CreateService/>}/>
          <Route path='/editService/:id' element={<EditService/>}/>

          <Route path='/categories' element={<ShowCategories/>}/>
          <Route path='/createCategory' element={<CreateCategory/>}/>
          <Route path='/editCategory/:id' element={<EditCategory/>}/>

          <Route path='/pets' element={<ShowPets/>}/>
          <Route path='/createPet' element={<CreatePets/>}/>
          <Route path='/editPet/:id' element={<EditPets/>}/>

          <Route path='/comments' element={<ShowComments/>}/>
          <Route path='/createComment' element={<CreateComment/>}/>
          <Route path='/editComment/:id' element={<EditComment/>}/>

        </Routes>
 </BrowserRouter> 
</div>
  );
}

export default App;
