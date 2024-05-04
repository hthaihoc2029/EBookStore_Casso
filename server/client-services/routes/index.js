const {
  Login,
  SignUp,
  PaymentForPost,
  GetTutor,
} = require("../controllers/paymentController");
const router = require("express").Router();
router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/payment", PaymentForPost);

const parentsAPIRouter = router;
module.exports = parentsAPIRouter;
