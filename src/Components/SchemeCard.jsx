import React from "react";
import Voucher from "./Voucher";
import Reward from "./Reward";
import schemeBanner from "../assets/schemeBanner.jpg";

export default function SchemeCard() {
  return (
    <div className="schemeCard w-100 p-lg-5">
      <img
        src={schemeBanner}
        className="banner"
        alt="Banner"
        style={{ width: "100%" }}
      />
      <div className="row justify-content-center w-100 mt-3">
        <Voucher/>
        <Reward />
      </div>
    </div>
  );
}
