import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";
import PageRender from "./PageRender";

export const metadata: Metadata = {
  title: "Template",
  description: "Template"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageRender>{children}</PageRender>
      </body>
    </html>
  );
}
