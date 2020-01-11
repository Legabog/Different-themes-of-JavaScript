
const delay = ms => {
    return new Promise(resolve =>
    setTimeout(() => resolve(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data)
//     })
//     .catch(err => console.error(err))

// ------------- The same code  with async / await
async function fetchAsyncTodos() {
    try {
    console.log('Fetch todo started...')
    await delay(2000)
    let fetchedurl = await fetch(url)
    let fetchedurljson = await fetchedurl.json()
    console.log('Data: ', fetchedurljson)
    } catch (e) {
        console.error(e)
    } finally {
        
    }
}

fetchAsyncTodos()