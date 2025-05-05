// components/Header.js
"use client";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import { ModeToggle } from "../ModeToggle";
import { FileX } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" flex justify-center fixed w-full bg-white dark:bg-[#0A0A0A] top-0 shadow z-50 ">
      <div className="py-5 px-3 xl:px-3 container flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-45" />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <nav className="hidden lg:flex gap-6 text-lg">
            <Link
              href="/"
              className={
                pathname === "/" ? "font-bold text-[#00CB71]" : "font-normal"
              }
            >
              Home
            </Link>
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
          </nav>
          <div className="hidden lg:flex">
            <ModeToggle />
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <HiMenu size={30} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className={"mt-8"}>
                <SheetTitle className="flex justify-center items-center">
                  <div className="flex items-center gap-3">
                    <Link href="/">
                      <Image src={Logo} alt="Logo" width={200} />
                    </Link>
                    <ModeToggle />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <div className="flex flex-col gap-6 py-5 px-4">
                  <nav className="flex flex-col gap-6 text-lg">
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
                  </nav>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
