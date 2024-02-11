import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import avatarBackgroundRemoved from "../../public/avatarBackgroundRemoved.png";
import Nav from "./nav";
import SessionTitle from "./sessionTitle";
import Skills from "./skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>William Kenji Portifolio</title>
        <meta name="description" content="William Kenji Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="min-h-screen bg-custom-gradient">
          <Nav />
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-900 font-extrabold font-sans-serif">
              William Kenji
            </h2>
            <h3 className="text-2xl py-2 text-gray-500">
              Full Stack Developer
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800">
              A Software engineer master in problem solving and meticulous
              analysis, focused in building the Backend of Api&apos;s and Web
              Applications. Let&apos;s connect and crack some code.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
            <a href="https://github.com/WilliamSakata">
              <AiFillGithub className="text-5xl" />
            </a>
            <a href="https://www.linkedin.com/in/william-kenji-takahara-sakata/">
              <AiFillLinkedin className="text-5xl" />
            </a>
          </div>
          <div className="mt-20 mx-auto relative bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 flex justify-center pt-2 pb-7 pr-3">
            <Image src={avatarBackgroundRemoved} alt={""} />
          </div>
        </section>
        <section id="about" className="bg-[#FAFAFA]">
          <div className="p-10">
            <SessionTitle title="ABOUT ME" />
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a{" "}
              <span className="font-bold text-gray-600">Software Engineer</span>{" "}
              I&apos;ve been working to build the best software solutions always
              focused in the client&apos;s requirements. To do that, I&apos;m
              always keeping myself
              <span className="font-bold text-gray-600"> updated </span>
              with the latest technologies and best practices in the market.
              I&apos;m always looking for new challenges and opportunities to
              grow as a professional and as a person.
            </p>
          </div>
        </section>
        <section id="skills" className="bg-[#FAFAFA]">
          <div className="p-10">
            <SessionTitle title="My Skills" />
            <Skills />
          </div>
        </section>
        <section id="projects" className="bg-[#FAFAFA]">
          <div className="p-10">
            <SessionTitle title="PROJECTS" />
          </div>
        </section>
      </main>
    </div>
  );
}
