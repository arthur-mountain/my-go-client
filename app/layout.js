import Layout from "../components/Layout/Admin";
import "@/styles/reset.css";
import "@/styles/global.css";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next13 and golang demo</title>
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;