import React, { Component, ChangeEvent } from 'react';
import './SegmentedContorl.scss';

// array with min 2 length https://github.com/Microsoft/TypeScript/issues/23528
type ArrayTwoOrMore<T> = {
    0: T
    1: T
} & Array<T>


interface State {
    checkedOption: string;
}

interface Props {
    values: ArrayTwoOrMore<string>;
    segmentLabel: string;
    defaultTo?: string;
    sendData?(data: any): void;
}

class SegmentedControl extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            checkedOption: props.defaultTo && props.values.includes(props.defaultTo) ?
                props.defaultTo : props.values[0]
        };
    }

    handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            checkedOption: event.target.value
        });

        if (this.props.sendData) {
            this.props.sendData(event.target.value)
        }
    };

    render() {
        return (
            <div className="SegmentedControl">
                <span className="SegmentedControl-header">{this.props.segmentLabel}</span>
                <span className="SegmentedControl-controlBox">
                    {this.props.values.map((checked, index) => {
                        return (
                            <label
                                key={index}
                                className={this.state.checkedOption === checked ? 'checked' : ''}
                            >
                                <input
                                    type="radio"
                                    value={checked}
                                    checked={this.state.checkedOption === checked}
                                    onChange={this.handleOptionChange}
                                />
                                {`${checked}`}
                            </label>
                        )
                    })}
                </span>
            </div>)
    }
}

export default SegmentedControl;
