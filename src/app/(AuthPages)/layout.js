import React from "react";

import AuthLayout from "@/layouts/AuthLayout";
import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <AuthLayout>{children}</AuthLayout>
            </body>
        </html>
    );
}
