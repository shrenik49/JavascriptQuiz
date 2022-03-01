const questions=[
    {
        question:"Q1:indicates an absent value that may exist but be unknown or that may not exist at all.Bookmark",
        a: "Empty tuple",
        b: "New value",
        c: "Null value",
        d: "Old value",
        ans:"ans3"
    },
    {
        question:"Q2:Javascript is an _______ language?",
        a: "Object oriented",
        b: "object based",
        c: "procedural",
        d: "none of the above",
        ans:"ans4"
    },
    {
        question:"Q3:Which one of the following also known as Conditional Expression",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans:"ans4"
    },
    {
        question:"Q4:The function and var are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans:"ans3"
    },
    {
        question:"Q5:In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: " Missing of Bracket",
        ans:"ans3"
    },
    {
        question:"Q6:Which of the following number object function returns the value of the number?",
        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()",
        ans:"ans2"
    },
]

const quest=document.querySelector('.question');
const opt1=document.querySelector('#option1');
const opt2=document.querySelector('#option2');
const opt3=document.querySelector('#option3');
const opt4=document.querySelector('#option4');
const submitButtton=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let countQuestions=0;
let correctAnswer=0;
const loadquestions=()=>{
    
    const qiestinlist=questions[countQuestions];
    quest.innerHTML=qiestinlist.question;
    opt1.innerHTML=qiestinlist.a;
    opt2.innerHTML=qiestinlist.b;
    opt3.innerHTML=qiestinlist.c;
    opt4.innerHTML=qiestinlist.d;
    
}


const checkanwer=()=>{
    let answer
    answers.forEach((currentElement)=>{
        if(currentElement.checked)
            answer=currentElement.id;
    });
    return answer;
};

const deselect=()=>{    
    answers.forEach((currentElement)=>currentElement.checked=false);
};


submitButtton.addEventListener('click',()=>{
    const checkAnswer=checkanwer();

    if(questions[countQuestions].ans===checkAnswer){
        correctAnswer++;
    }
    countQuestions++;

    deselect();


    if(countQuestions<questions.length){
        loadquestions();
    }else{
        showscore.innerHTML=`
        <h3>your score is ${correctAnswer} out of ${questions.length}</h3>
        <button class="btn" onclick="location.reload()">Start Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
})

loadquestions();

