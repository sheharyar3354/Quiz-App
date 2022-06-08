const questions = [
    {
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'what year javascript was launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does CSS stand for',
        'a': 'Hyper text mark up language',
        'b': 'Casding Style Sheet',
        'c': 'Jason object notation',
        'd': 'Javascript',
        'correct': 'b'
    }

]

let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
// console.log(optionInputs);


const loadQuestion = () => {
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    // we will be checking answer here
    const data = questions[index];
    console.log('thanks for calling me');
    const ans = getAnswer();
    console.log(ans);
    if(ans == data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};

const getAnswer = () => {
    // it will be iterating the options
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
               answer = input.value;
            }
     }
    )
     return answer;
};

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML =  `
    <div style ="text-align: center;">
    <h3> Thank you for playing the quiz! </h3>
       <h2> ${right} / ${total} are correct </h2>
    </div>`
};

loadQuestion();