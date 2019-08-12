import * as Yup from 'yup';

const ValidateSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export default ValidateSchema;
