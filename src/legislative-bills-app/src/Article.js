// Article.js
import React, { useState } from 'react';
import ExpandedArticle from './ExpandedArticle';

const Article = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    if (!article) {
      return null;
    }
  
    return (
      <>
        <div className="article" onClick={toggleExpand}>
          <img src={`/images/${article.image}`} alt={article.title} />
          <h2>{article.title}</h2>
        </div>
        {isExpanded && (
          <ExpandedArticle article={article} onClose={toggleExpand} />
        )}
      </>
    );
  };

export default Article;