const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.BACKEND_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion à la base de données
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Route pour obtenir tous les produits
app.get('/api/produits', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produit');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route pour ajouter un nouveau produit
app.post('/api/produits', async (req, res) => {
    const { nom, prix, disponibilite, img, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO produit (nom, prix, disponibilite, img, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nom, prix, disponibilite, img, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/produits/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM produit WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Produit non trouvé');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
    }
});


// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
