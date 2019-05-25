console.log('javascript file was loaded')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-one')
const msgTwo = document.querySelector('#msg-two')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    msgOne.textContent='loading...'
    msgTwo.textContent=''

    const location = search.value

    console.log('form submitted with value :',location)

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)

            msgOne.textContent=data.error
        }else{
            console.log(data.location)
            console.log(data.forecast)
    
            msgOne.textContent=data.forecast.todayForecast
            msgTwo.textContent=data.forecast.temperature
        }
    })
})


})