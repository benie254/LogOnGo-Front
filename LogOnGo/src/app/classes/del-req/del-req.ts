export class DelReq {
    id?: number;
    log_id: number;
    date: string;
    date_requested: string;
    transaction_no: number;
    customer: string;
    customer_no: number;
    amount: number;
    to_bank: number;
    eod_reading: number;
    eod_yesterday: number;
    litres_sold: number;
    daily_amount: number; 
    bal: number;
    card_name: string;
    card_no: number;
    logged_by: string;
    user: string;
    admin: string;
    admin_email: string;
}
