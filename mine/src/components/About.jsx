import { useEffect, useRef } from "react";
import Background from "../components/Background";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const cardClass =
    "rounded-3xl hover:grow-[6] transition-all duration-300 ease-out flex items-center justify-center font-bold text-xl [&>*]:scale-75 md:[&>*]:scale-100 transform-gpu";
  const gapClass = "gap-3 md:gap-4";

  const refs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      refs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              xPercent: -80,
              opacity: 0,
              scale: 0.9,
              rotationY: -20,
            },
            {
              xPercent: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              delay: 0.05 + 0.06 * index,
              ease: "power3.out",
              duration: 0.4,
              force3D: true,
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return (
    <Background>
      <div className="h-screen w-screen flex flex-col items-center justify-center py-8 px-4 gap-8 md:gap-12 overflow-hidden">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 max-w-4xl flex-shrink-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About QBix
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
            Exploring the cosmos of creativity and technology.
            <br />
            Let's connect and build something extraordinary together.
          </p>
        </div>

        {/* Social Links Flex Layout */}
        <div className="flex-1 w-full max-w-7xl flex flex-col justify-center">
          <div className={`flex-1 flex flex-col ${gapClass} p-4 md:p-6 lg:p-8`}>
            <div
              className={`flex-1 flex flex-wrap items-stretch hover:flex-[1.5] transition-all duration-300 ease-out ${gapClass}`}
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alphacupcake10/"
                ref={setRef(3)}
                className={`${cardClass} bg-[#0077b5] flex-1 min-w-0`}
              >
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </a>
              <a
                target="_blank"
                href="https://www.fiverr.com/alphacupcake"
                ref={setRef(2)}
                className={`${cardClass} bg-[#1DBF73] flex-[4] min-w-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <path
                    d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://github.com/alphacupcake10/"
                ref={setRef(0)}
                className={`${cardClass} bg-[#222] flex-1 min-w-0`}
              >
                <FaGithub className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </a>
            </div>
            <div
              className={`flex-[2] flex flex-wrap-reverse items-stretch hover:flex-[2.5] transition-all duration-300 ease-out ${gapClass}`}
            >
              <div className={`flex-1 flex flex-col ${gapClass} min-w-0`}>
                <a
                  target="_blank"
                  href="https://linktr.ee/AlphaCupcake10"
                  ref={setRef(4)}
                  className={`${cardClass} bg-gradient-to-b from-green-400 to-green-500 flex-1`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  >
                    <path
                      fill="currentColor"
                      d="M18.89,32H21v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8H4.89c-1.52,0-2.48-1.64-1.75-2.97 L15.25,7.16c0.76-1.37,2.74-1.37,3.5,0l4.85,9.74l-6.46,12.13C16.41,30.36,17.37,32,18.89,32z"
                    />
                    <path
                      fill="currentColor"
                      d="M43.11,32H35v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8h2.11c1.52,0,2.48-1.64,1.75-2.97L24.3,16.9 l4.95-9.74c0.76-1.37,2.74-1.37,3.5,0l12.11,21.87C45.59,30.36,44.63,32,43.11,32z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="mailto:alphacupcake@outlook.com"
                  ref={setRef(5)}
                  className={`${cardClass} bg-gradient-to-r from-sky-400 to-blue-500 flex-1`}
                >
                  <FaEnvelope className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                </a>
              </div>
              <a
                target="_blank"
                href="https://www.instagram.com/alphacupcake10/"
                ref={setRef(1)}
                className={`${cardClass} bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex-[2] min-w-0`}
              >
                <FaInstagram className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </a>
            </div>
            <div
              className={`flex-1 flex flex-wrap items-stretch hover:flex-[1.5] transition-all duration-300 ease-out ${gapClass}`}
            >
              <a
                target="_blank"
                href="https://www.artstation.com/alphacupcake10"
                ref={setRef(9)}
                className={`${cardClass} bg-[#171717] text-[#13AFF0] flex-1 min-w-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <g clipPath="url(#clip0_251_21)">
                    <path
                      d="M-1 35.1508L3.13846 42.2863H3.1405C3.55286 43.1021 4.18423 43.7877 4.96429 44.2668C5.74435 44.746 6.64249 44.9998 7.55867 45H35.0334L29.333 35.1508H-1ZM48 35.2017C48 34.2164 47.708 33.2983 47.2078 32.5267L31.1113 4.62414C30.6903 3.83183 30.0607 3.16889 29.2901 2.70655C28.5196 2.24421 27.6374 1.99995 26.7381 2H18.2305L43.0959 44.9572L47.0159 38.1882C47.7877 36.8914 48 36.3173 48 35.2017ZM25.2783 28.1538L14.1655 8.96037L3.05067 28.1538H25.2783Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_251_21">
                      <rect width="48" height="48" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/AlphaCupcake10"
                ref={setRef(8)}
                className={`${cardClass} bg-[#1769FF] flex-1 min-w-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <g clipPath="url(#clip0_251_32)">
                    <path
                      d="M40.3333 12.8333H27.5V9.16663H40.3333V12.8333ZM43.4977 31.1666C42.6873 33.5445 39.7778 36.6666 34.1458 36.6666C28.5102 36.6666 23.9452 33.4968 23.9452 26.2625C23.9452 19.0941 28.2077 15.4091 33.9662 15.4091C39.6165 15.4091 43.0668 18.6761 43.8203 23.5235C43.9633 24.4511 44.0202 25.7015 43.9945 27.4468H29.2783C29.5167 33.3336 35.6638 33.5188 37.6897 31.1666H43.4977ZM29.4067 23.8333H38.5092C38.3167 20.9971 36.4265 19.7651 33.968 19.7651C31.2803 19.7651 29.7935 21.1731 29.4067 23.8333ZM11.8543 36.6446H0V9.20513H12.7472C22.7865 9.35363 22.9772 19.1858 17.7338 21.8661C24.079 24.1761 24.2917 36.6446 11.8543 36.6446ZM5.5 20.1666H12.0707C16.6687 20.1666 17.3983 14.6666 11.4987 14.6666H5.5V20.1666ZM11.7168 25.6666H5.5V31.196H11.6252C17.226 31.196 16.8832 25.6666 11.7168 25.6666Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_251_32">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/alphacupcake10/"
                ref={setRef(7)}
                className={`${cardClass} bg-[#14171A] flex-1 min-w-0`}
              >
                <SiX className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/c/AlphaCupcake10"
                ref={setRef(6)}
                className={`${cardClass} bg-[#FF0000] flex-1 min-w-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <path
                    d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center flex-shrink-0 px-4">
          <p className="text-gray-400 text-base md:text-lg">
            Ready to collaborate? Reach out and let's create something amazing!
            🚀
          </p>
        </div>
      </div>
    </Background>
  );
}

export default About;
