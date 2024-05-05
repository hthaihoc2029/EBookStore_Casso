const db = require("../configs/database.js");
const PAYOS = require("@payos/node");
const generateRandomOrder = require("../utils/randomOrder.js");

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
    orderCode: generateRandomOrder(),
    cancelUrl: `${process.env.FRONTEND_URL}/payment`,
    returnUrl: `${process.env.FRONTEND_URL}//history`,
  });
  const url = paymentLink.checkoutUrl;
  console.log(url);
  return url;
};

module.exports = {
  postPaymentService,
};
