import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-950">
      {/* Container principal */}
      <div className="fixed inset-0 w-full md:w-7/12 md:left-auto overflow-hidden">
        {/* Div para o shadow inset */}
        <div className="absolute inset-0 shadow-[inset_0px_30px_400px_100px_#09090c] md:shadow-[inset_400px_30px_400px_100px_#09090c] z-10" />

        {/* Imagem */}
        <Image
          src="/static/images/jason-leung-f6wzKtGiBb0-unsplash.jpg"
          alt="background"
          fill
          priority
          quality={100}
          className="object-cover md:opacity-80"
        />
      </div>
      <LoginForm />
    </div>
  );
}
