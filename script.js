function getCoins() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      let showData = "";

      json.forEach(function (coin) {
        console.log();
        showData += `
        <div class="coinItem">
<div class="left">
    <img src=${coin.image} alt="imageCoin" class="imagecoin">
</div>
<div class="center">
    <h3 class="namecoin">${coin.name}</h3>
    <h5 class="symbol">${coin.symbol.toUpperCase()}</h5>
</div>
<div class="right">
    <h3 class="price">$${coin.current_price.toLocaleString("en-US")}</h3>
    <h5 class="marketkap"> MCap : ${
          Math.abs(Number(coin.market_cap)) >= 1.0e9
            ? (Math.abs(Number(coin.market_cap)) / 1.0e9).toFixed(0) + " B"
            : // Six Zeroes for Millions
            Math.abs(Number(coin.market_cap)) >= 1.0e6
            ? (Math.abs(Number(coin.market_cap)) / 1.0e6).toFixed(0) + " M"
            : // Three Zeroes for Thousands
              Math.abs(Number(coin.market_cap)) >= 1.0e3
        }</h5>
</div>
</div> 


            `;
      });

      setTimeout(() => {
        document.getElementById("show").innerHTML = showData;
      }, 1200);
    }).catch(error=>console.log(error.message))
}

getCoins();
