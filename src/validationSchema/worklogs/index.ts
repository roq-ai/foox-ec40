import * as yup from 'yup';

export const worklogValidationSchema = yup.object().shape({
  hours: yup.number().integer().nullable(),
  value: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
