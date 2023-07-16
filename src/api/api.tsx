import axios, { AxiosInstance } from 'axios';

export function axiosInstance (): AxiosInstance {
   return axios.create({
        baseURL: "https://api.storyblok.com/v2/cdn/stories",
        params: {
            token: process.env.NEXT_STORYBLOK_TOKEN,
            version: "draft",
        }, timeout: 5000
    })
}

export async function fetchAllPosts(per_page: number, page: number) {
    const {data} = await axiosInstance().get("/", {params: {page, per_page}})
    return data?.stories

}

export async function fetchPost (slug: string) {
    const  {data} = await axiosInstance().get(`/posts/${slug}`)
    return data
    
}

export async function fetchAllPostsSlugs (per_page: number, page: number) {
    const data = await fetchAllPosts(per_page, page);
    const slugs = data.map((post: Record<string, any>) => `/${post.full_slug}`)
    return slugs
}