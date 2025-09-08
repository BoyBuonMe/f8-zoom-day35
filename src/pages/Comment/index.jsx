import React from "react";
import styles from "./Comment.module.scss";
import NAVBAR_HEIGHT from "../../components/Navigation";

function InputForm() {
  const [comments, setComments] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    body: "",
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
        console.log(comments);
      });
  }, []);

  const fakeTimes = [
    "2 phút trước",
    "10 phút trước",
    "1 giờ trước",
    "5 giờ trước",
    "1 ngày trước",
    "3 ngày trước",
    "1 tuần trước",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.body) {
      const newComment = {
        ...formData,
        id: Date.now(),
      };
      setComments([newComment, ...comments]);
      setFormData({ name: "", email: "", body: "" });
    }
  };

  return (
    <div style={{height: "100vh", paddingTop: NAVBAR_HEIGHT}}>
      <div className={styles.commentForm}>
        <h2>Thêm Bình Luận Mới</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tên:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nội dung:
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Gửi bình luận</button>
        </form>
      </div>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <div className={styles.commentCard} key={comment.id}>
              <img
                className="avatar"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  comment.name
                )}&background=random`}
                alt={comment.name}
              />
              <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentName}>{comment.name}</span>
                  <span className={styles.commentTime}>
                    {fakeTimes[Math.floor(Math.random() * fakeTimes.length)]}
                  </span>
                </div>
                <span className={styles.commentEmail}>{comment.email}</span>
                <p className={styles.commentBody}>{comment.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InputForm;
