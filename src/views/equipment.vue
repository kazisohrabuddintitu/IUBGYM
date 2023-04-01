<template>
  <main>
    <!-- Head Section Start -->
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
    <!-- Head Section End -->



    <!-- Nav Section Start -->
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
            >Equipment
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
            <router-link to="/"> Home </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/membership"> Membership </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="" exact-active-class="text-red-900"> Equipment </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/instructions"> Instructions </router-link>           
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/notice"> Notice Board</router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/instructor"> Trainers </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/contact"> Contact Us </router-link>
            
          </li>
        </ul>
      </nav>
    </section>
    <!-- Nav Section End -->



    <!-- Content Section Start -->

    <section id="content">
            <div class="bg-slate-400 bg-opacity-50 ">
                <h1 class="text-4xl text-center p-5">Equipment</h1>
                <div class="grid md:grid-cols-4 pl-4 pt-5 max-h-full">
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/abcore.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">ABCORE</h1>
                        <p class="p-5">Any machine that brings the lower body up toward the upper 
                        body will target the lower abdominal. As you can see, ab 
                        machines can be utilized to really work your abs.  A lot of 
                        the machines will aid in mobilization, but they can’t help 
                        your deep stabilizing muscles.
                        </p>
                    </div>
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/belly-bench.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">BELLY BENCH</h1>
                        <p class="p-5">
                            Experiment with the angle of the bench, especially for 
                            chest exercises. Use a bench for support. Use 
                            weight-lifting benches for one activity only: lifting 
                            weights. Keep your feet flat on the floor or flat on 
                            the bench — whichever is more comfortable. Don’t put 
                            your feet up in the air, especially if you’re a 
                            beginner.
                        </p>
                    </div>
                </div>
                <div class="grid md:grid-cols-4 pl-4 max-h-full">
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/camber-curl.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">CAMBER CURL</h1>
                        <p class="p-5">
                            The biceps curl is an exercise for the elbow flexors, 
                            which comprise the biceps brachii, brachialis and 
                            brachioradialis. You can emphasize each of these 
                            muscles by using a variety of grips. It is best to do 
                            biceps curls using dumbbells to ensure the elbow 
                            flexors of each arm are being worked to the same 
                            extent.
                        </p>
                    </div>
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/cross-trainer.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">CROSS TRAINER</h1>
                        <p class="p-5">
                            
                            All types of elliptical cross trainer workouts are 
                            ideal for improving your heart health. Low-intensity 
                            cross training is a perfect aerobic exercise that can 
                            strengthen your heart muscles. It reduces the 
                            predisposition to coronary diseases, and it improves 
                            cardiorespiratory fitness at the same time.
                        </p>
                    </div>
                </div>
                <div class="grid md:grid-cols-4 pl-4 max-h-full">
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/latpulldown.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">LAT PULLDOWN</h1>
                        <p class="p-5">
                            The lat pulldown is a compound exercise, meaning it 
                            works several joints at once — and thus, several 
                            muscles. While the latissimus dorsi is the primary 
                            muscle worked, the biceps and muscles of the forearm 
                            act as helpers. Several of the muscles of the rotator 
                            cuff also assist as you pull the bar down.
                        </p>
                    </div>
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/incline-chest press.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">                  
                        <h1 class="text-4xl text-center mb-5">INCLINE CHEST PRESS</h1>
                        <p class="p-5">
                            Incline Bench Press Muscles Worked. The Incline Bench Press 
                            primarily works the clavicular head of the pectoralis major, 
                            or the upper portion of your chest. It also works the anterior 
                            deltoid and the triceps.
                        </p>
                    </div>
                </div>
                <div class="grid md:grid-cols-4 pl-4 max-h-full pb-5">
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110 " src="../assets/shoulder-press.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">
                        
                        <h1 class="text-4xl text-center mb-5">SHOULDER PRESS</h1>
                        <p class="p-5">
                            The shoulder press is primarily performed by muscles in your 
                            shoulder, with help from your chest and arm muscles.Anterior 
                            Deltoid and Shoulder Presses. The deltoid muscles at the top of 
                            your shoulders are one of the prime movers in the shoulder press. 
                            Triceps and Shoulder Presses. Trapezius and Shoulder Presse.
                        </p>
                    </div>
                    <div class="">
                        <img class="transition duration-300 ease-in-out hover:scale-110" src="../assets/trade.jpeg">
                    </div>
                    <div class="bg-blue-300 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500">                  
                        <h1 class="text-4xl text-center mb-5">TRADE MILL</h1>
                        <p class="p-5">
                            A treadmill is a piece of indoor sporting equipment used to allow for the 
                            motions of running or walking while staying in one place.
                        </p>
                    </div>
                </div>
            </div>
    </section>
    <!-- Content Section End -->



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
export default {
    data() {
    return {
      showMenu: false,
    };
  },
}
</script>

<style>

</style>