const { PaymentForPost } = require("../controllers/paymentController");
const router = require("express").Router();
router.post("/payment", PaymentForPost);

const clientAPIRouter = router;
module.exports = clientAPIRouter;
