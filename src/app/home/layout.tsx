import React from 'react';
import SessionAuthProvider from "@/app/context/SessionAuthProvide";

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div>
            <header>
                <p>Esta es la cabecera</p>
            </header>
            <main>
                <SessionAuthProvider>{children}</SessionAuthProvider>
            </main>
            <footer>
                <p>Este es el pie de página</p>
            </footer>
        </div>
    );
};

export default Layout;