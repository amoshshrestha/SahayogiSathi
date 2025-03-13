import { useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";


const subscribeWebsite = async (data) => {
    try {
        const response = await axiosInstance.post("/subscriptions/", data);
        return response.data;
    } catch (error) {
        console.error("Error during subscription:", error);
        throw error;
    }
};

export const useSubscription = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: subscribeWebsite,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
        },
        onError: (error) => {
            console.error("Error during subscription:", error);
        },
    });
};