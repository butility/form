# Usage

Here are some basic examples of how to use the Media package.

## Validate, Generate and FormAction module

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
