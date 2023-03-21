const RegisterForm = () => {
  return (
    <>
      <section className="register-form">
        <div className="content">
          <h2>Create Account</h2>
          <div className="button-select">
            <button>Candidates</button>
            <button>Employer</button>
          </div>
          <form
            action="
                "
          >
            <label htmlFor="name">Name*</label>
            <input type="text" />
            <label htmlFor="email">Email*</label>
            <input type="text" />
            <label htmlFor="password">Password*</label>
            <input type="password" />
            <button>LOGIN</button>
          </form>
          <p>Have an account? <span className="underline">Sign In</span></p>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
