const path=require('path')

const express=require('express')
const app=express()
const publicPath=path.join(__dirname,'..','public')
const port= process.env.PORT || 3000

app.use(express.static(publicPath));//register middleware
//express will serve ull all assets in the public path

app.get('*',(req,res)=>{//if the person requested isn't in the public folder, 
//just give them back index.html
res.sendfile(path.join(publicPath,'index.html'))
})
//set up function torun when run a get request to our server

app.listen(port,()=>{
    console.log('server is up')
})        

