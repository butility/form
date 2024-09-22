### Serialize Module

The **Serialize Module** provides a set of functions for serializing and deserializing form data and URL-encoded data. This module simplifies the process of converting form inputs into a suitable format for transmission over networks, as well as reconstructing data from serialized formats. With options for different serialization formats, it enhances data handling in web applications.

#### Types

- **SerializeOptions**: Options for configuring serialization behavior.
  - `format` (string, optional): Specifies the format for serialization (`'urlencoded'` or `'json'`).

- **FormValue**: Represents a possible value for form fields.
  - `string | string[] | boolean | null`

---

#### Namespace: `Serialize`

The `Serialize` namespace contains the following exported functions for handling serialization and deserialization:

---

### **Functions:**

#### **1. serializeFormData(formElement: HTMLFormElement, options: SerializeOptions): string | string[]**
- **Description**: Serializes the form data from a given HTML form element into a specified format.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to serialize.
  - `options` (SerializeOptions, required): Configuration options for serialization.
- **Returns**: A serialized string or an array of strings representing the form data.

#### **2. serializeUrlEncoded(formData: Record<string, FormValue>): string**
- **Description**: Serializes an object of form data into a URL-encoded string.
- **Parameters**:
  - `formData` (Record<string, FormValue>, required): The form data to serialize.
- **Returns**: A URL-encoded string representing the form data.

#### **3. deserializeUrlEncoded(data: string): Record<string, FormValue>**
- **Description**: Deserializes a URL-encoded string back into an object of form data.
- **Parameters**:
  - `data` (string, required): The URL-encoded string to deserialize.
- **Returns**: An object representing the deserialized form data.

#### **4. deserializeFormData(formElement: HTMLFormElement, data: string, options: SerializeOptions): void**
- **Description**: Deserializes a string of form data into the specified HTML form element.
- **Parameters**:
  - `formElement` (HTMLFormElement, required): The form element to populate with data.
  - `data` (string, required): The serialized form data to deserialize.
  - `options` (SerializeOptions, required): Configuration options for deserialization.

---

#### Default Export:
- The `Serialize` namespace is exported by default, providing a straightforward interface for efficient handling of form serialization and deserialization in web applications.