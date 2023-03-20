import working from "../../assets/working.jpg"

const JobFind = () => {
  return (
    <>
      <div className="find-job">
        <img src={working} alt="" />
        <div className="job-quick">
          <h2>Get the job of your dreams quickly.</h2>
          <p>
            Commonly used in the graphic, print publishing industries for
            previewing visual mockups. Limited social discrimination
          </p>
          <div className="find-your-job"> 
            <p>
              Find your job. <span className="underline">Explore all</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="stats">
            <h3>20million</h3>
            <p>Dollar Payout</p>
        </div>
        <div className="stats">
            <h3>
                30k+ 
            </h3>
            <p>Worldwide Client</p>
        </div>
        <div className="stats">
            <h3>
                13billion
            </h3>
            <p>Dollar Payout</p>
        </div>
      </div>
    </>
  );
};

export default JobFind;
