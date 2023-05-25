import React from 'react';
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2 className={styles.abouth2}>Introduction</h2>
      <p className={styles.aboutp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur fugit eveniet voluptatum ut rerum molestiae magnam odit similique, minima corporis sunt ipsum error dolores culpa, optio dicta! Eveniet tempore nisi at assumenda accusamus nemo, saepe doloribus nam quod! Placeat quam, maiores assumenda vel eveniet quisquam inventore officia incidunt, porro sint temporibus cum voluptate vero eos sapiente rerum deleniti eius magnam odio quod obcaecati suscipit cumque? Dolore recusandae labore asperiores accusantium autem ut dignissimos cupiditate. Ipsum quibusdam, corporis similique quasi ipsa repellat, facere consectetur, veniam a deleniti error est tempora.</p>

      <h2 className={styles.abouth2}>Services Offered</h2>
      <p className={styles.aboutp}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nesciunt, placeat doloribus odit ipsa dolorum officiis dignissimos aut nobis voluptatum, doloremque voluptate sit! Eveniet optio deserunt ullam accusamus vel autem officia consequatur dignissimos eius.</p>

      <p className={styles.aboutp}>We offer the following services</p>
      <ul className={styles.aboutul}>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
      </ul>

      <h2 className={styles.abouth2}>Contact Us</h2>
      <p className={styles.aboutp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate porro impedit dicta molestiae laborum optio aspernatur debitis nisi earum labore perspiciatis ex alias beatae eaque doloribus perferendis, a explicabo repellendus quos atque sed nam libero? Fugiat veniam laboriosam ullam dignissimos facilis, autem ab minus cumque dolorum deserunt, dolor facere ipsa quidem quibusdam, vel nulla non maxime!</p>
    </div>
  )
}

export default About