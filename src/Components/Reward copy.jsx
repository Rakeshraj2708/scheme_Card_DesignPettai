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
    <div className="col-lg-6 reward">
      <h4 className="px-lg-0 px-3">Your rewards</h4>
      <div className="content mt-3 px-lg-0 px-3">
        <p className="mb-2">You are yet to start winning</p>
        <p className="pe-5">
          Talk to your Aquaconnect Officer to know more about the scheme if you
          have any questions
        </p>
      </div>

      <div className="px-lg-0 px-3">
        {/* Show profile when total value is zero */}
        {totalValue === 0 && (
          <div className="d-flex column-gap-3 align-items-center mt-3">
            <img src={profile} alt="Profile" width={40} height={40} />
            <div className="profile-content">
              <p className="mb-0">Sathyan Velumani</p>
              <p className="mb-0">+91 98842 66676</p>
            </div>
          </div>
        )}

        {/* Bronze Reward */}
        {(totalValue >= maxValues.Bronze || rewardProValue >= 30000) && (
          <img src={bronze} className="rewardImg" alt="bronze" />
        )}

        {/* Silver Reward */}
        {(totalValue >= maxValues.Silver || rewardProValue >= 60000) && activeTab!=='Bronze' && (
          <img src={silver} className="rewardImg" alt="silver" />
        )}

        {/* Gold Reward */}
        {(totalValue >= maxValues.Gold || rewardProValue >= 90000)  && activeTab==='Gold' &&(
          <img src={gold} className="rewardImg" alt="gold" />
        )}
      </div>
    </div>
  );
}
