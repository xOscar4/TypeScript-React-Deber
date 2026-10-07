import { useState } from "react";

type ContadorProps = {
    initial?: number;
    step?:number;
}

export const Module2Page = ({initial=0, step=1}: ContadorProps) => {

    const [count, setCount] = useState<number>(initial);
    const inc =()=> setCount((c)=>c+step);
    const dec =()=> setCount((c)=>c-step);

    const [tazas, setTazas] = useState<number>(1);

    type Ingredientes = "agua" | "cafe" | "azucar";

    type RecetaCafe = {
        agua?: number;
        cafe?: number;
        azucar?: number;
    };

    type CafePreparado = {
        mensaje: string;
        intensidad: "suave" | "fuerte";
    };

    const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>(
        "suave"
    )

    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null>(null);

    const [azucarIn, setAzucarIn] = useState<number | undefined>(undefined);

    //type CarfProps = {title:string}
    //interface CardPropdsI {title:String};
    //interface Battle {arena:string}
    //interface Battle {ki:number}

    //const peleaOk:Battle = {arena: "Namek", ki: 9001}

    interface RecetaBase {agua:number, cafe:number}

    interface RecetaAzucar extends RecetaBase {azucar:number}

    interface MaquinaCafe {modelo:string}
    interface MaquinaCafe {aguaMax?:number}
    
    const maquina: MaquinaCafe = {modelo: "Kame-500", aguaMax: 2000}

    function prepararCafe({agua=0, cafe=0, azucar=0}: RecetaCafe): CafePreparado{
        const intensidad = cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Cafe listo con ${agua} ml de agua y ${cafe} g de cafe` + (azucar ? ` + ${azucar} g de azucar`: ""),
            intensidad,
        }
    }

    interface CafePreparadoI{mensaje:string; intensidad:"suave" | "fuerte"}

    function prepararCafeI(receta: RecetaAzucar): CafePreparadoI {
        const intensidad: CafePreparadoI["intensidad"] = receta.cafe > 10 ? "fuerte":"suave";
        return {
            mensaje : `Cafe listo (INTF) con ${receta.agua} ml de agua y ${receta.cafe} g de cafe + ${receta.azucar} g azucar`, intensidad, 
        }
        
    }

    const OnCafe = ()=>{
        const resultado = prepararCafe({agua: 200, cafe: 15, azucar: 5});
        alert(resultado.mensaje + "\nCon intensidad: " + resultado.intensidad);
    }

    const OnCafeI =() =>{
        const resultado = prepararCafeI({agua: 200, cafe: 15, azucar: 5});
        alert(resultado.mensaje + " con intensidad: " + resultado.intensidad);
    }

    type A = {nombre:string}
    type B = {edad:number}
    type C = {state:boolean}
    type Persona = A & B & C;
    const juanObject: Persona ={nombre: "Juan", edad: 74, state: true};

    return(
        <div className = "h-screen bg-amber-300 text-black flex flex-col p-4 gap-4">
            <span>Modulo 2</span>
            <button className="bg-amber-950 text-white rounded-2xl" onClick={OnCafe}>Hacer cafe con Type</button>
            
            <button className="bg-black text-white rounded-2xl" onClick={OnCafeI}>Hacer cafe con Interface</button>

            <span>state tipados</span>{intensidadUI}
            <button className="bg-black text-white rounded-2xl" onClick={() => setIntensidadUI("fuerte")}>cambiar state</button>
            
            <span>Contador</span>
            <button className="rounded-md border border-neutral-700 bg-neutral-950
            px-3 py-1 hover:bg-neutral-700 text-white" onClick={dec}>-</button>
            <span className="min-w-[3ch] text-center text-2x1 font-semibold">{count}</span>
            <button className="rounded-md border border-neutral-700 bg-neutral-950
            px-3 py-1 hover:bg-neutral-700 text-white" onClick={inc}>+</button>
            <h2>Intersección (&)</h2>
            {juanObject.nombre} - {juanObject.edad} - {juanObject.state.toString()}

            <pre>{JSON.stringify(juanObject, null, 2)}</pre>
        </div>

    );
};
        