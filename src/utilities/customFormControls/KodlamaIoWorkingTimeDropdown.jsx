import React from "react";
import { useField } from "formik";
import { Dropdown, FormField, Label } from "semantic-ui-react";
const options2 = [
  {
    key: 3,
    text: "Yarı Zamanlı",
    value: 3,
  },
  {
    key: 4,
    text: "Tam Zamanlı",
    value: 4,
  },
  {
    key: 5,
    text: "Proje Bazlı",
    value: 5,
  },
];
export default function KodlamaIoDropdown({ ...props }) {
  const [field, meta] = useField(props);
  return (
      <FormField error={meta.touched && !!meta.error}>
        <Dropdown clearable options={options2} selection {...field} {...props} />
        
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
  );
}
