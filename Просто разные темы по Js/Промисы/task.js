// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true; 
//         console.log('data received', backendData);
//     }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('Preparing data...');

//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }

//         resolve(backendData);
//     }, 2000)
// })

// p.then( data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data); 
//             // console.log('data received', backendData);
//         }, 2000);     
//     })

//     // p2.then(clientData => {
//     //     console.log('Data received', clientData);
//     // })
// })
//     .then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromPromise = true;
//     return clientData;
// }).then(data_object => {
//     console.log('Modified data', data_object);
// })
// .catch(error => {
//     console.error('Error', error);
// })
// .finally(() => console.log('Finally'))

function Sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// Sleep(2000).then(() => console.log('After 2 seconds'));
// Sleep(3000).then(() => console.log('After 3 seconds'));

Promise.all([Sleep(2000), Sleep(3000)]).then(() => {
    console.log('All promises done');
})

Promise.race([Sleep(2000), Sleep(5000)]).then(() => {
    console.log('Race promises done');
})