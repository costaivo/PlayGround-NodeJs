// setTimeout(() => {
//     console.log('2 seconds are up')
// }, 2000)

// setTimeout(() => {
//     console.log('called with zero seconds')
// }, 0)

// const names = ['ivo', 'daniel', 'nathan']

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
// console.log(shortNames)


// const geocode = (address, callback) => {
//     const data = {
//         latitude: 0.3423,
//         longitude: 0.122134
//     }
//     return data
// }

// const data = geocode('Goa')
// console.log(data)

/* With setTimeOut */

// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//             latitude: 0.3423,
//             longitude: 0.122134
//         }
//         return data
//     },2000)

// }

// const data = geocode('Goa')
// console.log(data)


/* with Callback function */

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0.3423,
//             longitude: 0.122134
//         }
//         callback(data)
//     }, 2000)

// }

// geocode('Goa',(data)=>{
//     console.log('Reading Data')
//     console.log(data)
// })

// console.log('Finished Running')