const fs =require('fs');
const path=require('path');
const express= require('express');
const app=express();

const { accounts, users, writeJSON } = require('./data.js');
const accountRoutes=require('./routes/accounts.js');
app.use('/account',accountRoutes);

const servicesRoutes=require('./routes/services.js');
app.use('/services',servicesRoutes);

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.render('index',{
    title: 'Account Summary',
    accounts:accounts
  });
});

app.get('/profile',function(req,res){
  res.render('profile',{
    user: users[0]
  })
})



app.listen(3000, function(){
  console.log('PS Project Running on port 3000!');
});
