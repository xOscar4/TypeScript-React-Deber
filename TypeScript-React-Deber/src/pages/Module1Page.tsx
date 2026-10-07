import { Link } from "react-router-dom";
import { CalcularDanio } from "../utils/CalcularDanio";
export const Module1Page = () => {
  const saga: string = "Saiyan Saga";
  const horasEntrenamiento: number = 36;

  const guerrero:string = "Goku";
  const ki:number=9001;
  const enCombate:boolean=true;

  const equipoZ:string[]=["Goku", "Vegeta", "Piccolo", "Gohan", "Krillin"];

  const coordenadas:[number, number] = [42,17];

  //function CalcularDanio(base:number, multiplicador:number):number{
  //  return base * multiplicador;
  //}

  let transformacion:string | null = null;
  transformacion = "Super Saiyan";

  let estrategia:string | undefined = undefined;
  estrategia = "Transformarse a UI";

  let variableLibre:any = "Semilla del ermitanio";
  variableLibre = 42;

  const evento:unknown = "Refuerzo";
  let eventoMayus: string | null = null;
  if(typeof evento === "string"){
    eventoMayus = evento.toUpperCase();
  }


  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="mx-auto max-w-3x1 p-8">
            <header className="mb-8 border-b border-neutral-800 pb-4">
                <Link to ="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-while rounded-lg shadow-md">
                   Volver a Home
                </Link>

                <h1 className="text-3x1 font-semibold text-blue-500">
                   React + TypeScript - Módulo 1
                </h1>
                <p className="text-sm text-neutral-400">
                   Fundamentos: tipos básicos, arrays y tuplas.
                </p>
            </header>
            <section className="mt-8">
                <h2 className="text-x1 font-medium text-blue-300 mb-2">
                    Inferencia y básicos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-neutral-300">
                    <div>Saga: {saga} </div>
                    <div>Horas de entrenamiento: {horasEntrenamiento}</div>
                    <div>Guerrero: {guerrero}</div>
                    <div>KI: {ki}</div>
                    <div>En combate: {enCombate ? 'Sí' : 'No'}</div>
                </div>
                
            </section>
            <section className="mt-8">
                <h2 className="text-x1 font-medium text-blue-300 mb-2">
                    Arrays
                </h2>
                <div>
                    Equipo Z: {equipoZ.join(", ")}
                </div>
                <h2 className="text-x1 font-medium text-blue-300 mb-2">
                    Tuplas
                </h2>
                <div>
                    Coordenadas: [x,y]: x={coordenadas[0]} y={coordenadas[1]}
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-x1 font-medium text-blue-300 mb-2">
                    Funciones tipadas
                </h2>
                <div>
                    <p>Danio (base 450 x mult. 2)</p>
                    <span>{CalcularDanio(450, 2)}</span>
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-x1 font-medium text-blue-300 mb-2">
                    Any y unknown
                </h2>
                <div>
                    Any: {variableLibre}
                </div>
                <div>
                    Evento: {eventoMayus}
                </div>
            </section>
        </div>
    </main>
  );
};