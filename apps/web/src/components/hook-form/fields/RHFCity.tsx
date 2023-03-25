import React, { useEffect, useState } from 'react';
import RHFAutocomplete from '../RHFAutocomplete';
import { capitalCase } from 'change-case';
import { TextFieldProps } from '@mui/material';
import { useFormContext } from "react-hook-form";

import { Province } from './RHFProvince';
import phLocations from './phLocations';

type Props = TextFieldProps & {
  name: string;
  label?: string;
};

type City = {
  name: string;
  prov_code: string;
  mun_code: string;
}

export default function RHFCity({ name, label }: Props) {
  const [cities, setCities] = useState<City[]>([]);
  const { watch, setValue, clearErrors } = useFormContext();
  const values = watch();
  const state: Province = values.state;

  useEffect(() => {
    if (state && state.prov_code) {
      const cities = phLocations.getCityMunByProvince(state.prov_code).map((item: City) => ({
        ...item,
        name: capitalCase(item.name)
      }));

      setCities(cities);
      setValue('city', null);
    } else if (state == null) {
      setCities([]);
      setValue('city', null);
      clearErrors('city');
    }
  }, [values.state]);

  return (
    <RHFAutocomplete
      fullWidth
      name={name}
      label={label}
      options={cities}
      getOptionLabel={(option: any) => option.name}
      isOptionEqualToValue={(option) => option.mun_code === values.city?.mun_code}
    />
  )
}