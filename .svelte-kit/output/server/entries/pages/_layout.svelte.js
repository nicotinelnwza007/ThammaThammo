import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-[#ECB03C] border-gray-200 dark:bg-gray-900 w-full h-[87px] text-white flex" data-svelte-h="svelte-1iw1xln"><div class="w-full bg-[#ECB03C] flex flex-wrap items-center justify-between px-4"><div class="ml-8"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-Inria">TAAMA TAAMO</span><br></a> <div class="flex"><div class="w-20 border-t-2 border-white"></div> <div class="text-xl font-koho">ธรรมมะ ธรรมโม</div></div></div> <div class="hidden w-full md:block md:w-auto mr-8 bg-[#ECB03C] " id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#ECB03C] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 "><li class="text-center bg-[#ECB03C]"><a href="#" class="font-Inria block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">REWARD</a> <a href="#" class="font-koho block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">รางวัล</a></li> <li class="text-center bg-[#ECB03C]"><a href="#" class="font-Inria block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PRINCIPLES</a> <a href="#" class="font-koho block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">หลักธรรม</a></li> <li class="text-center bg-[#ECB03C]"><a href="#" class="font-Inria block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROVERD</a> <a href="#" class="font-koho block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">สุภาษิต</a></li> <li class="text-center bg-[#ECB03C]"><a href="#" class="font-Inria block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROFILE</a> <a href="#" class="font-koho block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">โปรไฟล์</a></li> <li><img src="/Logo.png" alt="" class="w-[57px] h-[57px] rounded-full"></li></ul></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
