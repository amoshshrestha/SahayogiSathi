import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const fetchImages = async () => {
    try {
        const response = await axiosInstance.get("/gallery/");
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Failed to fetch projects");
    }
};


export const useGallery = () => {
    return useQuery({
        queryKey: ['gallery'],
        queryFn: fetchImages,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });
};

