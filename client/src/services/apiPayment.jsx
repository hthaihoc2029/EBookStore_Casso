import instance from "../utils/axiosCustomize";

const postLogin = (username, password) => {};
const postRegister = (username, password, CCCD) => {};

const postPayment = () => {
  console.log("====================================");
  console.log(`${process.env.BACKEND_URL}/api/client/payment`);
  console.log("====================================");
  return instance.post(`${process.env.BACKEND_URL}/api/client/payment`);
};

export { postPayment, postLogin, postRegister };
