import { ProfileContainer, ProfileImage, ProfileName, ProfileInfo, ProfileStats, ProfileValuesContainer } from "./Profile.style";

const ProfileUser = (props) => {
  const { avatar, username, tag, location, stats } = props.user;
  return (
    <ProfileContainer className="profile">
      <div className="description">
        <ProfileImage src={avatar} alt="User avatar" className="avatar" />
        <ProfileName className="name">{username}</ProfileName>
        <ProfileInfo className="tag">@{tag}</ProfileInfo>
        <ProfileInfo className="location">{location}</ProfileInfo>
      </div>

      <ProfileStats className="stats">
        <ProfileValuesContainer $customRadius="left">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ProfileValuesContainer>

        <ProfileValuesContainer $customRadius="default"> 
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ProfileValuesContainer>

        <ProfileValuesContainer $customRadius="right"> 
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ProfileValuesContainer>
      </ProfileStats>
    </ProfileContainer>
  );
};

export default ProfileUser;
