import React from 'react';
import "../assets/Blog.css";

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>Building Solutions in Resource-Constrained Environments</h2>
      <div className="blog-posts">
        {/* Blog Post 1 - Challenges & Philosophy */}
        <div className="blog-post impact-post">
          <div className="blog-post-content">
            <h3>Creating Meaningful Technology in Developing Nations</h3>
            <p className="blog-post-excerpt">
              "Growing up in a technology-limited environment taught me that true innovation isn't about 
              advanced tools - it's about understanding real problems. My journey in software development 
              is driven by creating solutions that work under these unique constraints."
            </p>
            <div className="key-points">
              <h4>Our Reality:</h4>
              <ul>
                <li>🛠️ Building from zero with limited resources</li>
                <li>💡 Converting constraints into design requirements</li>
                <li>🌍 Solutions that work offline and on low-end devices</li>
                <li>📈 Focusing on core functionalities that create real impact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blog Post 2 - Tools & Solutions */}
        <div className="blog-post tools-post">
          <div className="blog-post-content">
            <h3>Essential Toolkit for Building from Scratch</h3>
            <p className="blog-post-excerpt">
              Here's my curated list of free/open-source tools that empower development in resource-limited 
              environments:
            </p>
            <div className="tool-grid">
              <div className="tool-category">
                <h4>🛠️ Development Essentials</h4>
                <ul>
                  <li>VS Code (Lightweight IDE)</li>
                  <li>Git (Version Control)</li>
                  <li>SQLite (Embedded Database)</li>
                </ul>
              </div>
              <div className="tool-category">
                <h4>🌐 Web Development</h4>
                <ul>
                  <li>React (Component Architecture)</li>
                  <li>Django (Backend Framework)</li>
                  <li>PWA Techniques (Offline-first)</li>
                </ul>
              </div>
              <div className="tool-category">
                <h4>💼 ERP Foundations</h4>
                <ul>
                  <li>Odoo (Open Source ERP)</li>
                  <li>ERPNext (Modular System)</li>
                  <li>Dolibarr (SMB-focused)</li>
                </ul>
              </div>
            </div>
            <p className="blog-post-excerpt">
              Pro Tip: Always design for <strong>offline-first</strong> and <strong>low-bandwidth</strong> scenarios!
            </p>
          </div>
        </div>

        {/* Blog Post 3 - ERP Insights */}
        <div className="blog-post erp-post">
          <div className="blog-post-content">
            <h3>ERP Design Lessons from Ashewa</h3>
            <p className="blog-post-excerpt">
              Working on enterprise systems in challenging environments taught me these core principles:
            </p>
            <div className="erp-principles">
              <div className="principle">
                <div className="principle-icon">🌐</div>
                <h4>Contextual Design</h4>
                <p>Adapt workflows to local business practices rather than forcing Western models</p>
              </div>
              <div className="principle">
                <div className="principle-icon">🔋</div>
                <h4>Resource Efficiency</h4>
                <p>Optimize for low-power devices and intermittent connectivity</p>
              </div>
              <div className="principle">
                <div className="principle-icon">💵</div>
                <h4>Financial Flexibility</h4>
                <p>Build multi-currency support and inflation-aware calculations</p>
              </div>
            </div>
            <blockquote className="erp-quote">
              "Good ERP design isn't about features - it's about creating systems that 
              <strong> empower local businesses </strong> 
              to thrive in challenging economic conditions."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;