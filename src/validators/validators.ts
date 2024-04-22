export function requiredField(value: string) {
    return value ? undefined : 'field is required'
}
export const maxLengthVC = (maxLength: number) => (value: string) => {
    return !value || value.length < maxLength ? undefined : `Max length is ${maxLength} symbols`
}