import { app } from "./app";
import { env } from "./env";

app.listen({
    port: env.PORT,
    host: '0.0.0.0' // para não não problemas ao conectar nosso front-end
}).then(() => {
    console.log('HTTP Server Running!')
})