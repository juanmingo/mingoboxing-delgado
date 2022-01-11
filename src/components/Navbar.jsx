import React from 'react';

class Navbar extends React.Component {

    render() {
        const styleNav = {
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            fontSize: "26px"
        };

        const styleNavLi = {
            display: "inline-block",            
            padding: "5px 30px",
            backgroundColor: "#000",
            borderW: "1px solid #000",
            textAlign: "center",
            color: "#fff"
        };

        return (
            <nav style={styleNav} > <ul>
                <li style={styleNavLi} ><a href="#">Inicio</a></li>
                <li style={styleNavLi} ><a href="#">Quiénes somos</a></li>
                <li style={styleNavLi}><a href="#">Procuctos</a></li>                
                <li style={styleNavLi}><a href="#">Contacto</a></li>
                <li style={styleNavLi}><a href="#">Carrito</a></li>
            </ul></nav>
        )
    }
}
export default Navbar;