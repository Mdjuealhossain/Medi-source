import * as Yup from "yup";

export const validationSchema = Yup.object({
    otp: Yup.array().of(Yup.string().length(1, "Each OTP field should be 1 character").required("OTP is required")).length(6, "OTP must be 4 characters").required("OTP is required"),
});
