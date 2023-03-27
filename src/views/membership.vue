<template>
  <main class="min-h-screen">
    
    <!-- Header Section Start -->
    <section id="header">
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
            >Membership
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
            <router-link to=""> Membership </router-link>
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/instructions"> Instructions </router-link>           
          </li>
          <li class="text-sm font-bold text-gray-300 md:text-gray-800 md:hover:text-gray-600 hover:text-sky-400">
            <router-link to="/notice"> Notice Board </router-link>
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
    

    <!-- Membership Process Section Start -->
    <section id="content" class="bg-opacity-30 bg-slate-500">
        <h1 class="grid place-items-center font-bold pt-5 text-lg text-iub-color-primary">Membership Process</h1>
        <h1 class="pl-10 pt-5">Membership fees 500tk only</h1>
        <form class="w-full max-w-xl p-10">
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
              <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
                IUB Email
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-email" type="email" value="">
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
              <select id="gender" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ">
                <option selected>Select your time slot</option>
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
            <div class="md:w-1/3">
              <label class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-age">
                Payment
              </label>
            </div>           
            <div class="md:w-2/3">
              <select v-model="payment" id="payment" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white">
                <option selected value="auto">Select your payment method</option>
                <option value="card" >Card</option>
                <option value="bkash">Bkash</option>
              </select>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <router-link v-if="payment === 'card'" to="/card">
              <button class="shadow focus:shadow-outline focus:outline-none py-2 px-4 rounded hover:bg-slate-400 bg-slate-100" type="submit">
                Submit & Payment
              </button>
              </router-link>

              <router-link v-else-if="payment === 'bkash'" to="/bkash">
              <button class="shadow focus:shadow-outline focus:outline-none py-2 px-4 rounded hover:bg-slate-400 bg-slate-100" type="submit">
                Submit & Payment
              </button>
              </router-link>
            </div>
          </div>
        </form>
    </section>
    <!-- Membership Process Section End -->


    <!-- Members File Section Start -->
    <section id="memberfile" class="bg-opacity-30 bg-slate-500">

        <div class="max-w-8xl mx-auto p-10">
          <h1 class="grid place-items-center text-lg font-bold italic hover:not-italic">Members</h1>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="p-4">
              <label for="table-search" class="sr-only">Search</label>
              <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                  <input type="text" id="table-search" v-on:keyup=" memberFunction()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search member">
                </div>
              </div>
              <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400" id="memberTable">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>

                    <th scope="col" class="px-6 py-3">
                      Member name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Age
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Gender
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Time Slot
                    </th>
                    <th scope="col" class="px-6 py-3 w-250px">
                      Picture
                    </th>
                    <th scope="col" class="px-6 py-3 w-250px">
                      Update
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Kazi Sohrab Uddin Titu
                    </td>
                    <td class="px-6 py-4">
                      1931219
                    </td>
                    <td class="px-6 py-4">
                      23
                    </td>
                    <td class="px-6 py-4">
                      Male
                    </td>
                    <td class="px-6 py-4">
                      10:00-11:00
                    </td>
                    <td class="px-6 py-4 grid place-items-center ">
                      <img src="../assets/kazisohrab.jpg" alt="sohrab" width="100">
                    </td>
                    <td class="px-6 py-4">
                      <a href="#content" class="hover:text-iub-color-primary">Edit</a>
                    </td>

                  </tr>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Asif Jobair 
                    </td>
                    <td class="px-6 py-4">
                      1931404
                    </td>
                    <td class="px-6 py-4">
                      22
                    </td>
                    <td class="px-6 py-4">
                      Male
                    </td>
                    <td class="px-6 py-4">
                      13:00-14:00
                    </td>
                    <td class="px-6 py-4 grid place-items-center ">
                      <img src="../assets/asif.jpg" alt="asif" width="100">
                    </td>
                    <td class="px-6 py-4">
                      <a href="#content" class="hover:text-iub-color-primary">Edit</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Arpon Paul 
                  </td>
                  <td class="px-6 py-4">
                    1921421
                  </td>
                  <td class="px-6 py-4">
                    24
                  </td>
                  <td class="px-6 py-4">
                      Male
                    </td>
                    <td class="px-6 py-4">
                      09:00-10:00
                    </td>
                  <td class="px-6 py-4 grid place-items-center ">
                    <img src="../assets/arpon.jpg" alt="arpon" width="100">
                  </td>
                  <td class="px-6 py-4">
                      <a href="#content" class="hover:text-iub-color-primary">Edit</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Miraz Or Rashid Alvee
                  </td>
                  <td class="px-6 py-4">
                    1931055
                  </td>
                  <td class="px-6 py-4">
                    23
                  </td>
                  <td class="px-6 py-4">
                      Male
                    </td>
                    <td class="px-6 py-4">
                      13:00-14:00
                    </td>
                  <td class="px-6 py-4 grid place-items-center ">
                    <img src="../assets/alvi.jpg" alt="alvi" width="100">
                  </td>
                  <td class="px-6 py-4">
                      <a href="#content" class="hover:text-iub-color-primary">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </section>
    <!--  Members File Section End-->


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
      payment: 'auto',
    };
  },
  methods:{
    memberFunction(){
      // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("table-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("memberTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
    }
  }
};

</script>
