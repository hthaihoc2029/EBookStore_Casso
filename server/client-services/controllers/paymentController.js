const { postPaymentService } = require("../services/index.js");
const jwt = require("jsonwebtoken");

const postPaymentController = async (req, res) => {
  const result = await postPaymentService();
  if (result) {
    res.status(200).json({ data: result, EC: 0 });
  } else {
    res.status(400).json({ message: "Thanh toán thất bại", EC: -1 });
  }
};

module.exports = { postPaymentController };
