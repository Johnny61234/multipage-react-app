import Nav from "./Nav";

function Header() {
    return ( 
        <div>
            <div>
                <img/>
            </div>
            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path></g></svg>
            <Nav></Nav>
        </div>
     );
}

export default Header;