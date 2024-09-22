
export function calculateEntropy(charLength: number, pwdLength: number): number {
    return Math.log2(Math.pow(charLength, pwdLength));
}

export function pickCharacter(
    charset: string, 
    lastChar: string | null, 
    avoidRepeats: boolean, 
    useCryptoRandom: boolean
): string {
    let char: string;
    do {
        const randomIndex = getRandomIndex(charset.length, useCryptoRandom);
        char = charset[randomIndex];
    } while (avoidRepeats && char === lastChar); // Avoid consecutive repeats
    return char;
}

function getRandomIndex(max: number, useCryptoRandom: boolean): number {
    if (useCryptoRandom && window.crypto && window.crypto.getRandomValues) {
        const randomArray = new Uint32Array(1);
        window.crypto.getRandomValues(randomArray);
        return randomArray[0] % max;
    } else {
        return Math.floor(Math.random() * max);
    }
}