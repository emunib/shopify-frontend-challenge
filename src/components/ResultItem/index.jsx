import React from 'react';
import './style.scss';

function ResultItem({prompt, response}) {
    return (
        <li className="result">
            <div className="result__section">
                <h3 className="result__heading">Prompt</h3>
                <p className="result__text">{prompt}</p>
            </div>
            <div className="result__section result__section--light">
                <h3 className="result__heading">Response</h3>
                <p className="result__text">{response}</p>
            </div>
        </li>
    );
}

export default ResultItem;