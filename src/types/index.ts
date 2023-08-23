export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface ListItem {
  department: string;
  sub_departments: string[];
}

export interface GridTableProps {
  posts: Post[];
}
