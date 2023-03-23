import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import FormProvider, { RHFTextField } from '@junibrosas/core/src/forms';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RHFTextField',
  component: RHFTextField,
} as ComponentMeta<typeof RHFTextField>;

export const Primary: ComponentStory<typeof RHFTextField> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
    },
  });

  return (
    <FormProvider methods={methods}>
      <RHFTextField name="fullname" variant="outlined" label="sample" />
    </FormProvider>
  )
};