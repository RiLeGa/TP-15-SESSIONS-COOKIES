const {validationResult} = require('express-validator');

module.exports = {
    index : (req, res) => {
        return res.render('index')
    },
    color : (req, res) => {
        const errors = validationResult(req);
           
              if (errors.isEmpty()) {
                  const {name, color, email, age, remember} = req.body; 
                
                  req.session.cookieColor = color;
                  res.locals.cookieColor = req.session.cookieColor;

                  if(remember){
                      res.cookie('cookieColor', req.session.cookieColor, {maxAge: 1000 * 60})
                  }

                  return res.render('index', {
                      name, 
                      color,                       
                      email, 
                      age
                    })

              } else {
                  return res.render('index',{
                    old: req.body,
                    errors: errors.mapped()
                  })
        }     
    },
    logout : (req, res) =>{
        return res.render('logout')
    },
    
    destroy: (req, res) => {
       
        req.session.destroy();
        res.cookie('cookieColor', null, {maxAge: -1})
        res.redirect('/')
    } 
      
    }   


