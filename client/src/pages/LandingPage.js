import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/heading`)
      .then((res) => setHeading(res.data.text))
      .catch((err) => console.error('Error fetching heading:', err));
  }, []);

  return (
    <>
      {/* MODERN NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-glass sticky-top animate__animated animate__fadeInDown">
        <div className="container">
          <a className="navbar-brand modern-brand fw-bold fs-4" href="#">
            <div className="brand-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            Brewex
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link modern-nav-link fw-medium" href="about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link modern-nav-link fw-medium dropdown-toggle" href="services" role="button" data-bs-toggle="dropdown">
                  Services
                </a>
                <ul className="dropdown-menu modern-dropdown">
                  <li><a className="dropdown-item modern-dropdown-item" href="#">
                    <i className="bi bi-graph-up me-2"></i>Revenue Management
                  </a></li>
                  <li><a className="dropdown-item modern-dropdown-item" href="#">
                    <i className="bi bi-robot me-2"></i>AI Analytics
                  </a></li>
                  <li><a className="dropdown-item modern-dropdown-item" href="#">
                    <i className="bi bi-diagram-3 me-2"></i>Data Integration
                  </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* FUTURISTIC HERO SECTION */}
      <section className="hero-futuristic text-center position-relative">
        <div className="particle-field">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        <div className="neural-network">
          <div className="node node-1"></div>
          <div className="node node-2"></div>
          <div className="node node-3"></div>
          <div className="connection connection-1"></div>
          <div className="connection connection-2"></div>
          <div className="connection connection-3"></div>
        </div>
        <div className="morphing-bg"></div>
        <div className="container position-relative z-3 animate__animated animate__fadeInUp">
          <div className="hero-content-futuristic">
            <h1 className="hero-title-futuristic mb-4 fw-bold">
              <span className="typing-text gradient-text-3d">
                {heading || 'Transform Your Business with Intelligent AI Solutions'}
              </span>
            </h1>
            <p className="hero-subtitle-futuristic lead mb-5 animate__animated animate__fadeInUp animate__delay-2s">
              Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI-enabled solutions
              that understand your business and recommend the optimal way forward.
            </p>
            <div className="hero-cta-futuristic animate__animated animate__fadeInUp animate__delay-3s">
              <a href="#" className="btn btn-hero-futuristic btn-lg shadow-lg me-3">
                <span className="btn-text">Get Started</span>
                <div className="btn-particles">
                  <span></span><span></span><span></span>
                </div>
                <i className="bi bi-rocket-takeoff ms-2"></i>
              </a>
              <a href="#" className="btn btn-demo btn-lg">
                <i className="bi bi-play-circle me-2"></i>
                Watch Demo
              </a>
            </div>
            <div className="floating-stats animate__animated animate__fadeInUp animate__delay-4s">
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED FEATURES SECTION 1 */}
      <section className="features-section-modern">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
              <div className="feature-card-modern">
                <div className="feature-icon-modern gradient-blue mb-3">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                <h5 className="fw-bold feature-title">Ready to Go Algos</h5>
                <p className="text-muted feature-description">Prebuilt AI algorithms ready to deploy with minimal setup and tuning.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-1s">
              <div className="feature-card-modern">
                <div className="feature-icon-modern gradient-orange mb-3">
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <h5 className="fw-bold feature-title">Internal Capability Building</h5>
                <p className="text-muted feature-description">Equip your team with tools and training to grow their AI literacy.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-2s">
              <div className="feature-card-modern">
                <div className="feature-icon-modern gradient-green mb-3">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h5 className="fw-bold feature-title">Continuous Engagement</h5>
                <p className="text-muted feature-description">Our AI adapts and improves continuously with your operations.</p>
              </div>
            </div>
          </div>

          {/* FUTURISTIC INTERACTIVE SEPARATOR */}
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="futuristic-separator">
              <div className="separator-orb left-orb"></div>
              <div className="separator-wave">
                <svg className="wave-line" height="40" width="100%" viewBox="0 0 600 40">
                  <path d="M0,20 Q150,0 300,20 T600,20" stroke="url(#waveGradient)" strokeWidth="3" fill="none" strokeDasharray="15,10" />
                  <path d="M0,20 Q150,40 300,20 T600,20" stroke="url(#waveGradient2)" strokeWidth="2" fill="none" strokeDasharray="10,5" opacity="0.6" />
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f4a300" stopOpacity="0.2" />
                      <stop offset="30%" stopColor="#d88f00" stopOpacity="1" />
                      <stop offset="70%" stopColor="#f4a300" stopOpacity="1" />
                      <stop offset="100%" stopColor="#d88f00" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e1a34" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#2d2653" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1e1a34" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="energy-particles">
                  <div className="energy-dot energy-dot-1"></div>
                  <div className="energy-dot energy-dot-2"></div>
                  <div className="energy-dot energy-dot-3"></div>
                </div>
              </div>
              <div className="separator-orb right-orb"></div>
            </div>
          </div>

          {/* ENHANCED FEATURES SECTION 2 */}
          <div className="row text-center advanced-features animate__animated animate__fadeInUp">
            <div className="col-md-4 mb-4">
              <div className="advanced-feature-card glass-card p-4 h-100">
                <div className="advanced-feature-icon mb-3">
                  <i className="bi bi-diagram-3-fill"></i>
                </div>
                <h6 className="fw-bold advanced-feature-title">Multi-source Data</h6>
                <p className="text-muted">Integrate insights from CRM, finance, marketing, and more.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="advanced-feature-card glass-card p-4 h-100">
                <div className="advanced-feature-icon mb-3">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h6 className="fw-bold advanced-feature-title">Stakeholder Alignment</h6>
                <p className="text-muted">Transparent, trackable metrics keep all teams on the same page.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="advanced-feature-card glass-card p-4 h-100">
                <div className="advanced-feature-icon mb-3">
                  <i className="bi bi-bar-chart-steps"></i>
                </div>
                <h6 className="fw-bold advanced-feature-title">Custom Analytics</h6>
                <p className="text-muted">Tailored dashboards and reports built for your exact needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default LandingPage