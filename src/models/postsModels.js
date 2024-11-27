import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão definida em variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts armazenados no banco de dados.
export async function getTodosPosts() {
    // Obtém a referência ao banco de dados "instabytes".
    const db = conexao.db("instabytes");

    // Obtém a referência à coleção "posts".
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    // Obtém a referência ao banco de dados "instabytes".
    const db = conexao.db("instabytes");

    // Obtém a referência à coleção "posts".
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array.
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    // Obtém a referência ao banco de dados "instabytes".
    const db = conexao.db("instabytes");

    // Obtém a referência à coleção "posts".
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}