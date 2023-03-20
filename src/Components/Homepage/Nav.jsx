
const Nav = () => {
    return (
      <>
        <nav>
          <img src="public/assets/assets/jobiLogo.png" alt="jobi logo" />
          <ul>
            <li>Home</li>
            <li>Job</li>
            <li>Explore</li>
            <li>Category</li>
            <li>Pages</li>
          </ul>
          <div className="login-buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </>
    );
}

export default Nav;