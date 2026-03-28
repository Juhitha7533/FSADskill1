import { useState } from 'react';
import './StudentManager.css';

function StudentManager() {
  // initial list of students
  const initialStudents = [
    { id: '1', name: 'Alice', course: 'Mathematics' },
    { id: '2', name: 'Bob', course: 'Physics' },
    { id: '3', name: 'Charlie', course: 'Chemistry' },
    { id: '4', name: 'Diana', course: 'Biology' },
    { id: '5', name: 'Ethan', course: 'Computer Science' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) return;
    setStudents((prev) => [...prev, newStudent]);
    setNewStudent({ id: '', name: '', course: '' });
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="student-manager">
      <h2>Student Manager</h2>
      <div className="form-group">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newStudent.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {students.length === 0 ? (
        <p className="empty-message">No students available</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteStudent(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;
