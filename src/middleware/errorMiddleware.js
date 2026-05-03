export const errorMiddleware =(err,req,res,next) => {
   res.status(404).json({
    status:false,
    message:err.message
   });
};