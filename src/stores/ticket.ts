import { defineStore } from "pinia";
import { type Ticket } from "@/types/ticket"
import { useHttp } from "@/composables/useHttp";
import type { TicketStatus } from "@/types/ticketStatus";

const { get, post } = useHttp();

export const useTicketStore = defineStore("ticket", {
    state: () => ({
        ticket: [] as Ticket[]
    }),
    actions: {
        async addTicket(ticket: Ticket) {
            await post<Ticket>('/tickets', ticket);
        },
        async fetchTicket() {
            let response = await get<Ticket[]>('/tickets');
            this.ticket = response.reverse();
        }
    },
    getters: {
        getTicket: (state) => state.ticket
    }


})