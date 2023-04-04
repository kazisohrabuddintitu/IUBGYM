<template>
  <main class="min-h-screen">

    <!-- Header Section Start -->
    <section id="head">
      <div class="container-fluid py-5 bg-iub-color-primary text-white
     grid place-items-center
      ">
        <div class="md:pb-3">
          <img src="../assets/iub_logo_white.png" alt="iub">
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
            >iub gym
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
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">          
            <router-link to="" exact-active-class="text-red-900"> Home </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">          
            <router-link to="/classes"> Classes </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/membership"> Membership </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/equipment"> Equipment </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/instructions"> Instructions </router-link>           
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/notice"> Notice Board</router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/instructor"> Trainers </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">
            <router-link to="/contact"> Contact Us </router-link>
            
          </li>
        </ul>
      </nav>
    </section>
    <!-- Navigation Section End -->


    <!-- Content Section Start -->
    <section id="content">
      <div class="content bg-opacity-50 bg-slate-400">
          <div class="">
            <div class="grid place-items-center py-6 font-bold md:text-4xl text-base text-iub-color-primary">
              <h1 >IUB Gymnasium</h1>
            </div>
            
            <div class="px-4">
                <div class="flex flex-col md:flex-row">
                                                             
                      <div ><img src="../assets/gymPhoto_6.jpeg" alt="IUB"></div>
                      <div ><img src="../assets/gymPhoto_2.jpeg" alt="IUB"></div>
                      <div ><img src="../assets/gymPhoto_3.jpeg" alt="IUB"></div>
                </div>
                <div class="flex flex-col md:flex-row">

                      <div ><img src="../assets/gymPhoto_4.jpeg" alt="IUB"></div>							
                      <div ><img src="../assets/gymPhoto_5.jpeg" alt="IUB"></div>
                      <div ><img src="../assets/gymPhoto_6.jpeg" alt="IUB"></div>
                      
                </div>
            </div>   
			    </div>
          <div class="py-6 px-4">
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
    



    <!-- Gym for Woman Section Start -->
    <section id="womanSection" class="bg-slate-400 bg-opacity-50">
      
      <div class="grid md:grid-cols-2 gap-5 pl-4 pt-10 md:pt-20 max-h-full pb-10">
        <div class="w-full">
          <img src="../assets/ladiesgym2.jpeg">
        </div>
        <div>
          <h1 class="text-4xl pl-5 mb-3 md:mb-10">Best Ladies Gym</h1> 
          <p class="p-5">
            IUB Gymnasium encourages our women to build strong bodies and lead healthy lifestyles. 
            Our experienced and certified female fitness trainers will guide and help you to 
            achieve your fitness goal with an amazing body shape. We have a dedicated floor 
            specially designed for our women and ensure a safe and secure environment for 
            comfortable workouts. Our effective fitness plan will ensure positive output and 
            guaranteed results within a short time. As a ladies’ gym we offer all sorts of facilities. 
          </p>
          <div class="grid grid-cols-3 pt-10 md:pt-20">
            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-345649d" data-id="345649d" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-4bdef8d elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="4bdef8d" data-element_type="widget" data-widget_type="icon-box.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-icon-box-wrapper text-center">
                      <div class="elementor-icon-box-icon ">
                        <span class="elementor-icon elementor-animation-">
                          <i aria-hidden="true" class="fas fa-weight fa-3x" style="color: #e32400;"></i>
                        </span>
                      </div>
                      <div class="elementor-icon-box-content">
                        <h3 class="elementor-icon-box-title">
                          <span>Weight Loss</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1d333ac" data-id="1d333ac" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-fb3e435 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="fb3e435" data-element_type="widget" data-widget_type="icon-box.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-icon-box-wrapper text-center">
                        <div class="elementor-icon-box-icon">
                          <span class="elementor-icon elementor-animation-">
                            <i aria-hidden="true" class="fas fa-dumbbell fa-3x" style="color: #e32400;"></i>
                          </span>
                        </div>
                        <div class="elementor-icon-box-content">
                          <h3 class="elementor-icon-box-title">
                            <span>Weight Lifting</span>
                          </h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-465bf54" data-id="465bf54" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                  <div class="elementor-element elementor-element-51b82dd elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="51b82dd" data-element_type="widget" data-widget_type="icon-box.default">
                    <div class="elementor-widget-container">
                      <div class="elementor-icon-box-wrapper text-center">
                        <div class="elementor-icon-box-icon ">
                          <span class=" elementor-icon elementor-animation-">
                            <i aria-hidden="true" class="fas fa-heartbeat fa-3x" style="color: #e32400;"></i>
                          </span>
                        </div>
                        <div class="elementor-icon-box-content">
                          <h3 class="elementor-icon-box-title">
                            <span>Aerobics</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>               
        </div>                 
      </div>
    </section>

    <!-- Gym for Woman Section End -->





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
