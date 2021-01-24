import React from 'react';
import styles from '../module/Map.module.css';
import component from '../module/Components.module.css';

const Map = ({ data, showJoke }) => {
  return (
    <div className={component.animeLeft}>
      <ul className={styles.list}>
        {data.categories.map((item, i) => (
          <li key={i}>
            <span className={styles.active} onClick={showJoke}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Map;
