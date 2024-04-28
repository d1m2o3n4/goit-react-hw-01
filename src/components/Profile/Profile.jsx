import css from "./Profile.module.css";
const Profile = ({ userData }) => {
  const { username, tag, location, stats, avatar } = userData;
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.userName}>{username}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>

      <ul className={css.userList}>
        <li className={css.userItem}>
          <span>Followers</span>
          <span className={css.counter}>{stats.followers}</span>
        </li>
        <li className={css.userItem}>
          <span>Views</span>
          <span className={css.counter}>{stats.views}</span>
        </li>
        <li className={css.userItem}>
          <span>Likes</span>
          <span className={css.counter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
