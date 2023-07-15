
import { Form } from "formik";
import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(10, "name must have less than 10 chars")
    .required(),


  email: Yup.string().email().required(),

  password: Yup.string()
    .required()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div className="m-10 border-4 border-red-400 w-96 bg-white-500 h-96">
      <Form>
        <div className="flex flex-col border">
          <input
          className="border h-5"
            label="name"
            name="name"
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.name && errors.name}
            error={touched.name && Boolean(errors.name)}
          />
          <input
          className="border h-5"
            label="Email"
            name="email"
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <input
                    className="border h-5"

            label="password1"
            name="password1"
            id="password1"
            type="password"
            value={values.password1}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password1 && errors.password1}
            error={touched.password1 && Boolean(errors.password1)}
          />
          <button type="submit" >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;