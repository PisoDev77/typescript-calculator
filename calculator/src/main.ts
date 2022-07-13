import "./style.css";

const VALID_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;



const Calcultor = {
    value: 0,

    render(){//결과 값을 계속 바꾸기

        const resultEl = <HTMLElement>document.querySelector("#result");

        if(resultEl){
            resultEl.innerText = String(this.value);
        }
    },
    reset(){
        this.value = 0;
    },
    initEvent(){
       
        const buttonContainerEl = document.querySelector(".contents");
    
        buttonContainerEl?.addEventListener('click', function({target}){
            const buttonText = (target as HTMLButtonElement).innerText;
    
            if(buttonText === "AC"){
                this.reset(); // this의 외부 값은 섀도 처리됨.
            } else{
    
            }
        });
        
    }
}

Calcultor.render();
Calcultor.initEvent();