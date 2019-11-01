
// built for identifying duplicates in an endorsements list 

const namesList = document.getElementsByClassName('names')[0].children
const namesArray = Array.from(namesList)

const namesObj = {}
namesArray.forEach(function (node) {
    if (!namesObj[node.innerText] ) { 
        namesObj[node.innerText] = 1
    } else console.log(`Duplicate found: ${node.innerText}`)
})