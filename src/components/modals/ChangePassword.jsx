/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import useAuthCall from "../../hooks/useAuthCall";
import { useSelector } from "react-redux";
import { ErrorMessage } from "formik";
import close from '../../images/close.png'
import { useTranslation } from "react-i18next";
import i18next from "i18next";



export const registerSchema = yup.object().shape({
    password_current: yup
    .string()
    .required()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),


password_new1: yup
.string()
.required()
.min(8, "Password must have min 8 chars")
.max(16, "Password must have max 16 chars")
.matches(/\d+/, "Password must have a number")
.matches(/[a-z]+/, "Password must have a lowercase")
.matches(/[A-Z]+/, "Password must have an uppercase")
.matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),



  password_new2: yup
    .string()
    .required()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});


const ChangePassword= (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  const userID = currentUser.userID

const {t} = useTranslation();
const lang = i18next.language;

  // const copyDeployerWallet = () => {
  //   navigator.clipboard.writeText("0x49AE63056b3A0Be0B166813eE687309Ab653c07c");
  //   // toast.success("Address copied");
  // };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={props.setOpen}
      >
        <div className="flex items-center justify-center min-h-screen  text-center text-white ">
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

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="text-white-500 w-[500px] min-h-[450px] border-2 border-spacing-3 
            border-red-950 outline outline-offset-4  p-5 rounded-lg overflow-hidden transform transition-all bg-white-500 relative"
            >
            <button onClick={()=>props.setOpen(false)}>
            <img src={close} className=" absolute right-5"></img>

            </button>

              <p className="text-green-dark font-bold text-lg">{t("Edit Password")}</p>
              <div className="m-5 rounded items-start text-start">
                <Formik
                  initialValues={{
                    password_current: "",
                     password_new1: "",
                    password_new2: ""
                  }}

                  validationSchema={registerSchema}
                  onSubmit={(values, actions) => {
                    props.getChangePassword(userID,values)
                    actions.resetForm();
                    actions.setSubmitting(false);
                    props.setOpen(false);
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
                      <div className="flex flex-col text-black ">

                        <label htmlFor="password_current">{t("Password")}</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password_current"
                          name="password_current"
                          placeholder= {t("Enter your password")}
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password_current}
                        />
                        <ErrorMessage name="password_current" />

                        <label htmlFor="password_new1">{t("New Password")}</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password_new1"
                          name="password_new1"
                          placeholder={t("Enter your new password")}
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password_new1}
                        />

                        <label htmlFor="password_new2">{t("Confirm New Password")}</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password_new2"
                          name="password_new2"
                          placeholder={t("Enter your new password again")}
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password_new2}
                        />
                      
                      

                        <button
                          className="bg-red-warm mx-auto rounded py-3 mt-5 text-white-500 w-48"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {t("Submit")}
                        </button>
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

export default ChangePassword;
