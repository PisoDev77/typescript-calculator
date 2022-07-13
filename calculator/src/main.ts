import "./style.css";


type Operator = '+'|'-'|'×'|"÷"|"=";

interface CalcultorInterface {
    targetValue: number | string;
    //undefined를 받을 수 있다.
    operator?: Operator | string;
    render(inputValue: string | number): void;
    reset(): void;
    tempCalculate(operator: Operator | string): void;
    initEvent(): void;
}

const VALID_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;
const INIT_VALUE = 0;

const validateNumberLength = (value: string | number)=>{
    return String(value).length < VALID_NUMBER_OF_DIGITS;
};

const isZero = (value: string) => Number(value) === 0;

const plus = (num1: number, num2: number) => num1 + num2;
const minus = (num1: number, num2: number) => num1 - num2;
const multiple = (num1: number, num2: number) => num1 * num2;
const divide = (num1: number, num2: number) => num1 / num2;

const Calcultor: CalcultorInterface = {
    targetValue: 0,
    operator: undefined,

    render(inputValue: string | number ){//결과 값을 계속 바꾸기

        const resultEl = <HTMLElement>document.querySelector("#result");
        const prevValue = resultEl.innerText;

        if(!validateNumberLength(prevValue)){
            alert("3자리 이상의 숫자를 입력할 수 없습니다.");
            return;
        }

        if(resultEl){
            this.targetValue = 
            isZero(prevValue)? 
            String(inputValue) : String(prevValue + inputValue);
            resultEl.innerText = this.targetValue;            
        }
    },
    reset(){
        this.targetValue = 0;
    },
    tempCalculate(operator: Operator | string) {
        const isCalculate = operator === '=';

        if(isCalculate){

        }
        this.operator = operator;

        if(operator === "+"){
            plus();
        }

        if(operator === "-"){
            minus();
        }

        if(operator === "×"){
            multiple();
        }

        if(operator === "="){
            divide();
        }
        // switch(operator){
        //     case '+':
        //         this.plus();
        //         break;
                
        //     case '-': 
        //         this.minus();
        //         break;

        //     case '×':
        //         this.multiple()
        //         break;

        //     case '÷':
        //         break;

        //     case '=':

        //         break;
        // }
    },
    initEvent(){
       
        const buttonContainerEl = document.querySelector(".contents");
    
        buttonContainerEl?.addEventListener('click', ({target}) => {
            const buttonText = (target as HTMLButtonElement).innerText;
    
            if(buttonText === "AC"){
                this.reset();
            } 
            
            if(['+','-','×',"÷","="].includes(buttonText)){
                this.tempCalculate(buttonText);
            }

            if(Number.isNaN(buttonText)){
                this.render(Number(buttonText));
            }
        });
        
    }
}

Calcultor.render(INIT_VALUE);
Calcultor.initEvent();