import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import zipCodes from 'zipcodes-ph';

import RHFTextField from '../RHFTextField'

type Props = {}

export default function RHFZipCode({ }: Props) {

  const { setValue, watch } = useFormContext();
  const values = watch();
  const city = values.city;

  useEffect(() => {
    if (city) {
      const zipCode = zipCodes.reverse(city.name);
      if (zipCode)
        setValue('zipCode', zipCodes.reverse(city.name));
    } else if (city == null) {
      setValue('zipCode', '');
    }
  }, [values.city]);

  return (
    <RHFTextField name="zipCode" fullWidth={false} label="Zip Code" />
  )
}