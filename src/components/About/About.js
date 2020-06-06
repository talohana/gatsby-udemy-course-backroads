import React from 'react'
import background from '../../images/defaultBcg.jpeg'
import Title from '../Title/Title'
import styles from './About.module.scss'
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={background} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magni.
            Consectetur, nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magni.
            Consectetur, nisi.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
