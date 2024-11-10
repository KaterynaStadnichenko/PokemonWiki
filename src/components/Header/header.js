// import {useState} from useState
import logo from "./pok_logo.svg"

console.log(logo)

export default function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className='header_wrapper'>   
                    <a href="#" className="logo"><img src={logo} alt="Logo" className="header_logo"/></a>
                        <div className="header_nav">
                            <a href="#" className='header_anc'>RANDOM POKEMON</a>
                            <a href="#" className='header_anc'>POKEMON SEARCH</a>
                            <a href="#" className='header_anc'>CHARACHTERS SEARCH</a>
                        </div>
                </div>
            </div>
        </div>
    )
}