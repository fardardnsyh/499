"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BsClock,
  BsFillEmojiHeartEyesFill,
  BsFillPersonFill,
  BsPenFill,
  BsTags,
} from "react-icons/bs";
import { TbArrowLeft, TbArrowRight, TbHeart } from "react-icons/tb";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { AiFillEye, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";



function FetchPosts(post) {
  return (
    <>
      <div className="relative m-3  lg:mx-0 mx-auto group bg-slate-950  w-fit  overflow-hidden rounded-xl ">
        <Link href={post.url}>
          <img 
          
            className=" w-full group-hover:scale-105 transition-all ease-out duration-200 object-cover h-48 opacity-75"
            src={post.image}
            alt=""
          />
        </Link>

        <div className="absolute top-5 w-full px-2  ">
          <div className="flex justify-between w-full">
            <div className="text-white text-sm font-light space-x-3">
              {/* <span className="px-1 py-1 bg-white text-black rounded-md "> */}

              {post.tags.map((tag, i) => (
                <span key={i} className="text-white  ">
                  <span
                    className={`${
                      tag === "News"
                        ? "text-purple-700 border-purple-950 px-1 py-1 border rounded-md"
                        : "border-white  px-1 py-1 border rounded-md"
                    }`}
                  >
                    {tag}
                  </span>
                </span>
              ))}
              {/* </span> */}
            </div>
            <div>
              <TbHeart className="  text-white text-4xl" />
            </div>
          </div>
        </div>

        {/* Work on the shades later */}
        {/* <div className="  absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-gray-950 " /> */}

        <div className="p-4">
          <div className="flex  gap-3 items-center  text-white justify-between">
            <h1 className="text-base font-bold text-white">
              {post.summary.substring(0, 30)}...
            </h1>
            <div className="flex items-center space-x-1">
              <BsClock className=" text-sm text-white" />
              <span className="text-white font-thin text-xs">
                {post.time_Read}
                <span>min</span>
              </span>
            </div>
          </div>

          <div className="flex mt-4 justify-between">
            <div className="flex space-x-3">
              <Image
              width={36}
              height={36}
                className="w-9  h-9 object-cover rounded-2xl"
                src={post.Author_image}
                alt=""
              />
              <div className="text-white  leading-4">
                <h2 className="font-bold">{post.author}</h2>
                <p className="text-sm font-thin">@{post.author_At_name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <span className="text-white font-thin text-xs">
                {format(parseISO(post.date), "LLL d, yyyy")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BlogPost() {
  const allpost = allPosts.sort((a, b) => {
    compareDesc(new Date(a.date), new Date(b.date));
  });

  const [isIntersecting, setIntersecting] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="p-4">
      <div className=" flex items-center justify-between  ">
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <AiFillEye className="w-5 h-5" />{" "}
            </span>
            <Link target="_blank" href="https://twitter.com/joenaldo">
              <AiFillTwitterCircle
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/Joscriptt">
              <AiFillGithub
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <BsArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
        {/* <div className="flex items-center ">
          <div className="bg-slate-100 rounded-full w-fit p-2 ">
            <BsPenFill className=" text-purple-600" />
          </div>
          <div>
            <h1 className="text-white lg:text-4xl  sm:text-base md:text-xl font-bold">
              Graphics and illustration{" "}
              <span className=" bg-[#28e955] text-[#207d36] py-0.5 w-10 px-1 text-sm font-normal rounded-md">
                Special
              </span>
            </h1>

            <p className="text-[#207d36] ">
              The best graphics and illustration courses
            </p>
          </div>
        </div> */}

        {/* <div className="lg:flex space-x-5 hidden ">
          <div className=" bg-[#28e955]  items-center px-1 py-1  rounded-3xl flex space-x-4">
            <span className="text-white">See all</span>
            <TbArrowRight />
          </div>
          <div className=" bg-[#28e955] items-center  rounded-3xl flex space-x-4">
            <div className="bg-black p-1 h-fit w-fit">
              <TbArrowLeft className="  text-white" />
            </div>
            <TbArrowRight />
          </div>
        </div> */}
      </div>

      <div className="rounded-md  w-full mx-auto mt-16 max-w-xl  p-6">
        <div className="flex justify-between gap-2">
          <Image
          width={80}
          height={80}
            className="h-20 w-20  object-cover  rounded-full"
            src="/images/img13.png"
            alt=""
          />

          <div className=" text-white">
            <p className="text-thin max-w-lg ">
              <span className="font-bold ">Hey, I',m Joe</span> also known as
              <span className="text-purple-800 font-bold"> @Marshall</span> or
              <span className="text-gray-950 font-bold"> @JoScript</span>
            </p>
            <p>
              I am a Frontend Developer from Nigeria creating websites & apps
              with <span className="font-bold text-sky-700">React Native</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" md:flex gap-4 lg:mx-auto  max-w-5xl mt-40 ">
        {allpost.map((post, idx) => (
          <FetchPosts key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
