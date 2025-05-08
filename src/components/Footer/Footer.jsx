"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../../public/footerlogo.svg";
import { usePathname } from "next/navigation";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full flex flex-col bg-[url(/footerbgimg.png)]">
      {/* First Row - Main Content */}
      <div className="w-full flex justify-center">
        <div className="container px-3 ">
          <div className="flex flex-col lg:flex-row gap-8 py-20">
            {/* Logo Section */}
            <div className="w-full lg:w-[35%] flex  lg:justify-start">
              <Link href="/" className="inline-block">
                <Image
                  src={FooterLogo}
                  alt="MealTopia Logo"
                  width={220}
                  height={55}
                  className="mb-4 lg:mb-0"
                />
              </Link>
            </div>

            {/* Links and Contact Section */}
            <div className="w-full lg:w-[65%] flex flex-col sm:flex-row gap-8 text-white font-[MayekaDemiBold]">
              {/* Quick Links */}
              <div className="flex-1 md:w-[33%]">
                <h3 className="text-lg font-semibold mb-4 opacity-60 font-[AbdoMasterRegular]">
                  Quick Link
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className={
                        pathname === "/"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={
                        pathname === "/about"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className={
                        pathname === "/team"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* More Links */}
              <div className="flex-1 md:w-[33%]">
                <h3 className="text-lg font-semibold mb-4 opacity-60 font-[AbdoMasterRegular]">
                  Quick Link
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/articles"
                      className={
                        pathname === "/articles"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      Articles & Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className={
                        pathname === "/careers"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={
                        pathname === "/contact"
                          ? "font-bold text-[#00CB71]"
                          : "font-normal"
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex-1 md:w-[33%]">
                <h3 className="text-lg font-normal mb-4 opacity-60 font-[AbdoMasterRegular]">
                  Get In Touch
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaPhoneAlt />
                    <Link
                      href="tel:+01500028306"
                      className="hover:text-gray-300 transition-colors"
                    >
                      +01500028306
                    </Link>
                  </li>
                  <li className="flex  items-center gap-2">
                    <MdEmail />
                    <Link
                      href="mailto:info@mealtopia.com"
                      className="hover:text-gray-300 transition-colors "
                    >
                      info@mealtopia.com
                    </Link>
                  </li>
                  <li className="flex gap-4 mt-4">
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebookF size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                      aria-label="YouTube"
                    >
                      <FaYoutube size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Purple Background */}
      <div className="w-full bg-[#562D80]">
        <div className="w-full flex justify-center">
          <div className="container flex flex-col md:flex-row justify-between gap-2 items-center px-3 py-5 font-[MayekaDemiBold]">
            {/* Add your content for the second row here */}
            <h1 className="text-xs text-center w-full md:w-1/2 text-white/60">
              Copyright © 2022 MEALTOPIA LIFESTYLE CORP, All Rights Reserved.
            </h1>
            <ul className="flex gap-5 text-xs text-white/80 ">
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>Terms and Condotions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
