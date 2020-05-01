import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
console.log('in API')

export default {
  getEmployeeList: function () {
    console.log('in getEmployeeList')
    // return axios.get("https://dog.ceo/api/breeds/image/random");
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
