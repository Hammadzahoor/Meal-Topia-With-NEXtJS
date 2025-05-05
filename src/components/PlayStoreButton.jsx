import React from "react";
import Link from "next/link";
import PlayStore from "../../public/playstore.svg";
import Image from "next/image";

const PlayStoreButton = () => {
  return (
    <Link href="href">
      <Image src={PlayStore} alt="alt" className="w-50" />
    </Link>
  );
};

export default PlayStoreButton;
