import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { styled, Stack } from '@mui/material';

import FormProvider, { RHFTextField, RHFPhone } from '@lmfv/core/src/hook-form';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RHFTextField',
  component: RHFTextField,
} as ComponentMeta<typeof RHFTextField>;

const ArrowDown = styled("div")({
  width: "0",
  height: "0",
  marginLeft: "8px",
  borderLeft: "4px solid transparent",
  borderRight: "4px solid transparent",
  borderTop: "6px solid red",
});

export const Primary: ComponentStory<typeof RHFTextField> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
    },
  });

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <RHFTextField name="fullname" variant="outlined" label="sample" />
        <RHFPhone
          name="mobile"
          label="Phone"
          defaultCountry="ph"
          variant="outlined"
          autoComplete="'off'"
        />
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