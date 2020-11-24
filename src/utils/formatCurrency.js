export default formatCurrency = num => {
  return "R$" + Number(num.toFixed(1)).toLocaleString() + " "
}