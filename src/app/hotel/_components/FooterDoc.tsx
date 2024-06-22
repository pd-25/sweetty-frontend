import Script from "next/script";
import React from "react";

export default function FooterDoc() {
  return (
    <>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>

      <Script src="../hotelassets/vendor/apexcharts/apexcharts.min.js"></Script>
      <Script src="../hotelassets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="../hotelassets/vendor/chart.js/chart.umd.js"></Script>
      <Script src="../hotelassets/vendor/echarts/echarts.min.js"></Script>
      <Script src="../hotelassets/vendor/quill/quill.min.js"></Script>
      <Script src="../hotelassets/vendor/simple-datatables/simple-datatables.js"></Script>
      <Script src="../hotelassets/vendor/tinymce/tinymce.min.js"></Script>
      <Script src="../hotelassets/vendor/php-email-form/validate.js"></Script>

      <Script src="../hotelassets/js/main.js"></Script>
    </>
  );
}
