import React, {Component} from 'react';
import Card from "./Card";

class Section extends Component {
    state = {
        textMessage: '',
        cards: []
    };

    addCard = () => {
        let newCardMessage = this.state.textMessage;

        // 定义用来更新state的函数，PPT中setState第二种用法
        const updateState = (prevState) => {
            prevState.cards.push(newCardMessage)
            return { textMessage: '', cards: prevState.cards }
        };

        // 注意此处传入的参数是updateState函数定义，不是函数调用
        this.setState(updateState)
    };

    inputChange = (event) => {
        //PPT中setState第一种用法
        this.setState({textMessage: event.target.value})
    };

    removeCard = (index) => {
        // 定义用来更新state的函数，PPT中setState第二种用法
        const updateState = (prevState) => {

            //从cards数组中删除在index处的元素
            prevState.cards.splice(index, 1);

            return { cards:  prevState.cards }
        };

        this.setState(updateState)
    };

    render() {
        // render function 返回JSX代码，在JSX中任何需要调用javascript的地方需要加花括号{}
        return (
            <div className={'container ' + this.props.theme}> {/* 动态加 className 可以得到不同的 style */}
                <h1>{this.props.header}</h1>
                {/* 注意在 onChange handler 中出入的是函数定义，不是函数调用 */}
                <input value={this.state.textMessage} onChange={this.inputChange} type='text'/>
                <button onClick={this.addCard} disabled={this.state.textMessage === ''}>Add Card</button>
                {
                    this.state.cards.map((message, index) =>
                        <Card cardMessage={message} index={index} removeCard={this.removeCard} key={index}/>
                    )
                }
            </div>
        )
    }
}

export default Section
