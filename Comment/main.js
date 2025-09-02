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
    <>
      <div className="comment-form">
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

      <div className="comment-list">
        {comments.map((comment) => {
          return (
            <div className="comment-card" key={comment.id}>
              <img
                className="avatar"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  comment.name
                )}&background=random`}
                alt={comment.name}
              />
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-name">{comment.name}</span>
                  <span className="comment-time">
                    {fakeTimes[Math.floor(Math.random() * fakeTimes.length)]}
                  </span>
                </div>
                <span className="comment-email">{comment.email}</span>
                <p className="comment-body">{comment.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const inner = (
  <>
    <InputForm />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(inner);
