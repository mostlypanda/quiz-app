const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
module.exports = function(app, express, mongoose){
    var config = this;
  
    
      
    

      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
      app.mongoose.connect("mongodb+srv://test:test@cluster0-bi1rv.mongodb.net/quiz-bank?retryWrites=true&w=majority");
      app.use(express.errorHandler());
  
    
    app.use(NotFoundErrorHandler);
    app.use(ErrorHandler);
    
    // Error Handling - Not Found
    function NotFound(msg) {
      this.name = "NotFound";
      Error.call(this, msg);
      Error.captureStackTrace(this, arguments.callee);
    } 
    
    // Error Handling - 404 Error
    function NotFoundErrorHandler(err, req, res, next) {
      if (error instanceof NotFound) {
        res.render("404.jade", {
          status: 400
        });
      } else {
        next(error);
      }
    }
    
    // Error Handling - 500 Error
    function ErrorHandler(err, req, res, next) {
      res.render("500.jade", {
        status: 500,
        locals: {error: err} 
      });
    }
    
    return config;
  };