import React from 'react';
import { useNavigate } from 'react-router-dom';

const TileView = ({ students }) => {
  const navigate = useNavigate();

  const handleTileClick = (student) => {
    navigate(`/student/${student.login.uuid}`);
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-4">
    {students.map((student, index) => (
      <div
        key={index}
        className="p-4 bg-white shadow-md rounded-md hover:bg-gray-100 cursor-pointer max-w-xs"
      >
        <p className="font-bold">Name: {student.name.first} {student.name.last}</p>
        <p>Email: {student.email}</p>
        <div className="mt-2 flex space-x-2">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </div>
      </div>
    ))}
  </div>

  );
};

export default TileView;
