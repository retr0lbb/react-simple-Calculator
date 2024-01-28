import {Component, ReactNode} from "react";
import Button from "../components/Button";
import Display from "../components/Display";


const initalState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [ 0 , 0 ],
    current: 0
}


export default class Calculator extends Component{

    state = {...initalState}
    
    
    constructor(props: any){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }


    clearMemory(){
        this.setState({...initalState})
    }
    setOperation(operation: string){
        if(this.state.current == 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === "=";
            const curretnOperation: any = this.state.operation;

            const values = [...this.state.values]

            switch (curretnOperation) {
                case "+":
                    values[0] = values[0] + values[1]
                    break;
                case "-":
                    values[0] = values[0] - values[1]
                    break;
                case "*":
                    values[0] = values[0] * values[1]
                    break;
                case "/":
                    values[0] = values[0] / values[1]
                    break;
                default:
                    break;
            }
            values[1] = 0;


            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals? 0: 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    addDigit(n: string){
        if(n === "." && this.state.displayValue.includes(".")){
            return;
        }
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const currentValue = clearDisplay? "": this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({
            displayValue,
            clearDisplay: false
        })

        if(n !== "."){
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render(): ReactNode {
        return(
            <div className="h-80 bg-slate-800 flex flex-col justify-center items-center">

                <Display value={this.state.displayValue} />
                <div className="w-full grid grid-cols-4">
                    <Button onClick={this.clearMemory}  label="AC" isTriple color="bg-orange-700"/>
                    <Button onClick={this.setOperation} label="/" color="bg-orange-700"/>
                    <Button onClick={this.addDigit}     label="7" />
                    <Button onClick={this.addDigit}     label="8" />
                    <Button onClick={this.addDigit}     label="9" />
                    <Button onClick={this.setOperation} label="*" color="bg-orange-700"/>
                    <Button onClick={this.addDigit}     label="4" />
                    <Button onClick={this.addDigit}     label="5" />
                    <Button onClick={this.addDigit}     label="6" />
                    <Button onClick={this.setOperation} label="-" color="bg-orange-700"/>
                    <Button onClick={this.addDigit}     label="1" />
                    <Button onClick={this.addDigit}     label="2" />
                    <Button onClick={this.addDigit}     label="3" />
                    <Button onClick={this.setOperation} label="+" color="bg-orange-700"/>
                    <Button onClick={this.addDigit}     label="0" isDouble/>
                    <Button onClick={this.addDigit}     label="." />
                    <Button onClick={this.setOperation} label="=" color="bg-orange-700"/>
                </div>
    
            </div>
        )
    }
}
