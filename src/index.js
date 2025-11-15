const {ServerConfig,Logger}=require('./config');
const express = require('express');
const apiRoutes = require('./routes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    // Logger.info(`Server started on port ${ServerConfig.PORT}`,{});
});