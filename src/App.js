import axios from 'axios';
import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import PromptForm from './components/PromptForm';
import ResultItem from './components/ResultItem';

import './styles/global.scss';
import './App.scss';

function App() {
    const [results, setResults] = useState([]);

    const data = {
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    };

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    };

    const postPrompt = async (prompt) => {
        const res = await axios.post(process.env.REACT_APP_API_URL, {...data, prompt}, config);
        return res.data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await postPrompt(e.target.prompt.value);
            const newResult = {
                id: uuid(),
                prompt: e.target.prompt.value,
                response: data.choices[0].text
            };

            setResults((prevState) => [newResult, ...prevState]);
            e.target.reset();
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <main className="app">
            <h1 className="app__title">Fun with AI!</h1>
            <PromptForm handleSubmit={handleSubmit}/>
            <h2 className="app__results-title">Responses</h2>
            <ul className="app__results-list">
                {results.map((result) => <ResultItem key={result.id} {...result}/>)}
            </ul>
        </main>
    );
}

export default App;
