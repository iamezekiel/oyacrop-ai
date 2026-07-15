import React from "react";
import homeStyles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={homeStyles.home}>
      {/* Navbar */}
      <nav className={homeStyles.navbar}>
        <div className={homeStyles.logo}>
          <img src="/logo.jpeg" alt="logo" />
          <h2>OyaCrop AI</h2>
        </div>

        <div className={homeStyles.navLinks}>
          {/* <a href="#features">Features</a> */}
          <a href="#about">About</a>

          <Link
            to="/auth"
            state={{ form: "login" }}
            className={homeStyles.loginBtn}
          >
            Sign In
          </Link>

          <Link
            to="/auth"
            state={{ form: "register" }}
            className={homeStyles.registerBtn}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroText}>
          <h1>
            Smarter Harvest Predictions Powered by Artificial Intelligence
          </h1>

          <p>
            Upload a photo of your crop and let OyaCrop AI determine its health,
            maturity, and harvest readiness in seconds.
          </p>

          <div className={homeStyles.heroButtons}>
            <button className={homeStyles.startBtn}>Get Started</button>
            <button className={homeStyles.learnBtn}>Learn More</button>
          </div>
        </div>

        <div className={homeStyles.heroImage}>
          <img src="/hero.png" alt="hero" />
        </div>
      </section>

      {/* Features */}
      <section className={homeStyles.features} id="features">
        <h2>Why Choose OyaCrop AI?</h2>

        <div className={homeStyles.featureCards}>
          <div className={homeStyles.card}>
            <i className="fa-solid fa-camera"></i>
            <h3>Image Analysis</h3>
            <p>Upload crop images for instant AI-powered diagnosis.</p>
          </div>

          <div className={homeStyles.card}>
            <i className="fa-solid fa-seedling"></i>
            <h3>Harvest Prediction</h3>
            <p>Know exactly when your crops are ready for harvest.</p>
          </div>

          <div className={homeStyles.card}>
            <i className="fa-solid fa-chart-line"></i>
            <h3>Farm Insights</h3>
            <p>Receive recommendations to improve productivity.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={homeStyles.about} id="about">
        <div className={homeStyles.aboutImage}>
          <img src="/about.jpeg" alt="About OyaCrop AI" />
        </div>

        <div className={homeStyles.aboutContent}>
          <h2>Helping Farmers Make Better Decisions</h2>

          <p>
            OyaCrop AI combines Artificial Intelligence and Computer Vision to
            evaluate crop conditions and provide accurate harvest
            recommendations.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className={homeStyles.steps}>
        <h2>How It Works</h2>

        <div className={homeStyles.stepContainer}>
          <div className={homeStyles.stepCard}>
            <span>1</span>
            <h3>Upload Image</h3>
          </div>

          <div className={homeStyles.stepCard}>
            <span>2</span>
            <h3>AI Analysis</h3>
          </div>

          <div className={homeStyles.stepCard}>
            <span>3</span>
            <h3>Receive Result</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={homeStyles.cta}>
        <h2>Ready to Improve Your Harvest?</h2>

        <p>Join thousands of farmers using AI to maximize productivity.</p>

        <button className={homeStyles.ctaBtn}>Create Free Account</button>
      </section>

      {/* Footer */}
      <footer className={homeStyles.footer}>
        <h3>OyaCrop AI</h3>

        <p>© 2026 All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
