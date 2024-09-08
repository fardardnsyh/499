import Navbar from "./Navbar";
import Image from "next/image";
import Grad from "@/components/gradient/Grad";
import Gradd from "@/components/gradient/Gradd";
import Graddd from "@/components/gradient/Graddd";

export default function Home() {
  return (
    <>
      <div className="flex flex-col  ">
        <header className="relative px-8 w-full max-h-[40rem] h-screen">
          <div className="relative flex flex-col h-full z-10">
            <Navbar />
            <div className=" mt-40">
              <h1 className="text-white max-w-xl font-bold text-5xl">
                Learn how to build modern user interfaces for the web
              </h1>
              <p className="mt-10 text-gray-400  max-w-2xl text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                saepe corrupti iusto beatae tempora tempore laudantium
                perferendis illo aliquam voluptatem inventore. Hic deserunt sint
                pariatur. Voluptate distinctio explicabo ipsum deleniti.
              </p>
            </div>
          </div>
          <div className="absolute opacity-50 top-0 left-0 right-0 bottom-0">
            <video
              className="w-full  h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/assets/vid3.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 p-10  bg-opacity-95 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black " />
          </div>

          <div className="absolute top-0 right-2">{/* <Grad /> */}</div>
          <div className="absolute top-0 left-0">{/* <Gradd /> */}</div>
          <div className="absolute right-0 top-5 ">{/* <Graddd /> */}</div>
        </header>
      </div>
    </>
  );
}
