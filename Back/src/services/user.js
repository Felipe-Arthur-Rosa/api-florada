import read from "../repository/mongodb_repository.js";

async function readService() {
    return await read();
}

export default readService;