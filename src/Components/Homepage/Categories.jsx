import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faBagShopping,
  faPhone,
  faSliders,
  faBuildingColumns,
  faPen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faCode,
  faBagShopping,
  faPhone,
  faSliders,
  faBuildingColumns,
  faPen,
  faChevronRight
);

const Categories = () => {
  return (
    <>
      
        <div className="categories">
          <h3>Most Demanding Categories.</h3>
          <p>
            Explore all fields
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </p>
        </div>
        <div className="grid-container">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-pen" />
            <h5>UI/UX Design</h5>
            <p>12k+ Jobs</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-code" />
            <h5>Development</h5>
            <p>8k+ Jobs</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
            <h5>Marketing</h5>
            <p>12k+ Jobs</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <h5>Telemarketing</h5>
            <p>3k+ Jobs</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-sliders" />
            <h5>Editing</h5>
            <p>12k+ Jobs</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-solid fa-building-columns" />
            <h5>Accounting</h5>
            <p>17k! Jobs</p>
          </div>
        </div>
      
    </>
  );
};

export default Categories;
