/* eslint-disable arrow-parens */
// eslint-disable-next-line quotes
import { useState } from "react";

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  // handles the data upon submit
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  // handles the change in the form inputs
  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
