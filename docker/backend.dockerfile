# Utilisez une image Node.js comme image de base
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
