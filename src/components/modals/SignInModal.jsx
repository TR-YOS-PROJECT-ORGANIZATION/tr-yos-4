/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import useAuthCall from "../../hooks/useAuthCall";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ErrorMessage } from "formik";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";
import * as yup from "yup";
import close from '../../images/close.png'
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export const registerSchema = yup.object().shape({
  email: yup.string()
            .required()
  ,

  password: yup
    .string()
    .required()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});


const SignInModal = (props) => {

  const navigate = useNavigate();
  const { currentUser,loading } = useSelector((state) => state?.auth);
  const { login } = useAuthCall();
  const open = props.setOpen
  const {t} = useTranslation();



  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser]);

  const copyDeployerWallet = () => {
    navigator.clipboard.writeText("0x49AE63056b3A0Be0B166813eE687309Ab653c07c");
    // toast.success("Address copied");
  };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={props.setOpen}
      >
        <div className="flex items-center justify-center min-h-screen  text-center text-white">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="text-white-500 relative w-[500px] min-h-[450px] border-2 border-spacing-3 border-red-950 outline outline-offset-4  p-5 rounded-lg overflow-hidden transform transition-all bg-white-500">
            <button onClick={()=>open(false)}>
            <img src={close} className=" absolute right-5"></img>

            </button>

              <h3 className="text-green-dark text-bold text-lg">{t("Sign In")}</h3>
              <div className="m-5 rounded items-start text-start">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={registerSchema}
                  onSubmit={(values, actions) => {
                    login(values);
                    navigate("/");
                    actions.resetForm();
                    actions.setSubmitting(false);
                    props.setOpen(false);


                    console.log(values);
                  }}
                >
                  {({
                    values,
                    handleChange,
                    errors,
                    touched,
                    handleBlur,
                    isSubmitting,
                  }) => (
                    <Form>
                      <div className="flex flex-col text-black">
                        <label className=" text-red-700" htmlFor="mail">
                          {t("E-mail")}
                        </label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="mail"
                          name="email"
                          placeholder={t("Enter your e-mail")}
                          type="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values?.email}
                          variant="outlined"
                          
                        />
                           {touched.email && errors.email ? 
                         <div className="text-red-retro mb-2 text-sm "> {errors.email}</div>
                                   
                                     : null}


                        <label className=" text-red-700" htmlFor="password">
                          {t("Password")}
                        </label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password"
                          name="password"
                          placeholder={t("Enter your password")}
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values?.password}
                          
                        />
                          {touched.password && errors.password ? 
                         <div className="text-red-retro mb-2 text-sm "> {errors.password}</div>
                                   
                                     : null}


                        <button
                          className="bg-red-warm mx-auto rounded py-3 mt-5 text-white-500 w-48"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {t("Submit")}
                        </button>

                        <div className="flex justify-center mt-5">
                          <p className="text-sm mx-1">{t("Don't have an account yet?")}</p>
                          <a onClick={()=>{open(false);
                          props.setOpenUp(true)}}
                          className="text-sm text-red-retro cursor-pointer hover:text-red-warm font-bold underline"> 
                          {t("Sign Up")}
                          </a>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignInModal;
