### FormAction Module

The **FormAction Module** provides a comprehensive set of functions for managing form interactions in web applications. This module allows developers to control the state of forms and inputs, display error messages, and enhance user experience through effective validation handling. With its flexible options, it streamlines the process of creating dynamic and user-friendly forms.

#### Types

- **ErrorMessageOptions**: Options for displaying error messages.
  - `scrollToError` (boolean, optional): Scrolls to the error element if true.
  - `focusOnError` (boolean, optional): Focuses on the error element after scrolling.
  - `errorClass` (string, optional): Custom class name for error message styling.

- **FormToggleOptions**: Options for enabling or disabling forms.
  - `callback` (function, optional): Function to call after toggling the form state.
  - `excludeFields` (string[], optional): Array of field names to exclude from the operation.

- **ToggleInputValidityOptions**: Options for managing input validity.
  - `invalidMessage` (string, optional): Message displayed when the input is invalid.
  - `validMessage` (string, optional): Message displayed when the input is valid.

---

#### Namespace: `FormAction`

The `FormAction` namespace contains the following exported functions to handle form state and error management:

---

### **Functions:**

#### **1. scrollToError(formElement: HTMLFormElement, errorClass?: string): void**
- **Description**: Scrolls the form to the first element with the specified error class for better visibility.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to scroll.
  - `errorClass` (string, optional): The class name of the error element.
  
#### **2. showErrorMessage(element: HTMLElement, message: string, options?: ErrorMessageOptions): void**
- **Description**: Displays a customizable error message associated with a specific element.
- **Parameters**:
  - `element` (HTMLElement, required): The element to attach the error message.
  - `message` (string, required): The error message to display.
  - `options` (ErrorMessageOptions, optional): Configuration options for displaying the message.

#### **3. hideErrorMessage(element: HTMLElement, errorClass?: string): void**
- **Description**: Hides the error message for a specified element.
- **Parameters**:
  - `element` (HTMLElement, required): The element from which to hide the message.
  - `errorClass` (string, optional): The class name of the error message to hide.

#### **4. enableForm(formElement: HTMLFormElement, options?: FormToggleOptions): void**
- **Description**: Activates a form, making all input fields available for interaction.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to enable.
  - `options` (FormToggleOptions, optional): Configuration options for enabling the form.

#### **5. enableInput(inputElement: HTMLInputElement, onEnable: () => void): void**
- **Description**: Enables a specific input field and executes a callback function upon enabling.
- **Parameters**:
  - `inputElement` (HTMLInputElement, required): The input element to enable.
  - `onEnable` (function, required): Callback function to execute after enabling.

#### **6. disableForm(formElement: HTMLFormElement, options?: FormToggleOptions): void**
- **Description**: Deactivates a form, preventing interaction with its input fields.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to disable.
  - `options` (FormToggleOptions, optional): Configuration options for disabling the form.

#### **7. disableInput(inputElement: HTMLInputElement, onDisable: () => void): void**
- **Description**: Disables a specific input field and executes a callback function upon disabling.
- **Parameters**:
  - `inputElement` (HTMLInputElement, required): The input element to disable.
  - `onDisable` (function, required): Callback function to execute after disabling.

#### **8. toggleInputValidity(inputElement: HTMLInputElement, isValid: boolean, options?: ToggleInputValidityOptions): void**
- **Description**: Changes the validity state of an input field, displaying appropriate messages based on its validity.
- **Parameters**:
  - `inputElement` (HTMLInputElement, required): The input element to toggle.
  - `isValid` (boolean, required): The validity state to set.
  - `options` (ToggleInputValidityOptions, optional): Configuration options for messages.

---

#### Default Export:
- The `FormAction` namespace is exported by default, providing a straightforward interface for managing forms and input interactions efficiently.