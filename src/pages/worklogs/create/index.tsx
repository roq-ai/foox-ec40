import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createWorklog } from 'apiSdk/worklogs';
import { worklogValidationSchema } from 'validationSchema/worklogs';
import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { getUsers } from 'apiSdk/users';
import { getJobs } from 'apiSdk/jobs';
import { WorklogInterface } from 'interfaces/worklog';

function WorklogCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: WorklogInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createWorklog(values);
      resetForm();
      router.push('/worklogs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<WorklogInterface>({
    initialValues: {
      hours: 0,
      value: '',
      freelancer_id: (router.query.freelancer_id as string) ?? null,
      job_id: (router.query.job_id as string) ?? null,
    },
    validationSchema: worklogValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Worklogs',
              link: '/worklogs',
            },
            {
              label: 'Create Worklog',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Worklog
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Hours"
            formControlProps={{
              id: 'hours',
              isInvalid: !!formik.errors?.hours,
            }}
            name="hours"
            error={formik.errors?.hours}
            value={formik.values?.hours}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('hours', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.value}
            label={'Value'}
            props={{
              name: 'value',
              placeholder: 'Value',
              value: formik.values?.value,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'freelancer_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<JobInterface>
            formik={formik}
            name={'job_id'}
            label={'Select Job'}
            placeholder={'Select Job'}
            fetcher={getJobs}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/worklogs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'worklog',
    operation: AccessOperationEnum.CREATE,
  }),
)(WorklogCreatePage);
