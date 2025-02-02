import * as Yup from "yup";

export const validationSchema = Yup.object({
    otp: Yup.array().of(Yup.string().length(1, "Each OTP field should be 1 character").required("OTP is required")).length(6, "OTP must be 4 characters").required("OTP is required"),
});
const phoneValidation = Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits") // ফোন নম্বর ১১ ডিজিট হতে হবে
    .required("Phone number is required");

const passwordValidation = Yup.string().min(8, "Password must be at least 8 characters").required("New password is required");
const old_passwordValidation = Yup.string().min(8, "Password must be at least 8 characters").required("Old password is required");

const confirmPasswordValidation = Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Confirm password is required");

export const reset_validationSchema = Yup.object({
    phone: phoneValidation,
    new_password: passwordValidation,
    confirm_password: confirmPasswordValidation,
});

export const update_validationSchema = Yup.object({
    old_password: old_passwordValidation,
    new_password: passwordValidation,
    confirm_password: confirmPasswordValidation,
});
