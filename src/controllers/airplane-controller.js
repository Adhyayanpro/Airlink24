const {AirplaneService} = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const {StatusCodes}=require("http-status-codes");
async function createAirplane(req, res) {
    try {
        const { modelNumber, capacity } = req.body;
        const airplane = await AirplaneService.createAirplane({
            modelNumber ,
            capacity 
        }
            
        );
        SuccessResponse.data = airplane;
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        console.log(error);
            ErrorResponse.message = error.message;
        return res.status(error.statusCode || 500).json(ErrorResponse);
          
    }
}
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || 500).json(ErrorResponse);
    }
}
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || 500).json(ErrorResponse);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}