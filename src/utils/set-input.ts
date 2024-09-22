
import { FormValue } from "@/types/form";

export function setInputValue(inputElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: FormValue) {
    if (Array.isArray(value)) {
        if (inputElement.type === 'checkbox' || inputElement.type === 'radio') {
            (inputElement as HTMLInputElement).checked = value.includes(inputElement.value);
        }
    } else if (inputElement.type === 'checkbox') {
        (inputElement as HTMLInputElement).checked = Boolean(value);
    } else {
        inputElement.value = value as string;
    }
}