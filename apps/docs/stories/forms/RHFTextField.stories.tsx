import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { FormProvider, RHFTextField } from '@lmfv/forms/src';

export default {
  title: 'Forms',
} as ComponentMeta<any>;

export const Textfield: ComponentStory<typeof RHFTextField> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
    },
  });

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <RHFTextField name="fullname" variant="outlined" label="Textfield" />
      </Stack>
    </FormProvider>
  )
};