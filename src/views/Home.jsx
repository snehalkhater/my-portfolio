import React from "react";

function Home() {
  return (
    <main className="min-h-screen bg-[#08070d] text-white">

      <section className="min-h-[calc(100vh-100px)] flex items-center">

        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT SIDE - INFO */}
            <div className="max-w-2xl">

              <p className="text-purple-400 tracking-[5px] text-sm mb-5">
                HELLO, I'M
              </p>

              <h1 className="text-6xl sm:text-7xl font-bold">
                Snehal<span className="text-purple-400">.</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-medium mt-4">
                Full Stack Developer
              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-7 max-w-xl">
                I create modern, responsive and interactive websites
                using React, JavaScript and modern web technologies.
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href="#projects"
                  className="px-7 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition"
                >
                  View My Work →
                </a>

                <a
                  href="#contact"
                  className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  Let's Talk →
                </a>

              </div>

            </div>


            {/* RIGHT SIDE - GIRL */}
            <div className="flex justify-center lg:justify-end flex-1">

              <img
                src="/girl.png"
                alt="Snehal"
                className="h-[660px] sm:h-[550px] lg:h-[650px] w-auto object-contain"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;