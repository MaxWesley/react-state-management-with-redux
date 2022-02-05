import "./index.module.css";
import { FormEvent, useEffect, useMemo } from "react";

import { checkIfIsInvalidPassword, checkIfIsInvUsername, setPassword, setUsername } from "../../features/formLogin";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

function FormLogin() {
  const dispatch = useAppDispatch();
  
  const {
    username,
    password,
    isInvalidUsername,
    isInvalidPassword
  } = useAppSelector(state => state.formLogin);

  const handleChangeUsername = (event: FormEvent<HTMLInputElement>) => {
    let changeUsername = event.currentTarget.value

    dispatch(setUsername(changeUsername))
    dispatch(checkIfIsInvUsername(changeUsername))
  }
  
  const handleChangePassword = (event: FormEvent<HTMLInputElement>) => {
    let changePassword = event.currentTarget.value

    dispatch(setPassword(event.currentTarget.value))
    dispatch(checkIfIsInvalidPassword(changePassword))
  }

  const disabledButtonSubmit = useMemo(() => {
    if(isInvalidPassword || isInvalidUsername) {
      return true;
    }

    return false;
  }, [isInvalidPassword, isInvalidUsername])

  useEffect(() => {
    dispatch(checkIfIsInvUsername(''))
    dispatch(checkIfIsInvalidPassword(''))
  }, []);

  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
        />
        {isInvalidUsername && <p>{isInvalidUsername}</p>}
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        {isInvalidPassword && <p>{isInvalidPassword}</p>}
        <button type="submit" disabled={disabledButtonSubmit}>Sig-in</button>
        <button>Reset fields</button>
      </form>
    </div>
  );
}

export { FormLogin }; 