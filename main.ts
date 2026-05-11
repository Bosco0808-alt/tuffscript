import "dotenv/config";

console.log(process.env.GOONER_IP);
while (true) {
  fetch("20.44.208.166").then((res) => console.log(res.status));
}
