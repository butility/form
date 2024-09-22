### Validate Module

The **Validate Module** provides a set of functions for validating various data formats, including emails, phone numbers, passwords, forms, JWTs (JSON Web Tokens), and input patterns. This module allows developers to enforce data integrity and strengthen form input validation, making it essential for enhancing user experience and security in web applications.

#### Types

- **PasswordValidationResult**: Result of password strength validation.
  - `msg` (string): A message explaining the result of the validation.
  - `strength` (number | null): A numerical score representing password strength.
  - `isStrong` (boolean): Indicates if the password is considered strong.

- **JWTValidationResult**: Result of JWT validation.
  - `success` (boolean): Indicates if the JWT is valid.
  - `payload` (string | null): The decoded JWT payload if validation succeeds.
  - `msg` (string): A message explaining the result of the JWT validation.

- **PatternValidationResult**: Result of pattern-based validation.
  - `isValid` (boolean): Indicates whether the value matches the pattern.
  - `msg` (string, optional): An optional message describing the validation outcome.
  - `matchedValue` (string, optional): The part of the input that matched the pattern.
  - `input` (string, optional): The original input value.
  - `pattern` (string, optional): The regular expression pattern used for validation.

- **ValidatePatternOptions**: Configuration options for pattern validation.
  - `trimWhitespace` (boolean, optional): Whether to trim whitespace before validation.
  - `caseSensitive` (boolean, optional): Whether the validation should be case-sensitive.
  - `allowEmptyString` (boolean, optional): Whether to allow an empty string as valid input.

- **ValidationRule**: A set of rules for validating a form field.
  - `required` (boolean, optional): Whether the field is required.
  - `pattern` (RegExp, optional): A regular expression pattern for validation.
  - `minLength` (number, optional): The minimum length for the field value.
  - `maxLength` (number, optional): The maximum length for the field value.
  - `customValidator` (function, optional): A custom function to validate the field value.
  - `errorMessage` (string, optional): A custom error message to display on validation failure.

- **FieldValidationResult**: Result of a single field validation.
  - `field` (string): The name of the field being validated.
  - `message` (string): The validation error message.

- **FormValidationResult**: Result of form validation.
  - `valid` (boolean): Indicates if the form is valid.
  - `errors` (FieldValidationResult[]): An array of errors for the fields that failed validation.

---

#### Namespace: `Validate`

The `Validate` namespace contains the following exported functions for handling different types of validations:

---

### **Functions:**

#### **1. isValidEmail(email: string): boolean**
- **Description**: Validates whether the input string is a valid email address.
- **Parameters**:
  - `email` (string, required): The email address to validate.
- **Returns**: A boolean indicating whether the email is valid.

#### **2. isValidPhone(phoneNumber: string): boolean**
- **Description**: Validates whether the input string is a valid phone number.
- **Parameters**:
  - `phoneNumber` (string, required): The phone number to validate.
- **Returns**: A boolean indicating whether the phone number is valid.

#### **3. validateForm(form: HTMLFormElement, validationRules: { [fieldName: string]: ValidationRule }, options?: { stopOnFirstError?: boolean }): FormValidationResult**
- **Description**: Validates the fields of a form based on a set of validation rules.
- **Parameters**:
  - `form` (HTMLFormElement, required): The form element to validate.
  - `validationRules` (object, required): A set of rules for validating the form fields.
  - `options` (object, optional): Additional options such as `stopOnFirstError` to stop validation on the first failure.
- **Returns**: A `FormValidationResult` object containing the validation status and any errors.

#### **4. validateFormData(formElement: HTMLFormElement): boolean**
- **Description**: Validates the data from a form to ensure required fields and data types are correct.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to validate.
- **Returns**: A boolean indicating whether the form data is valid.

#### **5. validateJWT(userToken: string, secretKey: string): JWTValidationResult**
- **Description**: Validates a JSON Web Token (JWT) to ensure its authenticity and integrity.
- **Parameters**:
  - `userToken` (string, required): The JWT to validate.
  - `secretKey` (string, required): The secret key used to validate the JWT.
- **Returns**: A `JWTValidationResult` object containing the validation result, payload, and message.

#### **6. validatePasswordStrength(password: string): PasswordValidationResult**
- **Description**: Validates the strength of a password based on complexity and entropy.
- **Parameters**:
  - `password` (string, required): The password to validate.
- **Returns**: A `PasswordValidationResult` object containing the strength score, validation message, and whether the password is strong.

#### **7. validatePattern(fieldValue: string, pattern: RegExp, options?: ValidatePatternOptions): PatternValidationResult**
- **Description**: Validates a string against a given regular expression pattern.
- **Parameters**:
  - `fieldValue` (string, required): The value to validate.
  - `pattern` (RegExp, required): The regular expression pattern to test against.
  - `options` (ValidatePatternOptions, optional): Options for customizing the pattern validation.
- **Returns**: A `PatternValidationResult` object containing the validation result and message.

---

#### Default Export:
- The `Validate` namespace is exported by default, providing a comprehensive set of validation tools for ensuring data accuracy and security across forms, fields, and tokens.