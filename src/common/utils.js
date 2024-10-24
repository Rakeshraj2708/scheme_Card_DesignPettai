export const getCurrentTab = (state) => {
    const voucherValue = Number(state.voucherValue);
    const rewardValue = Number(state.rewardProductValue);
  
    // Define thresholds for status levels
    const silverThreshold = 30000;
    const goldThreshold = 60000;
  
    // Adjust total value calculation based on these thresholds
    const rewardLevel = Math.floor(rewardValue / silverThreshold); // Integer division
  
    // Determine the final status
    if (rewardLevel >= 2 || (voucherValue + rewardValue) >= 500000) {
      return 'Gold';
    } else if (rewardLevel >= 1 || (voucherValue + rewardValue) >= 300000) {
      return 'Silver';
    } else {
      return 'Bronze';
    }
  };
  
