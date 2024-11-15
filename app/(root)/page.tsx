import HeaderBox from "@/components/ui/HeaderBox";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const logggedIn = { firstName: "Nathan", lastName: "Fernandes", email: "contact@nf@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome to Horizon"
            user={logggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions effieciently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

    <RightSideBar
    user={logggedIn}
    transactions={[]}
    banks={[{}, {}]}
    />

    </section>
  );
};

export default Home;
