import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map( strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    const { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } = actionTypes;
    return {
        onIncrementCounter: () =>  dispatch({ type: INCREMENT }),
        onDecrementCounter: () => dispatch({ type: DECREMENT }),
        onAddCounter: () => dispatch({ type: ADD , value: 5 }),
        onSubractCounter: () => dispatch({ type: SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, resultId: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);