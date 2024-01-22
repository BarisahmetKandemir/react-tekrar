import { object, string, ref } from 'yup';

const validation = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  confirmPassworld: string().oneOf([ref("password")]).required(),
});

export default validation;