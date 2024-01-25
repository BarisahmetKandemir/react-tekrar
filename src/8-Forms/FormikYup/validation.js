import { object, string, ref } from 'yup';

const validation = object({
  name: string().required(),
  email: string().email("Email şeklinde yazılmalıdır").required(),
  password: string().min(5).required(),
  confirmPassword: string().oneOf([ref("password")]).required(),
});

export default validation;