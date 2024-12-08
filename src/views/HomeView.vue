<template>
    <div class="ticket-list"> 
        <ListView :tickets="tickets" />
    </div>
</template>

<script setup lang="ts"> 
import { useTicketStore } from '@/stores/ticket'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import ListView from '@/components/common/ListView.vue'

const ticketStore = useTicketStore() 
const { getTicket: tickets } = storeToRefs(ticketStore)

onMounted(() => {

    ticketStore.fetchTicket()
})
</script>

<style scoped>
.ticket-list {
    padding: 20px;
}


</style> 
