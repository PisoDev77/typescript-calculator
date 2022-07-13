import "./style.css";


type Operator = '+'|'-'|'×'|"÷"|"=";

interface CalcultorInterface {
    tempValue: string | number;
    tempOperator?: Operator | string;
    operator?: Operator | string;
    render(inputValue: string | number): void;
    reset(): void;
    tempCalculate(operator: Operator | string): void;
    initEvent(): void;
}

const VALID_NUMBER_OF_DIGITS = 3;
const INIT_VALUE = 0;

const validateNumberLength = (value: string | number)=>{
    return String(value).length < VALID_NUMBER_OF_DIGITS;
};

const isZero = (value: string) => Number(value) === 0;

const plus = (num1: number, num2: number) => num1 + num2;
const minus = (num1: number, num2: number) => num1 - num2;
const multiple = (num1: number, num2: number) => num1 * num2;
const divide = (num1: number, num2: number) => num1 / num2;

type ComputedValue = {
    // TS 빌트인 유틸리티 타입
    [key in Exclude<Operator, '='>]: (num1: number, num2: number) => number;
}

const getComputedValue: ComputedValue = {
    '+': plus,
    '-': minus,
    '×': multiple,
    "÷": divide
}

const Calcultor: CalcultorInterface = {
    tempValue: 0,
    tempOperator: undefined,

    render(inputValue: string | number ){//결과 값을 계속 바꾸기

        const resultEl = <HTMLElement>document.querySelector("#result");
        const prevValue = resultEl.innerText;

        if(!validateNumberLength(prevValue)){
            alert("3자리 이상의 숫자를 입력할 수 없습니다.");
            return;
        }

        if(resultEl){
            resultEl.innerText = 
            isZero(prevValue)? 
            String(inputValue) : String(prevValue + inputValue);
        }
    },
    reset(){
        // this.targetValue = 0;
    },
    tempCalculate(operator: Operator | string) {
        const isReadyCalculate = operator === '=';
        const isTempCalculate = ['+','-','×',"÷"].includes(operator);

        if(isTempCalculate){
            const resultEl = <HTMLDivElement>document.querySelector("#result");
            this.tempOperator = operator;
            this.tempValue = Number(resultEl.innerText)

            resultEl.innerText = String(0);
            return ;
        }

        if(this.tempOperator 
            && ['+','-','×',"÷"].includes(this.tempOperator)
            && isReadyCalculate){
                const resultEl = <HTMLDivElement>document.querySelector("#result");
                const resultValue = getComputedValue[this.tempOperator as Exclude<Operator, '='>](
                    Number(this.tempValue), Number(resultEl.innerText));
                    console.log(resultValue);
                resultEl.innerText = String(resultValue);
            }
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
                return;
            }

            if(!Number.isNaN(buttonText)){
                this.render(Number(buttonText));
            }
        });
        
    }
}

Calcultor.render(INIT_VALUE);
Calcultor.initEvent();