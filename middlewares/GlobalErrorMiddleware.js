
const GlobalErrorMiddlewre = (err,req,res,next)=>{
        if(process.env.NODE_ENV === 'development')   {
            sendErrorForDev(err,res);
        }else{
            sendErrorForProd(err,res);
        }
};

  const sendErrorForDev = ((err,res)=>{
    return res.status(err.statusCode || 400).send({
        status: err.status || 'erro',
        err: err,
        message: err.message,
        stack: err.stack,
      });
  });


  const sendErrorForProd = ((err,res)=>{
    return res.status(err.statusCode || 400).send({
        status: err.status || 'error',
        message: err.message,
      });
  });

  module.exports = GlobalErrorMiddlewre;