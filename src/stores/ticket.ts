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
            await post<Ticket>('/api/tickets', ticket);
            this.fetchTicket();
        },
        async fetchTicket() {
            let response = await get<Ticket[]>('/api/tickets');
            this.ticket = response;
        }
    },
    getters: {
        getTicket: (state) => state.ticket
    }


})