import React from "react";
import notFound from "../images/notfound.svg";
export default function NotFound() {
  return (
    <>
      <div className="container">
        <h2 className="title">ไม่พบหน้าเว็บ (404 Page Not Found)</h2>
        <img src={notFound} alt="notFound" />
      </div>
    </>
  );
}
