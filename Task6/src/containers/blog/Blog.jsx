import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1>A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} title="Ericsson" text="Ericsson operates as a provider of telecommunications equipment and related services." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} title="SamSung Electronics" text="Samsung Electronics manufactures a wide range of consumer" />
        <Article imgUrl={blog03} title="Volkswagen Financial Services" text="Volkswagen Financial Services comprises dealer in 48 countries" />
        <Article imgUrl={blog04} title="Hewlett-Packard" text="Hewlett Packard Enterprise Company provides information technology solutions." />
        <Article imgUrl={blog05} title="LG Electronics" text="LG Electronics manufactures and markets digital display equipment." />
      </div>
    </div>
  </div>
);

export default Blog;
