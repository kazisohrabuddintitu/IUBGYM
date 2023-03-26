<template>
    <main>
        <div class="flex justify-center items-center min-h-screen bg-slate-300">
            <div class="h-auto w-80 bg-pink-600 p-3 rounded-lg text-white">
                <p class="text-xl font-semibold grid place-items-center"><img src="../assets/bKash-Payment.png"></p>
                <div class="text-center mt-6 py-3 bg-pink-700 rounded border-2 border-pink-700 relative justify-center block"> 
                    <div>Merchant : IUB</div>
                    <div>Invoice no : 21279615</div>
                    <div>Amount : BDT 500</div>
                </div>
                
                <div class="w-60  ml-6">
                    <div class="input_text mt-8 relative"> <input type="text" class="h-8 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="e.g 01XXXXXXXXX" /> <span class="absolute text-sm -top-6">Your bKash account number</span></div>
                </div>
                
                <div class="flex items-center mt-8 ml-3 mb-2">
                    <input id="link-checkbox" v-model="isChecked" type="checkbox" value="" class="w-4 h-4 border-gray-300 bg-black rounded focus:ring-white dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-white dark:text-gray-300">I agree with the <a href="#" class="text-white dark:text-white underline">terms and conditions</a>.</label>
                </div>
    
                <div class="flex justify-center items-center"> 
                    <button class="flex-1 py-1 px-3 pay  bg-pink-700 text-white mb-3 hover:bg-pink-500 rounded-lg w-1/2 cursor-pointer transition-all"><router-link to="/membership">PROCEED</router-link></button>
                    <button  class="flex-1 ml-4 py-1 px-3 pay bg-pink-700 text-white mb-3 hover:bg-pink-500 rounded-lg w-1/2 cursor-pointer transition-all"><router-link to="/membership">CLOSE</router-link></button>          
                    <!-- <router-link v-if="isChecked === 'true'" to="/membership"><button  class="flex-1 ml-4 py-1 px-3 pay bg-pink-700 text-white mb-3 hover:bg-pink-500 rounded-lg w-1/2 cursor-pointer transition-all">PROCEED</button></router-link>
                    <router-link v-if="isChecked === 'true'" to="/membership"><button  class="flex-1 ml-4 py-1 px-3 pay bg-pink-700 text-white mb-3 hover:bg-pink-500 rounded-lg w-1/2 cursor-pointer transition-all">CLOSE</button></router-link> -->
                </div>
                
            </div>
        </div>
    </main>
</template>

<script>
var inn;

export default {
    data() {
    return {
      isChecked: false
    }
  }
}
</script>

<style>

</style>