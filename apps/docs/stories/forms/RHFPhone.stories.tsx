import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Stack, styled } from '@mui/material';
import { FormProvider, RHFPhone } from '@lmfv/forms/src';

export default {
  title: 'Forms',
} as ComponentMeta<any>;

export const Phone: ComponentStory<typeof RHFPhone> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
    },
  });

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <RHFPhone
          name="mobile"
          label="Phone"
          defaultCountry="ph"
          variant="outlined"
          autoComplete="'off'"
        />
      </Stack>
    </FormProvider>
  )
};

export const PhoneWithCustomArrow: ComponentStory<typeof RHFPhone> = () => {
  const ArrowDown = styled("div")({
    width: "0",
    height: "0",
    marginLeft: "8px",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderTop: "6px solid red",
  });

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
    },
  });

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <RHFPhone
          name="mobile"
          label="Phone"
          defaultCountry="ph"
          variant="outlined"
          autoComplete="'off'"
          arrow={<ArrowDown />}
        />
      </Stack>
    </FormProvider>
  )
};