import { COST_DATES_API_URL } from '@/constants/appConstants';
import type { CostDate } from '@/types/appType';
import axios from 'axios';

export const getCostDate = async (): Promise<CostDate[]> => {
  const result = await axios.get<CostDate[]>(COST_DATES_API_URL);
  return result.data;
};

export const postCostDate = async (costDate: CostDate): Promise<CostDate[]> => {
  const result = await axios.post<CostDate[]>(COST_DATES_API_URL, costDate);
  return result.data;
};
