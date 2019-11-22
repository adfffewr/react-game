const React = require('react');
const { useState , useRef } = React;

const WordRelay = () => {
    const [word , setWord] = useState('이성재');
    const [value , setValue] = useState('');
    const [result , setResult] = useState('');

    const inputRef = useRef(null)
    
    const onSumbitForm = (e) => {
        e.preventDefault();
        if(word[word.length -1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else {
            setResult('땡');
            // setWord('');
            setValue('');
            inputRef.current.focus();
        }
    };
    const onChangeInput = (e) => {
        setValue( e.target.value)
    };
    
    return(
        <>
            <div>{word}</div>
            <form onSubmit={onSumbitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>클릭</button>
            </form>
            <div>{result}</div>
        </>
    )
    
};

module.exports = WordRelay;