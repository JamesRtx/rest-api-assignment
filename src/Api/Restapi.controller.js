
const RestApiDAO  = require('../DAO/Restapi.DAO.js');

  class RestApi {
        static async RetrieveaUser(req,res,next) {
          try {
            var data = await RestApiDAO.GetUserbyID(req.params.id)
         
            res.status(200).send(data)  
        } 
          catch(e){
            res.status(404).send(' Not Found');
          }

          
        }

    static async CreateaUser(req,res,next) {
      if (req.body.name == undefined || req.body.email == undefined){
         res.status(400).send('400 Bad Request');
      }
        let name = req.body.name
        let email = req.body.email
        try {
          
            var data = await RestApiDAO.CreateUser(name,email)
         
            res.status(201).send(data)  
        } 
          catch(e){
            res.status(400).send('400 Not Found');
          }

          
        }

        
    static async UpdateaUser(req,res,next) {
      if (req.body.name == undefined || req.body.email == undefined){
         res.status(400).send('400 Bad Request');
      }
        let name = req.body.name
        let email = req.body.email
        
        try {
                      

            var data = await RestApiDAO.UpdateUser(req.params.id,name,email)
            
            if(data.status == 404) {
              var err = new Error(data.error)
              err.status = data.status
              throw err
            }
            res.status(200).send(data)  
        } 
          catch(e){
           return res.status(e.status).send(e.message)
          }

          
        }

      static async DeleteaUser(req,res,next) {
     try {
                      
           var data = await RestApiDAO.DeleteUser(req.params.id)
            
            if(data.status == 404) {
              var err = new Error(data.error)
              err.status = data.status
              throw err
            }
            console.log(data)
            res.status(204).end()
        } 
          catch(e){
           return res.status(e.status).send(e.message)
          }

        }
}

   module.exports = RestApi;

