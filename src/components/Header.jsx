import { createSignal, onCleanup, onMount, createEffect } from "solid-js";
import LinkList from "./LinkList";
import { Collapse, Dropdown, Ripple, initTWE } from "tw-elements";
import logo from "../assets/logo.svg";

function Header() {
  // createSignal for NavigationList ID
  const [navDiv, setNavDiv] = createSignal();

  //onMount tw-elements, set signal for NavigationList
  onMount(() => {
    initTWE({ Collapse, Dropdown, Ripple });
    const navID = document.getElementById("navbarSupportedContent2");
    setNavDiv(navID);
  });

  //linkClicked function
  const linkClicked = (event) => {
    const islinkClicked = navDiv().contains(event.target);
    const isHamburgerOpen = document
      .getElementById("hamburgerButton")
      .getAttribute("aria-expanded");
    if (islinkClicked && isHamburgerOpen === "true") {
      const myCollapse = new Collapse(navDiv());
      myCollapse.hide();
    }
  };

  // Function for LinkClick inside a creatEffect
  createEffect(() => {
    if (navDiv()) {
      navDiv().addEventListener("click", linkClicked);
      // remove Eventlistner
      onCleanup(() => {
        navDiv().removeEventListener("click", linkClicked);
      });
    }
  });

  // createSignal for darkMode with prefers darkMode check
  const [darkMode, setDarkMode] = createSignal(
    localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  createEffect(() => {
    const htmlDark = document.documentElement.classList;
    darkMode() ? htmlDark.add("dark") : htmlDark.remove("dark");
    localStorage.setItem("darkMode", darkMode());
  });

  //toggle darMode setter
  const toggleDarkMode = () => setDarkMode(!darkMode());

  // Function to handle changes in local storage
  const handleStorageChange = () => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    setDarkMode(storedDarkMode);
  };

  //createEffect for
  createEffect(() => {
    // Cleanup function to remove event listener
    onCleanup(() => {
      window.removeEventListener("storage", handleStorageChange);
    });
    // Add event listener to listen for changes in local storage
    window.addEventListener("storage", handleStorageChange);
  });

  return (
    <>
      <nav
        class="lg:container lg:mx-auto relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-none dark:shadow-none hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div class="ms-2 flex flex-row flex-nowrap items-center">
            <img src={logo} className="w-8 h-8 mr-2" alt="Logo" />
            <a class="text-xl text-black dark:text-white" href="#">
              Titel
            </a>
          </div>

          <button
            id="hamburgerButton"
            class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            class="!visible mt-2 hidden flex-grow-0 basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item
          >
            <ul
              class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <LinkList />
            </ul>

            <div className="flex flex-row flex-nowrap itmes-center justify-end lg:justify-center mb-4 lg:ml-4 lg:mb-0">
              <label
                class="inline-block ps-[0.15rem] hover:cursor-pointer mr-2 dark:text-white"
                for="flexSwitchCheckDefault"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </label>
              <input
                class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-danger after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-danger checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-danger checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-danger checked:focus:bg-danger checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-danger dark:checked:bg-danger dark:checked:after:bg-danger"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={darkMode()}
                onChange={() => {
                  toggleDarkMode();
                }}
              />
              <label
                class="inline-block ps-[0.15rem] hover:cursor-pointer dark:text-white"
                for="flexSwitchCheckDefault"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
