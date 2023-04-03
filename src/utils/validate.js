import * as yup from 'yup';
const MIN_LENGTH = 8;
export const validate = {
  validationSchema: yup.object({
    email: yup.string().trim().required().email(),
    password: yup.string().trim().required().min(MIN_LENGTH),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
    addressBTC: yup.string().trim().required().matches(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, {
      message: 'Invalid BTC address'
    })
  })
}