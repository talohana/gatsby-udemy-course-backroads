import React, { useEffect, useState } from 'react';
import styles from '../../css/items.module.css';
import Title from '../Title';
import Tour from './Tour';

const TourList = ({ tours }) => {
  //   const [tours, setTours] = useState([]);
  const [sortedTours, setSortedTours] = useState([]);

  useEffect(() => {
    // setTours(tours.edges);
    setSortedTours(tours.edges);
  }, [tours.edges]);

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
