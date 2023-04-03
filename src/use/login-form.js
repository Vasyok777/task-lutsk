import { ref } from 'vue'
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export function useLoginForm(fn){
  const MIN_LENGTH = 8;

  const rememberMe = ref(false);
  const { handleSubmit } = useForm();

  const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email', yup.string().trim().required().email());

  const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup.string().trim().required().min(MIN_LENGTH));

  const onSubmit = handleSubmit(fn)
  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    rememberMe,
    onSubmit,
  }
}