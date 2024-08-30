console.log("Script chargé sur mobile");

// Fonction pour modifier l'attribut 'accept' une fois que l'élément est chargé dans le DOM
function updateFileInput() {
    // Sélectionnez l'élément d'entrée de fichier
    const fileInput = document.querySelector('input[type="file"]');
    console.log("fileInput trouvé :", fileInput);

    if (fileInput) {
        // Modifie l'attribut 'accept' pour permettre les fichiers d'image et PDF
        fileInput.setAttribute('accept', '.jpeg,.jpg,.gif,.png,.pdf,image/*');
        
        // Modifie l'attribut 'capture' pour utiliser la caméra arrière
        fileInput.setAttribute('capture', 'environment');
        
        // Assure que l'attribut 'multiple' est présent
        fileInput.setAttribute('multiple', ''); // Ceci permet la sélection de plusieurs fichiers
        console.log('Attributs "accept", "capture" et "multiple" modifiés pour permettre la prise de photo');
        
        // Déconnectez l'observateur après modification
        observer.disconnect();
    } else {
        console.warn("L'élément d'entrée de fichier n'a pas été trouvé");
    }
}

// Créez un observateur de mutations pour surveiller les changements dans le DOM
const observer = new MutationObserver(updateFileInput);

// Fonction pour initialiser l'observateur quand le DOM est prêt
function initObserver() {
    // Configurer l'observateur pour surveiller tout le document pour les changements d'enfants
    observer.observe(document.body, { childList: true, subtree: true });
    console.log("Observateur de mutations initialisé");
}

// Assure que l'initialisation de l'observateur se produit après le chargement complet du DOM
document.addEventListener('DOMContentLoaded', initObserver);

