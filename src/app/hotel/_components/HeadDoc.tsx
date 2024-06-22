import React from "react";
import Head from "next/head";

export default function HeadDoc() {
  return (
    <>
      <link rel="icon" href="../hotelassets/img/favicon.png" />
      <link
        rel="apple-touch-icon"
        href="../hotelassets/img/apple-touch-icon.png"
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      <link
        href="../hotelassets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/quill/quill.snow.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/quill/quill.bubble.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/remixicon/remixicon.css"
        rel="stylesheet"
      />
      <link
        href="../hotelassets/vendor/simple-datatables/style.css"
        rel="stylesheet"
      />
      <link href="../hotelassets/css/style.css" rel="stylesheet" />
    </>
  );
}
