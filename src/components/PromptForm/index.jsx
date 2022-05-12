import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleExclamation, faSpinner} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function PromptForm({handleSubmit, handleChange, isError, isLoading}) {
    return (
        <form className="prompt-form" onSubmit={handleSubmit}>
            <label className="prompt-form__label" htmlFor="prompt">Prompt</label>
            <textarea className={'prompt-form__textarea' + (isError ? ' prompt-form__textarea--error' : '')}
                      id="prompt"
                      name="prompt"
                      placeholder="Enter a prompt..."
                      onChange={handleChange}
                      autoFocus></textarea>
            {isError &&
                <div className="prompt-form__error-msg">
                    <FontAwesomeIcon icon={faCircleExclamation}/> Please enter a prompt
                </div>
            }

            <button className="prompt-form__button" type="submit">
                {isLoading ? <FontAwesomeIcon className="prompt-form__spinner" icon={faSpinner}/> : 'Submit'}
            </button>
        </form>);
}

export default PromptForm;