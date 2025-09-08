import React from "react";
import styles from "./Profile.module.scss";

function Profile() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => {
        // console.log(user);
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className={styles.pageTitle}>Profile Card</h1>
      {loading ? (
        <div className={styles.loading}>Loading</div>
      ) : (
        <div className={styles.userCard}>
          <h2>{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
          </p>
          <p>
            <strong>Address:</strong> {user.address?.street},{" "}
            {user.address?.city}
          </p>
        </div>
      )}
    </>
  );
}

export default Profile;