
export * from "@/core/validate";
import {
    isValidEmail as email,
    isValidPhone as phone,
    validateForm as form,
    validateFormData as formData,
    validateJWT as JWT,
    validatePasswordStrength as passwordStrength,
    validatePattern as pattern
} from "@/core/validate";

const Validate = {
    email,
    phone,
    form,
    formData,
    JWT,
    passwordStrength,
    pattern
}

export default Validate;