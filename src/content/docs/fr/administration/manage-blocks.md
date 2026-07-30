---
title: Gestion des blocs
description: Ce guide explique comment installer, activer, mettre à jour, désactiver et supprimer des blocs Retraceur.
sidebar:
    order: 6
---

Bien que les blocs soient emballés comme des extensions, Retraceur a choisi de séparer leur administration de celle des extensions. Merci de noter que tous les blocs installés seront enregistrés dans des sous-répertoires du répertoire `/wp-content/plugins` et sont gérés comme des extensions pendant le processus de chargement de Retraceur. Avoir une zone d'administration spécifique vous aide simplement à directement trouver ou clairement identifier où vous pouvez gérer les blocs que vous manipulerez depuis l'éditeur de site ou l'éditeur de contenu.

## Installation ou mise à niveau manuelles d'un bloc

Une fois que vous avez téléchargé l'archive ZIP du bloc que vous souhaitez installer ou mettre à niveau, vous devez vous rendre dans la zone de gestion des blocs. Pour ce faire : cliquez simplement sur le menu « Blocs » de votre menu d'administration principal.

![Gestion des blocs](../../../../assets/images/manage-blocks-v400-fr-001.png)

Pour charger manuellement l'archive ZIP d'un bloc, commencez par cliquer sur le bouton « Charger un bloc » qui se trouve immédiatement à droite du titre de la page d'administration.

![Charger un bloc](../../../../assets/images/manage-blocks-v400-fr-002.png)

Utilisez alors le bouton vous permettant de parcourir les dossiers de votre ordinateur afin de trouver et sélectionner l'archive ZIP du bloc. Une fois cette étape accomplie, cliquez sur le bouton « Installer » pour confirmer le chargement.

### Installation manuelle

Lorsque le répertoire du bloc n’existe pas encore sur votre site, Retraceur créera un nouveau répertoire pour votre bloc dans le répertoire parent `/wp-content/plugins` de votre site Web. Ensuite, Retraceur vous informera du succès ou de l'échec du processus.

![Installer un bloc](../../../../assets/images/manage-blocks-v400-fr-003.png)

### Mise à niveau manuelle

Lorsque le répertoire du bloc existe déjà sur votre site, un écran de confirmation vous demandera si vous souhaitez « écraser » ce dernier avec celui du bloc nouvellement chargé.

![Mettre à niveau un bloc](../../../../assets/images/manage-blocks-v400-fr-004.png)

Vérifiez les informations affichées et en particulier le champ « Version » pour vous assurer que vous faites bien ce que vous avez l'intention de faire. Si c'est le cas, cliquez sur le bouton « Remplacer le bloc actuel par celui que vous avez chargé » sinon cliquez sur le bouton « Annuler et revenir en arrière ». Si vous choisissez de continuer votre opération, un écran vous informera de l'état d'installation/de mise à jour de votre bloc. Une fois le processus terminé, vous retrouverez votre bloc dans la liste affichée dans la page d'administration des « Blocs installés ».