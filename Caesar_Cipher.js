function caesarCipher(text, shift, encrypt = true) {
    let result = "";
    if (!encrypt) shift = -shift; // Reverse shift for decryption

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            result += String.fromCharCode((code - base + shift + 26) % 26 + base);
        } else {
            result += char; // Keep non-alphabet characters unchanged
        }
    }
    return result;
}

function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    document.getElementById("result").innerText = "Encrypted: " + caesarCipher(text, shift, true);
}

function decrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    document.getElementById("result").innerText = "Decrypted: " + caesarCipher(text, shift, false);
}
