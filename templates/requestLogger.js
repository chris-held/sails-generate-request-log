
module.exports = {
	requestLogger: function(req, res, next) {
	  res.on('finish', function(){
	    RequestLog.create({
	      requestUrl: req.originalUrl,
	      requestMethod: req.method,
	      requestHeaders: req.headers,
	      requestBody: req.body
	    }, function(err, log){
	      sails.log.verbose("Request Logged:", JSON.stringify(log));
	    });
	  });
	  
	  return next();
	}
};
