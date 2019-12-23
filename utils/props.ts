export interface PostProps {
    id:      number;
    title:   string;
    slug:    string;
    content: string;
    image:   string;
    created_at:    string;
    username:    string;
    userImage: string
}

export interface PageProps {
    content: string,
    id: string
}

export interface User {
    name:            string;
    profile_picture: string;
}