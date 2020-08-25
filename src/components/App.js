import React from "react";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactions from "./transactionHistory/transactions.json";
import user from "./socialProfile/user.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from "./friendlist/friends.json";
import Profile from "./socialProfile/SocialProfile.js";
import FriendList from "./friendlist/Friendlist";
import Statistics from "./statistics/Statistics";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
