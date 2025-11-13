const express=require('express');
const InfoController=require('../../controllers/info-controller');
const router=express.Router();
router.get('/info',InfoController.info);

module.exports=router;