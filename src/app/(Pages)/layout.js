import AppLayout from "@/layouts/AppLayout";
import { CartProvider } from "../utilities/cartContex";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CartProvider>
                    <AppLayout>{children}</AppLayout>
                </CartProvider>
            </body>
        </html>
    );
}
