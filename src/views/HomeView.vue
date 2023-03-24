<template>
  <main class="min-h-screen">

    <!-- Header Section Start -->
    <section id="head">
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
    <section id="navbar">
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
              md:text-2xl
              italic hover:not-italic
            "
            >IUB GYM
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
            <router-link to=""> Home </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/membership"> Membership </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/notice"> Notice Board</router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/instructor"> Instructor </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/contact"> Contact Us </router-link>
            
          </li>
        </ul>
      </nav>
    </section>
    <!-- Navigation Section End -->


    <!-- Content Section Start -->
    <section id="content">
      <div class="content bg-opacity-50 bg-slate-500">
          <div class="">
            <div class="grid place-items-center py-6 font-bold md:text-4xl text-base text-iub-color-primary">
              <h1 >IUB Gymnasium</h1>
            </div>
            
            <div class="px-4">
                <div class="flex flex-col md:flex-row">
                                                              
                      <div><img src="../components/gymPhoto-1.jpeg" alt="IUB"></div>
                      <div ><img src="../components/gymPhoto_2.jpeg" alt="IUB"></div>
                      <div ><img src="../components/gymPhoto_3.jpeg" alt="IUB"></div>
                </div>
                <div class="flex flex-col md:flex-row">

                      <div ><img src="../components/gymPhoto_4.jpeg" alt="IUB"></div>							
                      <div ><img src="../components/gymPhoto_5.jpeg" alt="IUB"></div>
                      <div ><img src="../components/gymPhoto_6.jpeg" alt="IUB"></div>
                      
                </div>
            </div>   
			    </div>
          <div class="py-6 px-4 italic">
              <p>The IUB Gymnasium is a state-of-the-art facility that has been 
                designed to meet the fitness needs of students, faculty, and 
                staff members. It is equipped with a wide range of exercise 
                equipment, including treadmills, elliptical machines, weight 
                machines, and free weights.<br><br>In addition to the equipment, the 
                IUB Gymnasium offers a variety of fitness classes, such as yoga, 
                Pilates, and spinning. These classes are led by certified 
                instructors who are dedicated to helping participants achieve 
                their fitness goals.<br><br> The IUB Gymnasium is more than just a place 
                to exercise; it is a community. It provides a welcoming and 
                inclusive environment where individuals from all backgrounds 
                can come together to support each other in their fitness 
                journeys.<br><br>So, whether you are a seasoned gym-goer or someone 
                who is just starting their fitness journey, I encourage you to 
                take advantage of the many opportunities that the IUB Gymnasium 
                has to offer. Thank you for joining us today, and I hope you 
                enjoy your time here! </p>
          </div>
      </div>
    </section>
    <!-- Content Secton End -->
    


    <!-- Footer Section Start -->
    <section id="footerarea">
            <div class="footer border-2 border-t-white">
                <footer class="bg-iub-color-primary text-center text-white ">                   
                    <div class="p-4 text-center">
                    © 2023 Copyright:
                    <a class="text-whitehite" href="http://www.iub.edu.bd">
                        IUB
                    </a>
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
