var score=0;
var isCorrect1= false;
var isCorrect2= false;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if(!isCorrect1){
            score++;
            isCorrect1= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        if(isCorrect1){
            score--;
            isCorrect1= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }

}
function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'a') {
  
        result2.textContent = "ถูกต้อง บริษัท โกซอฟท์ (ประเทศไทย) จำกัด ก่อตั้งเมื่อ 1 มกราคม 2003 ";
        result2.style.color = 'green';
        if(!isCorrect2){
            score++;
            isCorrect2= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        if(isCorrect2){
            score--;
            isCorrect2= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}