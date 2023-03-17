import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Timeline = () => {
  const rightStyle = {
    right: "50%",
    border: "2px solid #FFC100",
    borderRadius: "1%",
  };

  const leftStyle = {
    left: "50%",
    border: "2px solid #FFC100",
    borderRadius: "1%",
  };

  return (
    <section id="experience">
      <div className="hidden md:block">
        <div className="bg-white rounded-lg text-black py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full justify-center items-center sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-purple-800 uppercase tracking-loose">
                My Journey so far...
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Work Experience
              </p>
              <p className="text-sm md:text-base text-abc text-black-50 mb-4">
                The excitement of developing a product from scratch and seeing
                it used by thousands of people never lets me settle down. I am
                driven to constantly improve and innovate, pushing the
                boundaries of what is possible with technology. The satisfaction
                of knowing my contributions have a real impact on people's lives
                is truly fulfilling
              </p>
              {/* <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-purple-800 hover:text-wblack rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a> */}
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden md:p-10 h-full text-justify p-1">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={rightStyle}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={leftStyle}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-800">2022</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Freelance and Open Source
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-abc text-black-50 text-opacity-100">
                        Completed a number of freelance projects, the most
                        notable being the convocation portal for 9th convocation
                        of Manipal University Jaipur and DAK Management System
                        for the Government of Rajasthan (Jaipur Collectorate).
                        Making significant contributions to open source, specifically to <b>Jenkins Infra.</b>
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-purple-800">
                        April 2022 - October 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Developer @ Juice
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-black-50 text-abc text-opacity-100">
                        I was a part of an early-stage startup where we aimed to
                        address the issue of mental health through a mobile app.
                        I played a key role in the development process, working
                        to bring the application to life
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-800">
                        {" "}
                        June 2022 - July 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Celebal Summer Intern
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 text-abc">
                        During my tenure as a celebrity summer intern, I had the
                        opportunity to develop REST APIs for a student database
                        management system. I also attended several seminars and
                        masterclasses by industry experts, where I learned to
                        use tools such as Azure and Swagger Docs.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-purple-800">
                        June 2021 - January 2022
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Full Stack Development Track @ Crio.Do
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-abc text-black-50 text-opacity-100">
                        Completed the full stack development track at Crio.Do,
                        which launched me into my career as a developer. The
                        hands-on experience and mentorship provided have been
                        invaluable in my professional growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="py-10 container flex flex-col justify-center items-center bg-white rounded-lg mx-auto px-5">
          <p className="mb-3 font-bold text-theme-blue text-2xl">
            Work Experience
          </p>
          <p className="text-justify">
            The excitement of developing a product from scratch and seeing it
            used by thousands of people never lets me settle down. I am driven
            to constantly improve and innovate, pushing the boundaries of what
            is possible with technology. The satisfaction of knowing my
            contributions have a real impact on people's lives is truly
            fulfilling
          </p>
        </div>
        <div class="py-10 container mx-auto px-5">
          <div class="relative">
            <div
              class="border-r-4 border-yellow-700 absolute h-full top-0"
              style={{ left: "9px" }}
            ></div>
            <ul class="list-none m-0 p-0">
              <li class="mb-5  ">
                <div class="flex group items-center ">
                  <div class="bg-white group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                    <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                  </div>
                  <div class="flex-1 ml-4 z-10 font-medium">
                    <div class="order-1 space-y-2 bg-theme-blue rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-2xl">
                        Freelance and Open Source
                      </h3>
                      <p class="pb-4 text-sm text-white">2022</p>
                      <hr />
                      <p class="text-sm font-normal leading-snug text-white tracking-wide text-whitetext-opacity-100">
                        Completed a number of freelance projects, the most
                        notable being the convocation portal for 9th convocation
                        of Manipal University Jaipur and DAK Management System
                        for the Government of Rajasthan (Jaipur Collectorate).
                        Making significant contributions to open source, specifically to <b>Jenkins Infra.</b>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mb-5  ">
                <div class="flex group items-center ">
                  <div class="bg-white group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                    <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                  </div>
                  <div class="flex-1 ml-4 z-10 font-medium">
                    <div class="order-1 space-y-2 bg-theme-blue rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-2xl">
                        Developer @ Juice
                      </h3>
                      <p class="pb-4 text-sm text-white">
                        April 2022 - October 2022
                      </p>
                      <hr />
                      <p class="text-sm font-normal leading-snug tracking-wide text-white text-opacity-100">
                        I was a part of an early-stage startup where we aimed to
                        address the issue of mental health through a mobile app.
                        I played a key role in the development process, working
                        to bring the application to life
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mb-5  ">
                <div class="flex group items-center ">
                  <div class="bg-white group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                    <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                  </div>
                  <div class="flex-1 ml-4 z-10 font-medium">
                    <div class="order-1 space-y-2 bg-theme-blue rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-2xl">
                        Celebal Summer Intern
                      </h3>
                      <p class="pb-4 text-sm text-white">
                        June 2022 - July 2022
                      </p>
                      <hr />
                      <p class="text-sm font-normal leading-snug tracking-wide text-white text-opacity-100">
                        During my tenure as a celebrity summer intern, I had the
                        opportunity to develop REST APIs for a student database
                        management system. I also attended several seminars and
                        masterclasses by industry experts, where I learned to
                        use tools such as Azure and Swagger Docs.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mb-5  ">
                <div class="flex group items-center ">
                  <div class="bg-white group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                    <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                  </div>
                  <div class="flex-1 ml-4 z-10 font-medium">
                    <div class="order-1 space-y-2 bg-theme-blue rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-2xl">
                        Full Stack Development Track @ Crio.Do
                      </h3>
                      <p class="pb-4 text-sm text-white">
                        June 2021 - January 2022
                      </p>
                      <hr />
                      <p class="text-sm font-normal leading-snug tracking-wide text-white text-opacity-100">
                        Completed the full stack development track at Crio.Do,
                        which launched me into my career as a developer. The
                        hands-on experience and mentorship provided have been
                        invaluable in my professional growth.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Timeline, "app__works"),
  "experience",
  "app__primarybg"
);
