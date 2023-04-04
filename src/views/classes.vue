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
                >classes
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
                <router-link to="/"> Home </router-link>
            </li>
            <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-800">          
                <router-link to="" exact-active-class="text-red-900"> Classes </router-link>
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
        <section id="content" class="bg-slate-400 bg-opacity-50">
            <div class="p-6">
                <h1 class="text-4xl text-center mb-5 font-bold">Classes</h1>
                <div class="grid md:grid-cols-3 gap-2">
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/yoga.jpeg" alt="Yoga" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Yoga</h2>
                            <p class="text-gray-700 text-sm">
                                Yoga is a holistic practice that originated in ancient India and has been 
                                passed down for thousands of years. It involves a combination of physical postures, breathwork, and meditation, 
                                aimed at promoting physical, mental, and spiritual well-being.
                            </p>
                        </div>
                    </div>
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/cardio.webp" alt="cardio" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 rounded-lg pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Cardio</h2>
                            <p class="text-gray-700 text-sm">
                                Cardiovascular exercises help you in many ways. It helps to 
                                burn the stored fat, it also helps to improve cholesterol levels. To improve 
                                cholesterol levels, as well as lower your blood pressure and risk for heart attack 
                                and stroke, the American Heart Association (AHA) recommends an average of 
                                40 minutes of moderate- to vigorous-intensity cardio exercises.
                            </p>
                        </div>
                    </div>
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/fatloss.jpeg" alt="fatloss" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 rounded-lg pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Fat loss</h2>
                            <p class="text-gray-700 text-sm">
                                Through different methods and ways, using various techniques which are obviously 
                                authentic, we help the clients to lose the fats that are stored in their body.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 gap-2 pt-4">
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/bodybuilding.jpeg" alt="bodybulding" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Body building</h2>
                            <p class="text-gray-700 text-sm">
                                Bodybuilding is the use of progressive resistance exercise to control 
                                and develop one’s musculature for aesthetic purposes.
                            </p>
                        </div>
                    </div>
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/hit.webp" alt="hit" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 rounded-lg pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Hit training</h2>
                            <p class="text-gray-700 text-sm">
                                High-intensity interval training (HIIT), also called high-intensity intermittent 
                                exercise (HIIE) or sprint interval training (SIT), is a form of interval training, a 
                                cardiovascular exercise strategy alternating short periods of intense anaerobic exercise 
                                with less-intense recovery periods, until too exhausted to continue.
                            </p>
                        </div>
                    </div>
                    <div class=" bg-gray-200 shadow-xl rounded-lg hover:scale-105 transition duration-300">
                        <img src="../assets/weightlift.jpeg" alt="weight" class="w-full h-64 object-cover rounded-lg">
                        <div class="bg-gray-200 rounded-lg pl-2 pr-2">
                            <h2 class="text-lg font-medium mb-2 text-gray-700">Weightlifting</h2>
                            <p class="text-gray-700 text-sm">
                                Weight training is a common type of strength training for developing the strength 
                                and size of skeletal muscles. It utilizes the force of gravity in the form of weighted 
                                bars, dumbbells or weight stacks in order to oppose the force generated by muscle through 
                                a concentric or eccentric contraction. Weight training uses a variety of specialized 
                                equipment to target specific muscle groups and types of movement.
                            </p>
                        </div>
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
import {ref} from "vue";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>