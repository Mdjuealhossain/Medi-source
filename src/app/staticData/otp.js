import * as Yup from "yup";

export const validationSchema = Yup.object({
    otp: Yup.array().of(Yup.string().length(1, "Each OTP field should be 1 character").required("OTP is required")).length(6, "OTP must be 4 characters").required("OTP is required"),
});
export const reset_validationSchema = Yup.object({
    phone: Yup.string()
        .matches(/^[0-9]{11}$/, "Phone number must be exactly 10 digits") // ফোন নম্বর ১০ ডিজিট হতে হবে
        .required("Phone number is required"),

    // new_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    // confirm_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    new_password: Yup.string().min(8, "Password must be at least 8 characters").required("New password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("new_password"), null], "Passwords must match")
        .required("Confirm password is required"),
});
