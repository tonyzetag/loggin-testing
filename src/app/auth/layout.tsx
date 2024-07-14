import SessionAuthProvider from "@/app/context/SessionAuthProvide";

export default function RootLayout(
    {children}: Readonly<{children: React.ReactNode}>) {
  return (
    <SessionAuthProvider>{children}</SessionAuthProvider>
  );
}
