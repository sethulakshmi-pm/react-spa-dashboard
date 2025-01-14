import './Topic.css';

import React from 'react';

function Topic({ match }) {
  return (
    <div className="topic-detail-container">
      <div className="topic-card-detail">
        <h3 className="topic-detail-title">{match.params.topicId}</h3>
        <p className="topic-detail-description">
          Here you can find in-depth details, examples, and tutorials for learning about{" "}
          <strong>{match.params.topicId}</strong>.
        </p>
        <div className="topic-content">
          <p>
            This section would contain detailed information and code examples regarding the{" "}
            <strong>{match.params.topicId}</strong> topic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topic;
