const formatCurrency = num => {
  return "R$" + Number(num.toFixed(2)).toLocaleString() + " "
}

export default formatCurrency;