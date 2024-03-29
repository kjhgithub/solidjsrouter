import logo from "../assets/logo.svg";

function Footer() {
  return (
    <>
      <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div class="bg-black/5 p-4 text-center text-surface dark:text-white flex flex-col lg:flex-row justify-around items-center space-y-2 lg:space-y-0">
          <a
            href="#!"
            class="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:active:text-neutral-300"
          >
            Link 1
          </a>
          <a
            href="#!"
            class="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:active:text-neutral-300"
          >
            Link 2
          </a>
          <a
            href="#!"
            class="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:active:text-neutral-300"
          >
            Link 3
          </a>
        </div>
      </footer>
      <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
          © 2024 Copyright:
          <a href="https://tw-elements.com/"> titel</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
