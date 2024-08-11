// ExpandedArticle.js
import React, { useRef, useEffect } from 'react';

const ExpandedArticle = ({ article, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="expanded-article-overlay">
      <div className="expanded-article" ref={ref}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default ExpandedArticle;