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
              md:text-xl
              italic hover:not-italic
            "
            >
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
            <router-link to="/notice"> Notice Board </router-link>
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
    <section id="content" class="">
        <div class="bg-classbg bg-no-repeat bg-cover w-full h-full grid md:grid-cols-3 p-10">
        <div class="col-start-2 col-span-2">
            <form class="w-full max-w-xl p-10 bg-white rounded-lg">
                <h1 class="text-center mb-5 font-bold">Trainers</h1>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-given-name">
                        Given Name
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-given-name" type="text" value="">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-sure-name">
                        Surename
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-sure-name" type="text" value="">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-sure-name">
                        ID
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-sure-name" type="text" value="">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-age">
                        Age
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-age" type="number" value="">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-age">
                        Gender
                    </label>
                    </div>           
                    <div class="md:w-2/3">
                    <select id="gender" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ">
                        <option selected>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="trans">Transgender</option>
                    </select>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-age">
                    Available Time Slot
                    </label>
                </div>           
                <div class="md:w-2/3">
                    <select id="gender" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " multiple>
                    
                    <option value="1">08:00-09:00</option>
                    <option value="2">09:00-10:00</option>
                    <option value="3">10:00-11:00</option>
                    <option value="4">11:00-12:00</option>
                    <option value="5">12:00-13:00</option>
                    <option value="6">13:00-14:00</option>
                    <option value="7">14:00-15:00</option>
                    <option value="8">15:00-16:00</option>
                    <option value="9">16:00-17:00</option>
                    </select>
                </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3 ">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-file" >
                        Upload Photo
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-file" type="file" value="">   
                    </div>    
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    <button @click="refreshPage" class="shadow focus:shadow-outline focus:outline-none py-2 px-4 rounded hover:bg-slate-400 bg-slate-100" type="submit">
                        Submit
                    </button>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3 ">
                    <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-file" >
                        Upload Notice
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-file" type="file" value="">   
                    </div>    
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    
                    <button @click="refreshPage" class="shadow focus:shadow-outline focus:outline-none py-2 px-4 rounded hover:bg-slate-400 bg-slate-100" type="submit">
                        Submit
                    </button>
                    </div>
                </div>
          </form>
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
    
  methods: {
    refreshPage() {
      window.location.reload();
    }
  }
};

</script>

<style>

</style>