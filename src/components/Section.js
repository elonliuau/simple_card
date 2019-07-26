import React, {Component} from 'react';
import Card from "./Card";

class Section extends Component {
    state = {
        fullName: '',
        birthDate: '',
        cards: []
    };

    addCard = () => {
        let newCard = {
            fullName: this.state.fullName,
            birthDate: this.state.birthDate
        }

        // 定义用来更新state的函数，PPT中setState第二种用法
        const updateState = (prevState) => {
            prevState.cards.push(newCard)
            return { fullName: '', birthDate: '', cards: prevState.cards }
        };

        // 注意此处传入的参数是updateState函数定义，不是函数调用
        this.setState(updateState)
    };

    fullNameInputChange = (event) => {
        //PPT中setState第一种用法
        this.setState({fullName: event.target.value})
    };

    birthDateInputChange = (event) => {
        //PPT中setState第一种用法
        this.setState({birthDate: event.target.value})
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

    clearText = () => {
        this.setState({textMessage: ''})
    };

    render() {
        // render function 返回JSX代码，在JSX中任何需要调用javascript的地方需要加花括号{}
        return (
            <div className={'container ' + this.props.theme}> {/* 动态加 className 可以得到不同的 style */}
                <h1>{this.props.header}</h1>
                <input value={this.state.fullName} onChange={this.fullNameInputChange} type='text'/>
                <input value={this.state.birthDate} onChange={this.birthDateInputChange} type='text'/>
                <button onClick={this.addCard} disabled={this.state.textMessage === ''}>Add Card</button>
                {
                    this.state.cards.map((card, index) =>
                        <Card fullName={card.fullName} birthDate={card.birthDate} index={index} removeCard={this.removeCard} key={index}/>
                    )
                }
            </div>
        )
    }
}

export default Section
