import instance from "../utils/axiosCustomize";

const postLogin = (username, password) => {};
const postRegister = (username, password, CCCD) => {};

const postPayment = () => {
  return instance.post("http://localhost:8080/api/client/payment");
};

export { postPayment, postLogin, postRegister };
