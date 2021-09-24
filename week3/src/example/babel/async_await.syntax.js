import axios from "axios";

const __URL = "https://jsonplaceholder.typicode.com/posts/1";

const asyncFunc = async () => {
  const response = await axios.get(__URL);
  console.log(response.data);
};

asyncFunc();
