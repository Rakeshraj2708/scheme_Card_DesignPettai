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
      <h4>Your rewards</h4>
      <div className="content mt-3">
        <p className="mb-2">You are yet to start winning</p>
        <p className="pe-5">
          Talk to your Aquaconnect Officer to know more about the scheme if you
          have any questions
        </p>
      </div>

     {/* Reward Display Logic */}
      {totalValue === 0 && (
        <>
          <div className="d-flex column-gap-3 align-items-center mt-3">
            <img src={profile} alt="Profile" width={40} height={40} />
            <div className="profile-content">
              <p className="mb-0">Sathyan Velumani</p>
              <p className="mb-0">+91 98842 66676</p>
            </div>
          </div>
        </>
      )}

      {
        (totalValue >= maxValues.Bronze || rewardProValue >= 30000) && (
          <>
            <div className="reward-amount d-flex col-5">
              <img src={bronze} alt="bronze" />
            </div>
          </>
        )}

      {
        (totalValue >= maxValues.Silver  || rewardProValue >= 60000) && (
          <>
            <div className="reward-amount d-flex col-5 justify-content-between">
              
              <img src={silver} alt="silver" />
            </div>
          </>
        )}

      {
        (totalValue >= maxValues.Gold || rewardProValue >= 90000) && (
          <>
            <div className="reward-amount d-flex col-8 justify-content-between">
              
              <img src={gold} alt="gold" />
            </div>
          </>
        )}
    </div>
  );
}
