import React from 'react'
import services from '../../constants/services'
import Title from '../Title/Title'
import styles from './Services.module.scss'
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((service, i) => (
          <article key={i} className={styles.service}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
