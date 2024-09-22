import { setInputValue } from "@/utils/set-input";
import type { FormValue, SerializeOptions } from "@/types/form";

export function serializeFormData(formElement: HTMLFormElement, options?: SerializeOptions): string | string[] {
    const formData: Record<string, FormValue> = {};
    const formEntries = formElement ? (new FormData(formElement) as any).entries() : [];

    for (const [name, value] of formEntries) {
        if (Array.isArray(formData[name])) {
            (formData[name] as string[]).push(value as string);
        } else if (formData[name] !== undefined) {
            formData[name] = [formData[name] as string, value as string];
        } else {
            formData[name] = value;
        }
    }

    return options?.format === 'json' ? JSON.stringify(formData) : serializeUrlEncoded(formData);
}

export function serializeUrlEncoded(formData: Record<string, FormValue>): string {
    const formDataArray: Array<string> = [];

    for (const key in formData) {
        const value = formData[key];
        if (Array.isArray(value)) {
            for (const item of value) {
                formDataArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
            }
        } else {
            formDataArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
        }
    }

    return formDataArray.join('&');
}

export function deserializeFormData(formElement: HTMLFormElement, data: string, options?: SerializeOptions): void {
    const formData: Record<string, FormValue> = options?.format === 'json' ? JSON.parse(data) : deserializeUrlEncoded(data);
    
    for (const key in formData) {
        const value = formData[key];
        const inputElement = formElement.elements.namedItem(key);

        if (inputElement instanceof HTMLInputElement || 
            inputElement instanceof HTMLSelectElement || 
            inputElement instanceof HTMLTextAreaElement) {
            setInputValue(inputElement, value);
        } else if (inputElement instanceof RadioNodeList) {
            // Handle RadioNodeList separately (radio buttons)
            inputElement.forEach(radio => {
                if (radio instanceof HTMLInputElement) {
                    setInputValue(radio, value);
                }
            });
        }
    }
}

export function deserializeUrlEncoded(data: string): Record<string, FormValue> {
    const formData: Record<string, FormValue> = {};
    const formDataPairs = data.split('&');

    for (const pair of formDataPairs) {
        const [name, value] = pair.split('=').map(decodeURIComponent);
        if (formData[name] !== undefined) {
            if (Array.isArray(formData[name])) {
                (formData[name] as string[]).push(value);
            } else {
                formData[name] = [formData[name] as string, value];
            }
        } else {
            formData[name] = value;
        }
    }

    return formData;
}
