const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "name is reaquaired";
  }

  if (!values.email) {
    errors.email = "email is reaquired";
  }

  return errors;
};

export default validate;
