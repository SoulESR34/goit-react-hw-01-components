import userData from "./database/user.json";
import data from "./database/data.json";
import friends from "./database/friends.json";
import transactions from "./database/transactions.json";

import ProfileUser from "./components/profile/Profile";
import Statics from "./components/statitics/Statics";
import FriendList from "./components/friendList/FriendList";
import Transactions from "./components/transactionH/TransactionHistory";

function App() {
  return (
    <main>
      <div className="container">
        <ProfileUser user={userData}></ProfileUser>
        <Statics title="Upload stats" data={data}></Statics>
        <FriendList friends={friends}></FriendList>
        <Transactions transactions={transactions}></Transactions>
      </div>
    </main>
  );
}

export default App;
