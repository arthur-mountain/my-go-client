/* eslint-disable @next/next/no-head-element */
'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";


function RootLayout({ children }) {
  const router = useRouter();

  useEffect(()=>{
    console.log("loyout");
  })


  return (
    <html>
      <head>
        <title>Next13 todo demo</title>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;