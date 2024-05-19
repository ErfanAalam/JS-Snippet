const input = document.querySelector("input");
const button = document.querySelector("button");
const outputpara = document.querySelector("p");

button.addEventListener("click", () => {
    const inputstr = input.value;
    input.value = "";
    const words = inputstr.split(" ");

    printWords(words, 300);
});

function printWords(words, delay) {
    let wordIndex = 0;

    function printWord() {
        if (wordIndex < words.length) {
            const word = words[wordIndex];
            let charIndex = 0;

            function printChar() {
                if (charIndex < word.length) {
                    outputpara.innerText += word[charIndex];
                    charIndex++;
                    setTimeout(printChar, delay);
                } else {
                    setTimeout(removeChar, delay); 
                }
            }

            function removeChar() {
                if (outputpara.innerText.length > 0) {
                    outputpara.innerText = outputpara.innerText.slice(0, -1);
                    setTimeout(removeChar, delay);
                } else {
                    wordIndex++;
                    if (wordIndex < words.length) {
                        setTimeout(printWord, delay); 
                    }
                }
            }

            printChar();
        }
    }

    printWord();
}