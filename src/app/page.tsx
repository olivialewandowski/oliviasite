"use client";

import Link from 'next/link';
import Navbar from "@/components/Navbar";
import styles from './Home.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container content">
        <div className={styles.verticalLine}></div>
      </div>
      
      <Link href="/about-me" className={`${styles.rectangleLink} ${styles.blueLink}`}>
        <div className={styles.blueSquare}>
          <div className={styles.hoverText}>about me</div>
        </div>
      </Link>
      
      <Link href="/ai-governance" className={`${styles.rectangleLink} ${styles.yellowLink}`}>
        <div className={styles.yellowSquare}>
          <div className={styles.hoverText}>ai governance</div>
        </div>
      </Link>
      
      <Link href="/data-engineering" className={`${styles.rectangleLink} ${styles.blackLink}`}>
        <div className={styles.blackSquare}>
          <div className={styles.hoverText}>
            {/* Desktop version */}
            <span className={styles.desktopOnly}>
              <span>data</span>
              <span>engineering</span>
            </span>
            {/* Mobile version - also stacked */}
            <span className={styles.mobileOnly}>
              <span>data</span>
              <span>eng</span>
            </span>
          </div>
        </div>
      </Link>
      
      <Link href="/fruition-research" className={`${styles.rectangleLink} ${styles.redLink}`}>
        <div className={styles.redSquare}>
          <div className={styles.hoverText}>fruition research</div>
        </div>
      </Link>
      
      <Link href="/strings-of-thought" className={`${styles.rectangleLink} ${styles.whiteLink}`}>
        <div className={styles.whiteSquare}>
          <div className={styles.hoverText}>strings of thought</div>
        </div>
      </Link>
      
      <div className={styles.farLeftVerticalLine} />
      <div className={styles.rightVerticalLine} />
      <div className={styles.middleHorizontalLine} />
      <div className={styles.centerHorizontalLine} />
      <div className={styles.bottomHorizontalLine} />
      <div className={styles.middleVerticalLine} />
    </main>
  );
}