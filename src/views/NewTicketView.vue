<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import { useTicketStore } from '@/stores/ticket'
import { type Ticket } from '@/types/ticket'
import { TicketStatus } from '@/types/ticketStatus'
import { useRouter } from 'vue-router'

const router = useRouter() 
const toast = useToast();

const ticketStore = useTicketStore()
const title = ref('')
const description = ref('')
const errors = ref({ title: '', description: '' })

const handleSubmit = async (e: Event) => {
    // Reset errors
    errors.value = { title: '', description: '' }
    
    // Validate
    if (!title.value) errors.value.title = 'Title is required'
    if (!description.value) errors.value.description = 'Description is required'
    if (errors.value.title || errors.value.description) return

    const newTicket: Ticket = {
        title: title.value,
        description: description.value,
        status:'PENDING'
    }
    await ticketStore.addTicket(newTicket)
    toast.success('Ticket created successfully')
    router.push('/')
}
</script>

<template>
    <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-2xl font-bold mb-6"> New Ticket</h1>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                     Title
                </label>
                <input
                    id="title"
                    v-model="title"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.title }"
                >
                <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    v-model="description"
                    rows="4"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.description }"
                ></textarea>
                <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
            </div>

            <button
                type="submit"
                class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Create Ticket
            </button>
        </form>
    </div>
</template>

<style scoped>
.new-ticket {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}
</style>