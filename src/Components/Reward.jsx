import React from "react";
import "./css/Reward.css";
import profile from "../assets/profile.png";
import bronze from "../assets/10000.png";
import silver from "../assets/25000.png";
import gold from "../assets/60000.png";
import { useSelector } from "react-redux";

export default function Reward() {
  const {
    schemes,
    activeTab,
    maxValues,
    maxProductValues,
    rewardProductValue,
    voucherValue,
  } = useSelector((state) => state.voucher);

  const maxValue = maxValues[activeTab];
  const maxProductValue = maxProductValues[activeTab];

  const otherProValue = parseFloat(voucherValue.replace(/,/g, "")) || 0;
  const rewardProValue = parseFloat(rewardProductValue.replace(/,/g, "")) || 0;
  const totalValue = otherProValue + rewardProValue;

  return (
    <div className="col-lg-6 col-12 reward ps-lg-4">
      <h5 className="px-lg-0 px-3">Your rewards</h5>

      <div className="px-lg-0 px-3 ps-lg-3 ">
        {/* Show profile when total value is zero */}

        {totalValue === 0 && (
          <section className="grey">
            <div className="mt-3 px-lg-0 px-3 ps-lg-3 pt-3">
              <p className="mb-2 fw-bold text-black">
                You are yet to start winning
              </p>
              <p className="pe-5 mb-0">
                Talk to your Aquaconnect Officer to know more about the scheme
                if you have any questions
              </p>
            </div>

            <div className="d-flex column-gap-3 align-items-center pt-3 ">
              <img src={profile} alt="Profile" width={40} height={40} />
              <div className="profile-content">
                <p className="mb-0">Sathyan Velumani</p>
                <p className="mb-0">+91 98842 66676</p>
              </div>
            </div>
          </section>
        )}

        <section>
          {/* Bronze Reward */}
          {(totalValue >= maxValues.Bronze || rewardProValue >= 30000) && (
            <>
              <p className="pe-5 mb-0">
                Talk to your Aquaconnect Officer to know more about the scheme
                if you have any questions</p>
                <img
                  src={bronze}
                  className="rewardImg d-md-inline d-block my-4"
                  alt="bronze"
                />
              
            </>
          )}

          {/* Silver Reward */}
          {(totalValue >= maxValues.Silver || rewardProValue >= 60000) && (
            <img
              src={silver}
              className="rewardImg d-md-inline d-block my-4"
              alt="silver"
            />
          )}

          {/* Gold Reward */}
          {(totalValue >= maxValues.Gold || rewardProValue >= 90000) && (
            <img
              src={gold}
              className="rewardImg d-md-inline d-block my-4"
              alt="gold"
            />
          )}
        </section>
      </div>
    </div>
  );
}
