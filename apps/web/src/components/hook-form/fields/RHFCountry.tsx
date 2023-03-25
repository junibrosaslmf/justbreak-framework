import React, { useMemo } from 'react';
import { Box, TextFieldProps } from '@mui/material';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { useFormContext } from 'react-hook-form';

import RHFAutocomplete from '../RHFAutocomplete';
import Image from '../../Image';
import _mock from '../../../../_data/mock';

type Props = TextFieldProps & {
  name: string;
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
};

export type Province = {
  name: string;
  prov_code: string;
  reg_code: string;
}

export default function RHFCountry({ name, label, disabled, fullWidth }: Props) {
  const { watch } = useFormContext();
  const values = watch();

  return (
    <RHFAutocomplete
      disableClearable
      disabled={disabled}
      fullWidth={fullWidth}
      name={name}
      label={label}
      options={_mock.countries.filter(item => item.code === 'PH')}
      getOptionLabel={(option: any) => option.label}
      isOptionEqualToValue={(option: any) => option.code === values.countryCode?.code}
      filterOptions={createFilterOptions({
        stringify: (option: any) => option.label + option.code,
      })}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts: {
          text: string;
          highlight: boolean;
        }[] = parse(option.label, matches);
        return (
          <Box component="li" {...props}>
            <Image
              alt="flag country"
              src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
              sx={{
                mr: 1,
                width: 24,
                height: 24,
                flexShrink: 0,
                borderRadius: '50%',
              }}
            />
            {parts.map((part, index) => (
              <Box
                key={index}
                component="span"
                sx={{
                  ...(part.highlight && {
                    fontWeight: 'fontWeightBold',
                  }),
                }}
              >
                {part.text}
              </Box>
            ))}
          </Box>
        );
      }}
    />
  )
}