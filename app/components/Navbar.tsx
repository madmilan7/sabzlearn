"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/logo.webp";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { HiMiniChevronLeft } from "react-icons/hi2";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  const toggleDropdown = (menuName: string) => {
    setDropdownOpen(dropdownOpen === menuName ? null : menuName);
  };

  const toggleDarkMode = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    }
  }, []);

  if (isDarkMode === null) {
    return null;
  }

  return (
    <header className="bg-white dark:bg-darker">
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-40  md:backdrop-blur transition-all  
                  ${mobileMenuOpen || cartOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={() => {
          setMobileMenuOpen(false);
          setCartOpen(false);
        }}
      ></div>
      <div
        className="flex items-center justify-between mx-auto max-w-[1920px] h-[84px] md:h-25 
                    px-4 lg:px-12"
      >
        {/* Bars Icon For Mobile Version */}
        <div
          className="navigation__open-btn flex items-center justify-center rounded-full gap-x-2.5 px-0 lg:hidden
                      text-base h-12 bg-gray-100 dark:bg-white/5 cursor-pointer aspect-square transition-all"
          onClick={() => setMobileMenuOpen(true)}
        >
          <HiBars3 className="w-5.5 h-5.5 text-slate-500 dark:text-white" />
        </div>
        {/* Right Items(Menu & Logo) */}
        <nav className="flex items-center h-13">
          {/* App Logo */}
          <div className="lg:ml-8">
            <Link href="/" className="block">
              <Image src={logo} className="h-12 w-full" alt="سبزلرن" />
            </Link>
          </div>
          {/* Mobile Navigation */}
          <div
            className={`navigation lg:hidden bg-white dark:bg-darker w-64 overflow-y-auto 
                          fixed top-0 bottom-0 z-50 p-4.5 transition-all ${
                            mobileMenuOpen ? "right-0" : "-right-64"
                          } `}
          >
            <div
              className="flex items-center justify-between pb-6 relative border-b 
                        border-b-neutral-200 dark:border-b-white/10"
            >
              <Image src={logo} alt="سبزلرن" className="h-12 w-fit" />
              <div className="flex gap-x-3">
                <div
                  className="switch-theme flex items-center justify-center rounded-full gap-x-2.5 
                              text-base h-12 aspect-square px-0 bg-gray-100 text-slate-500 
                            dark:bg-white/5 dark:text-white transition-all"
                >
                  <IoSunnyOutline
                    className="hidden dark:inline-block w-6 h-6"
                    onClick={toggleDarkMode}
                  />
                  <IoMoonOutline
                    className="dark:hidden w-6 h-6"
                    onClick={toggleDarkMode}
                  />
                </div>
                <div
                  className="navigation__close-btn flex items-center justify-center gap-x-2.5 h-12 aspect-square rounded-full 
                                px-0 bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoCloseOutline className="w-5.5 h-5.5" />
                </div>
              </div>
            </div>
            <form action="">
              <div className="relative h-12 mt-6 block">
                <input
                  type="text"
                  className="bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm 
                              font-danaMedium rounded-full pr-4 pl-12 w-56 h-full placeholder:font-semibold"
                  placeholder="چی میخوای یاد بگیری؟"
                />
                <button
                  type="submit"
                  className="absolute left-4 top-0 bottom-0 w-6 h-6 my-auto text-slate-500 dark:text-white"
                >
                  <HiMagnifyingGlass className="w-6 h-6" />
                </button>
              </div>
            </form>
            <div className="mt-6">
              <ul className="mobile-menu text-gray-900 dark:text-white">
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "front-end" &&
                      "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/front-end">فرانت اند</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("front-end")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "front-end" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">آموزش HTML</Link>
                    </li>
                    <li>
                      <Link href="">آموزش CSS</Link>
                    </li>
                    <li>
                      <Link href="">آموزش FlexBox</Link>
                    </li>
                    <li>
                      <Link href="">آموزش CSS Grid</Link>
                    </li>
                    <li>
                      <Link href="">مینی پروژه های تخصصی با Css</Link>
                    </li>
                    <li>
                      <Link href="">آموزش Tailwind CSS</Link>
                    </li>
                    <li>
                      <Link href="">آموزش اصولی طراحی قالب</Link>
                    </li>
                    <li>
                      <Link href="">آموزش بوت استرپ</Link>
                    </li>
                    <li>
                      <Link href="">آموزش جاوااسکریپت</Link>
                    </li>
                    <li>
                      <Link href="">پروژه های تخصصی با JS</Link>
                    </li>
                    <li>
                      <Link href="">آموزش جامع ری اکت ReactJS</Link>
                    </li>
                    <li>
                      <Link href="">آموزش ویو جی اس</Link>
                    </li>
                    <li>
                      <Link href="">آموزش Vscode</Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "security" &&
                      "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/security">امنیت</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("security")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "security" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">نقشه راه ورود به دنیای هک و امنیت</Link>
                    </li>
                    <li>
                      <Link href="">شبکه با گرایش امنیت</Link>
                    </li>
                    <li>
                      <Link href="">لینوکس با گرایش امنیت</Link>
                    </li>
                    <li>
                      <Link href="">آموزش هکر قانونمند - CEH V11</Link>
                    </li>
                    <li>
                      <Link href="">آموزش کالی لینوکس</Link>
                    </li>
                    <li>
                      <Link href="">آموزش پایتون سیاه</Link>
                    </li>
                    <li>
                      <Link href="">آموزش Burp Suite</Link>
                    </li>
                    <li>
                      <Link href="">آموزش جاوااسکریپت سیاه</Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "python" && "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/python">پایتون</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("python")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "python" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">دوره آموزش پایتون</Link>
                    </li>
                    <li>
                      <Link href="">پروژه های کاربردی با پایتون</Link>
                    </li>
                    <li>
                      <Link href="">بهینه نویسی کد ها در پایتون</Link>
                    </li>
                    <li>
                      <Link href="">آموزش جنگو</Link>
                    </li>
                    <li>
                      <Link href="">مصور سازی داده با پایتون</Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "php" && "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/php">پی اچ پی</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("php")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "php" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">آموزش جامع PHP</Link>
                    </li>
                    <li>
                      <Link href="">ربات تلگرام با PHP</Link>
                    </li>
                    <li>
                      <Link href="">پروژه های کاربردی با PHP</Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "skill-up" &&
                      "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/skill-up">ارتقای مهارت ها</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("skill-up")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "skill-up" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">الگوریتم و ساختمان داده</Link>
                    </li>
                    <li>
                      <Link href="">آموزش websocket</Link>
                    </li>
                    <li>
                      <Link href="">گیت و گیتهاب</Link>
                    </li>
                    <li>
                      <Link href="">آموزش GraphQL</Link>
                    </li>
                    <li>
                      <Link href="">توسعه کتابخانه با JS</Link>
                    </li>
                    <li>
                      <Link href="">افزونه نویسی با JS</Link>
                    </li>
                    <li>
                      <Link href="">Clean Code برای JS</Link>
                    </li>
                    <li>
                      <Link href="">دیپلوی پروژه های JS</Link>
                    </li>
                    <li>
                      <Link href="">دوره Mern Stack</Link>
                    </li>
                    <li>
                      <Link href="">آموزش رجکس (regex)</Link>
                    </li>
                    <li>
                      <Link href="">NPM برای جاوااسکریپت کارها</Link>
                    </li>
                    <li>
                      <Link href="">آموزش Vscode</Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <div
                    className={`mobile-menu__wrapper ${
                      dropdownOpen === "blog" && "mobile-menu__wrapper--open"
                    }`}
                  >
                    <Link href="course-cat/blog">مقالات</Link>
                    <HiMiniChevronLeft
                      className="size-5"
                      onClick={() => toggleDropdown("blog")}
                    />
                  </div>
                  <ul
                    className={`mobile-menu__submenu dark:bg-gray-900 ${
                      dropdownOpen === "blog" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="">اچ تی ام ال</Link>
                    </li>
                    <li>
                      <Link href="">بوت استرپ</Link>
                    </li>
                    <li>
                      <Link href="">تست نفوذ و امنیت وب</Link>
                    </li>
                    <li>
                      <Link href="">جی کوئری</Link>
                    </li>
                    <li>
                      <Link href="">ری اکت جی اس</Link>
                    </li>
                    <li>
                      <Link href="">سی اس اس</Link>
                    </li>
                    <li>
                      <Link href="">طراحی سایت</Link>
                    </li>
                    <li>
                      <Link href="">ویو جی اس</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Menu */}
          <ul className="hidden lg:flex gap-x-6 text-base text-gray-900 dark:text-white">
            <li className="relative group">
              <Link
                href="/course-cat/front-end"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                فرانت اند
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    آموزش HTML
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش CSS
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش FlexBox
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش CSS Grid
                  </Link>
                  <Link href="" className="submenu_link">
                    مینی پروژه های تخصصی با CSS
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش Tailwind CSS
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش اصولی طراحی قالب
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش بوت استرپ
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش جاوااسکریپت
                  </Link>
                  <Link href="" className="submenu_link">
                    پروژه های تخصصی با JS
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش جامع ری اکت ReactJs
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش ویو جی اس
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش Vscode
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/course-cat/security"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                امنیت
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    نقشه راه ورود به دنیای هک و امنیت
                  </Link>
                  <Link href="" className="submenu_link">
                    شبکه با گرایش امنیت
                  </Link>
                  <Link href="" className="submenu_link">
                    لینوکس با گرایش امنیت
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش هکر قانونمند - CEH V11
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش کالی لینوکس
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش پایتون سیاه
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش Burp Suite
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش جاوااسکریپت سیاه
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/course-cat/python"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                پایتون
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    دوره آموزش پایتون
                  </Link>
                  <Link href="" className="submenu_link">
                    پروژه های کاربردی با پایتون
                  </Link>
                  <Link href="" className="submenu_link">
                    بهینه نویسی کد ها در پایتون
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش جنگو
                  </Link>
                  <Link href="" className="submenu_link">
                    مصور سازی داده با پایتون
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/course-cat/php"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                پی اچ پی
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    آموزش جامع PHP
                  </Link>
                  <Link href="" className="submenu_link">
                    ربات تلگرام با PHP
                  </Link>
                  <Link href="" className="submenu_link">
                    پروژه های کاربردی با PHP
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/course-cat/skill-up"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                ارتقای مهارت ها
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    الگوریتم و ساختمان داده
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش websocket
                  </Link>
                  <Link href="" className="submenu_link">
                    گیت و گیتهاب
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش GraphQL
                  </Link>
                  <Link href="" className="submenu_link">
                    توسعه کتابخانه با JS
                  </Link>
                  <Link href="" className="submenu_link">
                    افزونه نویسی با JS
                  </Link>
                  <Link href="" className="submenu_link">
                    Clean Code برای JS
                  </Link>
                  <Link href="" className="submenu_link">
                    دیپلوی پروژه های JS
                  </Link>
                  <Link href="" className="submenu_link">
                    دوره Mern Stack
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش رجکس (regex)
                  </Link>
                  <Link href="" className="submenu_link">
                    NPM برای جاوااسکریپت کارها
                  </Link>
                  <Link href="" className="submenu_link">
                    آموزش Vscode
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/blog"
                className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
              >
                مقالات
                <div className="w-3 h-3">
                  <HiChevronDown />
                </div>
              </Link>
              {/* show when hover - submenu */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                              absolute right-0 top-full pt-7 transition-all z-10"
              >
                <div
                  className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border 
                              border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 
                                shadow-sm dark:shadow-none rounded-xl"
                >
                  <Link href="" className="submenu_link">
                    اچ تی ام ال
                  </Link>
                  <Link href="" className="submenu_link">
                    بوت استرپ
                  </Link>
                  <Link href="" className="submenu_link">
                    تست نفوذ و امنیت وب
                  </Link>
                  <Link href="" className="submenu_link">
                    جی کوئری
                  </Link>
                  <Link href="" className="submenu_link">
                    ری اکت جی اس
                  </Link>
                  <Link href="" className="submenu_link">
                    سی اس اس
                  </Link>
                  <Link href="" className="submenu_link">
                    طراحی سایت
                  </Link>
                  <Link href="" className="submenu_link">
                    ویو جی اس
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {/* Left Items(Search & Cart & Registrations) */}
        <div className="flex items-center gap-x-5 h-13">
          {/* SearchBox */}
          <div className="relative group hidden lg:block" id="searchbox">
            <form action="" className="hidden xl:block">
              <div className="relative h-13 block">
                <input
                  type="text"
                  className="bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white
                            text-sm font-danaMedium rounded-full pr-4 pl-12 xl:w-80 h-full placeholder:font-semibold"
                  placeholder="چیو میخوای یاد بگیری؟"
                />
                <button
                  className="absolute left-4 top-0 bottom-0 w-6 h-6  my-auto
                                text-slate-500 dark:text-white"
                  type="submit"
                >
                  <HiMagnifyingGlass className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
          {/* Theme Toggle Btn */}
          <div
            className="hidden lg:flex rounded-full h-13 aspect-square px-0 items-center justify-center
                        bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white
                        cursor-pointer transition-all ease-in-out duration-150"
          >
            <IoSunnyOutline
              className="hidden dark:inline-block w-6 h-6"
              onClick={toggleDarkMode}
            />
            <IoMoonOutline
              className="dark:hidden w-6 h-6"
              onClick={toggleDarkMode}
            />
          </div>
          {/* Cart */}
          <div className={`relative group ${cartOpen && "z-50"}`} id="cart">
            <button
              type="button"
              className="rounded-full h-13 aspect-square px-0 flex items-center justify-center 
                        bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white
                        cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
            </button>
            <div
              id="count-cart-badge"
              className="hidden absolute -top-1 -right-1 items-center justify-center 
                                text-[10px] size-5 border-2 border-white dark:border-darker 
                                rounded-full bg-green-500 text-white"
            >
              0
            </div>
            {/* when click box showing */}
            <div
              className={`absolute translate-x-[-24%] xs:translate-x-0 left-0 top-full pt-4 z-10 
                          transition-all ${cartOpen ? "visible opacity-100" : "invisible opacity-0"}`}
              id="cart-dropdown"
            >
              <div
                className="w-80 xs:w-[362px] bg-white dark:bg-darker border border-neutral-100 
                              dark:border-0 rounded-xl"
              >
                <div
                  className="flex items-center justify-between px-5 py-4 bg-sky-50 
                              dark:bg-sky-500/10 text-sky-500 mb-5 rounded-t-xl"
                >
                  <span className="font-semibold">سبد خرید من</span>
                  <span className="text-slate-500 font-semibold">0 دوره</span>
                </div>
                <span
                  className="font-medium text-slate-500 dark:text-gray-400 block pb-5 
                                  text-center"
                >
                  سبد خرید شما خالیست :(
                </span>
              </div>
            </div>
          </div>
          {/* Login & Register in Desktop */}
          <Link
            href="/login"
            className="hidden lg:flex bg-sky-500 hover:bg-sky-600 text-white h-13 gap-x-3
                        px-4 text-base max-w-max cursor-pointer items-center justify-center rounded-full
                        transition-all duration-150 ease-in-out"
          >
            <HiOutlineUser className="w-6 h-6" />
            ورود | عضویت
          </Link>
          {/* Login & Register in Mobile */}
          <Link
            href="/login"
            className="flex lg:hidden h-13 aspect-square px-0 bg-gray-100 text-slate-500 
                        dark:bg-white/5 dark:text-white rounded-full items-center justify-center"
          >
            <HiArrowRightOnRectangle className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
