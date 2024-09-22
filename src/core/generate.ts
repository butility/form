
import { formatDate } from "@/utils/format-date";
import { pickCharacter, calculateEntropy } from "@/utils/generate-password";
import type { GeneratePasswordOptions, GenerateRandomDateOptions, GenerateRandomStringOptions } from "@/types/form";

export function generatePassword(length: number, options: GeneratePasswordOptions = {}): string {
    // Default options
    const {
        customCharsets = [],
        includeSymbols = true,
        includeNumbers = true,
        includeUppercase = true,
        includeLowercase = true,
        avoidRepeats = true,
        useCryptoRandom = true,
        minEntropy = 50,
        exclude = [],
        onCharacterSelected = null
    } = options;

    if (length <= 0 || typeof length !== 'number') {
        throw new Error("Password length must be a positive number.");
    }

    // Define character sets
    const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCharset = '0123456789';
    const symbolCharset = '!@#$%^&*()-_=+[]{}|;:<>,.?/~`';
    
    let charset = customCharsets.join('') ||
                (includeLowercase ? lowercaseCharset : '') +
                (includeUppercase ? uppercaseCharset : '') +
                (includeNumbers ? numberCharset : '') +
                (includeSymbols ? symbolCharset : '');

    charset = charset.split('').filter(char => !exclude.includes(char)).join('');

    if (!charset.length) {
        throw new Error("Charset is empty. Please provide valid options or customCharsets.");
    }

    // Calculate initial entropy
    let entropy = calculateEntropy(charset.length, length);
    if (entropy < minEntropy) {
        throw new Error(`Password entropy (${entropy.toFixed(2)} bits) is below the required minimum (${minEntropy} bits). Increase password length or diversify the charset.`);
    }

    let password = '';
    let lastChar: string | null = null;

    // Generate the password
    for (let i = 0; i < length; i++) {
        const selectedChar = pickCharacter(charset, lastChar, avoidRepeats, useCryptoRandom);
        password += selectedChar;
        lastChar = selectedChar;

        if (typeof onCharacterSelected === 'function') {
            onCharacterSelected(selectedChar, i);
        }
    }

    // Recalculate entropy after generation
    entropy = calculateEntropy(charset.length, password.length);
    console.log(`Password generated with entropy: ${entropy.toFixed(2)} bits.`);

    return password;
}
  
export function generateRandomDate(start: Date, end: Date, options: GenerateRandomDateOptions = {}): Date | string {
    if (start >= end) {
        throw new Error("The start date must be earlier than the end date.");
    }
  
    // Generate a random timestamp between the start and end dates
    const startTimestamp = start.getTime();
    const endTimestamp = end.getTime();
    const randomTimestamp = Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
  
    // Create a new Date object from the random timestamp
    const randomDate = new Date(randomTimestamp);
  
    if (options.includeTime) {
        return formatDate(randomDate, options.format);
    }
  
    return randomDate;
}

export function generateRandomString(options: GenerateRandomStringOptions): string {
    const {
        length,
        charset,
        includeSymbols = false,
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
    } = options;
  
    // Build the character set based on the provided options
    let characters = '';
  
    if (charset) {
        characters += charset;
    } else {
        if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) characters += '0123456789';
        if (includeSymbols) characters += '!@#$%^&*()-_=+[]{}|;:,.<>?';
    }
  
    if (characters.length === 0) {
        throw new Error("No characters available to generate the string.");
    }
  
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
  
    return randomString;
}

// Follows the standard UUID format, xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, where y is one of 8, 9, A, or B.
export function generateUUID(): string {
    const randomHex = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
    return `${randomHex()}${randomHex()}-${randomHex()}-${randomHex()}-${randomHex()}-${randomHex()}${randomHex()}${randomHex()}`;
}  