import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  job_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
