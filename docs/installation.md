# Installation

To use the Form package in your project, follow these steps:

## Using npm

1. Open your terminal.
2. Navigate to your project directory.
3. Run the following command:

```bash
npm install @butility/form
# or
pnpm add @butility/form
# or
yarn add @butility/form
```

## Using CDN

You can also include the form package via a CDN link in your HTML file:

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

```js

import Form from "https://unpkg.com/@butility/form@latest/form.js";
import Form from "https://cdn.jsdelivr.net/npm/@butility/form@latest/form.js";

import Validate from "https://unpkg.com/@butility/form@latest/validate.js";
import Validate from "https://cdn.jsdelivr.net/npm/@butility/form@latest/validate.js";

import Serialize from "https://unpkg.com/@butility/form@latest/serialize.js";
import Serialize from "https://cdn.jsdelivr.net/npm/@butility/form@latest/serialize.js";
// ....
```

## Importing the Package

After installation, import the necessary modules in your JavaScript files:

```javascript
import { generatePassword, isValidEmail } from '@butility/form';
```