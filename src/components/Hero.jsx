import truck from "../assets/truck_bg.jpg";

function Hero() {
  return (
    <>
      <section class="bg-hero mb-4">
        <div class="px-6 py-12 text-center md:px-12 lg:text-left">
          <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="grid items-center gap-12 lg:grid-cols-2">
              <div class="mt-12 lg:mt-0">
                <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Text
                  <br />
                  <span class="text-[hsl(0,81%,75%)]">Text</span>
                </h1>
                <a
                  class="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#"
                  role="button"
                >
                  Button
                </a>
                <a
                  class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Button
                </a>
              </div>
              <div class="mb-12 lg:mb-0 flex justify-center">
                <img
                  src={truck}
                  class="w-full max-w-[600px] max-h-[400px] rounded-lg shadow-lg dark:shadow-black/20 object-cover content-center"
                  alt="Truck"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
