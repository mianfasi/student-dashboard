import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import HorizontalMenu from '../components/HorizontalMenu';
import GridView from '../components/GridView';
import TileView from '../components/TileView';
import ExpandedView from '../components/ExpandedView';

const HomePage = () => {
  const [students, setStudents] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => setStudents(data.results));
  }, []);

  return (
    <div>
      <HorizontalMenu />
      <div className="flex">
        <HamburgerMenu />
        <div className="flex-1 p-4">
          <div className="mb-4">
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Toggle View
            </button>
          </div>
          {isGridView ? (
            <GridView students={students} />
          ) : (
            <TileView students={students} onTileClick={setSelectedStudent} />
          )}
          {selectedStudent && (
            <ExpandedView student={selectedStudent} onClose={() => setSelectedStudent(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
