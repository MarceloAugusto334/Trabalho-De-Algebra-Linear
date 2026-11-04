"use client";

import PontoInput from "@/components/pontos/PontoInput";
import PontoList from "@/components/pontos/PontoList";
import FuncaoVariaveisInput from "./FuncaoVariaveisInput";

export default function RegressaoManager() {

  return (
    <aside className="h-full w-80 bg-background border-r border-border flex flex-col p-6 shadow-lg z-10 shrink-0 transition-colors duration-200">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-foreground">
            Regressão Linear
          </h2>
        </div>
        <FuncaoVariaveisInput />
        <PontoInput />

        <PontoList />
      </div>
    </aside>
  );
}
