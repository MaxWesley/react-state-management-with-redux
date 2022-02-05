import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface FormLoginProps {
  username: string
  password: string
  isInvalidUsername: string
  isInvalidPassword: string
}

const initialState: FormLoginProps = {
  username: '',
  password: '',
  isInvalidUsername: '',
  isInvalidPassword: ''
}

export const formLogin = createSlice({
  name: 'formLogin',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    checkIfIsInvUsername: (state, action: PayloadAction<string>) => {
      let password = action.payload
      
      if(password.length === 0) {
        state.isInvalidUsername = 'Necessário informar um usuário.'
        return;
      }

      if(password.includes(' ')) {
        state.isInvalidUsername = 'Não deve possuir caractere em branco.'
        return;
      }

      state.isInvalidUsername = '';
    },
    checkIfIsInvalidPassword: (state, action: PayloadAction<string>) => {
      let password = action.payload
      
      if(password.length === 0) {
        state.isInvalidPassword = 'Necessário informar uma senha.'
        return;
      }
      
      if(password.includes(' ')) {
        state.isInvalidPassword = 'Não deve possuir caractere em branco.'
        return;
      }

      state.isInvalidPassword = '';
    }
  }
});

export const { 
  setPassword, 
  setUsername,
  checkIfIsInvUsername,
  checkIfIsInvalidPassword
} = formLogin.actions

export const selectFormLogin = (state: RootState) => state.formLogin

export default formLogin.reducer