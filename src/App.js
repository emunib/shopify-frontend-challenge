import axios from 'axios';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import PromptForm from './components/PromptForm';
import ResultItem from './components/ResultItem';

import './styles/global.scss';
import './App.scss';

function App() {
    // get previous results data from localStorage if available
    const [results, setResults] = useState(JSON.parse(localStorage.getItem('results')) || []);

    const [isFormError, setIsFormError] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);

    // openai request data
    const data = {
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    };

    // axios request header
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    };

    // save latest results to localStorage
    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(results));
    }, [results]);

    // makes a post request to openia with the given prompt and using the text-curie-001 engine
    // returns the response
    const postPrompt = async (prompt) => {
        const res = await axios.post(process.env.REACT_APP_API_URL, {...data, prompt}, config);
        return res.data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.prompt.focus();
        const value = e.target.prompt.value;

        if (value === '') {
            setIsFormError(true);
        } else {
            try {
                setIsFormLoading(true);

                const data = await postPrompt(value);
                const newResult = {
                    id: uuid(),
                    prompt: value,
                    response: data.choices[0].text
                };

                setResults((prevState) => [newResult, ...prevState]);
                setIsFormLoading(false);
                e.target.reset();
            } catch (e) {
                console.log(e);
                setIsFormLoading(false);
            }
        }
    };

    const handleChange = () => {
        setIsFormError(false);
    };

    return (
        <main className="app">
            <h1 className="app__title">Fun with AI!</h1>
            <PromptForm handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        isError={isFormError}
                        isLoading={isFormLoading}/>
            <h2 className="app__results-title">Responses</h2>
            <ul className="app__results-list">
                {results.map((result) => <ResultItem key={result.id} {...result}/>)}
            </ul>
        </main>
    );
}

export default App;
