const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Користувач з таким емаіл не був найден',
  INVALID_PASSWORD: 'Пароль не правильний',
  EMAIL_EXISTS: 'Електрона пошта вже зареєстворана, попробуйте нову',
  auth: 'Потрібна увійти в систему',
  INVALID_EMAIL: 'Введіть правильний емейл'
}
export function error(code){
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Не відома помилка'
}