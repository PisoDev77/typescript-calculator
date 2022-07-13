import "./style.css";

const VALID_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;



const Calcultor = {
    value: 0,

    render(){//결과 값을 계속 바꾸기

        const resultEl = <HTMLElement>document.querySelector("#result");

        if(resultEl){
            resultEl.innerText = String(thgis.value);
        }
    },
    reset(){
        this.value = 0;
    },
    initEvent(){
       
        const buttonContainerEl = document.querySelector(".contents");
    
        buttonContainerEl?.addEventListener('click', ({target}) => {
            const buttonText = (target as HTMLButtonElement).innerText;
    
            if(buttonText === "AC"){
                //해결법 2가지 
                //1. tsconfig에 noImplicitAny 권장하지않음
                //2. Arrow 함수 활용 this를 알 수 있으니까
                this.reset(); // this의 외부 값은 섀도 처리됨.
            } else{
    
            }
        });
        
    }
}

Calcultor.render();
Calcultor.initEvent();