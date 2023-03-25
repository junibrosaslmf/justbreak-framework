import React, { useMemo } from 'react';
import { capitalCase } from 'change-case';
import { TextFieldProps } from '@mui/material';
import phLocations from './phLocations';
import { useFormContext } from 'react-hook-form';

import RHFAutocomplete from '../RHFAutocomplete';

type Props = TextFieldProps & {
  name: string;
  label?: string;
};

export type Province = {
  name: string;
  prov_code: string;
  reg_code: string;
}

const getProvinces = () => {
  return phLocations.provinces.map((item: Province) => ({
    ...item,
    name: capitalCase(item.name)
  }));
}

export default function RHFProvince({ name, label }: Props) {
  const provinces = useMemo(() => getProvinces(), []);
  const { setValue, watch } = useFormContext();
  const values = watch();

  return (
    <RHFAutocomplete
      fullWidth
      name={name}
      label={label}
      options={provinces}
      getOptionLabel={(option: any) => option.name}
      isOptionEqualToValue={(option: Province) => option.prov_code === values.state?.prov_code}
    />
  )
}