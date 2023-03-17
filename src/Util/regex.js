export const pwRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,15})/;
export const telRegExp = /^([0-9]{3})[-]([0-9]{4})[-][0-9]{4}$/; // 하이픈 포함
export const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*/; // 이메일 정규식
