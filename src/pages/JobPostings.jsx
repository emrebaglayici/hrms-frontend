import React from "react";
import { Formik, Form, useFormik } from "formik";
// import * as Yup from "yup";
import "yup-phone";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
// import KodlamaIoWorkingTypeDropDown from '../utilities/customFormControls/KodlamaIoWorkingTypeDropdown'
// import KodlamaIoWorkingTimeDropDown from '../utilities/customFormControls/KodlamaIoWorkingTimeDropdown'
// import KodlamaIoCityDropdown from "../utilities/customFormControls/KodlamaIoCityDropdown";
// import { useState } from "react";
// import { useEffect } from "react";
import JobPostingService from "../services/jobPostingService";

export default function JobPostings({ ...props }) {
  let jobPostingService = new JobPostingService();
  // var datas={
  //   company_name:"Ovada Aroma Terapi",
  //   email:"info@ovada.com",
  //   password:"123",
  //   password_again:"123",
  //   phone:"02323763364",
  //   website:"ovada.com"
  // }

  // const [jobs,setJobs]=useState([]);
  // useEffect(()=>{

  // });
  // const initialValues = {
  //   description: "",
  //   companyName: "",
  //   phone: "",
  //   website: "",
  //   jobName: "",
  //   minSalary: 4251,
  //   openPositions: 1,
  // };
  // const schema = Yup.object({
  //   description: Yup.string().required("Zorunlu"),
  //   companyName: Yup.string().required("Zorunlu"),
  //   phone: Yup.string().phone().required("Zorunlu"),
  //   website: Yup.string().url().required("Zorunlu"),
  //   jobName: Yup.string().required("Zorunlu"),
  //   minSalary: Yup.number().required("Zorunlu"),
  //   maxSalary: Yup.number().required("Zorunlu"),
  //   openPositions: Yup.number().required("Zorunlu"),
  //   workingType:Yup.string().required("Zorunlu"),
  //   workingTime:Yup.string().required("Zorunlu"),
  //   city:Yup.string().required("Zorunlu")
  // });
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
    jobPostingService
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
      description: "",
      companyName: "",
      phone: "",
      website: "",
      jobName: "",
      minSalary: 4251,
      openPositions: 1,
    },
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <Formik initialValues={formik.initialValues}>
      <Form className="ui form" onSubmit={formik.handleSubmit}>
        <h2>Post a new Job Advertisements</h2>
        <KodlamaIoTextInput
          name="description"
          placeholder="İş Açıklaması"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="companyName"
          placeholder="Şirket Adı"
          value={formik.values.companyName}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="phone"
          placeholder="Telefon"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="website"
          placeholder="Website"
          value={formik.values.website}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="jobName"
          placeholder="Job Name"
          value={formik.values.jobName}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="minSalary"
          placeholder="Min Maaş"
          value={formik.values.minSalary}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="maxSalary"
          placeholder="Max Maaş"
          value={formik.values.maxSalary}
          onChange={formik.handleChange}
        />
        <KodlamaIoTextInput
          name="openPositions"
          placeholder="Açık Pozisyon Sayısı"
          value={formik.values.openPositions}
          onChange={formik.handleChange}
        />
        {/* <KodlamaIoWorkingTypeDropDown name="workingType"  placeholder="Working Type" value={formik.values.workingType} onChange={formik.handleChange}/>
          <KodlamaIoWorkingTimeDropDown name="workingTime"  placeholder="Working Time" value={formik.values.workingTime} onChange={formik.handleChange}/> */}
        {/* <KodlamaIoCityDropdown name="city" placeholder="Select a city" value={formik.values.city} onChange={formik.handleChange}/> */}
        <KodlamaIoTextInput
          name="city"
          placeholder="Write city"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <Button color="green" type="submit">
          Post
        </Button>
      </Form>
    </Formik>
  );
}
