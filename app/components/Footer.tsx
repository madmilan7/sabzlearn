"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/icons/logo.webp";
import enemad from "../assets/images/enamad.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="mt-25 sm:mt-40 bg-white dark:bg-darker py-8 md:pt-16 md:pb-10">
      <div className="container w-full mx-auto px-2.5">
        <div className="pb-5 mb-5 sm:pb-8 sm:mb-8 border-b border-b-neutral-200 dark:border-b-dark">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-x-3.5">
              <Image
                src={logo}
                alt="سبزلرن"
                className="h-8 sm:h-12 w-fit"
                loading="lazy"
              />
            </Link>
            <div className="flex gap-x-2 sm:gap-x-3">
              <div
                className="size-[30px] sm:size-[38px] flex items-center justify-center 
                            bg-neutral-300 text-white dark:text-darker transition-colors 
                            hover:bg-sky-500 rounded-full"
              >
                <IoLogoInstagram className="size-7" />
              </div>
              <FaTelegram
                className="size-[30px] sm:size-[38px] text-neutral-300 transition-colors 
                                  hover:text-sky-500"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4  gap-x-12 mt-10 sm:mt-8">
            <div className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-dark dark:text-neutral-300">
              <HiOutlinePhone className="size-5 sm:size-6" />
              02191030926
            </div>
            <div className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-dark dark:text-neutral-300">
              <HiOutlineEnvelope className="size-5 sm:size-6" />
              info@sabzlearn.ir
            </div>
            <div className="flex items-center flex-grow md:flex-grow-0 gap-x-1.5 sm:gap-x-2 text-sm sm:text-base text-dark dark:text-neutral-300">
              <LiaTelegram className="size-5 sm:size-6" />
              sabzlearn_support@
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div>
            <span className="inline-block text-dark dark:text-neutral-300 sm:text-2xl font-bold mb-3 sm:mb-4">
              درباره سبزلرن
            </span>
            <p className="max-w-[25rem] text-dark dark:text-neutral-300">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و
              بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای
              برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت
              ببریم.
            </p>
          </div>
          <div className="flex items-start gap-x-6 sm:gap-x-7">
            <div>
              <span className="inline-block text-dark dark:text-neutral-300 sm:text-2xl font-bold mb-3 sm:mb-4">
                دوره های پرطرفدار
              </span>
              <div
                className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base 
                            text-dark dark:text-neutral-300"
              >
                <Link href="">آموزش پایتون</Link>
                <Link href="">آموزش Html</Link>
                <Link href="">آموزش Css</Link>
                <Link href="">پروژه های خلاقانه با Html و Css</Link>
              </div>
            </div>
            <div>
              <span className="inline-block text-dark dark:text-neutral-300 sm:text-2xl font-bold mb-3 sm:mb-4">
                دسترسی سریع
              </span>
              <div
                className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base 
                            text-dark dark:text-neutral-300"
              >
                <Link href="">قوانین و مقررات</Link>
                <Link href="">ارسال تیکت</Link>
                <Link href="">همه دوره ها</Link>
              </div>
            </div>
          </div>
          <Image src={enemad} alt="" className="w-36 sm:w-48" />
        </div>
        <div
          className="flex items-center justify-center text-center sm:text-right sm:justify-between 
                        flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10 dark:text-neutral-300"
        >
          <span>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</span>
          <span>ساخته شده با ❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
