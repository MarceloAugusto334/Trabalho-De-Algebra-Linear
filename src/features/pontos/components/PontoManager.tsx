"use client";

import PontoInput from "@/features/pontos/components/PontoInput";
import PontoList from "@/features/pontos/components/PontoList";
import PontoTrans from "@/features/pontos/components/PontoTrans";

export default function PontoManager() {

  return (
    <aside className="h-full w-80 bg-background border-r border-border flex flex-col p-6 shadow-lg z-10 shrink-0 transition-colors duration-200">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-foreground">
            Plano Cartesiano
          </h2>
        </div>
        <PontoTrans/>
        <PontoInput />

        <PontoList />
      </div>
    </aside>
  );
}
