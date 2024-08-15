let original = '';
let encripted = '';
let decripted = '';

function encript() {
    let validInput = validateInput();
    if (!validInput) {
        return;
    }
    
    original = document.getElementById('original').value;
    encripted = original.replaceAll('e', 'enter')
                        .replaceAll('i', 'imes')
                        .replaceAll('a', 'ai')
                        .replaceAll('o', 'ober')
                        .replaceAll('u', 'ufat');
    document.getElementById('encripted').value = encripted;
    toggleBackgroundImage();
}

function decript() {
    encripted = document.getElementById('encripted').value;
    decripted = encripted.replaceAll('enter', 'e')
                         .replaceAll('imes', 'i')
                         .replaceAll('ai', 'a')
                         .replaceAll('ober', 'o')
                         .replaceAll('ufat', 'u');
    document.getElementById('encripted').value = decripted;
    toggleBackgroundImage();
}

function copy() { 
    let copyText = document.getElementById('encripted');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function validateInput() {   
    const upperCase = /[A-Z]/;
    const specialChars = /[^a-z0-9\s]/;  // This allows spaces and lowercase letters

    let input = document.getElementById('original').value;
    console.log(input);
    
    if (input.length == 0) {
        alert('Por favor, ingrese un texto para encriptar.');
        return false;
    }
    
    let hasUpperCase = upperCase.test(input);
    let hasSpecialChars = specialChars.test(input);

    if(hasUpperCase || hasSpecialChars) {
        alert('Por favor, ingrese un texto sin mayúsculas ni caracteres especiales.');
        return false;
    }

    return true;
}

// Get the textarea element and tags
const textarea = document.getElementById('encripted');
const tag_h2 = document.getElementById('tag_h2');
const tag_p = document.getElementById('tag_p');
const button = document.getElementById('copy');

// Function to toggle the background image and tags
function toggleBackgroundImage() {
    if (textarea.value.trim() === '') {
        textarea.style.backgroundImage = "url('img/red-cat.png')";
        tag_h2.style.display = 'initial'; 
        tag_p.style.display = 'initial';  
        button.style.display = 'none'; // Use "button" instead of "copy"
    } else {
        textarea.style.backgroundImage = 'none';
        tag_h2.style.display = 'none'; 
        tag_p.style.display = 'none';  
        button.style.display = 'initial'; // Use "button" instead of "copy"
    }
}

// Attach the event listener to detect changes in the textarea
textarea.addEventListener('input', toggleBackgroundImage);

// Initial check to apply the correct state on page load
toggleBackgroundImage();
