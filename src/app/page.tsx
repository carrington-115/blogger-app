import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="w-screen container flex flex-col items-center mt-20">
        <h3 className="text-center text-5xl font-medium  text-gray-300">
          Create and manage your blogs from
          <h1 className="leading-relaxed text-7xl font-bold text-white bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Google Workspace
          </h1>
        </h3>
        <p className="mt-8 text-xl text-gray-200 w-1/2 leading-tight underline text-center underline-offset-4">
          With blogger all you need is an account and a google sheet, then you
          can start publishing your blogs
        </p>
        <section className="w-2/5 flex justify-between my-10">
          <button className="px-5 py-2 text-xl text-black font-medium bg-white rounded-full">
            Blogs dashboard
          </button>
          <button className="px-5 py-2 text-xl text-white rounded-full font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500">
            Get Started
          </button>
        </section>
      </section>
    </main>
  );
}
