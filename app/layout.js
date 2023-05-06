import Layout from "../components/Layout/Layout";
import "../styles/reset.css";
import "./globals.css";

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