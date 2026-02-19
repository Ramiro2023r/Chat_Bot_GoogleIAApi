require("dotenv").config()

const config = {
    apiKey: process.env.GEMINI_API_KEY,
    //modelName: "gemma-3-12b-it"
    modelName: "gemini-flash-latest"
}

if(!config.apiKey){
    throw new Error("ERROR: La clave API key no esta configurada en el archivo .env")
} 

module.exports = config