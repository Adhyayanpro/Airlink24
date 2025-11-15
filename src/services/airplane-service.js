const {AirplaneRepository}=require("../repositories");
const airplaneRepository=new AirplaneRepository();
const {StatusCodes}=require("http-status-codes");
const AppError=require("../utils/errors/app-error");

async function createAirplane(data){
    try {
        const airplane=await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw error;
    }}
    async function getAirplanes(){
        try {
            const airplanes=await airplaneRepository.getAll();
            return airplanes;
        } catch (error) {
            throw new AppError("Unable to fetch airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async function getAirplane(id){
        try {
            const airplane=await airplaneRepository.get(id);
           
            return airplane;
        } catch (error) {
            if(error.statusCode==StatusCodes.NOT_FOUND){
                throw new AppError("The airplane you requested is not available",error.statusCode);
            }
            throw new AppError("Unable to fetch airplane",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async function destroyAirplane(id){
        try {
            const response=await airplaneRepository.destroy(id);
            return response;
        } catch (error) {
            if(error.statusCode==StatusCodes.NOT_FOUND){
                throw new AppError("The airplane you requested is not available",error.statusCode);
            }
            throw new AppError("Unable to delete airplane",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async function updateAirplane(id,data){
        try {
            const response=await airplaneRepository.update(id,data);
            return response;
        } catch (error) {
            if(error.statusCode==StatusCodes.NOT_FOUND){
                throw new AppError("The airplane you requested is not available",error.statusCode);
            }
            throw new AppError("Unable to update airplane",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}