import React from 'react';
import './style.scss';

function PromptForm({handleSubmit, handleChange, isError}) {
    return (
        <form className="prompt-form" onSubmit={handleSubmit}>
            <label className="prompt-form__label" htmlFor="prompt">Prompt</label>
            <textarea className={'prompt-form__textarea' + (isError ? ' prompt-form__textarea--error' : '')}
                      id="prompt"
                      name="prompt"
                      placeholder="Enter a prompt..."
                      onChange={handleChange}></textarea>
            {isError && <div className="prompt-form__error-msg"><i className="fa-solid fa-circle-exclamation"></i> Please enter a prompt</div>}
            <button className="prompt-form__button" type="submit">Submit</button>
        </form>);
}

export default PromptForm;