import { CrudDemo } from "@/app/_demo/crud-demo";
import { ServerApiCaller } from "@/app/_demo/server-api-caller";
import { ServerSessionDemo } from "@/app/_demo/server-session-demo";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-[2rem]">
          Create t3 app
          <div className="mt-2">with Davstack</div>
        </h1>

        {/* DEMOS:   */}
        <div className="m-1 flex flex-col items-center gap-2  *:min-w-[350px] *:border *:border-gray-500 *:p-4">
          <ServerApiCaller />
          <ServerSessionDemo />
          <CrudDemo />
        </div>
      </div>
    </main>
  );
}
