import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const fetchProjects = async () => {
    try {
        const response = await axiosInstance.get("/projects/");
        return response.data.filter(
            project => project.status === "active" || project.status === "completed"
        );
    } catch (error) {
        console.error("Error fetching projects:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Failed to fetch projects");
    }
};


export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });
};
