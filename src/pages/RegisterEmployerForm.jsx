import React from "react";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import "yup-phone";
import { Formik, Form, useFormik } from "formik";
import EmployerService from "../services/employerService";

export default function RegisterEmployerForm({ ...props }) {
  let employerService = new EmployerService();
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
    employerService
      .add(values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const handleSubmit=(values)=>{

  //   jobPostingService.add(datas)
  //   .then(function(response){
  //     console.log(response);
  //   }).catch(function(error){
  //     console.log(error);
  //   })
  // }
  const formik = useFormik({
    initialValues: {
      company_name: "",
      email: "",
      password: "",
      password_again: "",
      phone: "",
      website: "",
    },
    validateOnBlur: true,
    onSubmit,
  });
  return (
    <Formik initialValues={formik.initialValues}>
      <Form className="ui form" onSubmit={formik.handleSubmit}>
        <KodlamaIoTextInput
          name="company_name"
          placeholder="Şirket Adı"
          value={formik.values.company_name}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="password"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="password_again"
          placeholder="Password Again"
          type="password"
          value={formik.values.password_again}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="phone"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="website"
          placeholder="Website"
          value={formik.values.website}
          onChange={formik.handleChange}
        />
        <Button color="green" type="submit">
          Post
        </Button>
      </Form>
    </Formik>
  );
}
