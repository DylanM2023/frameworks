const NavBar = () => {
    
    const title = "Dylan's Blog"
    
    return ( 
    <nav className="bg-black text-white display:flex">
        <h1 className="text-5xl font-heading text-cyan-300 flex-1">{title}</h1>
        <h2 className="text-3xl font-japanese text-cyan-300 flex-2">ミドルトン・ディラン</h2>
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank" className="text-cyan-300 flex-3">GitHub</a>
    </nav> );
}
export default NavBar;