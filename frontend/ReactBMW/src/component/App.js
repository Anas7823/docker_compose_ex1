import '../style/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Accueil from './Accueil';
import M3drift from './Page';
import Mentions from './Mentions';
import Contact from './Contact';

import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
  return(
    
    <div className={theme}>
      <Banner mode={theme}/>
      <button class="mode" onClick={toggleTheme}>🌙</button>

      <Routes>
        <Route path="/ReactBMW" element={<Accueil mode={theme} />}>
        </Route>

        <Route path="/Produit" element={<Produit mode={theme}/>}>
        </Route>

        <Route path='/Produit/:modele' element={<M3drift mode={theme}/>}>
        </Route>

        <Route path='/MentionsLegal' element={<Mentions mode={theme}/>}>
        </Route>
        
        <Route path='Contact' element={<Contact mode={theme}/>}>
        </Route>
        
      </Routes>
      
      <Footer mode={theme}/>
    </div>
  )

}

export default App;
