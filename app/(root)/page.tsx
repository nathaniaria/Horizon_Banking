import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const logggedIn = { firstName: "Nathan" };

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
      </div>
    </section>
  );
};

export default Home;
