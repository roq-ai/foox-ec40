import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  profile: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
});
