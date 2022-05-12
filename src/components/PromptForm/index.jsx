import React from 'react';
import './style.scss';

function PromptForm({handleSubmit}) {
    return (
        <form className="prompt-form" onSubmit={handleSubmit}>
            <label className="prompt-form__label" htmlFor="prompt">Prompt</label>
            <textarea className="prompt-form__textarea"
                      id="prompt"
                      name="prompt"
                      placeholder="Enter a prompt..."></textarea>
            <button className="prompt-form__button" type="submit">Submit</button>
        </form>);
}

export default PromptForm;