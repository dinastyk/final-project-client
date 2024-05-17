/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageURL} alt="student" />
      <h3>Email: {student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
      {student.campus ? (
      <h3>Campus: {student.campus.name}</h3>
      ) : (
        <h3>Campus: Currently not enrolled</h3>
      )}
    </div>
  );

};

export default StudentView;