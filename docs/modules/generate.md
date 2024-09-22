### Generate Module

The **Generate Module** provides a robust set of functions for creating random values, including passwords, dates, strings, and UUIDs. This module is ideal for developers needing to enhance security features, create unique identifiers, or generate random data for testing purposes. With customizable options, it allows for tailored generation to meet specific requirements.

#### Types

- **GeneratePasswordOptions**: Options for customizing password generation.
  - `customCharsets` (string[], optional): Custom character sets to use in the password.
  - `includeSymbols` (boolean, optional): Whether to include symbols in the password.
  - `includeNumbers` (boolean, optional): Whether to include numbers in the password.
  - `includeUppercase` (boolean, optional): Whether to include uppercase letters in the password.
  - `includeLowercase` (boolean, optional): Whether to include lowercase letters in the password.
  - `avoidRepeats` (boolean, optional): Prevents repeated characters in the password.
  - `useCryptoRandom` (boolean, optional): Uses cryptographically secure random generation if true.
  - `minEntropy` (number, optional): Minimum entropy level for the generated password.
  - `exclude` (string[], optional): Characters to exclude from the password.
  - `onCharacterSelected` (function, optional): Callback function for when a character is selected.

- **GenerateRandomDateOptions**: Options for customizing random date generation.
  - `includeTime` (boolean, optional): Whether to include time in the generated date.
  - `format` (string, optional): Format of the date output (`'ISO'`, `'UTC'`, or `'Locale'`).

- **GenerateRandomStringOptions**: Options for customizing random string generation.
  - `length` (number, required): The desired length of the generated string.
  - `charset` (string, optional): Custom character set to use for string generation.
  - `includeSymbols` (boolean, optional): Whether to include symbols in the string.
  - `includeUppercase` (boolean, optional): Whether to include uppercase letters in the string.
  - `includeLowercase` (boolean, optional): Whether to include lowercase letters in the string.
  - `includeNumbers` (boolean, optional): Whether to include numbers in the string.

---

#### Namespace: `Generate`

The `Generate` namespace contains the following exported functions for creating random values:

---

### **Functions:**

#### **1. generatePassword(length: number, options?: GeneratePasswordOptions): string**
- **Description**: Generates a random password with customizable options.
- **Parameters**:
  - `length` (number, required): The desired length of the password.
  - `options` (GeneratePasswordOptions, optional): Customization options for the password.
- **Returns**: A randomly generated password as a string.

#### **2. generateRandomDate(start: Date, end: Date, options?: GenerateRandomDateOptions): Date**
- **Description**: Generates a random date between the specified start and end dates.
- **Parameters**:
  - `start` (Date, required): The beginning date of the range.
  - `end` (Date, required): The ending date of the range.
  - `options` (GenerateRandomDateOptions, optional): Customization options for the date generation.
- **Returns**: A randomly generated date within the specified range.

#### **3. generateRandomString(options: GenerateRandomStringOptions): string**
- **Description**: Generates a random string based on the specified options.
- **Parameters**:
  - `options` (GenerateRandomStringOptions, required): Options for customizing the string generation.
- **Returns**: A randomly generated string.

#### **4. generateUUID(): string**
- **Description**: Generates a universally unique identifier (UUID).
- **Returns**: A randomly generated UUID as a string.

---

#### Default Export:
- The `Generate` namespace is exported by default, providing an easy-to-use interface for generating a variety of random values tailored to specific needs.