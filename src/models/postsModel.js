import conectarAoBanco from "../config/dbConfig.js";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
