const jwt = require('jsonwebtoken');

/**
 * Function to check if user has correct token to secure routes
 */
module.exports = function(req, res, next){
    const token = req.header('auth-token');
    if(!token)
    {  
        return res.status(401).send('Access Denied : No token given with the request');
    }
    try{ 
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token')
    }

}