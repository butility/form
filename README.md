# Butility Form Utils

A robust set of tools for handling form functionalities, including validation, serialization, and input management. With features like error handling, input toggling, and data generation, this package streamlines form management in web applications.

## Some of Features

- **Error Management**: Scroll to errors, show/hide error messages, and manage input validity.
- **Form Controls**: Enable or disable entire forms and individual inputs.
- **Data Generation**: Create secure passwords, random dates, strings, and UUIDs.
- **Serialization & Deserialization**: Easily serialize and deserialize form data in various formats.
- **Validation**: Check for valid emails, phone numbers, passwords, and JWTs.

## Installation

To install the package, you can use npm or CDN:

```sh
npm install @butility/form
```

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/form@latest/form.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/form@latest/form.js" type="module"></script>
<!-- To use Validate utils -->
<script src="https://unpkg.com/@butility/form@latest/validate.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/form@latest/validate.js" type="module"></script>
<!-- To use Generate utils -->
<script src="https://unpkg.com/@butility/form@latest/generate.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/form@latest/generate.js" type="module"></script>
<!-- To use FormAction utils -->
<script src="https://unpkg.com/@butility/form@latest/action.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/form@latest/action.js" type="module"></script>
<!-- To use Serialize utils -->
<script src="https://unpkg.com/@butility/form@latest/serialize.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/form@latest/serialize.js" type="module"></script>
```
## Examples

```javascript
import { isValidEmail, generatePassword } from "@butility/form";

const email = "username@example.com";

if (isValidEmail(email)) {
    const password = generatePassword(12, {
        includeSymbols: true,
        includeNumbers: false,
        includeUppercase: true,
        includeLowercase: false,
        avoidRepeats: true,
        useCryptoRandom: true,
        minEntropy: 8,
        exclude: [ "name", "set"],
    }); 

    console.log(`generated password: ${password} for email: ${email}`)
}
```

```javascript
import { Validate, FormAction } from "@butility/form";

const form = Validate.form(document.querySelector("form"), { 
    "password": { 
        required: true, 
        minLength: 12, 
        customValidator: (password) => Validate.passwordStrength(password), 
    } 
});

if (form.errors) {
    FormAction.showErrorMessage(document.querySelector("error"), " Password is incorrect", {
        scrollToError: true, // if set false use, FormAction.scrollToError(document.querySelector("form"), "error");
        errorClass: "error",
        focusOnError: true
    });
}
```

## Documentation

For `@butility/form` documentation refer to the [docs folder](https://github.com/butility/form/tree/main/docs).

## Changelog

You can find [changelog here](https://github.com/butility/form/tree/main/docs/changelog.md)

## License

This project is licensed under the [MIT License](LICENSE.md).
