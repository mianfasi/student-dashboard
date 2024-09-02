import React, { useState } from 'react';
import Modal from './Model';

const GridView = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCardClick = (student) => {
    console.log("Card clicked, student data:", student); // Debugging log
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    console.log("Closing modal"); // Debugging log
    setSelectedStudent(null);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-6 p-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="py-4 px-10 bg-white shadow-md rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={() => handleCardClick(student)}
          >
            <p className="font-bold">Name: {student.name.first} {student.name.last}</p>
            <p>Email: {student.email}</p>
          </div>
        ))}
      </div>
      
   
      <Modal student={selectedStudent} onClose={handleCloseModal} />
    </div>
  );
};

export default GridView;
