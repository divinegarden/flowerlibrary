import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { MdHome } from "react-icons/md";
import { LuBookHeart } from "react-icons/lu";
import { LuBookImage } from "react-icons/lu";


function Header() {

    return (

        <div className="navbar bg-rose-100  shadow-sm">

            <div className="flex-1">
                <Link href="/" className="btn btn-ghost hover:bg-yellow-200 hover:border-rose-300 text-xl"> <MdHome /> Inicio</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    


                    <li>
                        <div className="dropdown dropdown-end hover:bg-yellow-200 hover:border hover:border-rose-300 ">
                            <div tabIndex={0} role="button">Páginas</div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-white rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <li>
                                    <Link href="/pagina1"> <LuBookHeart/> Biblioteca</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                
                </ul>
            </div>
        </div>


    );
}

export default Header;