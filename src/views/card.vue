<template>
    <main>
        <div class="flex justify-center items-center min-h-screen bg-slate-300">
            <div class="h-auto w-80 bg-white p-3 rounded-lg">
                <p class="text-xl font-semibold grid place-items-center">Payment Details</p>
                <div class="input_text mt-6 relative"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="Name" /> <span class="absolute left-0 text-sm -top-4">Cardholder Name</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
                <div class="input_text mt-8 relative"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span class="absolute left-0 text-sm -top-4">Card Number</span> <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
                <div class="mt-8 flex gap-5 ">
                    <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span class="absolute left-0 text-sm -top-4">Expiry</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                    <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span class="absolute left-0 text-sm -top-4">CVV</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
                </div>
                <p class="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount: 500tk</p>
                <div class="flex justify-center mt-4"> <button class="focus:shadow-outline focus:outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all"><router-link to="/membership"> Pay </router-link></button> </div>
            </div>
        </div>
    </main> 
</template>

<script>
export default {

}
</script>

<style>

</style>