import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
      </div>
    </main>
  );
}
