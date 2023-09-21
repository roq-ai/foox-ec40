import * as yup from 'yup';

export const hiringValidationSchema = yup.object().shape({
  freelancer_id: yup.string().nullable(),
  job_id: yup.string().nullable(),
});
