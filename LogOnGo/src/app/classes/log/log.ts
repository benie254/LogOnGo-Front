export class Log {
    id?: number;
    date: string;
    formatted_date: string;
    eod_reading_lts: number;
    eod_reading_yesterday: number;
    total_litres_sold: number;
    amount_earned_today: number;
    fuel: any;
    fuel_type: string;
    price_per_litre: number;
    pump: number; 
    pump_name: string;
    logged_by: string;
    user_id: number;
    balance: number;
    balance_yesterday: number;
    updated_balance: number;
    first_logged: string;
    last_edited: string;
}
