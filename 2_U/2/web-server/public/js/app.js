console.log('javascript file was loaded')

fetch('http://localhost:3000/weather?address=mumbai').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})