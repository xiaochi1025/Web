import { User } from '@/shared/types';

export type UserState = {
  current: User | null;
  isAuthenticated: boolean;
};

export const initialUserState: UserState = {
  current: null,
  isAuthenticated: false,
};

export type UserAction =
  | { type: 'USER_LOGIN'; payload: User }
  | { type: 'USER_LOGOUT' }
  | { type: 'USER_UPDATE'; payload: Partial<User> };

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'USER_LOGIN':
      return { current: action.payload, isAuthenticated: true };
    case 'USER_LOGOUT':
      return { current: null, isAuthenticated: false };
    case 'USER_UPDATE':
      return { ...state, current: state.current ? { ...state.current, ...action.payload } : null };
    default:
      return state;
  }
}
