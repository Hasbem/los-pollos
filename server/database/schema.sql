CREATE DATABASE IF NOT EXISTS los_pollos_db;

USE los_pollos_db;

CREATE TABLE Utilisateurs (
    user_id INT PRIMARY KEY,
    nom VARCHAR(255),
    email VARCHAR(255),
    mot_de_passe VARCHAR(255),
    numéro_téléphone VARCHAR(20)
);

CREATE TABLE Produits (
    produit_id INT PRIMARY KEY,
    nom VARCHAR(255),
    description TEXT,
    prix FLOAT,
    disponibilité TINYINT(1),
    catégorie VARCHAR(255)
);

CREATE TABLE Commandes (
    commande_id INT PRIMARY KEY,
    user_id INT,
    date_commande DATETIME,
    statut_commande VARCHAR(50),
    montant_total FLOAT,
    FOREIGN KEY (user_id) REFERENCES Utilisateurs(user_id)
);

CREATE TABLE Lignes_de_Commande (
    ligne_commande_id INT PRIMARY KEY,
    commande_id INT,
    produit_id INT,
    quantité INT,
    prix_unitaire FLOAT,
    FOREIGN KEY (commande_id) REFERENCES Commandes(commande_id),
    FOREIGN KEY (produit_id) REFERENCES Produits(produit_id)
);

CREATE TABLE Paiements (
    paiement_id INT PRIMARY KEY,
    commande_id INT,
    stripe_payment_id VARCHAR(255),
    montant FLOAT,
    date_paiement DATETIME,
    statut_paiement VARCHAR(50),
    type_event VARCHAR(100),
    date_event DATETIME,
    détails_event TEXT,
    FOREIGN KEY (commande_id) REFERENCES Commandes(commande_id)
);
