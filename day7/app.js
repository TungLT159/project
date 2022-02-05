const content = document.querySelector('.content')
const input = document.querySelector('.content input')
const btnRemoveAll = document.querySelector('.remove-all')

var tags = ['NodeJS', 'ReactJS']

const renderTags = () => {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
                    <li>
                        ${tag}
                        <i class="fas fa-times" onclick="removeTag(${i})"></i>
                    </li>
        `
    }
    content.appendChild(input)
    input.focus()
}


const removeTag = (index) => {
    tags.splice(index, 1)
    renderTags()
}

renderTags()

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        renderTags()
    }
})

btnRemoveAll.addEventListener('click', () => {
    tags = []
    renderTags()
})