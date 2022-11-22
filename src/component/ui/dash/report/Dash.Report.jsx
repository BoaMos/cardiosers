import React from "react";
import DashHeader from "../Dash.Header";
import DashNavigation from "../Dash.Navigation";
import DashReportContainer from "./Dash.Report.Container";

const DashReport = ({}) => {
  const ctr = 0.3;
  const status = "Has Cardiomegaly";
  const heartSize = 5.9;
  const image = "";
  const fullname = "Alouzhe Brandone";
  const phone = "+240 555 459 934";
  const email = "alouzhe@gmail.com";
  const dateOfBirth = "10/02/1998";

  return (
    <main className="dash">
      <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
      <DashNavigation />
      <DashReportContainer
        ctr={ctr}
        status={status}
        image={image}
        heartSize={heartSize}
        fullname={fullname}
        phone={phone}
        email={email}
        dateOfBirth={dateOfBirth}
      />
    </main>
  );
};

export default DashReport;
