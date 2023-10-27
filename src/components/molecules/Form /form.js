import * as React from "react";
import BasicTextField from "@/components/atoms/TextField/textField";
import ValidationTextField from "@/components/atoms/TextField/Validation/validation";

const Form = () => {
  return (
    <>
      <BasicTextField label="Imię" />
      <ValidationTextField label="Twój mail" />
    </>
  );
};

export default Form;
