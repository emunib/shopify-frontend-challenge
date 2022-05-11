import axios from 'axios';
import {useState} from 'react';
import {v4 as uuid} from 'uuid';

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

        const data = await postPrompt(e.target.prompt.value);
        const newResult = {
            id: uuid(),
            prompt: e.target.prompt.value,
            response: data.choices[0].text
        };

        setResults((prevState) => [newResult, ...prevState]);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label htmlFor="prompt">Prompt</label>
                <textarea id="prompt" name="prompt" placeholder="Enter a prompt..."></textarea>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {results.map(result => (
                        <li key={result.id}>
                            <p>{result.prompt}</p>
                            <p>{result.response}</p>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default App;
