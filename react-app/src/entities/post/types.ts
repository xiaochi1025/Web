import { type Post } from '@/api/modules/postApi';

export type PostState = {
  items: Post[];
  loading: boolean;
  error: string | null;
};

export const initialPostState: PostState = {
  items: [],
  loading: false,
  error: null,
};

export type PostAction =
  | { type: 'POSTS_FETCH_START' }
  | { type: 'POSTS_FETCH_SUCCESS'; payload: Post[] }
  | { type: 'POSTS_FETCH_ERROR'; payload: string }
  | { type: 'POST_ADD'; payload: Post }
  | { type: 'POST_UPDATE'; payload: Post }
  | { type: 'POST_DELETE'; payload: number };

export function postReducer(state: PostState, action: PostAction): PostState {
  switch (action.type) {
    case 'POSTS_FETCH_START':
      return { ...state, loading: true, error: null };
    case 'POSTS_FETCH_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'POSTS_FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'POST_ADD':
      return { ...state, items: [...state.items, action.payload] };
    case 'POST_UPDATE':
      return {
        ...state,
        items: state.items.map((post) => (post.id === action.payload.id ? action.payload : post)),
      };
    case 'POST_DELETE':
      return { ...state, items: state.items.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
}
