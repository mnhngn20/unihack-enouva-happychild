import { useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Courses from './Courses';

function Index() {
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'tests');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <>
      <Courses />
    </>
  );
}

export default Index;
