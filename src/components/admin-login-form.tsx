"use client";
import { useEffect, useState } from "react";
import Input from "./ui/input";

const Loading: React.FC = () => {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <p className="font-bold">Loading{dots}</p>
    </div>
  );
};

export default function AdminLoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form
      action={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 10000);
        console.log("Login", { username, password });
      }}
      className="flex flex-col items-center gap-y-8 rounded-lg bg-white bg-opacity-5 p-10 font-jetbrains backdrop-blur"
    >
      <h1 className="select-none font-fira text-6xl font-extrabold">
        &#123;R&#125;
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col gap-y-4">
            <Input
              name="Username"
              label="Username"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="Password"
              label="Password"
              type="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white hover:cursor-pointer hover:bg-white/20"
            value={"Login"}
          />
        </>
      )}
    </form>
  );
}
