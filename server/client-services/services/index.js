const db = require("../configs/database.js");
const PAYOS = require("@payos/node");

const PaymentPostService = async () => {
  const payos = new PAYOS();
  const payment = await payos.createPaymentLink({});
  const url = payment.checkoutUrl;
  return url;
};

module.exports = {
  PaymentPostService,
};
