import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://official-joke-api.appspot.com';

export const apiClient = {
    async get<T>(path: string): Promise<AxiosResponse<T>> {
        try {
            const response = await axios.get<T>(`${BASE_URL}${path}`);
            return response;
        } catch (error) {
            const err = error as AxiosError<T>;
            if (err.response) {
                return err.response;
            }
            throw err;
        }
    }
};
