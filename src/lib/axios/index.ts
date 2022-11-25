import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const client = (() => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "localhost:3000",
  });
})();

const request = async function (options: AxiosRequestConfig) {
  const onSuccess = function (response: AxiosResponse) {
    const { data } = response;
    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject(error.response);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
