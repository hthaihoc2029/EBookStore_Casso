const db = require("../configs/database.js");
const PAYOS = require("@payos/node");

const postPaymentService = async () => {
  const payos = new PAYOS(
    process.env.CLIENT_ID,
    process.env.API_KEY,
    process.env.CHECKSUM_KEY
  );

  console.log(payos);

  const paymentLink = await payos.createPaymentLink({
    amount: 10000,
    currency: "VND",
    description: "Thanh toan Ebook",
    orderCode: 15,
    cancelUrl: "http://localhost:5173/payment",
    returnUrl: "http://localhost:5173/history",
  });
  const url = paymentLink.checkoutUrl;
  return url;
};

module.exports = {
  postPaymentService,
};
