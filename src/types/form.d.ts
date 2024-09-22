
// Action
export type InputType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export type InputNodeList = NodeListOf<InputType>;
export interface ErrorMessageOptions {
    scrollToError?: boolean;
    focusOnError?: boolean;
    errorClass?: string;
}

export interface FormToggleOptions {
    callback?: () => void;
    excludeFields?: string[];
}

export interface ToggleInputValidityOptions {
    invalidMessage?: string;
    validMessage?: string;
}

// Serialize
export type FormValue = string | string[] | boolean | null;
export interface SerializeOptions { 
    format?: 'urlencoded' | 'json' 
}

// Generate
export interface GeneratePasswordOptions { 
    customCharsets?: string[]; 
    includeSymbols?: boolean; 
    includeNumbers?: boolean; 
    includeUppercase?: boolean; 
    includeLowercase?: boolean; 
    avoidRepeats?: boolean; 
    useCryptoRandom?: boolean; 
    minEntropy?: number; 
    exclude?: string[]; 
    onCharacterSelected?: Function; 
}


export interface GenerateRandomDateOptions {
    includeTime?: boolean;
    format?: 'ISO' | 'UTC' | 'Locale';
}


export interface GenerateRandomStringOptions {
    length: number;
    charset?: string;
    includeSymbols?: boolean;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeNumbers?: boolean;
}

// Validate
export interface PasswordValidationResult { 
    msg: string, 
    strength: number | null, 
    isStrong: boolean 
}

export interface JWTValidationResult { 
    success: boolean, 
    payload: string | null, 
    msg: string 
}


export interface PatternValidationResult {
    isValid: boolean;
    msg?: string;
    matchedValue?: string;
    input?: string;
    pattern?: string;
}

export interface ValidatePatternOptions { 
    trimWhitespace?: boolean; 
    caseSensitive?: boolean; 
    allowEmptyString?: boolean 
}


export interface ValidationRule {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    customValidator?: (value: string) => boolean;
    errorMessage?: string;  // Optional custom error message
}
  
export interface FieldValidationResult {
    field: string;
    message: string;
}

export interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}