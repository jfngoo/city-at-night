'use client'
import styles from './page.module.css'

export default function Intro({onClick}) {

  return (
    <main className={styles.main} onClick={onClick}>
      <div className={styles.center}>
        <span>Click to start</span>
      </div>
    </main>
  )
}
