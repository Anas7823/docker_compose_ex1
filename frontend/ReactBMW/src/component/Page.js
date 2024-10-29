import '../style/Page.css';
import m3face from "../assets/m3/BMW-M3-E92-1.jpeg";
import m32 from "../assets/m3/BMW-M3-E92-2.jpeg";
import m33 from "../assets/m3/BMW-M3-E92-3.jpg";

import m5face from "../assets/m5/bmw-m5-1.jpg";
import m52 from "../assets/m5/bmw-m5-2.jpg";
import m53 from "../assets/m5/bmw-m5-3.jpg";
import m54 from "../assets/m5/bmw-m5-4.jpg";

import m3Tface from "../assets/M3-Touring-scaled.jpeg";
import none from "../assets/no-image/no-image.png";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function M3drift(props) {
    const { id } = useParams();
    const [voiture, setVoiture] = useState(null);
    let theme = props.mode;

    // Fonction pour récupérer les données de la voiture
    const fetchVoiture = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/produits/${id}`); // Modifiez cette URL si nécessaire
            setVoiture(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération de la voiture", error);
        }
    };

    useEffect(() => {
        fetchVoiture();
    }, [id]);

    if (!voiture) {
        return <div>Chargement...</div>; // Indiquez un état de chargement pendant la récupération des données
    }

    return (
        <div className={`M3drift ${theme}`}>
            <div className='contenueProduit'>
                <div className='photo'>
                    <div className=''>
                        <img className='img-principal' src={voiture.img1 || m3face} alt='' />
                    </div>
                    <div className='sous-img'>
                        <img className='petiteImg' src={voiture.img2 || none} alt='' />
                        <img className='petiteImg' src={voiture.img3 || none} alt='' />
                        <img className='petiteImg' src={voiture.img4 || none} alt='' />
                    </div>
                </div>

                <div className='info'>
                    <h1>{voiture.nom}</h1>
                    <hr />
                    <h1>{voiture.prix}</h1>
                    <div className={voiture.etat}>
                        <h4 className={voiture.stock}>
                            {voiture.stock === 'enStock' ? 'En Stock' : 'Pas de Stock'}
                        </h4>
                    </div>
                    <br />
                    <hr />
                    <div className='bouton'>
                        <button className='btn-commande'>
                            <h3>{voiture.stock === 'enStock' ? 'Commander' : 'Indisponible'}</h3>
                        </button>
                        <button className='btn-devis'>
                            <h3>Devis</h3>
                        </button>
                    </div>
                </div>
            </div>

            <div className='description'>
                <h1>Description: </h1>
                <div className='textDescription'>
                    <h3>
                        {voiture.description}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default M3drift;
