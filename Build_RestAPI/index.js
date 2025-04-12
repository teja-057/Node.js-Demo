const express = require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const port = 8000;
app.listen(port,()=>{console.log(`Server is running at port : ${port}`)});
app.get('/',(req,res)=>{
    return res.send("Hello namasthe");
})
app.get('/users', (req, res) => {
    const html = `
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(user => {
            return `
            <tr>
              <td>${user.id}</td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td>${user.gender}</td>
              <td>${user.job_title}</td>
            </tr>`;
        }).join('')}
      </tbody>
    </table>
    `;
   return res.send(html);
});
app.get('/api/users',(req,res)=>{
    return res.json(users);
})
app.get('/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((users)=>users.id=id);
    const html=`
    <table border="1px solid black" cellspacing="0" cellpadding="5">
    <thead>
    <tr>
          <th>id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Job</th>
    </tr>
    </thead>
    <tbody>
    <tr>
              <td>${user.id}</td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td>${user.gender}</td>
              <td>${user.job_title}</td>
        
    </tr>
    </tbody>
    </table>
    `
    return res.send(html);
})