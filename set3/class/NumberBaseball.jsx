import React , { Component } from 'react';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
       result : '',
       value : '',
       answer : getNumbers(),
       tyies : [],
    };

    onSubmitFrom = () => {

    };
    onChangeInput = () => {

    };
    
    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitFrom}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tyies.length}</div>
                <ul>
                    {['asd' , 'lik123e' , 'zxc' , 'like' , 'like'].map( (v) => {
                        return (
                            <li>{v}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
};

export default NumberBaseball;