import * as React from "react";
import BasicTextField from "src/components/atoms/TextField/textField";
import ValidationTextField from "src/components/atoms/TextField/Validation/validation";

const Form = () => {
  return (
    <>
      <BasicTextField label="Imię" />
      <ValidationTextField label="Twój mail" />
    </>
  );
};

export default Form;
