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
                    >Instructions
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
                  <router-link to="/equipment"> Equipment </router-link>
                </li>
                  <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
                    <router-link to="" exact-active-class="text-red-900"> Instructions </router-link>           
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
            <!-- Navigation Section End -->




            <!-- Rules Section Start -->
            <section id="rules">
              <div class="bg-slate-400 bg-opacity-50 max-h-full">
                
                <div>
                  <div class="grid md:grid-cols-2 gap-5 pt-10 md:pt-20 pl-4 pr-4 pb-10 ">
                    <div class="">
                        <img src="../assets/ins.jpeg">
                    </div>
                    <div>
                        <ul class="font-mono">
                            <li>
                                <p class="font-bold">1. Wear appropriate gym attire:</p> Specific shoe just for gym, Proper gym attire includes comfortable and breathable clothing that allows you to move freely during exercise. Avoid wearing clothing with zippers, buttons, or any sharp objects that may damage the gym equipment or cause injury.
                            </li>
                            <li>
                                <p class="font-bold">2. Always wipe down equipment after use:</p> Be considerate and wipe down equipment with a disinfectant spray and a clean towel after use to prevent the spread of germs and maintain hygiene.
                            </li>
                            <li>
                                <p class="font-bold">3. Use equipment safely:</p> Always follow the instructions provided for each piece of equipment and avoid using equipment that is broken or malfunctioning. If you are unsure of how to use a machine, ask a gym instructor for guidance.
                            </li>
                            <li>
                                <p class="font-bold">4. Don't hog equipment:</p> Be mindful of other gym-goers and avoid occupying a machine for an extended period of time. Limit your rest periods to a reasonable amount of time and allow others to use the equipment.
                            </li>
                            <li>
                                <p class="font-bold">5. Keep noise levels down:</p> Avoid excessive noise or loud conversations that can disturb others in the gym. Remember that not everyone has the same workout preferences or music taste as you do.
                            </li>
                            <li>
                                <p class="font-bold">6. Use headphones for music:</p> If you want to listen to music during your workout, use headphones instead of playing music out loud on your phone or speaker.
                            </li>
                            <li>
                                <p class="font-bold">7. Stay hydrated:</p> Bring a water bottle and drink plenty of water before, during, and after your workout to stay hydrated.
                            </li>
                            <li>
                                <p class="font-bold">8. Be respectful to others:</p> Respect others in the gym by being polite, courteous, and avoiding any aggressive or confrontational behavior.
                            </li>
                            <li>
                                <p class="font-bold">9. Follow gym etiquette:</p> Follow any specific rules or etiquette guidelines set by the gym, such as re-racking weights, not taking photos, or avoiding certain areas during peak hours.
                            </li>
                            <li>
                                <p class="font-bold">10. Seek help when needed:</p> If you have any questions or concerns about gym etiquette or equipment use, seek help from gym staff or instructors who are there to assist you.
                            </li>
                        </ul>                        
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-3 pl-4 pt-10 md:pt-20 max-h-full pb-10 bg-slate-400 bg-opacity-50">
                    <div class="md:pt-20">
                        <img src="../assets/first.jpeg">
                    </div>
                    
                    <div>
                        <h1 class="text-4xl text-center mb-5">As a Beginner</h1>
                        <ul>
                            <li>
                                <p class="font-bold">Start with a warm-up:</p>
                                Begin your workout with a 5-10 minute warm-up to get your heart rate up and prepare your body for exercise. You can use a treadmill, stationary bike, or elliptical machine for this.
                            </li>
                            <li>
                                <p class="font-bold">Focus on form:</p>
                                It's essential to use proper form when performing exercises to avoid injury and get the most out of your workout. Start with light weights or no weights at all and focus on getting the technique right before increasing the intensity.                            </li>
                            <li>
                                <p class="font-bold">Start with simple exercises:</p>
                                Don't try to do too much too soon. Start with simple exercises like squats, lunges, push-ups, and sit-ups before progressing to more advanced movements.                            </li>
                            <li>
                                <p class="font-bold">Gradually increase intensity:</p>
                                As your fitness level improves, gradually increase the intensity of your workout by increasing the weight, sets, or reps.                            </li>
                            <li>
                                <p class="font-bold">Rest and recover:</p>
                                It's important to allow your body time to rest and recover after a workout. Aim for at least one rest day per week and avoid working the same muscle group two days in a row.                            </li>
                            <li>
                                <p class="font-bold">Mix up your routine:</p>
                                Keep your workouts interesting and challenging by mixing up your routine. Try different exercises, equipment, or workout classes to keep your body and mind engaged.                            </li>
                            <li>
                                <p class="font-bold">Don't compare yourself to others:</p>
                                Everyone has a different fitness level and progress at their own pace. Don't compare yourself to others in the gym and focus on your own goals and progress.                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                
              </div>
            </section>
            <!-- Rules Section End -->



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
};
</script>