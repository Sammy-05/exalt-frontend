import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import BlogPrimaryPanel from '../components/blogPrimaryPanel';
import BlogDisplay from '../components/blogDisplay';

const Blog = () => {
  return (
    <div>
      <BlogPrimaryPanel
        heading = 'Featured Insights'
      />
      <BlogDisplay
        heading = 'Featured Insights'
      />
    </div>
  );
};

export default Blog;
