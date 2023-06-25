const express = require("express");

const app = express()

app.use(express.json())

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Lee' },
    { id: 5, name: 'Mike Brown' }
];


app.get(`/`,(req,res)=>{
    res.status(200).json(users)
})

app.get(`/user/:id`,(req,res)=>{
    const {id} = req.params;
    const user = users.find((u)=> u.id === Number(id))
    res.status(200).json(user)
})

app.post(`/user/newUser`,(req,res)=>{
    const newUser = req.body;
    console.log(req.body)
    users = [...users,newUser]
    res.status(201).json({msg: "user created"})
})

app.put(`/user/modify/:id`,(req,res)=>{
    const {id} = req.params;
    const {name} = req.body
    users = users.map((u)=>{
        if (u.id === Number(id)) {
           return u = {...u,name}
        } else {
           return u 
        }
    })
    res.status(200).json({msg: "it's ok "})
})

app.delete(`/user/delete/:id`,(req,res)=>{
    const {id} = req.params
    users = users.filter((u)=> u.id != Number(id))
    res.status(200).json({msg: "DELETE"})
})

app.listen(3000,()=>{
    console.log("server listening")
})
