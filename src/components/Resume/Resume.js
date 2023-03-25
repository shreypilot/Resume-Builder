/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Resume.module.css';
import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
  } from "react-feather";

const Resume = (props) => {
    const workExpSection =(
        <div className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience</div>
        </div>
    );

    const projectSection =(
        <div className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Projects</div>
        </div>
    );

    const educationSection =(
        <div className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
        </div>
    );
    const achievementSection =(
        <div className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>Achievement</div>
        </div>
    );
    const summarySection =(
        <div className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Education</div>
        </div>
    );
    const otherSection =(
        <div className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
        </div>
    )
 
        
  return (
      <div className={styles.container}>
        <div className={styles.header}>
           <p className={styles.heading}>Name</p>
           <p className={styles.subHeading}>Block chain developer</p>
        
        <div className={styles.links}>
            <a className={styles.link}> <AtSign /> Email@gmail.com </a>
            <a className={styles.link}>   <Phone />+917256998409</a>
            <a className={styles.link}>   <Linkedin />https://www.linkedin.com/in/shreya-kumari-2ba673202/</a>
            <a className={styles.link}> <GitHub />https://github.com/shreypilot</a>
        </div>
        </div>
      </div>
  )
}

export default Resume