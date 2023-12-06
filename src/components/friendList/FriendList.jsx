import { FriendContainer, FriendsList, FriendStatus } from "./FriendList.style";

const FriendList = (props) => {
  const friends = props.friends;
  return (
    <section>
      <FriendsList className="friend-list">
        {friends.map((friend)=> 
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

export default FriendList;
