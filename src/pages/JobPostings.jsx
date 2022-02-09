import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import KodlamaIoWorkingTypeDropDown from '../utilities/customFormControls/KodlamaIoWorkingTypeDropdown'
import KodlamaIoWorkingTimeDropDown from '../utilities/customFormControls/KodlamaIoWorkingTimeDropdown'
import KodlamaIoCityDropdown from "../utilities/customFormControls/KodlamaIoCityDropdown";

export default function JobPostings({...props}) {
  const initialValues = {
    description: "",
    companyName: "",
    phone: "",
    website: "",
    jobName: "",
    minSalary: 4251,
    openPositions: 1,
  };
  const schema = Yup.object({
    description: Yup.string().required("Zorunlu"),
    companyName: Yup.string().required("Zorunlu"),
    phone: Yup.string().phone().required("Zorunlu"),
    website: Yup.string().url().required("Zorunlu"),
    jobName: Yup.string().required("Zorunlu"),
    minSalary: Yup.number().required("Zorunlu"),
    maxSalary: Yup.number().required("Zorunlu"),
    openPositions: Yup.number().required("Zorunlu"),
    workingType:Yup.string().required("Zorunlu"),
    workingTime:Yup.string().required("Zorunlu"),
    city:Yup.string().required("Zorunlu")
  });

  return (
    <Formik initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit={(values)=>{
        console.log(values)
      }}>
        <Form className="ui form">
        <h2>Post a new Job Advertisements</h2>
          <KodlamaIoTextInput name="description" placeholder="İş Açıklaması" />
          <KodlamaIoTextInput name="companyName" placeholder="Şirket Adı" />
          <KodlamaIoTextInput name="phone" placeholder="Telefon" />
          <KodlamaIoTextInput name="website" placeholder="Website" />
          <KodlamaIoTextInput name="jobName" placeholder="Job Name" />
          <KodlamaIoTextInput name="minSalary" placeholder="Min Maaş" />
          <KodlamaIoTextInput name="maxSalary" placeholder="Max Maaş" />
          <KodlamaIoTextInput name="openPositions" placeholder="Açık Pozisyon Sayısı" />

          <KodlamaIoWorkingTypeDropDown name="workingType"  placeholder="Working Type"></KodlamaIoWorkingTypeDropDown>


          <KodlamaIoWorkingTimeDropDown name="workingTime"  placeholder="Working Time"></KodlamaIoWorkingTimeDropDown>

          <KodlamaIoCityDropdown name="city" placeholder="Select a city"></KodlamaIoCityDropdown>
          
          <Button color="green" type="submit">
                Post
          </Button>
        </Form>
      </Formik>
  );
}
