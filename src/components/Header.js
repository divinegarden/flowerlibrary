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
            <div className="flex-none pr-20">
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
                                <li>
                                    <Link href="/pagina2"><LuBookImage /> Galleria</Link>
                                </li>
                                <li>
                                    <Link href="/pagina3">Página 3</Link>
                                </li>
                                <li>
                                    <Link href="/pagina4">Página 4</Link>
                                </li>
                                <li>
                                    <Link href="/pagina5">Página 5</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content fixed top-0 right-0 z-10">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button size-15 rounded-full bg-rose-300 text-rose-50">Drawer</label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-rose-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                                                <li>
                                    <Link href="/pagina1"> <LuBookHeart/> Biblioteca</Link>
                                </li>
                                <li>
                                    <Link href="/pagina2"><LuBookImage /> Galleria</Link>
                                </li>
                                <li>
                                    <Link href="/pagina3">Página 3</Link>
                                </li>
                                <li>
                                    <Link href="/pagina4">Página 4</Link>
                                </li>
                                <li>
                                    <Link href="/pagina5">Página 5</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </ul>
            </div>
        </div>


    );
}

export default Header;