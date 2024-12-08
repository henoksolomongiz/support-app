<template>
    <div> 
      <ul  class="mt-4 space-y-4">
        <li
          v-for="ticket in tickets"
          :key="ticket.id"
          class="p-4 border rounded-lg shadow-sm hover:bg-gray-50 flex justify-between items-center gap-4"
        >
          <div class="flex-1">
            <div class="flex items-center gap-3">
              <h3 class="text-lg font-semibold">{{ ticket.title }}</h3>
          
            </div>
            <p class="text-sm text-gray-600 mt-1">{{ ticket.description }}</p>
          </div>
          <span
                class="px-3 py-1 text-sm rounded-full font-medium"
                :class="{
                  'bg-green-100 text-green-700': ticket.status === 'CLOSED',
                  'bg-yellow-100 text-yellow-700': ticket.status === 'PENDING',
                  'bg-red-100 text-red-700': ticket.status === 'CREATED',
                  'bg-gray-100 text-gray-700': !ticket.status
                }"
              >
                {{ ticket.status || 'No Status' }}
            </span>
        </li>
      </ul>  
    </div>
  </template>
  <script setup lang="ts"> 
  import { Ticket } from '@type/ticket'; 
  import { TicketStatus } from '@/types/ticketStatus';
  defineProps<{
    tickets: Ticket[]; 
  }>();
  
  </script>

  <style scoped>
.ticket-item {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
}

.status {
    color: #666;
    font-size: 0.9em;
}
</style>
  