import "./style.css";

const VALID_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;

//1. HTML 요소 타이핑
// assertion 타입 단언에 대한 내용 숙지 필요
// document.querySelector("#result").innerText = 9999;
// const resultEl = document.querySelector("#result") as HTMLElement;
const resultEl = <HTMLElement>document.querySelector("#result");

if(resultEl){
    resultEl.innerText = String(99999);
}