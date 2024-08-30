// Fonction pour modifier l'attribut 'accept' une fois que l'élément est chargé dans le DOM
function updateFileInput() {
    // Sélectionnez l'élément d'entrée de fichier
    const fileInput = document.querySelector('input[type="file"]');

    if (fileInput) {
        // Modifie l'attribut 'accept' pour permettre les fichiers d'image et PDF
        fileInput.setAttribute('accept', '.jpeg,.jpg,.gif,.png,.pdf,image/*');
        
        // Modifie l'attribut 'capture' pour utiliser la caméra arrière
        fileInput.setAttribute('capture', 'environment');
        
        // Assure que l'attribut 'multiple' est présent
        fileInput.setAttribute('multiple', ''); // Ceci permet la sélection de plusieurs fichiers
        console.log('Attribut "accept" modifié pour permettre la prise de photo');
        
        // Déconnectez l'observateur après modification
        observer.disconnect();
    }
}

// Créez un observateur de mutations pour surveiller les changements dans le DOM
const observer = new MutationObserver(updateFileInput);

// Configurer l'observateur pour surveiller tout le document pour les changements d'enfants
observer.observe(document.body, { childList: true, subtree: true });
