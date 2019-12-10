export interface PostProps {
    id:      number;
    title:   string;
    slug:    string;
    details: string;
    image:   string;
    date:    string;
    user:    User;
}

export interface User {
    name:            string;
    profile_picture: string;
}
