export function validateField(input: HTMLInputElement | HTMLTextAreaElement): string | null {
    let errorMessage = null;

    if(input.validity.valueMissing || input.value.trim() === "") {
        const action = input.dataset.action;
        errorMessage = `필수 ${action} 항목입니다`;
    } else if(input.validity.patternMismatch) {
        const format = input.dataset.format;
        errorMessage = `${format} 형식이 올바르지 않습니다`;
    }

    return errorMessage;
}