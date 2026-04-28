interface IValidateArgs {
    value: string | boolean;
    pattern?: RegExp;
    action?: string;
    format?: string;
}

// 입력 필드의 유효성을 검사하는 함수
export function validateField({value, pattern, action="입력", format}: IValidateArgs): string | undefined {
    const isString = typeof value === "string";

    // 필수 값 검증
    const isEmpty = !value || (isString && value.trim() === "");
    if(isEmpty) return `필수 ${action} 항목입니다`;

    // 패턴 검증
    const isInvalidPattern = isString && pattern && !pattern.test(value);
    if(isInvalidPattern) return `${format} 형식이 올바르지 않습니다`;

    return undefined;
}





