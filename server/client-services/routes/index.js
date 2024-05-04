const { postPaymentController } = require("../controllers/paymentController");
const router = require("express").Router();
router.post("/payment", postPaymentController);

const clientAPIRouter = router;
module.exports = clientAPIRouter;
