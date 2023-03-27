import { useLocation, useParams } from "react-router-dom";
import JobListings from "./JobListing/JobListing";

const JobDetails = (props) => {
  const { jobPosting } = props;
  console.log(jobPosting, 'job posting')
  console.log(props, "PROPS YO");
  const { id } = useParams();
  console.log(id, 'id')
  const location = useLocation();
  console.log(location, 'location')
  //   const { jobPosting } = location.state || {};

  const locationArray = Object.values(location)
  console.log(locationArray, 'location array')

  return <>
  
    <h1>{locationArray[3].job}</h1>
  </>;
};

export default JobDetails;
