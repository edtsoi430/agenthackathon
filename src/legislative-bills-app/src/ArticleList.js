// ArticleList.js
import React from 'react';
import Article from './Article';

const articles = [
  {
    id: 1,
    title: 'New Environmental Protection Act',
    image: 'environment.jpeg',
    content: 'Full text of the Environmental Protection Act...',
  },
  {
    id: 2,
    title: 'Healthcare Reform Bill',
    image: 'healthcare.jpg',
    content: 'Full text of the Healthcare Reform Bill...',
  },
  {
    id: 3,
    title: 'Education Funding Proposal',
    image: 'education.jpg',
    content: 'Full text of the Education Funding Proposal...',
  },
];

const ArticleList = () => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;