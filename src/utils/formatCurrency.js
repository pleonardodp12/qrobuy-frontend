const formatCurrency = (num) => {
  if (num != undefined) {
    return "R$" + Number(num.toFixed(2)).toLocaleString() + " ";
  }
};

export default formatCurrency;
