
import { getErrorElement, showError, removeError } from "@/utils/error";
import type { 
    PasswordValidationResult, 
    JWTValidationResult, 
    InputNodeList, 
    PatternValidationResult, 
    ValidatePatternOptions, 
    ValidationRule, 
    FieldValidationResult, 
    FormValidationResult 
} from "@/types/form";

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    const [localPart, domainPart] = email.split('@');
    if (localPart.length > 64 || domainPart.length > 255) {
        return false;
    }

    if (email.length > 320) {
        return false;
    }

    const localPartRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
    if (!localPartRegex.test(localPart)) {
        return false;
    }

    const domainPartRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
    if (!domainPartRegex.test(domainPart)) {
        return false;
    }

    const tldRegex = /^[a-zA-Z]{2,}$/;
    const topLevelDomain: any = domainPart.split('.').pop();
    if (!tldRegex.test(topLevelDomain)) {
        return false;
    }

    return true;
}

export function isValidPhone(phoneNumber: string): boolean {
    const phoneRegex = /^[0-9+\(\)#\.\s\-]+$/;
    if (!phoneRegex.test(phoneNumber)) {
        return false;
    }

    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
        return false;
    }

    const countryCodeRegex = /^\+(\d{1,4})$/;
    const countryCodeMatch = phoneNumber.match(countryCodeRegex);
    if (countryCodeMatch && countryCodeMatch[1].length > 4) {
        return false;
    }
    
    return true;
}

export function validateJWT(userToken: string, secretKey: string): JWTValidationResult {
    const tokenParts = userToken.split('.');
    if (tokenParts.length !== 3) {
        return {
            success: false,
            payload: null,
            msg: 'Invalid JWT format. Please try again.',
        };
    }

    const [, payloadBase64, signature] = tokenParts;

    try {
        const decodedPayload = JSON.parse(atob(payloadBase64));
    
        const calculatedSignature = btoa(JSON.stringify(decodedPayload) + secretKey);
        if (calculatedSignature !== signature) {
            throw new Error('Invalid signature');
        }

        return {
            success: true,
            payload: decodedPayload,
            msg: 'JWT validated successfully!',
        };
    } catch (error) {
        return {
            success: false,
            payload: null,
            msg: 'Invalid JWT. Please try again.',
        };
    }
}

export function validatePasswordStrength(password: string): PasswordValidationResult {
    // Minimum and maximum length requirements
    const minLength = 8;
    const maxLength = 100;

    // Regular expressions for character class checks
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (password.length < minLength) {
        return {
            msg: "Weak - Too short",
            strength: 0,
            isStrong: false
        };
    }

    if (password.length > maxLength) {
        return {
            msg: "Moderate - Too long",
            strength: 1,
            isStrong: false
        };
    }

    // Check for the presence of different character classes
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    // Count the number of fulfilled conditions
    const conditionsFulfilled = [hasUppercase, hasLowercase, hasDigit, hasSpecialChar].filter(Boolean).length;

    // Strength determination based on fulfilled conditions
    if (conditionsFulfilled === 1) {
        return {
            msg: "Weak - Low complexity",
            strength: 0,
            isStrong: false
        };
    } else if (conditionsFulfilled === 2) {
        return {
            msg: "Moderate - Moderate complexity",
            strength: 1,
            isStrong: false
        };
    } else if (conditionsFulfilled === 3) {
        return {
            msg: "Strong - High complexity",
            strength: 2,
            isStrong: true,
        };
    } else if (conditionsFulfilled === 4) {
        return {
            msg: "Very Strong - Very high complexity",
            strength: 3,
            isStrong: true
        };
    } else {
        return {
            msg: "Weak - Insufficient complexity",
            strength: null,
            isStrong: false
        };
    }
}

export function validateFormData(formElement: HTMLFormElement): boolean {
    let isValid = true;
    const inputs: InputNodeList = formElement.querySelectorAll('input, select, textarea');
    let firstInvalidField: HTMLElement | null = null;

    inputs.forEach(input => {
        const errorElement = getErrorElement(input);

        if (!input.checkValidity()) {
            isValid = false;
            showError(input, errorElement);
            if (!firstInvalidField) {
                firstInvalidField = input;
            }
        } else {
            removeError(input, errorElement);
        }
    });

    if (firstInvalidField !== null) {
        (firstInvalidField as HTMLElement).focus();
    }

    return isValid;
}

export function validatePattern(fieldValue: string, pattern: RegExp, options: ValidatePatternOptions = {}): PatternValidationResult {

    const { trimWhitespace = true, caseSensitive = true, allowEmptyString = false } = options;
    if (fieldValue === null || fieldValue === undefined) {
        return {
            isValid: false,
            msg: 'Input is null or undefined',
        };
    }

    if (typeof fieldValue !== 'string') {
        return {
            isValid: false,
            msg: 'Input is not a string',
        };
    }

    if (trimWhitespace) {
        fieldValue = fieldValue.trim();
    }

    if (!allowEmptyString && fieldValue === '') {
        return {
            isValid: false,
            msg: 'Empty string is not allowed',
        };
    }
  
    const effectivePattern = caseSensitive ? pattern : new RegExp(pattern.source, 'i');
    const match = fieldValue.match(effectivePattern);
  
    if (match) {
        return {
            isValid: true,
            msg: 'Pattern matched successfully',
            matchedValue: match[0], // The actual matched string
            input: fieldValue,
            pattern: effectivePattern.toString(),
        };
    } else {
        return {
            isValid: false,
            msg: 'Pattern did not match',
            input: fieldValue,
            pattern: effectivePattern.toString(),
        };
    }
}

  
export function validateForm(
    form: HTMLFormElement,
    validationRules: { [fieldName: string]: ValidationRule },
    options: { stopOnFirstError?: boolean } = {}
): FormValidationResult {
    const { stopOnFirstError = false } = options;
    const errors: FieldValidationResult[] = [];
    let formIsValid = true;
  
    for (const fieldName in validationRules) {
        const field = form.elements.namedItem(fieldName) as HTMLInputElement | null;

        if (!field) {
            continue;
        }
  
        const value = field.value.trim();
        const rules = validationRules[fieldName];
        
        if (rules.required && value === '') {
            formIsValid = false;
            errors.push({
                field: fieldName,
                message: rules.errorMessage || `${fieldName} is required`,
            });
    
            if (stopOnFirstError) break;
            continue;
        }

        if (rules.pattern && !rules.pattern.test(value)) {
            formIsValid = false;
            errors.push({
                field: fieldName,
                message: rules.errorMessage || `${fieldName} is invalid`,
            });
    
            if (stopOnFirstError) break;
            continue;
        }

        if (rules.minLength && value.length < rules.minLength) {
            formIsValid = false;
            errors.push({
                field: fieldName,
                message: rules.errorMessage || `${fieldName} must be at least ${rules.minLength} characters`,
            });
    
            if (stopOnFirstError) break;
            continue;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            formIsValid = false;
            errors.push({
                field: fieldName,
                message: rules.errorMessage || `${fieldName} must be no more than ${rules.maxLength} characters`,
            });
    
            if (stopOnFirstError) break;
            continue;
        }

        if (rules.customValidator && !rules.customValidator(value)) {
            formIsValid = false;
            errors.push({
                field: fieldName,
                message: rules.errorMessage || `${fieldName} did not pass custom validation`,
            });
    
            if (stopOnFirstError) break;
        }
    }
  
    return {
        valid: formIsValid,
        errors,
    };
}