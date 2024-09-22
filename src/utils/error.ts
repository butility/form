
export function showError(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, errorElement: HTMLElement) {
    input.classList.add('error');
    errorElement.innerText = input.validationMessage || 'Invalid input';
    errorElement.style.display = 'block';
}

export function removeError(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, errorElement: HTMLElement) {
    input.classList.remove('error');
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}

export function getErrorElement(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): HTMLElement {
    let errorElement = document.getElementById(`${input.name}-error`);

    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = `${input.name}-error`;
        errorElement.className = 'error-message';
        input.parentNode?.insertBefore(errorElement, input.nextSibling);
    }

    return errorElement;
}