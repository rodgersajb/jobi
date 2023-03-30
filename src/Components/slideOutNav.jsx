import { useState } from "react";

const slideOutNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <nav className={`slideNav ${isOpen ? 'open' : ""}` }>
            <div className="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </nav>
        </>
    )
}

export default slideOutNav;