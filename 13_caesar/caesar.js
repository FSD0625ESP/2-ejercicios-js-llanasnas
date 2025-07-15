const caesar = function (text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const textArray = text.split('');
    textArray.forEach(char => {
        // Compruebo si la letra actual está en el alfabeto.
        if (alphabet.includes(char.toLowerCase())) {
            // Compurebo si la letra es mayúscula o minúscula.
            const isUpperCase = char === char.toUpperCase();
            // Buscamos la posición de la letra en el abecedario.
            const index = alphabet.indexOf(char.toLowerCase());
            let newIndex = (index + shift) % alphabet.length;
            // Si el resultado es negativo (por ejemplo, si el shift es -5), lo ajustamos.
            if (newIndex < 0) newIndex += alphabet.length;
            result += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
        } else {
            result += char;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = caesar;
