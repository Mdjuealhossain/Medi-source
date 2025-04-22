import React from "react";

import AuthLayout from "@/layouts/AuthLayout";

export default function RootLayout({ children }) {
    return <AuthLayout>{children}</AuthLayout>;
}
