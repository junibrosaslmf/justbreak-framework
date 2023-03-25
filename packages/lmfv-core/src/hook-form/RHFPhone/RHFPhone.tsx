import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

import PhoneNumber from './PhoneNumber';

type Props = {
  name: string;
  label: string;
  helperText?: React.ReactNode;
  defaultCountry: string;
  variant: "filled" | "standard" | "outlined" | undefined;
  autoFormat?: boolean;
  autoComplete?: string;
  arrow?: React.ReactNode;
}

export default function RHFPhone({ name, label, defaultCountry, helperText, variant, arrow, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <PhoneNumber
                {...field}
                fullWidth
                variant={variant}
                label={label}
                defaultCountry={defaultCountry}
                arrow={arrow}
                {...other}
              />
              {(!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ mx: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )}
            </>
          )
        }}
      />
    </div>
  )
}