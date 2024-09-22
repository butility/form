
import type { ErrorMessageOptions, FormToggleOptions, InputNodeList, ToggleInputValidityOptions } from "@/types/form";
  
export function showErrorMessage(
    element: HTMLElement, 
    message: string, 
    options: ErrorMessageOptions = {}
): void {
    const { scrollToError = true, focusOnError = true, errorClass = 'error' } = options;
  
    // Remove existing error to avoid duplication
    hideErrorMessage(element);
  
    const errorElement = document.createElement('div');
    errorElement.className = errorClass;
    errorElement.textContent = message;
  
    // Insert error element after the current field
    element.insertAdjacentElement('afterend', errorElement);

    if (scrollToError) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (focusOnError && 'focus' in element) {
        (element as HTMLElement).focus();
    }
  }
  
export function hideErrorMessage(element: HTMLElement, errorClass = 'error'): void {
    const errorElement = element.parentElement?.querySelector(`.${errorClass}`);
    if (errorElement) {
        errorElement.remove();
    }
}
  
export function disableForm(formElement: HTMLFormElement, options: FormToggleOptions = {}): void {
    const { callback, excludeFields = [] } = options;
    const inputs: InputNodeList = formElement.querySelectorAll('input, textarea, select');
  
    inputs.forEach(input => {
        if (!excludeFields.includes(input.name)) {
            input.disabled = true;
        }
    });
  
    if (callback) callback();
}

export function enableForm(formElement: HTMLFormElement, options: FormToggleOptions = {}): void {
    const { callback, excludeFields = [] } = options;
    const inputs: InputNodeList = formElement.querySelectorAll('input, textarea, select');
  
    inputs.forEach(input => {
        if (!excludeFields.includes(input.name)) {
            input.disabled = false;
        }
    });
  
    if (callback) callback();
}
  
export function disableInput(inputElement: HTMLInputElement, onDisable: () => void): void {
    inputElement.disabled = true;
    if (onDisable) onDisable();
}
  
export function enableInput(inputElement: HTMLInputElement, onEnable: () => void): void {
    inputElement.disabled = false;
    if (onEnable) onEnable();
}

  
export function toggleInputValidity(inputElement: HTMLInputElement, isValid: boolean, options: ToggleInputValidityOptions = {}): void {
    const { invalidMessage = 'Invalid input', validMessage = '' } = options;
  
    inputElement.setCustomValidity(isValid ? validMessage : invalidMessage);

    if (!isValid) {
        showErrorMessage(inputElement, invalidMessage);
    } else {
        hideErrorMessage(inputElement);
    }
}

export function scrollToError(formElement: HTMLFormElement, errorClass = 'error'): void {
    const firstError = formElement.querySelector(`.${errorClass}`);
    
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        const errorInput = firstError.previousElementSibling as HTMLElement;
        if (errorInput && 'focus' in errorInput) {
            errorInput.focus();
        }
    }
}

  