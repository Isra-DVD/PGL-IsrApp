import React from "react";
import { ProfileDescription } from "../../components/ProfileDescription";
import { QrCode } from "../../components/QrCode";

const qr = () => {
  return (
    <>
      <ProfileDescription />
      <QrCode />
    </>
  );
};

export default qr;
