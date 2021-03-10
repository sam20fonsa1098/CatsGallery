import * as Yup from 'yup';

export const schema = Yup.object().shape({
  columns: Yup.number()
    .integer()
    .min(2, 'Mínimo 2 colunas')
    .max(4, 'Máximo 4 colunas')
    .required('Campo obrigatório')
    .typeError('Precisa ser um número inteiro'),
});
