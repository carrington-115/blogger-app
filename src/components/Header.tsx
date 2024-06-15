"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className="w-full container px-20 py-12 flex justify-between">
      <Link href="/">
        <h1 className="text-5xl font-sans font-bold">Blogger</h1>
      </Link>
      <section className="flex gap-8 items-center">
        <Link
          href="/blogs"
          className="px-5 py-2 rounded-md bg-transparent text-white hover:bg-gray-500"
        >
          Blogs
        </Link>
        <button
          className="bg-gray-100 hover:bg-white text-black px-5 py-2 rounded-md"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className="bg-gray-100 hover:bg-white text-black px-5 py-2 rounded-md"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </section>
    </header>
  );
}

export default Header;
