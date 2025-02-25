import axios from "axios";

interface IFinanceOverview {
  transaction_id: number;
  transaction_date: Date;
  transaction_amount: number;
  transaction_type: string;
  account_balance: number;
  category: string;
  currency: string;
  account_number: number;
  transaction_description: string;
  transaction_status: string;
}

export default defineEventHandler(async (): Promise<IFinanceOverview[]> => {
  try {
    const response = await axios.get<IFinanceOverview[]>(
      `https://67bd754a321b883e790c8590.mockapi.io/transactions`
    );
    return response.data
  } catch (error) {
    console.error("API Fetch Error:", error); 
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch API",
    });
  }
});
