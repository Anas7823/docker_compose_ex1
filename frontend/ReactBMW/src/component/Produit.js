import '../style/Produit.css';
import { Link } from "react-router-dom";
import M3 from "../assets/m3.jpg";
import M5 from "../assets/m5.jpg";
import M3Touring from "../assets/M3-Touring-scaled.jpeg";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Produit(props) {
  let theme = props.mode;
  const [produits, setProduits] = useState([]);

  // Fonction pour récupérer les données des produits
  const fetchProduits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/produits'); // Modifiez cette URL si nécessaire
      setProduits(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error("Erreur lors de la récupération des produits", error);
    }
  };

  useEffect(() => {
    fetchProduits();
  }, []);

  return (
    <div className={`card_items ${theme}`}>
      {produits.map((produit, index) => (
        <div className='item' key={index}>
          <div>
            <img className='img-card' src={produit.img || (produit.modele === 'M3' ? M3 : produit.modele === 'M5' ? M5 : M3Touring)} alt={produit.name} />
          </div>
          <div className='body-card'>
            <Link to={"/produit/" + response.data[index].id}>
              <h1 className='produitLien'>{produit.nom}</h1>
            </Link>
            <p>{produit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produit;
