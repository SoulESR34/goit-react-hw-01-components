import { FriendContainer, FriendsList, FriendStatus } from "./FriendList.style";
import PropTypes from 'prop-types'

const FriendList = (props) => {
  return (
    <section>
      <FriendsList className="friend-list">
        {props.friends.map((friend)=> 
            <FriendContainer className="item" key={friend.id}>
                <FriendStatus className="status" $status={friend.isOnline}></FriendStatus>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </FriendContainer>
        )}
      </FriendsList>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
