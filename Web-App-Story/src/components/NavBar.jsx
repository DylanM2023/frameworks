const NavBar = () => {
    
    return ( 
    <nav className="bg-black flex flex-wrap text-white w-full h-16">
        <h1 className="text-5xl font-heading text-cyan-300 p-1 w-4/6">Dylan's Web App Story</h1>
        {/* <h2 className="text-3xl font-japanese text-cyan-300">ミドルトン・ディラン</h2> */}
        <a href="https://github.com/DylanM2023/frameworks/" target="_blank" className="text-cyan-300 text-2xl right-0 p-4">GITHUB</a>
        <a href="/" className="text-cyan-300 text-2xl right-0 p-4">HOME</a>
        <a href="https://google.com" className="text-cyan-300 text-2xl right-0 p-4">EXIT</a>
    </nav> );
}
export default NavBar;