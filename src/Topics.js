import './Topics.css';

import { Link, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Topic from './Topic';

function Topics({ match }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  return (
    <div className="topics-container">
      <div className="topics-header">
        <h2 className="topics-title">React Learning Topics</h2>
        <p className="topics-intro">
          Choose a topic to dive deeper into React concepts and enhance your skills.
        </p>
      </div>

      <div className="topics-content">
        <div className="topics-list">
          <ul className="topic-links">
            <li>
              <Link
                to={`${match.url}/build&test`}
                className="topic-card"
                onClick={() => handleTopicClick('Build & test')}
              >
                <h4>Build & Test</h4>
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/learn&discover`}
                className="topic-card"
                onClick={() => handleTopicClick('Learn & Discover')}
              >
                <h4>Learn & Discover</h4>
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/share-your-work`}
                className="topic-card"
                onClick={() => handleTopicClick('Share your work')}
              >
                <h4>Share your work</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div className="topic-detail-panel">
          {selectedTopic ? (
            <div className="topic-detail-container">
              <h3 className="topic-detail-title">{selectedTopic}</h3>
              <p className="topic-detail-description">
                Detailed content for <strong>{selectedTopic}</strong> goes here.
              </p>
            </div>
          ) : (
            <h3 className="topic-selection-message">Select a topic to see details.</h3>
          )}
        </div>
      </div>

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
}

export default Topics;
