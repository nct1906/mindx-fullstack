const createForm = document.getElementById('form-question')
const textAreaQuestion = document.getElementById('create-textarea')

createForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const content = textAreaQuestion.value;
  
    const question = { content }
  
    if (content.trim().length > 0) {
        try {
          const res = await fetch("http://localhost:8080/create-question", {
            method: "POST",
            body: new URLSearchParams(question),
          })
          const data = await res.json()
          console.log(data)
          alert("Your question has been posted successfully!")
          // if (res.success) {
          //   window.location.href = "/"
          // }
          askForm.reset()
          charCount.innerHTML = `0/200 characters`
        } catch (err) {
          console.log(err)
        }
      }
    })