import './style.scss'

export default function Header(props) {
    return (
        <header className="header">
            <nav className="navbar">
                <a className="geometry" href="#Geometry" onClick={() => props.handleShapes(["Cone", "Octahedron", "Box"])}>Geometry</a>
                <input type="checkbox" id="nav" className="hidden" />
                <label htmlFor="nav" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="wrapper">
                    <ul className="menu">
                        <li className="menu-item"><a href="#All" onClick={() => props.handleShapes(["Cone", "Octahedron", "Box"])}>All</a></li>
                        <li className="menu-item"><a href="#ETH" onClick={() => props.handleShapes(["Cone"])}>ETH</a></li>
                        <li className="menu-item"><a href="#Box" onClick={() => props.handleShapes(["Box"])}>Box</a></li>
                        <li className="menu-item"><a href="#Octahedron" onClick={() => props.handleShapes(["Octahedron"])}>Octahedron</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
