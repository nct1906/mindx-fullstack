let style = `
<style>   
</style>`
export class QuestionList extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({
            mode: 'open'
        })
    }
    async connectedCallback() {
        let html = `${style}`
        const api = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
        async function getData(url) {
            let data = await fetch(url);
            data = await data.json()
            for (let question of data.results) {
                let answers = [question.correct_answer]
                for (let answer of question.incorrect_answers) {
                    answers.push(answer)
                }
                html += `<question-card length="${data.results.length}" question="${question.question}" answers="${answers.sort()}" correct="${question.correct_answer}"></question-card>`
            }
            return html
        }
        html = await getData(api)
        this._shadowDom.innerHTML = `${html}`
    }

}
window.customElements.define('question-list', QuestionList)