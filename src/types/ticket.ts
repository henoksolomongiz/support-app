import type { TicketStatus } from "@/types/ticketStatus";

 
 export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;

 }