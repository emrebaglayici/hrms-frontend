import React, { useEffect, useState } from 'react'
import { Dropdown, FormField, Label } from "semantic-ui-react";
import { useField } from "formik";
import cityService from '../../services/cityService';


export default function KodlamaIoCityDropdown({...props}) {
  const [field, meta] = useField(props);
  const [cities,setCities]=useState([]);
  useEffect(()=>{
      let citiesService=new cityService();
      citiesService.getCities().then((result)=>setCities(result.data.data));
  });
  return (
    <FormField error={meta.touched && !!meta.error}>
        <Dropdown clearable options={cities.map((city)=>(
            <option>{city.city_name}</option>
        ))} selection {...field} {...props} />
        
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
        
      </FormField>
  )
}
