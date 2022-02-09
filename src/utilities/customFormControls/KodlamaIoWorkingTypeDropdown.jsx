import React from "react";
import { useField } from "formik";
import { Dropdown, FormField, Label } from "semantic-ui-react";
const options = [
  {
    key: 1,
    text: "Face to Face",
    value: 1,
  },
  {
    key: 2,
    text: "Remote",
    value: 2,
  },
];
export default function KodlamaIoDropdown({ ...props }) {
  const [field, meta] = useField(props);
  return (
      <FormField error={meta.touched && !!meta.error}>
        <Dropdown clearable options={options} selection {...field} {...props} />
        
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
  );
}
