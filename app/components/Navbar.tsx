import CuantoSale from "../assets/img/CuantoSaleLogo.webp"

const Navbar = ()=>{
    return(
    <nav className="flex flex-row fixed top-0 left-0 h-[50px] w-full min-h-0 z-99 mt-2 px-[45px]">
        <div className="flex flex-row justify-between items-center w-full h-full rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg  gap-5 px-[25px] font-bold text-xl">
            <div className="flex flex-row"><img src={CuantoSale} className="h-[40px]"/></div>
            <ul className="">
                <a className="mr-2" href="">Dolar</a>
                <a className="mr-2" href="">Euro</a>
                <a className="mr-2" href="">Real</a>
                <a className="mr-2" href="">LATAM</a>
                <a className="mr-2" href="">STEAM</a>
            </ul>
        </div>
    </nav>
)}

export default Navbar;