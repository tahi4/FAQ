//using selectors inside the element
const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
const btn = question.querySelector(".question-btn")

btn.addEventListener("click", function(){
    questions.forEach(function(e){
if (e !== question){
    e.classList.remove("show-text")
}
    })
    question.classList.toggle("show-text")
})
})

// traversing the dom - just for learning
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement; this is the question classlist (is thr grandparent el lolol)

//     question.classList.toggle("show-text");
//   });
// });





