let attempts = 0
let score = 0

//Em không hiểu vì sao em làm responsive không được ạ
let style = `
<style>
.container{
    font-family:300%;
    height:100%;
    padding:15vh;
    margin:8vh;
    background-color:black;
    color:white
}
label,h1{
 font-size:300%;
 height:100%;
 width:100%;
}
input[type=radio] {
 padding:1rem;
 margin:1rem;
 width:2rem;
 height: 2rem;
}
@media (max-width: 729px) {
  .container {
    display:none
  }  
} 
</style>`
export class QuestionCard extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this.question = this.getAttribute('question')
        this.answers = this.getAttribute('answers')
        this.correct = this.getAttribute('correct')
        this.length = this.getAttribute('length')
        this.ans = this.answers.split(',')
        this._shadowDom.innerHTML = `
        ${style}
        <div class="container" id="card">
            <h1>${this.question}</h1>
            <div class="answers">
                <div><input type="radio" name="answer" value="${this.ans[0]}" id="${this.ans[0]}"><label for="${this.ans[0]}">${this.ans[0]}</label></div>
                <div><input type="radio" name="answer" value="${this.ans[1]}" id="${this.ans[1]}"><label for="${this.ans[1]}">${this.ans[1]}</label></div>
                <div><input type="radio" name="answer" value="${this.ans[2]}" id="${this.ans[2]}"><label for="${this.ans[2]}">${this.ans[2]}</label></div>
                <div><input type="radio" name="answer" value="${this.ans[3]}" id="${this.ans[3]}"><label for="${this.ans[3]}">${this.ans[3]}</label></div>
            </div>
        </div>
        `
        const checkbox = this._shadowDom.querySelectorAll(
            "input[type=radio]"
        )
        const question = this._shadowDom.getElementById('card')
        for (let check of checkbox) {
            check.addEventListener("change", () => {
                if (check.value === this.correct) {
                    alert("Correct Answer! +10 points")
                    this.getAttempts(true)
                } else {
                    alert(`Incorrect Answer! Correct answer is ${this.correct}`)
                    this.getAttempts(false)
                }
                question.style.display = 'none'
            })
        }
    }
    getAttempts(value) {
        attempts += 1
        score = value ? score + 10 : score
        if (attempts === 5) {
            console.log('done')
            alert(`Finished! Your score is ${score}. You got ${score/10} questions correct out of ${this.length} questions`)
        }
    }
}
window.customElements.define('question-card', QuestionCard)