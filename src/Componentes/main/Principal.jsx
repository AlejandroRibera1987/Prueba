import react from "react";
import "./principal.scss"

export const Principal = () => {
    return (
        <main className=" h-screen w-scree flex justify-center">
            <nav className=" flex justify-between items-center bg-white w-screen bg-opacity-20 h-20">
                <a href="#" className=" text-white ml-3">Logo</a>
                <ul className=" flex gap-x-5">
                    <li><a href="#" className=" text-white">Inicio</a></li>
                    <li><a href="#" className=" text-white">Inicio</a></li>
                    <li><a href="#" className=" text-white">Inicio</a></li>
                </ul>
                <a href="#" className=" text-white mr-3">Contacto</a>
            </nav>
        </main>
    )
}