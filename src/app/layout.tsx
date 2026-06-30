import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yggutils.vercel.app"),
  title: {
    default: "YggUtils",
    template: "%s | YggUtils",
  },
  description: "Run authlib-injector on any server.",
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
