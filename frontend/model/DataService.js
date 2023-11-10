class DataService {
  getAxiosData(url, callback, leiro) {
    axios
      .get(url)
      .then(function (response) {
        //handle success
        callback(response.data, leiro);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postAxiosData(url, data) {
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
}

export default DataService;