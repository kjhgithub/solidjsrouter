import { A } from "@solidjs/router";

function LinkList() {
  return (
    <>
      <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
        <A
          class="text-danger dark:text-white lg:px-2"
          aria-current="page"
          href="/"
          data-twe-nav-link-ref
        >
          Link 1
        </A>
      </li>
      <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
        <A
          class="text-danger dark:text-white lg:px-2"
          aria-current="page"
          href="/impressum"
          data-twe-nav-link-ref
        >
          Impressum
        </A>
      </li>
      <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
        <A
          class="text-danger dark:text-white lg:px-2"
          aria-current="page"
          href="#"
          data-twe-nav-link-ref
        >
          Link 3
        </A>
      </li>
    </>
  );
}

export default LinkList;
