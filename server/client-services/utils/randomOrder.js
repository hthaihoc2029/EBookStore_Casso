module.exports = generateRandomId = () => {
  // Lấy thời gian hiện tại dưới dạng timestamp
  const timestamp = new Date().getTime();

  // Tạo một số ngẫu nhiên từ 0 đến 99999
  const random = Math.floor(Math.random() * 1000);

  // Kết hợp timestamp và số ngẫu nhiên để tạo ID
  const id = (timestamp % 100000) + random;

  return id;
};
