import React, { useEffect, useState } from "react";
import "./css/Voucher.css";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTab,
  updateRewardValue,
  updateVoucherValue,
} from "../redux/voucherSlice";

export default function Voucher() {
  const [openSpecialInput, setOpenSpecialInput] = useState(false);
  const [openOtherInput, setOpenOtherInput] = useState(false);
  const dispatch = useDispatch();
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
  const balance = maxValue - rewardProValue;

  const progress = Math.min((totalValue / maxValue) * 100, 100); // Calculate progress
  console.log(progress);

  function handleSpecialChange(e) {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    dispatch(updateRewardValue(value));
  }

  function handleOtherChange(e) {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    dispatch(updateVoucherValue(value));
  }

  function getInputWidth(value) {
    const length = value.length || 1;
    return `${Math.max(length * 10, 30)}px`; // Adjust width based on length
  }

  return (
    <div className="col-lg-6 col-12 voucher p-lg-0 p-2">
      <div className="mb-lg-0 mb-5 border p-3">
        <div className="header px-lg-0">
          <div className="nav nav-tabs  border-bottom-0  w-100 d-flex justify-content-sm-between  align-items-center flex-sm-row flex-column">
            {schemes.map((scheme) => (
              <div
                className={`scheme col-sm-3 col-12 justify-content-center mb-sm-0 mb-3 pb-2 ${
                  activeTab === scheme.name ? "active" : ""
                }`}
                key={scheme.id}
                onClick={() => dispatch(setActiveTab(scheme.name))}
              >
                <p className="mb-1">{scheme.name}</p>
                <span className="d-inline-block">
                  Gift Voucher {scheme.reward}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="body">
          <div className="values">
            <ul className="ps-0 mt-3">
              <li className="d-flex justify-content-between">
                <span className="d-inline-block">
                  <FaCheck
                    className={`check ${
                      totalValue >= maxValues[activeTab] ? "complete" : ""
                    }`}
                  />{" "}
                  Total Value*
                </span>
                <span className="d-inline-block">
                  <span className="d-inline-block">
                    &#8377; {totalValue.toLocaleString("en-IN")} / &#8377;{" "}
                    {maxValue.toLocaleString("en-IN")}
                  </span>
                </span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="d-inline-block">
                  <FaCheck
                    className={`check ${
                      rewardProValue >= maxProductValues[activeTab]
                        ? "complete"
                        : ""
                    }`}
                  />{" "}
                  Dr. Grow
                </span>
                <span
                  className="d-inline-block"
                  onClick={() => setOpenSpecialInput(true)}
                >
                  &#8377;
                  {openSpecialInput ? (
                    <input
                      className="input_form"
                      style={{ width: getInputWidth(rewardProductValue) }}
                      onBlur={() => setOpenSpecialInput(false)}
                      onChange={(e) => handleSpecialChange(e)}
                    />
                  ) : (
                    rewardProValue.toLocaleString("en-IN") + " "
                  )}
                  / &#8377; {maxProductValue.toLocaleString("en-IN")}
                </span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="d-inline-block">
                  <FaCheck
                    className={`check ${
                      otherProValue >= balance ? "complete" : ""
                    }`}
                  />{" "}
                  Others
                </span>
                <span
                  className="d-inline-block"
                  onClick={() => setOpenOtherInput(true)}
                >
                  &#8377;
                  {openOtherInput ? (
                    <input
                      className="input_form"
                      style={{ width: getInputWidth(voucherValue) }}
                      value={voucherValue}
                      onBlur={() => setOpenOtherInput(false)}
                      onChange={(e) => handleOtherChange(e)}
                    />
                  ) : (
                    otherProValue.toLocaleString("en-IN") + " "
                  )}
                  / &#8377;{" "}
                  {balance <= 0 ? "0" : balance.toLocaleString("en-IN")}
                </span>
              </li>
            </ul>
            <div className="px-lg-0">
              <div
                className="progress"
                role="progressbar"
                aria-label="Progress Bar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 5 }}
              >
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <p className="d-flex justify-content-between mt-2 px-lg-0">
              <span className="text-primary">Eligible Purchases</span>
              <span>&#8377;{maxValue.toLocaleString("en-IN")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
