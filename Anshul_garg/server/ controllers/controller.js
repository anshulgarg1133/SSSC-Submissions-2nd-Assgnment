

let resultsMemory = [];

export async function getQuestions(req, res) {
    try {
        res.json(questions);
    } catch (error) {
        res.json({ error });
    }
}

export async function insertQuestions(req, res) {
    try {
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

export async function dropQuestions(req, res) {
    try {
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

export async function getResult(req, res) {
    try {
        res.json(resultsMemory);
    } catch (error) {
        res.json({ error });
    }
}

export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

        const userResult = { username, result, attempts, points, achived };
        resultsMemory.push(userResult);

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

export async function dropResult(req, res) {
    try {
        resultsMemory = [];
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}