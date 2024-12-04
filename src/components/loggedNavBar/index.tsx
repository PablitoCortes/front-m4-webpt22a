import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import { useUser } from "@/context/userContext";

const loggedNavBar = () => {
  const { user, setUser } = useUser();

  const handleLogout = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.removeItem("user");
    setUser(null);
    redirect("/login");
  };

  return (
    <nav className="flex justify-between w-[100%] items-center p-2 bg-[#D35400] text-[#4A2C2A] text-lg">
      <div className="flex gap-3 items-center border-b-2 border-[#4A2C2A]">
        <Link href="/products">
          <button className="text-text Londrina">Products</button>
        </Link>
        <button>Support</button>
        <button>Contact</button>
      </div>
      <div className="flex w-auto justify-center items-center">
        {" "}
        <input
          className="w-[600px] p-2 rounded-lg border border-gray-300 text-text"
          type="text"
          placeholder="Buscar productos..."
        />{" "}
      </div>
      <div className="flex gap-3 items-center border-b-2 border-[#4A2C2A]">
        <span>Username</span>
        <button>Dashboard</button>
        <Link href="/register">
          <button onClick={handleLogout}>Log Out</button>
        </Link>
      </div>
    </nav>
  );
};

export default loggedNavBar;
