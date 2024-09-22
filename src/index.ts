
export * from "@/core/action";
export * from "@/core/generate";
export * from "@/core/serialize";
export * from "@/core/validate";

import FormAction, {
    scrollToError,
    showErrorMessage,
    hideErrorMessage,
    enableForm,
    enableInput,
    disableForm,
    disableInput,
    toggleInputValidity,
} from "@/modules/action";

import Generate, {
    generatePassword,
    generateRandomDate,
    generateRandomString,
    generateUUID,
} from "@/modules/generate";

import Serialize, {
    serializeFormData,
    serializeUrlEncoded,
    deserializeFormData,
    deserializeUrlEncoded,
} from "@/modules/serialize";

import Validate, {
    isValidEmail,
    isValidPhone,
    validateForm,
    validateFormData,
    validateJWT,
    validatePasswordStrength,
    validatePattern,
} from "@/modules/validate";

const Form = {
    scrollToError,
    showErrorMessage,
    hideErrorMessage,
    enableForm,
    enableInput,
    disableForm,
    disableInput,
    toggleInputValidity,
    generatePassword,
    generateRandomDate,
    generateRandomString,
    generateUUID,
    serializeFormData,
    serializeUrlEncoded,
    deserializeFormData,
    deserializeUrlEncoded,
    isValidEmail,
    isValidPhone,
    validateForm,
    validateFormData,
    validateJWT,
    validatePasswordStrength,
    validatePattern,
}

export default Form;
export { Validate, FormAction, Serialize, Generate };