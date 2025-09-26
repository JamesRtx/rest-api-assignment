var  data = [
  {
  "id": "1",
  "name": "John Updated",
  "email": "john.updated@example.com"
},
  {
  "id": "2",
  "name": "John Updated",
  "email": "john.updated@example.com"
},
  {
  "id": "3",
  "name": "John Updated",
  "email": "john.updated@example.com"
}
];

  class RestApiDAO {
        static async GetUserbyID(id) {
          const founduser =  data.find(data => data.id === id);
            if (founduser == undefined){
              return Error
            }
            console.log(data)
            return founduser

            
        }
      static async CreateUser(name, email) {
        try {
            let maxId = 0;

            for (const item of data) {
              const itemid = parseInt(item.id); // convert id to number
              if (itemid > maxId) {
                maxId = itemid; // store as number, not string
              }
            }

            const newItem = {
              id: (maxId + 1).toString(),
              name: name,
              email: email
            };

            console.log(newItem);

            data.push(newItem); // add it to the array

            return newItem;
          } catch (e) {
            return e;
          }

           
        }

        static async UpdateUser(id,name,email) {
          const founduser =  data.find(data => data.id === id);
            if (founduser == undefined){
              return { status: 404, error: "404 Not Found" };
            }
            founduser.name = name
            founduser.email = email

            return  founduser
        }

        static async DeleteUser(id) {
          const founduserindex =  data.findIndex(data => data.id === id);
            if (founduserindex == -1){
              return { status: 404, error: "404 Not Found" };
            }
             data.splice(founduserindex, 1);

            return ''
        }
}

   module.exports = RestApiDAO;
