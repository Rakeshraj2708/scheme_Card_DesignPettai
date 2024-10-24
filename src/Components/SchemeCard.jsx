import React from "react";
import Voucher from "./Voucher";
import Reward from "./Reward";
import schemeBanner from "../assets/schemeBanner.jpg";
import "./css/SchemeCard.css";

export default function SchemeCard() {
  return (
    <div className="schemeCard w-100 p-lg-5">
      <img
        src={schemeBanner}
        className="banner"
        alt="Banner"
        style={{ width: "100%" }}
      />
      <section className="mt-4 w-100">
        <div className="d-flex justify-content-lg-center flex-wrap w-100">
          <Voucher />
          <Reward />
        </div>
      </section>
    </div>
  );
}
