const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const addBtn = $('.btn')
const todoList = $('.todo-list')

let title = $('input[name="title"]')
let description = $('input[name="description"]')
let date = $('input[name="date"]')
let priorities = $$('input[name="priority"]')
const jobs = []

title.focus()
function getJob() {
    let priority
    priorities.forEach(element => {
        if (element.checked) {
            priority = element.value
        }
    });
    jobs.push({
        title: title.value,
        description: description.value,
        duaDate: date.value,
        priority: priority
    })
    return jobs
}

function handleDelete(id) {
    alert('Delete')
    delete jobs[id]
    renderJob()
}

function handleChangePriority (id) {
    alert('Change Priority')
    let job = jobs[id]
    job.priority = !job.priority
    renderJob()
}

function renderJob () {
    let htmls = ''
    jobs.forEach((job, index) => {
        htmls += `<li class="list-item">
            <div class="item-info">
                <h2>Title: ${job.title}</h2>
                <p>Description: ${job.description}</p>
                <p>Due Date: ${job.duaDate}</p>
                <p>${job.priority === 1 ? 'Priority' : 'Not Priority'}</p>
            </div>
            <div class="item-btn">
                <button class="btn btn-danger" onclick="handleDelete(${index})">Delete</button>
                <button class="btn btn-primary" onclick="handleChangePriority(${index})">Change</button>
            </div>
        </li>`
    })
     todoList.innerHTML = htmls
}
 
addBtn.onclick = function () {
    getJob()   
    renderJob()
    title.focus()
    title.value = ''
    description.value = ''
    date.value = ''
}
