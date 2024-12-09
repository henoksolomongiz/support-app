<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Title Section -->
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-gray-800">Support Ticket</h1>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-gray-900"
            :class="{ 'text-blue-600 font-semibold': $route.name === 'my-tickets' }"
          >
            My Tickets
          </router-link>
          <router-link 
            to="/new-ticket" 
            class="text-gray-600 hover:text-gray-900"
            :class="{ 'text-blue-600 font-semibold': $route.name === 'new-ticket' }"
          >
            New Ticket
          </router-link>
         
        </div>

       
      </div>
    </div>
  </nav>
</template>
   
   
   