import apiClient from '@/api/client/httpClient';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const postApi = {
  async getPosts(): Promise<Post[]> {
    const response = await apiClient.get<Post[]>('/posts');
    return response.data;
  },

  async getPost(id: number): Promise<Post> {
    const response = await apiClient.get<Post>(`/posts/${id}`);
    return response.data;
  },

  async createPost(data: { userId: number; title: string; body: string }): Promise<Post> {
    const response = await apiClient.post<Post>('/posts', data);
    return response.data;
  },

  async updatePost(id: number, data: Partial<Post>): Promise<Post> {
    const response = await apiClient.put<Post>(`/posts/${id}`, data);
    return response.data;
  },

  async deletePost(id: number): Promise<void> {
    await apiClient.delete(`/posts/${id}`);
  },
};
