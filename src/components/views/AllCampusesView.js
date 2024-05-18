/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

 // Style for delete button
 const deleteButtonStyle = {
  backgroundColor: '#f44336', // Light shade of red
  color: '#ffffff',           // White text
  border: 'none',
  padding: '3px 7px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
};

const AllCampusesView = (props) => {
  // If there are no campuses, display a message.
  if (!props.allCampuses.length) {
    return (
      <div>
        <h3>There are no campuses.</h3>
        <br/><br/>
        <Link to={`/newcampus`} style={{ position: 'absolute', top: '100px', right: '40px' }}>
          <button>Add New Campus</button>
        </Link>
      </div>
    )
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>
      <Link to={`/newCampus`} style={{ position: 'absolute', top: '100px', right: '40px' }}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <img src={campus.imageURL} alt={campus.name} style={{ width: '50%', height: 'auto' }}></img>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <button style={deleteButtonStyle} onClick={() => props.deleteCampus(campus.id)}>Delete Campus</button>
          <Link to={`/editcampus/${campus.id}`}><button>Edit Campus</button></Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;