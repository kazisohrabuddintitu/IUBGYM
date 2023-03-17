<template>
    <main class="min-h-screen">
      <!-- Header Section Start-->
        <section id="header">
          <div class="container-fluid py-5 bg-iub-color-primary text-white
            grid place-items-center
              ">
              <div class="md:pb-3">
                <img src="http://www.iub.edu.bd/img/logo_white.png" alt="iub">
              </div>
              <div class="md:font-bold">
                <h1>Independent University, Bangladesh</h1>
              </div>
            </div>
        </section>
      <!-- Header Section End -->
          
      <!-- Navigation Section Start -->
        <section>
          <nav
          class="
            md:flex md:justify-between md:items-center
            bg-gradient-to-r from-iub-color-primary to-nav-color px-2 sm:px-4 py-2.5
          "
        >
          <div class="flex items-center justify-between">
            <h1 class="
              text-xl 
              text-white
              md:text-xl
              italic hover:not-italic
            "
            >Notice Board
          </h1>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
              
            "
          >
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <a href="/" class="">Home</a>
          </li>
          
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <a href="/membership">Membership</a>
            
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <a href="#">Notice Board</a>
            
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <a href="/contact">Contact Us</a>
            
          </li>
          </ul>
        </nav>
        </section>
        <!-- Navigation Section End -->
      

      <!-- Footer Section start -->
        <section id="footerarea">
          <div class="footer">
            <footer class="bg-iub-color-primary text-center text-white">
                <div class="container px-6 pt-6 pb-2 grid place-items-center">
                  <div class="md:pb-3">
                    <img src="http://www.iub.edu.bd/img/logo_white.png" alt="iub">
                  </div>
                  <div class="md:font-bold">
                    <h3>Independent University, Bangladesh</h3>
                  </div>
                
                </div>
                <hr style="border-width:3;">
                <div class="p-4 text-center">
                  © 2023 Copyright:
                  <a class="text-whitehite" href="http://www.iub.edu.bd"
                    >IUB</a
                  >
                </div>
              </footer>
          </div>
        </section>
        <!-- Footer Section End -->


    </main>
  
  </template>
  
  <script>
  import {ref} from "vue";
  
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>
  