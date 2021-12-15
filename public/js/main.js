const submitButton = document.getElementById('submitbtn')
const postId = document.getElementById("postid")

const userId = document.getElementById('userId')
const title= document.getElementById('title')
const info =document.getElementById('boudy')


const getInfo = async(event)=>{
    event.preventDefault() 
    if(postId.value === ''){

    }else{

        try{
            
        let url = 'https://jsonplaceholder.typicode.com/posts/'+postId.value
        const respose = await fetch(url)
        const data = await respose.json()
        const arrdata = [data]
        console.log(arrdata)
        // userId.value = 'adf'
        // title.value = 'adfadf'
        // body.value = 'arrdata.body'
        userId.innerHTML = arrdata[0].userId.toString()
        title.innerHTML = arrdata[0].title
        info.innerHTML = arrdata[0].body.toString()
        console.log("Bhag bhadwa")
        postId.value++
        }catch{

        }
    }
}
submitButton.addEventListener('click',getInfo)