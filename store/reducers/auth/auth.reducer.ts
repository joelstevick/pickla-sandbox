export interface AuthState {
    loggedIn: boolean
}

const initialState: AuthState = {
    loggedIn: false
}
export const authReducer = (state: AuthState = initialState, action: any) => {
    return state;
}