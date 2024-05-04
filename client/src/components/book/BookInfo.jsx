import React, { useEffect } from "react";
import Header from "../header/Header";
const BookInfo = () => {
  const info = {
    name: "Bí mật của may mắn",
    title:
      "Cuốn sách đem đến cho con người những thông điệp tích cực cho cuộc sống, nuôi dưỡng tâm hồn trong sáng, thuần khiết",
    teacher: "Alex Rovira",
    price: "1.200.000 VND",
    priceBefore: "2.000.000 VND",
    discount: "40%",
    imgTeacher1:
      "https://www.speakersassociates.com/wp-content/uploads/2021/12/Alex-Rovira-e1630488290796.jpg",
    imgTeacher2:
      "https://nuevasformasdetrabajar.es/wp-content/uploads/2021/07/expertos_fernando-trias-de-bes.jpg",
    second_teacher: "Fernando Trías de Bes",
    desc: `     Good Luck - Bí mật của May mắn - là cuốn sách nổi tiếng và độc đáo nhất được Nhà xuất bản Jossey-Bass xuất bản ngày 1/9/2004. Theo các công ty bản quyền châu Âu, Good Luck là cuốn sách đầu tiên trong lịch sử hiện đại bán được bản quyền dịch ra 15 ngôn ngữ trên thế giới trước khi được xuất bản ở bất kỳ quốc gia nào (chỉ được truyền miệng và qua Internet). Cuốn sách được xuất bản đầu tiên ở Tây Ban Nha vào tháng 2/2004. Chỉ trong vòng hai tuần, Good Luck đã vượt lên dẫn đầu danh sách những cuốn sách bán chạy nhất ở Tây Ban Nha, Nhật Bản, Brazil, Mỹ. Hàn Quốc, Đài Loan và đang lan tỏa nhanh chóng sang các quốc gia, châu lục khác những tháng đầu năm 2005. 

    Câu chuyện trong Bí mật của May mắn hấp dẫn như câu chuyện thần thoại với những chân lý thực tế và vĩnh hằng của cuộc sống, mang lại cho người đọc, niềm tin, hy vọng, những trải nghiệm quý báu, đồng thời lý giải tại sao một số người luôn gặp được may mắn trong khi những người khác lại không gặp. Cuốn sách đã mang đến cho độc giả một cái nhìn thú vị và sâu sắc về thay đổi những điều kiện cần thiết để tạo ra và duy trì sự may mắn trong cuộc đời chúng ta. Độc giả khắp mọi nơi đã chú tâm thưởng thức, chuyền tay cho bè bạn và mỗi người đều mua nhiều bản để tặng cho gia đình, người thân, đồng nghiệp như những món quà đặc biệt của sự may mắn.

   Good Luck là một câu chuyện lạ thường hướng đến một bài học vô cùng giá trị về cuộc sống: Sự may mắn không xuất hiện ngẫu nhiên trong hành trình cuộc sống chúng ta; chính chúng ta phải tìm và tạo ra những điều kiện để may mắn tìm đên với mình. Dưới ngòi bút của Alex Rovira và Fernando Trías de Bes - hai nhà tư vấn tâm lý và tiếp thị hàng đầu thế giới đã có công trình nghiêm cứu về thái độ, hành vi con người cũng như ước mong, niềm tin của họ đối với sự may mắn, thành công trong cuộc sống, câu chuyện giản dị này có thể được áp dụng rất rộng rãi cho tất cả mọi người và có khả năng khích lệ một cách độc đáo.

   Bí Mật của May Mắn kể về một câu chuyện đầy cảm động giữa hai ông già, Max và Jim, khi họ tình cờ gặp nhau ở công viên trong tâm sau 50 năm xa cách. Trong khi Max đạt được những thành công và hạnh phúc tràn đầy trong cuộc đời từ sự khởi đầu vô cùng khó khăn, từ hai bàn tay trắng, thì Jim lại không thể làm được điều đó, lúc khởi đầu ông đã được cuộc sống ưu đãi rất nhiều.

    Bí quyết thành công và may mắn của Max nằm ở câu chuyện kỳ diệu mà người ông đã kể lại cho Max từ nhiều năm trước. Câu chuyện đó thật kỳ bí và có sắc thái gợi nhớ đến những nhà giả kim, hiền triết xa xưa, chỉ ra bí mật, cách nắm bắt các cơ hội và gặt hái may mắn, thành công. Trong đoạn kết đầy bất ngờ, Good Luck tạo ra một chu trình khép kín, mang lại sự khích lệ, những hướng dẫn cách thực hiện và thật trọn vẹn với một câu chuyện đầy cuốn hút. Đây thực sự là một món quà đặc biệt, thú vị và đầy cảm hứng mà Alex Rovira và Fernando Trías de Bes đã mang đến cho chúng ta.`,
    feedback: [
      {
        name: "Nguyển Văn An ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltYLVwTw1kABjUAdyoTJC6jXOWLGqrSOFNAZI9vug8Q&s",
        rating: 4,
        date: "1 tuần trước",
        comment: `Mặc dù có thể có những người đọc không tin vào sức mạnh của phong thủy và tâm linh, nhưng "Sách Bí Mật của May Mắn" vẫn đáng để đọc bởi vì nó cung cấp những phương tiện cần thiết để đạt được một tinh thần lạc quan và sự thịnh vượng trong cuộc sống. Đây là một cuốn sách đầy ý nghĩa và sẽ mang lại giá trị cho bất kỳ ai tìm kiếm sự thay đổi tích cực trong cuộc sống của mình.`,
      },
      {
        name: "Trần Văn Bình",
        image:
          "https://cdn2.vectorstock.com/i/1000x1000/91/36/young-people-male-cartoon-design-vector-5989136.jpg",
        rating: 4,
        date: "2 ngày trước",
        comment:
          "Một cuốn sách tuyệt vời mang lại cho độc giả sự cảm hứng và khích lệ trong cuộc sống hàng ngày. Tác giả đã trình bày những bí quyết và phương pháp thực hành để thu hút may mắn và thành công, giúp độc giả tạo ra một tâm trạng tích cực và tư duy lạc quan.",
      },
      {
        name: "Thảo Thi",
        rating: 4,
        image:
          "https://i.pinimg.com/736x/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg",
        date: "1 tuần trước",
        comment:
          "Cuốn sách này không chỉ giới thiệu các nguyên tắc cơ bản của phong thủy và tâm linh mà còn kết hợp với các câu chuyện thành công và bí mật của những người thành đạt, tạo nên một trải nghiệm đọc sách hấp dẫn và thú vị",
      },
    ],
  };

  const bookChapter = [
    "Phần 1: Cuộc gặp gỡ kỳ lạ sau bao năm tháng",
    "Phần 2: Huyền thoại Cây Bốn Lá thần kỳ",
    "Bí mật đầu tiên: Hãy tạo ra những may mắn cho mình",
    "Bí mật thứ hai: Biết theo đuổi may mắn",
    "Bí mật thứ ba: Dám thay đổi để tạo điều kiện tốt hơn",
    "Bí mật thứ tư: Biết chia sẽ, giúp đỡ người khác",
    "Bí mật thứ năm: Đừng trì hoãn-Hãy hành động ngay",
    "Bí mật thứ sáu: Biết tìm kiếm, để ý những điều nhỏ nhưng cần thiết",
    "Bí mật thứ bảy: Hãy dám tin vào điều bạn đã tạo ra",
    "Bí mật thứ tám: May mắn không thể mau bán được",
    "Bí mật thứ chín: Hãy giữ niềm tin",
    "Bí mật thứ mười: Ai cũng có thể gặp may mắn",
    "Bí mật thứ mười một: Cội nguồn của sự may mắn",
    "Bí mật thứ mười hai: Không bao giờ là quá trễ",
  ];

  const descParagraphs = info.desc.split("\n").map((line, index) =>
    index == 0 ? (
      <p key={index}>
        <b>{line}</b>
      </p>
    ) : (
      <p key={index}>{line}</p>
    )
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <>
        <div className="course-single-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="course-single-wrap">
                  <div className="course-single-top">
                    <ul>
                      <li>
                        <a href="#">
                          Home
                          <svg
                            width={7}
                            height={10}
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.25 0.625L5.625 5L1.25 9.375"
                              stroke="#6E7485"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          EBook
                          <svg
                            width={7}
                            height={10}
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.25 0.625L5.625 5L1.25 9.375"
                              stroke="#6E7485"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Self-help EBook
                          <svg
                            width={7}
                            height={10}
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.25 0.625L5.625 5L1.25 9.375"
                              stroke="#6E7485"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">Bí mật của may mắn</a>
                      </li>
                    </ul>
                    <a href="#">
                      <h3 style={{ fontSize: 50, color: "#15AB64" }}>
                        {info.name}
                      </h3>
                    </a>
                    <p>{info.title}</p>
                    <div className="withdrew-money-card-mid">
                      <div className="withdrew-money-card-mid-inner">
                        <a href="#">
                          <img src={info.imgTeacher2} alt="" />
                        </a>
                        <a
                          href="#"
                          className="withdrew-money-card-mid-inner-img-2"
                        >
                          <img src={info.imgTeacher1} alt="" />
                        </a>
                        <div>
                          <h5>Tác giả:</h5>
                          <a
                            className="withdrew-money-card-profile-name"
                            href="#"
                          >
                            {info.teacher}
                          </a>
                          <a
                            className="withdrew-money-card-profile-name withdrew-money-card-profile-name-2"
                            href="#"
                          >
                            {info.second_teacher}
                          </a>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <svg
                          width={18}
                          className="align-self-center"
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <svg
                          width={18}
                          className="align-self-center"
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <svg
                          width={18}
                          className="align-self-center"
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <svg
                          width={18}
                          className="align-self-center"
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <svg
                          width={18}
                          className="align-self-center"
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <p>
                          {" "}
                          4.8 <span> (451,444 Rating)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-singe-main d-flex justify-content-center">
                    <div
                      className="course-video-wrap"
                      style={{
                        alignSelf: "center",
                        width: "300px",
                        height: "483px",
                        backgroundImage:
                          "url(https://images.thuvienpdf.com/003/lBk89DqRZf.webp)",
                      }}
                    ></div>
                  </div>
                  <div className="student-profile-menu single-course">
                    <ul>
                      <li>
                        <a className="active" href="#overview">
                          Tổng quan
                        </a>
                      </li>
                      <li>
                        <a href="#curriculum">Chương trình</a>
                      </li>
                      <li>
                        <a href="#instructor">Gia sư</a>
                      </li>
                      <li>
                        <a href="#review">Đánh giá</a>
                      </li>
                    </ul>
                  </div>
                  <div id="overview" className="overview-section">
                    <div className="overview-description">
                      <div className="course-single-title">
                        <h3>Mô tả</h3>
                      </div>
                      {descParagraphs}
                    </div>
                    <div className="course-learn-section">
                      <div className="course-single-title">
                        <h3>Lợi ích khi mua sách điện tử?</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="checkbox-field">
                            <ul>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Ebook có thể được lưu trữ trên các thiết bị điện
                                tử như điện thoại thông minh, máy tính bảng hoặc
                                máy đọc sách điện tử, giúp bạn dễ dàng mang theo
                                bên mình mọi lúc mọi nơi.
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Với ebook, bạn có thể dễ dàng tìm kiếm các từ
                                khóa, cụm từ hoặc trích dẫn cụ thể.
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Tiết kiệm chi phí: Ebook thường rẻ hơn sách in,
                                có thể tìm thấy nhiều ebook miễn phí hoặc giá rẻ
                                trực tuyến.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="checkbox-field">
                            <ul>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Có thể tùy chỉnh: Hầu hết các trình đọc ebook
                                đều cho phép bạn điều chỉnh phông chữ, kích
                                thước chữ, khoảng cách dòng và độ sáng màn hình
                                để có trải nghiệm đọc thoải mái nhất.
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Tiết kiệm không gian và giúp bạn dễ dàng sắp xếp
                                bộ sưu tập sách của mình.
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#23BD33"
                                    stroke="#23BD33"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Ebook không yêu cầu sử dụng giấy, giúp bảo vệ
                                môi trường.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="curriculum" className="course-curriculum-section">
                    <div className="course-single-title">
                      <h3>Mục lục</h3>
                      <div className="sub-heading-meta">
                        <ul>
                          <li>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 16.25V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H7.29167C7.4269 4.375 7.55848 4.41886 7.66667 4.5L9.83333 6.125C9.94152 6.20614 10.0731 6.25 10.2083 6.25H15.625C15.7908 6.25 15.9497 6.31585 16.0669 6.43306C16.1842 6.55027 16.25 6.70924 16.25 6.875V8.75"
                                stroke="#FF6636"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.5 16.25L4.84285 10.3929C4.88924 10.2769 4.96932 10.1775 5.07275 10.1075C5.17619 10.0374 5.29823 10 5.42315 10H9.18576C9.30916 10 9.42979 9.96348 9.53245 9.89503L11.0925 8.85497C11.1952 8.78652 11.3158 8.75 11.4392 8.75H17.8829C17.9819 8.75 18.0795 8.77353 18.1677 8.81866C18.2558 8.86379 18.332 8.92922 18.3899 9.00956C18.4478 9.0899 18.4858 9.18284 18.5007 9.28074C18.5156 9.37864 18.5071 9.47869 18.4758 9.57264L16.25 16.25H2.5Z"
                                stroke="#FF6636"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            2 Phần
                          </li>
                          <li>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                stroke="#564FFD"
                                strokeWidth="1.3"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M12.5 10L8.75 7.5V12.5L12.5 10Z"
                                stroke="#564FFD"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            12 Bí mật
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="accordion-wrap-faq lecture-wrap"
                      id="faq_init3"
                    >
                      {bookChapter &&
                        bookChapter.length > 0 &&
                        bookChapter.map((item, index) => {
                          return (
                            <div className="accordion__list2">
                              <div className="link">
                                <div className="accordion-header-content">
                                  <svg
                                    width={14}
                                    height={8}
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.8332 1.08333L6.99984 6.91667L1.1665 1.08333"
                                      stroke="#6E7485"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {item}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div id="instructor" className="course-instructor-section">
                    <div className="course-single-title">
                      <h3>Tác giả (02)</h3>
                    </div>
                    <div className="profile-wrap course-instructor">
                      <div className="profile-left">
                        <div className="profile-thumb">
                          <img src={info.imgTeacher1} alt="" />
                        </div>
                        <div className="profile-data">
                          <h3>{info.teacher}</h3>
                          <p>
                            Nhà văn, Doanh nhân, Nhà kinh tế học, Giáo sư giảng
                            viên quốc tế
                          </p>
                          <div className="profile-review">
                            <ul>
                              <li>
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <span>4.9</span>
                                (4,633 review)
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                  />
                                  <path
                                    d="M14.5698 5.43158C15.2403 5.24266 15.9436 5.19962 16.6321 5.30537C17.3207 5.41111 17.9786 5.66318 18.5615 6.04459C19.1444 6.42601 19.6389 6.92791 20.0115 7.5165C20.3841 8.10509 20.6263 8.7667 20.7217 9.45676C20.8171 10.1468 20.7635 10.8493 20.5645 11.5169C20.3655 12.1845 20.0258 12.8018 19.5682 13.327C19.1107 13.8523 18.5458 14.2734 17.9118 14.562C17.2777 14.8505 16.5892 14.9999 15.8926 15"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.49951 18.5059C2.26089 17.4229 3.27166 16.539 4.4465 15.9288C5.62133 15.3186 6.92574 15.0001 8.24959 15C9.57344 14.9999 10.8779 15.3184 12.0528 15.9285C13.2276 16.5386 14.2385 17.4225 14.9999 18.5054"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span>55</span>
                                tuổi
                              </li>
                            </ul>
                          </div>
                          <p>
                            Alex Rovira sinh năm 1969 tại Barcelona, Tây Ban
                            Nha. Tốt nghiệp MBA tại ESADE, Alex trở thành một
                            nhà đào tạo tại các hội thảo về Đổi mới, Quản lý
                            Thay đổi, Quản lý Nhân tài, Quản lý Con người và Tư
                            duy Sáng tạo cho các lãnh đạo cấp cao của các công
                            ty hay các tổ chức phi chính phủ. Sách của ông xuất
                            bản nhanh chóng có mặt trong top sách bán chạy nhất
                            và được dịch ra nhiều ngôn ngữ, bán hàng triệu bản
                            trên thế giới.... <a href="#">Read more</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="profile-wrap course-instructor">
                      <div className="profile-left">
                        <div className="profile-thumb">
                          <img src={info.imgTeacher2} alt="" />
                        </div>
                        <div className="profile-data">
                          <h3>{info.second_teacher}</h3>
                          <p>Nhà văn, Doanh nhân</p>
                          <div className="profile-review">
                            <ul>
                              <li>
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <span>4.8</span>
                                (1,633 review)
                              </li>
                              <li>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                  />
                                  <path
                                    d="M14.5698 5.43158C15.2403 5.24266 15.9436 5.19962 16.6321 5.30537C17.3207 5.41111 17.9786 5.66318 18.5615 6.04459C19.1444 6.42601 19.6389 6.92791 20.0115 7.5165C20.3841 8.10509 20.6263 8.7667 20.7217 9.45676C20.8171 10.1468 20.7635 10.8493 20.5645 11.5169C20.3655 12.1845 20.0258 12.8018 19.5682 13.327C19.1107 13.8523 18.5458 14.2734 17.9118 14.562C17.2777 14.8505 16.5892 14.9999 15.8926 15"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.49951 18.5059C2.26089 17.4229 3.27166 16.539 4.4465 15.9288C5.62133 15.3186 6.92574 15.0001 8.24959 15C9.57344 14.9999 10.8779 15.3184 12.0528 15.9285C13.2276 16.5386 14.2385 17.4225 14.9999 18.5054"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
                                    stroke="#564FFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span>57</span>
                                tuổi
                              </li>
                            </ul>
                          </div>
                          <p>
                            Đồng sáng lập công ty Salvetti & Llombart, với 40
                            cộng sự hàng đầu ở Barcelona, Tây Ban Nha - chuyên
                            nghiên cứu thị trường, tư vấn cho các tập đoàn đa
                            quốc gia khổng lồ. Alex Rovira là tác giả cuốn The
                            Inner Compass và Fernando Trías de Bes là đồng tác
                            giả cuốn Lateral Marketing với chuyên gia tiếp thị
                            hàng đầu thế giới - Tiến sĩ Philip Kotler ...{" "}
                            <a href="#">READ MORE</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-ratting-section">
                    <div className="course-single-title">
                      <h3>Đánh giá tổng quan</h3>
                    </div>
                    <div className="rating-area">
                      <div className="rating-box">
                        <h4>4.8</h4>
                        <ul className="total-star list-inline">
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={19}
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                fill="#FD8E1F"
                              />
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={19}
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                fill="#FD8E1F"
                              />
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={19}
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                fill="#FD8E1F"
                              />
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={19}
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                fill="#FD8E1F"
                              />
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={19}
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                fill="#FD8E1F"
                              />
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34568L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34568C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901V14.901Z"
                                stroke="#FD8E1F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <mask
                                id="mask0_2450:72399"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={10}
                                height={21}
                              >
                                <path d="M10 0.5H0V20.5H10V0.5Z" fill="white" />
                              </mask>
                              <g mask="url(#mask0_2450:72399)">
                                <path
                                  d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                  fill="#FD8E1F"
                                />
                              </g>
                            </svg>
                          </li>
                        </ul>
                        <p>Đánh giá EBook</p>
                      </div>
                      <div className="rating-percentage">
                        <div className="percentage-line">
                          <ul className="total-star total-star-sm list-inline">
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="rating">5 Star Rating</div>
                          <div className="rating-area-percentage">
                            <div className="main-percentage-bg" />
                            <div className="main-percentage four" />
                          </div>
                          <div className="percentage-text">
                            <span>75%</span>
                          </div>
                        </div>
                        <div className="percentage-line">
                          <ul className="total-star total-star-sm list-inline">
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="rating">4 Star Rating</div>
                          <div className="rating-area-percentage">
                            <div className="main-percentage-bg" />
                            <div className="main-percentage four" />
                          </div>
                          <div className="percentage-text">
                            <span>21%</span>
                          </div>
                        </div>
                        <div className="percentage-line">
                          <ul className="total-star total-star-sm list-inline">
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="rating">3 Star Rating</div>
                          <div className="rating-area-percentage">
                            <div className="main-percentage-bg" />
                            <div className="main-percentage three" />
                          </div>
                          <div className="percentage-text">
                            <span>3%</span>
                          </div>
                        </div>
                        <div className="percentage-line">
                          <ul className="total-star total-star-sm list-inline">
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="rating">2 Star Rating</div>
                          <div className="rating-area-percentage">
                            <div className="main-percentage-bg" />
                            <div className="main-percentage four" />
                          </div>
                          <div className="percentage-text">
                            <span>2%</span>
                          </div>
                        </div>
                        <div className="percentage-line">
                          <ul className="total-star total-star-sm list-inline">
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="list-inline-item">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                  stroke="#FD8E1F"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="rating">1 Star Rating</div>
                          <div className="rating-area-percentage">
                            <div className="main-percentage-bg" />
                            <div className="main-percentage one" />
                          </div>
                          <div className="percentage-text">
                            <span>2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="review" className="student-feedback-section">
                    <div className="course-single-title">
                      <h3>Review</h3>
                      <div className="select-box ratting">
                        <select
                          className="custom-select sources"
                          title="5 Star Rating"
                        >
                          <option>4 Star Rating</option>
                          <option>3 Star Rating</option>
                          <option>2 Star Rating</option>
                          <option>1 Star Rating</option>
                        </select>
                      </div>
                    </div>
                    <div className="review-wrap">
                      {info.feedback &&
                        info.feedback.length > 0 &&
                        info.feedback.map((item, index) => {
                          return (
                            <div className="review-item">
                              <div className="review-thumb">
                                <img src={item.image} alt="" />
                              </div>
                              <div className="review-data">
                                <h5>
                                  {item.name} <span> {item.date}</span>
                                </h5>
                                <div className="review">
                                  <ul>
                                    <li>
                                      <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                          fill="#FD8E1F"
                                        />
                                      </svg>
                                    </li>
                                    <li>
                                      <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                          fill="#FD8E1F"
                                        />
                                      </svg>
                                    </li>
                                    <li>
                                      <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                          fill="#FD8E1F"
                                        />
                                      </svg>
                                    </li>
                                    <li>
                                      <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                          fill="#FD8E1F"
                                        />
                                      </svg>
                                    </li>
                                    <li>
                                      <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                          fill="#FD8E1F"
                                        />
                                      </svg>
                                    </li>
                                  </ul>
                                </div>
                                <p>{item.comment}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <a
                      className="button button--md button-p-s button-i--r"
                      href="#"
                    >
                      Load more
                      <span>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3V6"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.9"
                            d="M18.364 5.63574L16.2427 7.75706"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.8"
                            d="M21 12H18"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.7"
                            d="M18.364 18.3635L16.2427 16.2422"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.6"
                            d="M12 21V18"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.5"
                            d="M5.63623 18.3635L7.75755 16.2422"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M3 12H6"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.3"
                            d="M5.63623 5.63574L7.75755 7.75706"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="course-right-sidebar">
                  <div className="course-right-sidebar-row">
                    <div className="course-right-sidebar-price">
                      <div className="price-time">
                        <h4>
                          {info.price} <del>{info.priceBefore}</del>
                        </h4>
                        <h6>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 5.625V10H14.375"
                              stroke="#E34444"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
                              stroke="#E34444"
                              strokeWidth="1.3"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M15.3032 2.04492L17.9549 4.69657"
                              stroke="#E34444"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.04492 4.69657L4.69657 2.04492"
                              stroke="#E34444"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          2 days left at this price!
                        </h6>
                      </div>
                      <div className="price-dicount">
                        <a href="#">-{info.discount}</a>
                      </div>
                    </div>
                  </div>
                  <div className="course-right-sidebar-row">
                    <div className="course-detalis">
                      <ul>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M12 6.75V12H17.25"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Thời gian lớp học
                            <span>2 tháng</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 20V10"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18 20V4"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6 20V16"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Cấp độ
                            <span>Tiêu học</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M14.5698 5.43173C15.2403 5.24281 15.9436 5.19978 16.6321 5.30552C17.3207 5.41126 17.9786 5.66333 18.5615 6.04475C19.1444 6.42616 19.6389 6.92807 20.0115 7.51666C20.3841 8.10525 20.6263 8.76685 20.7217 9.45692C20.8171 10.147 20.7635 10.8495 20.5645 11.5171C20.3655 12.1847 20.0258 12.8019 19.5682 13.3272C19.1107 13.8524 18.5458 14.2735 17.9118 14.5621C17.2777 14.8507 16.5892 15.0001 15.8926 15.0001"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1.49951 18.5059C2.26089 17.4229 3.27166 16.539 4.4465 15.9288C5.62133 15.3186 6.92574 15.0001 8.24959 15C9.57344 14.9999 10.8779 15.3184 12.0528 15.9285C13.2276 16.5386 14.2385 17.4225 14.9999 18.5054"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Số học sinh đã đăng ký
                            <span>618</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 7.5H13.5"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 10.5H13.5"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.5 0.75V17.25"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Ngôn ngữ
                            <span>Tiếng Việt</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-right-sidebar-row">
                    <div className="course-purchase-btn">
                      <a className="button button--lg" href="#">
                        Add to Cart
                      </a>
                      <a
                        className="button button--lg button-p-s"
                        href="/parents/payment"
                      >
                        Buy now
                      </a>
                      <div className="add-to-wishlist-wrap">
                        <a className="add-to-wishlist" href="#">
                          Add to wishlist
                        </a>
                        <a className="add-to-wishlist" href="gift-course.html">
                          Gift Course
                        </a>
                      </div>
                      <p>
                        <span>Note:</span> all course have 30-days money-back
                        guarantee
                      </p>
                    </div>
                  </div>
                  <div className="course-right-sidebar-row">
                    <div className="course-includes-wrap">
                      <h4 className="course-sidebar-title">
                        This course includes:
                      </h4>
                      <ul>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M12 6.75V12H17.25"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Lifetime access
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2.25V4.5"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 19.5V21.75"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.25 8.25C17.25 7.75754 17.153 7.26991 16.9645 6.81494C16.7761 6.35997 16.4999 5.94657 16.1517 5.59835C15.8034 5.25013 15.39 4.97391 14.9351 4.78545C14.4801 4.597 13.9925 4.5 13.5 4.5H10.125C9.13044 4.5 8.17661 4.89509 7.47335 5.59835C6.77009 6.30161 6.375 7.25544 6.375 8.25C6.375 9.24456 6.77009 10.1984 7.47335 10.9017C8.17661 11.6049 9.13044 12 10.125 12H14.25C15.2446 12 16.1984 12.3951 16.9017 13.0983C17.6049 13.8016 18 14.7554 18 15.75C18 16.7446 17.6049 17.6984 16.9017 18.4017C16.1984 19.1049 15.2446 19.5 14.25 19.5H9.75C8.75544 19.5 7.80161 19.1049 7.09835 18.4017C6.39509 17.6984 6 16.7446 6 15.75"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            30-days money-back guarantee
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 7.5H13.5"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 10.5H13.5"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.5 0.75V17.25"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Free exercises file &amp; downloadable resources
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.25 5.25V10.4153C5.25 14.1372 8.227 17.2222 11.9488 17.2498C12.8395 17.2566 13.7228 17.087 14.5476 16.7508C15.3725 16.4146 16.1226 15.9185 16.7548 15.291C17.3871 14.6636 17.8889 13.9172 18.2313 13.0949C18.5737 12.2727 18.75 11.3907 18.75 10.5V5.25C18.75 5.05109 18.671 4.86032 18.5303 4.71967C18.3897 4.57902 18.1989 4.5 18 4.5H6C5.80109 4.5 5.61032 4.57902 5.46967 4.71967C5.32902 4.86032 5.25 5.05109 5.25 5.25Z"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 21H15"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 17.25V21"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.5825 12H19.4998C20.2955 12 21.0585 11.6839 21.6211 11.1213C22.1837 10.5587 22.4998 9.79565 22.4998 9V7.5C22.4998 7.30109 22.4208 7.11032 22.2801 6.96967C22.1395 6.82902 21.9487 6.75 21.7498 6.75H18.7498"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.43432 12H4.48828C3.69263 12 2.92957 11.6839 2.36696 11.1213C1.80435 10.5587 1.48828 9.79565 1.48828 9V7.5C1.48828 7.30109 1.5673 7.11032 1.70795 6.96967C1.8486 6.82902 2.03937 6.75 2.23828 6.75H5.23828"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Shareable certificate of completion
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.5 18L19.5 18C20.3284 18 21 17.3284 21 16.5V6C21 5.17157 20.3284 4.5 19.5 4.5L4.5 4.5C3.67157 4.5 3 5.17157 3 6V16.5C3 17.3284 3.67157 18 4.5 18Z"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 21H9"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Access on mobile , tablet and TV
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 12.001H15"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 15.001H15"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.25 3.75098H18.75C18.9489 3.75098 19.1397 3.82999 19.2803 3.97065C19.421 4.1113 19.5 4.30206 19.5 4.50098V18.751C19.5 19.3477 19.2629 19.92 18.841 20.342C18.419 20.7639 17.8467 21.001 17.25 21.001H6.75C6.15326 21.001 5.58097 20.7639 5.15901 20.342C4.73705 19.92 4.5 19.3477 4.5 18.751V4.50098C4.5 4.30206 4.57902 4.1113 4.71967 3.97065C4.86032 3.82999 5.05109 3.75098 5.25 3.75098Z"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 2.25098V5.25098"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 2.25098V5.25098"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.5 2.25098V5.25098"
                                stroke="#A1A5B3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            English subtitles
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 16.5L12 21.75L21 16.5"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 12L12 17.25L21 12"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            100% online course
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-right-sidebar-row">
                    <div className="course-share-wrap">
                      <h4 className="course-sidebar-title">
                        Share this course:
                      </h4>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <a href="#">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.75 15.749H20.25V3.74902H8.25V8.24902"
                                  stroke="#4E5566"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.75 8.24902H3.75V20.249H15.75V8.24902Z"
                                  stroke="#4E5566"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Copy link
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                width={11}
                                height={20}
                                viewBox="0 0 11 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.33076 3.32083H10.1566V0.140833C9.84159 0.0975 8.75826 0 7.49659 0C4.86409 0 3.06076 1.65583 3.06076 4.69917V7.5H0.155762V11.055H3.06076V20H6.62243V11.0558H9.40993L9.85243 7.50083H6.62159V5.05167C6.62243 4.02417 6.89909 3.32083 8.33076 3.32083Z"
                                  fill="#4E5566"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0)">
                                  <path
                                    d="M19.9799 5.88005C19.9331 4.81738 19.7612 4.0868 19.5151 3.45374C19.2611 2.78176 18.8704 2.18014 18.3585 1.68002C17.8584 1.1721 17.2528 0.777435 16.5886 0.527447C15.9519 0.281274 15.2251 0.109427 14.1625 0.0625732C13.0919 0.0117516 12.752 0 10.0366 0C7.32124 0 6.98136 0.0117516 5.91472 0.0586052C4.85204 0.105459 4.12146 0.277459 3.48855 0.523479C2.81643 0.777435 2.21481 1.16814 1.71468 1.68002C1.20677 2.18014 0.812254 2.78573 0.562114 3.44992C0.315942 4.0868 0.144095 4.81341 0.0972411 5.87609C0.0464195 6.9467 0.034668 7.28658 0.034668 10.002C0.034668 12.7173 0.0464195 13.0572 0.0932731 14.1239C0.140127 15.1865 0.312127 15.9171 0.558299 16.5502C0.812254 17.2221 1.20677 17.8238 1.71468 18.3239C2.21481 18.8318 2.8204 19.2265 3.48459 19.4765C4.12146 19.7226 4.84807 19.8945 5.9109 19.9413C6.97739 19.9883 7.31742 19.9999 10.0328 19.9999C12.7482 19.9999 13.088 19.9883 14.1547 19.9413C15.2174 19.8945 15.9479 19.7226 16.5808 19.4765C17.925 18.9568 18.9876 17.8941 19.5073 16.5502C19.7533 15.9133 19.9253 15.1865 19.9722 14.1239C20.019 13.0572 20.0308 12.7173 20.0308 10.002C20.0308 7.28658 20.0268 6.9467 19.9799 5.88005ZM18.1789 14.0457C18.1359 15.0225 17.9718 15.5499 17.8351 15.9015C17.499 16.7728 16.8075 17.4643 15.9362 17.8004C15.5846 17.9372 15.0533 18.1012 14.0804 18.1441C13.0255 18.1911 12.7091 18.2027 10.0406 18.2027C7.37206 18.2027 7.05172 18.1911 6.00064 18.1441C5.02389 18.1012 4.49644 17.9372 4.14481 17.8004C3.71122 17.6402 3.31656 17.3862 2.99621 17.0541C2.66412 16.7298 2.41016 16.3391 2.24991 15.9055C2.11317 15.5539 1.9491 15.0225 1.90622 14.0497C1.85921 12.9948 1.84761 12.6783 1.84761 10.0097C1.84761 7.34122 1.85921 7.02087 1.90622 5.96995C1.9491 4.99319 2.11317 4.46575 2.24991 4.11412C2.41016 3.68038 2.66412 3.28586 3.00018 2.96536C3.32434 2.63327 3.71504 2.37931 4.14878 2.21921C4.50041 2.08247 5.03182 1.9184 6.00461 1.87537C7.0595 1.82851 7.37603 1.81676 10.0444 1.81676C12.7169 1.81676 13.0333 1.82851 14.0843 1.87537C15.0611 1.9184 15.5885 2.08247 15.9402 2.21921C16.3737 2.37931 16.7684 2.63327 17.0888 2.96536C17.4209 3.28967 17.6748 3.68038 17.8351 4.11412C17.9718 4.46575 18.1359 4.99701 18.1789 5.96995C18.2258 7.02484 18.2375 7.34122 18.2375 10.0097C18.2375 12.6783 18.2258 12.9908 18.1789 14.0457Z"
                                    fill="#4E5566"
                                  />
                                  <path
                                    d="M10.0362 4.86423C7.19976 4.86423 4.89844 7.1654 4.89844 10.002C4.89844 12.8385 7.19976 15.1397 10.0362 15.1397C12.8727 15.1397 15.1739 12.8385 15.1739 10.002C15.1739 7.1654 12.8727 4.86423 10.0362 4.86423ZM10.0362 13.3347C8.19605 13.3347 6.70345 11.8422 6.70345 10.002C6.70345 8.16169 8.19605 6.66924 10.0362 6.66924C11.8764 6.66924 13.3689 8.16169 13.3689 10.002C13.3689 11.8422 11.8764 13.3347 10.0362 13.3347Z"
                                    fill="#4E5566"
                                  />
                                  <path
                                    d="M16.5772 4.6611C16.5772 5.32346 16.0402 5.86052 15.3777 5.86052C14.7153 5.86052 14.1782 5.32346 14.1782 4.6611C14.1782 3.99858 14.7153 3.46167 15.3777 3.46167C16.0402 3.46167 16.5772 3.99858 16.5772 4.6611Z"
                                    fill="#4E5566"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect width={20} height={20} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.6324 3.34007C14.8783 1.58386 12.5454 0.616264 10.0601 0.615234C4.93885 0.615234 0.770912 4.78306 0.768852 9.90566C0.768166 11.5432 1.19595 13.1417 2.00905 14.5507L0.690918 19.3652L5.61634 18.0732C6.97349 18.8135 8.5014 19.2036 10.0563 19.2041H10.0602C15.1809 19.2041 19.3492 15.0359 19.3512 9.9131C19.3522 7.43042 18.3867 5.09617 16.6324 3.34007ZM10.0601 17.635H10.0569C8.67123 17.6344 7.31224 17.262 6.1264 16.5586L5.84454 16.3911L2.92171 17.1579L3.70186 14.3082L3.51818 14.016C2.74513 12.7865 2.33692 11.3654 2.33761 9.90623C2.33921 5.64846 5.80357 2.18445 10.0632 2.18445C12.1259 2.18513 14.0648 2.98943 15.5228 4.44912C16.9808 5.90881 17.7832 7.84904 17.7826 9.91253C17.7807 14.1706 14.3166 17.635 10.0601 17.635ZM14.296 11.8513C14.0639 11.735 12.9225 11.1736 12.7096 11.096C12.497 11.0185 12.342 10.9799 12.1874 11.2122C12.0326 11.4445 11.5878 11.9675 11.4523 12.1224C11.3168 12.2773 11.1815 12.2968 10.9493 12.1805C10.7171 12.0644 9.9691 11.8191 9.0823 11.0282C8.39222 10.4126 7.92633 9.6524 7.79083 9.42009C7.65556 9.18754 7.78969 9.07402 7.89268 8.9463C8.144 8.63422 8.39565 8.30704 8.47301 8.1522C8.55049 7.99724 8.51169 7.86163 8.45356 7.74547C8.39565 7.62932 7.93137 6.48662 7.73796 6.02165C7.54936 5.56915 7.35813 5.63026 7.21554 5.62317C7.08027 5.61642 6.92543 5.61504 6.77059 5.61504C6.61587 5.61504 6.36433 5.67306 6.15147 5.90561C5.93872 6.13804 5.33905 6.6996 5.33905 7.84229C5.33905 8.98498 6.17092 10.0889 6.28696 10.2438C6.40301 10.3988 7.92404 12.7437 10.2528 13.7492C10.8067 13.9886 11.2391 14.1313 11.5763 14.2383C12.1325 14.415 12.6384 14.39 13.0385 14.3303C13.4846 14.2636 14.4119 13.7686 14.6056 13.2264C14.799 12.6841 14.799 12.2193 14.7408 12.1224C14.6829 12.0256 14.5281 11.9675 14.296 11.8513Z"
                                  fill="#4E5566"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.2422 10.5859H12.3438C11.3745 10.5859 10.5859 11.3745 10.5859 12.3438C10.5859 13.313 11.3745 14.1016 12.3438 14.1016H18.2422C19.2114 14.1016 20 13.313 20 12.3438C20 11.3745 19.2114 10.5859 18.2422 10.5859Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M7.65625 5.89844H1.75781C0.788555 5.89844 0 6.68699 0 7.65625C0 8.62551 0.788555 9.41406 1.75781 9.41406H7.65625C8.62551 9.41406 9.41406 8.62551 9.41406 7.65625C9.41406 6.68699 8.62551 5.89844 7.65625 5.89844Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M12.3438 9.41406C13.313 9.41406 14.1016 8.62551 14.1016 7.65625V1.75781C14.1016 0.788555 13.313 0 12.3438 0C11.3745 0 10.5859 0.788555 10.5859 1.75781V7.65625C10.5859 8.62551 11.3745 9.41406 12.3438 9.41406Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M7.65625 10.5859C6.68699 10.5859 5.89844 11.3745 5.89844 12.3438V18.2422C5.89844 19.2114 6.68699 20 7.65625 20C8.62551 20 9.41406 19.2114 9.41406 18.2422V12.3438C9.41406 11.3745 8.62551 10.5859 7.65625 10.5859Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M15.8984 9.41406H17.6562C18.9486 9.41406 20 8.36266 20 7.07031C20 5.77797 18.9486 4.72656 17.6562 4.72656C16.3639 4.72656 15.3125 5.77797 15.3125 7.07031V8.82812C15.3125 9.15172 15.5748 9.41406 15.8984 9.41406Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M4.10156 10.5859H2.34375C1.05141 10.5859 0 11.6373 0 12.9297C0 14.222 1.05141 15.2734 2.34375 15.2734C3.63609 15.2734 4.6875 14.222 4.6875 12.9297V11.1719C4.6875 10.8483 4.42516 10.5859 4.10156 10.5859Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M7.07031 0C5.77797 0 4.72656 1.05141 4.72656 2.34375C4.72656 3.63609 5.77797 4.6875 7.07031 4.6875H8.82812C9.15172 4.6875 9.41406 4.42516 9.41406 4.10156V2.34375C9.41406 1.05141 8.36266 0 7.07031 0Z"
                                  fill="#4E5566"
                                />
                                <path
                                  d="M12.9297 15.3125H11.1719C10.8483 15.3125 10.5859 15.5748 10.5859 15.8984V17.6562C10.5859 18.9486 11.6373 20 12.9297 20C14.222 20 15.2734 18.9486 15.2734 17.6562C15.2734 16.3639 14.222 15.3125 12.9297 15.3125Z"
                                  fill="#4E5566"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End course-section */}
      </>
    </>
  );
};

export default BookInfo;
