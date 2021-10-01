import { default as axios } from "axios";

const __URL = "https://jsonplaceholder.typicode.com/posts/1";

const call = () => {
  axios.get(__URL).then(function (response) {
    console.log(response.data);
    return response;
  });
  console.log("읭?🤔");
};

// NEW!! async await

const callByAsync = async () => {
  const response = await axios.get(__URL);
  console.log(response.data);
  console.log("오?🔥");
};

callByAsync();
