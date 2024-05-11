"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <section>
      <h1>UseRouter</h1>
      <button onClick={() => router.push("about")} className="btn">
        Got to About Page
      </button>
      <button onClick={() => router.push("login")} className="btn ml-5">
        Login
      </button>
      <button onClick={() => router.push("notes")} className="btn ml-5">
        Notes
      </button>
    </section>
  );
};

export default Home;
