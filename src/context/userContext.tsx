"use client";
import { createContext, useEffect, useState } from "react";
import { User } from "@/interfaces/User";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: () => boolean;
}

//crear contexto

export const userContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  isLoggedIn: () => false,
});

//crear provider

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  //Dentro del provider generar estados
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const isLoggedIn = () => {
    return user !== null;
  };
  return (
    <userContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
