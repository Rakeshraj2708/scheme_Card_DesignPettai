export const getCurrentTab = (state) => {
  const totalValue = Number(state.voucherValue) + Number(state.rewardProductValue);
    if (totalValue <= 150000) {
        return 'Bronze'
    } else if(totalValue > 150000 && totalValue <= 250000) {
        return 'Silver'
    } else {
        return'Gold'
    }
};
