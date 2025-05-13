import React from 'react';
import '../styles/BlogSection.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'How We Optimized Water Networks',
      description: 'A deep dive into our optimization strategies.',
      image: img1,
      link: '#',
    },
    {
      id: 2,
      title: 'The Future of Hydraulic Software',
      description: 'Exploring innovations shaping the industry.',
      image: img2,
      link: '#',
    },
    {
      id: 3,
      title: 'Partnering with Industry Leaders',
      description: 'Our collaborations and their impact.',
      image: img3,
      link: '#',
    },
    {
      id: 4,
      title: 'Sustainability in Engineering',
      description: 'Our commitment to green and sustainable solutions.',
      image: img4,
      link: '#',
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <p className="blog-subtitle">Insights, stories, and updates from our team</p>

      <div className="blog-cards">
        {blogs.map((blog) => (
          <a key={blog.id} href={blog.link} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
