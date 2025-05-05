import React from "react";
import Link from "next/link";
import AppStore from "../../public/App Store.svg";
import Image from "next/image";

const PlayStoreButton = () => {
  return (
    <Link href="href">
      <Image src={AppStore} alt="alt" className="w-50" />
    </Link>
  );
};

export default PlayStoreButton;
