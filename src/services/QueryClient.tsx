import { QueryClient } from "@tanstack/react-query";
import { dbClient, getAllStudents } from "./sb";

/**
 * New instance of QueryClient for QueryProvider
 */
export const queryClient = new QueryClient();


export const prefetch = {
    prefetchStudents: async function prefetchPosts() {
        const posts = await queryClient.prefetchQuery(['allPosts'], getAllStudents)
      
        return posts 
        
    },
}