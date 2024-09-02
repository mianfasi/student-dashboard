import React from 'react';

const ExpandedView = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-3/4">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          Close
        </button>
        <h2 className="text-xl font-bold mt-4">Student Details</h2>
        <p><strong>Name:</strong> {student.name.first} {student.name.last}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        {/* Add more detailed fields here */}
      </div>
    </div>
  );
};

export default ExpandedView;
