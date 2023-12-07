import { ProfileContainer, ProfileImage, ProfileName, ProfileInfo, ProfileStats, ProfileValuesContainer } from "./Profile.style";
import PropTypes from 'prop-types'

const ProfileUser = (props) => {
  return (
    <ProfileContainer className="profile">
      <div className="description">
        <ProfileImage src={props.user.avatar} alt="User avatar" className="avatar" />
        <ProfileName className="name">{props.user.username}</ProfileName>
        <ProfileInfo className="tag">@{props.user.tag}</ProfileInfo>
        <ProfileInfo className="location">{props.user.location}</ProfileInfo>
      </div>

      <ProfileStats className="stats">
        <ProfileValuesContainer $customRadius="left">
          <span className="label">Followers</span>
          <span className="quantity">{props.user.stats.followers}</span>
        </ProfileValuesContainer>

        <ProfileValuesContainer $customRadius="default"> 
          <span className="label">Views</span>
          <span className="quantity">{props.user.stats.views}</span>
        </ProfileValuesContainer>

        <ProfileValuesContainer $customRadius="right"> 
          <span className="label">Likes</span>
          <span className="quantity">{props.user.stats.likes}</span>
        </ProfileValuesContainer>
      </ProfileStats>
    </ProfileContainer>
  );
};

ProfileUser.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProfileUser;
