const {body} = require('express-validator')

function sampleValidate(){
    console.log("sampleValidate");
    return [
        [
            
            body('name')
              .notEmpty()
              .withMessage('Name is required')
              .isLength({ max: 50 })
              .withMessage('Name must not exceed 50 characters'),
        
            
            body('email')
              .notEmpty()
              .withMessage('Email is required')
              .isEmail()
              .withMessage('Invalid email format'),
          ]                                                                                                                     
    ]
}



  


module.exports = {
    sampleValidate
}