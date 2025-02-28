import { useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";


const sendMessage = async (data) => {
    try {
        const response = await axiosInstance.post("/messages/", data);
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};

export const useSendMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: sendMessage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["messages"] });
        },
        onError: (error) => {
            console.error("Error sending message:", error);
        },
    });
};