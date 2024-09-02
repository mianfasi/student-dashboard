import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams(); // Assuming you pass a unique identifier like an ID
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student data based on the ID
    // In a real scenario, you would fetch from an API like `https://api.example.com/students/${id}`
    fetch(`https://randomuser.me/api/?results=1&seed=${id}`)
      .then(response => response.json())
      .then(data => setStudent(data.results[0]));
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-gray-500 hover:text-gray-800 mb-4"
      >
        ← Back to List
      </button>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Student Details</h2>
        <div className="flex space-x-4">
          <img src={student.picture.large} alt="Student" className="w-32 h-32 rounded-md" />
          <div>
            <p><strong>Name:</strong> {student.name.first} {student.name.last}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Location:</strong> {student.location.city}, {student.location.country}</p>
            {/* Add more detailed fields as needed */}
          </div>
        </div>
        <div className="mt-4">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-4">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
