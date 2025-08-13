"use strict"; 


const handleResponse = async(response, parseResponse) => {
   const content = document.querySelector("#content"); 


   //Displays status code
   switch(response.status) {
      case 200: 
         console.log("Successful");
      break; 
      case 201:
         console.log("Created ");
      break; 
      case 400:
         console.log("Bad Request");
      break; 
      case 404:
         console.log("Successful");
      break; 
      default:
      console.log("Error code not implemented by client. ");
      break; 
      
   }
}
