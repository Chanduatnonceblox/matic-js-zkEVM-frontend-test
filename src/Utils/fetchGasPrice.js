

  export async function getGasData() {
    let gasData;
    fetch("https://gasstation-testnet.polygon.technology/zkevm", {
      method: "GET",
      headers: {
       
      },
    })
      .then((response) => response.json())
      .then((data) => {
        gasData=data
        console.log(data);
        
      })
      .catch((error) => console.log(error));

      return gasData;
  }