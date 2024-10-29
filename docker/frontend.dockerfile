# Étape 1 : Construire l'application React
FROM node:14 AS build

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut de Nginx
CMD ["nginx", "-g", "daemon off;"]
