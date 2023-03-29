const Trusted = () => {
  return (
    <>
      <section className="trusted">
        
          <h3>Trusted by leading startups</h3>
          <div className="flex-container">
            <div className="card">
              <img src="src/assets/monday.jpg" alt="" />
              <h5>
                "Seattle opera simplifies Performance planning with deski
                eSignature"
              </h5>
              <p>
                <b>Rashad kabir,</b>Lead Designer
              </p>
              <div className="flex-container">
                <p className="rating">4.5 Excellent</p>
                <img
                  src="src/assets/4.5star.jpg"
                  alt="Four and a half star rating"
                />
              </div>
            </div>
            <div className="card">
              <img src="src/assets/shipbob.png" alt="chipbob logo" />
              <h5>
                "How DocuSign CLM helps Celonis scale its global business"
              </h5>
              <p>
                <b>Mark Joge,</b> Marketing Chief
              </p>
              <div className="flex-container">
                <p className="rating">4.8 Awesome</p>
                <img src="src/assets/5star.jpg" alt=" Five star rating " />
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Trusted;
