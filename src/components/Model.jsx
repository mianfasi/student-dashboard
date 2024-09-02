import React from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: '0' },
};

const Modal = ({ student, onClose }) => {
  console.log("Modal rendered with student:", student); // Debugging log

  if (!student) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        variants={modalVariants}
      >
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>Name:</strong> {student.name.first} {student.name.last}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Address:</strong> {student.location.street.number} {student.location.street.name}, {student.location.city}, {student.location.state}, {student.location.postcode}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
