const router=require("express").Router(),{Users}=require("../../models");router.get("/",(a,b)=>{b.render("login.handlebars")}),router.post("/",async(a,b)=>{try{const{email:c,password:d}=a.body,e=await Users.findOne({where:{email:c}});if(!e)return void b.status(400).json({message:"Incorrect email or password, please try again"});const f=await e.checkPassword(d);if(!f)return void b.status(400).json({message:"Incorrect email or password, please try again"});const g=e.get({plain:!0});a.session.user_id=g.id,a.session.logged_in=!0,a.session.save(()=>{console.log(a.session),b.status(200).json({message:"Logged in"})})}catch(a){b.status(500).json(a)}}),module.exports=router;