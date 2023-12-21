// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import TopicPage from './pages/TopicPage.js';
import HomePage from './pages/HomePage.js';
import AddGamingPageForm from './pages/AddGamingPageForm.js';
import GamingsPage from './pages/GamingsPage.js';
import EditGamingPageForm from './pages/EditGamingPageForm.js'
// import products from './data/products.js';
// import GalleryPage from './pages/GalleryPage.js'
// import OrderPage from './pages/OrderPage.js'
// import ContactPage from './pages/ContactPage.js'


// // For Create and Edit, use the form OR table design; not both.
// // If your schema requires LONG data input, then use the FORM design:
// import AddMoviePageForm from './pages/AddMoviePageForm';
// import EditMoviePageForm from './pages/EditMoviePageForm';

// // If your schema requires SHORT data input, then use the TABLE design.
// import EditMoviePageTable from './pages/EditMoviePageTable';
// import AddMoviePageTable from './pages/AddMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [game, setGameToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header className = "App-header">
            <h1>Devin 
              <i><img src = "./android-chrome-192x192.png" className='App-logo' alt = "My Website :D"/></i>Lu</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    {/* <Route path="/" element={<MoviesPage setMovie={setMovieToEdit}/>} /> */}
                    <Route path = "/" element = {<HomePage/>}/>
                    <Route path= "/TopicPage" element = {<TopicPage/>}/>
                    <Route path= "/GamingsPage" element = {<GamingsPage setGame = {setGameToEdit}/>}/>
                    <Route path="/create" element = {<AddGamingPageForm/>}/>
                    <Route path = "/update" element = {<EditGamingPageForm gamingToEdit = {game}/>}/>
                 
                    {/* Use these if your schema requires LONG data input: */}
                    {/* <Route path="/create" element={<AddMoviePageTable />} /> 
                    <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} /> */}

                    {/* Or these if your schema requires SHORT data input: */}
                     {/* <Route path="/create" element={<AddMoviePageForm />} />   
                     <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} /> */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Devin Lu</p>
          </footer>
      </BrowserRouter>
    </>
  );
}

export default App;