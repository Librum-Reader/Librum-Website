import { cookies } from "next/headers";
import { fetchUserInfo } from "./apiFunctions";

export const getURL = () => {
    let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ?? // Automatically set by Vercel.
        'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}`;
    return url;
};

export async function getUser() {
    const userToken = cookies().get("token").value;
    const userinfo = await fetchUserInfo(userToken);

    return userinfo;
}