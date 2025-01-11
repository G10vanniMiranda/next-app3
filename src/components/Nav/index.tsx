import Link from "next/link";

export function Nav(){
    return(
        <nav className="bg-zinc-900 text-white h-28 w-[1200] flex gap-3 items-center justify-center">
            <Link className="nav-items" href="/" >Home</Link>
            <Link className="nav-items" href="/produto" >Produtos</Link>
            <Link className="nav-items" href="/cliente" >Clientes</Link>
            <Link className="nav-items" href="/login" >Login</Link>
        </nav>
    )
}