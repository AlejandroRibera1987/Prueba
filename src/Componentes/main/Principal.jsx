import react from "react";
import "./principal.scss"

export const Principal = () => {
    return (
        <main className=" h-screen w-scree flex justify-center">
            <div>
                <div className=" flex justify-center">
                    <img src="src\images\logo.jpg" alt="Logo" className=" flex pb-3 pt-5 h-40 w-60 "/>
                </div>
                <div className=" text-center flex justify-center">
                    <h1 className=" flex text-white text-center">Hola mundo</h1>
                </div>
            </div>
        </main>
    )
}