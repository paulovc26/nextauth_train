import ServerAuth from "./common/ServerAuth";
import MainLayout from "../components/MainLayout";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="pt-br">
            <body>
                <ServerAuth>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </ServerAuth>
            </body>
        </html>
    );
}