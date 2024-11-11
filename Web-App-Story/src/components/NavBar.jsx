const NavBar = () => {
    
    return ( 
    <nav className="bg-black flex flex-wrap text-white w-screen h-16 overflow-y-auto">
        <h1 className="text-5xl font-heading text-white p-1 grow">Dylan's Web App Story</h1>
        {/* <h2 className="text-3xl font-japanese text-cyan-300">ミドルトン・ディラン</h2> */}
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank" className="text-white text-2xl right-0 p-4 font-heading">GITHUB</a>
        <a href="/" className="text-white text-2xl right-0 p-4 font-heading">HOME</a>
        <a href="https://google.com" className="text-white text-2xl right-0 p-4 font-heading">EXIT</a>
    </nav> );
}
export default NavBar;