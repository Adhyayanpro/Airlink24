const {CityService} = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const {StatusCodes}=require("http-status-codes");
async function createCity(req, res) {
    try {
        const { name } = req.body;
        const city = await CityService.createCity({
            name 
        });
        SuccessResponse.data = city;
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        console.log(error);
            ErrorResponse.message = error.message;
        return res.status(error.statusCode || 500).json(ErrorResponse);
    }
}
module.exports={
    createCity
}