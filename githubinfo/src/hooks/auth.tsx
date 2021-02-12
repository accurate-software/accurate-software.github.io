import React, { createContext, useState, useContext } from 'react';

type AuthContext = {
  logged: boolean;
  signIn(email: string, password: string): void;
  singOut(): void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContext>({} as AuthContext);

const keyLocalStorage = 'githubinfo:logged';

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem(keyLocalStorage);

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === 'isaac_maciel@hotmail.com' && password === '123456') {
      localStorage.setItem(keyLocalStorage, 'true');
      setLogged(true);
    } else {
      alert('Senha ou usuário inválidos!');
    }
  };

  const singOut = () => {
    localStorage.removeItem(keyLocalStorage);
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContext {
  const ctx = useContext(AuthContext);
  return ctx;
}

export { AuthProvider, useAuth };
