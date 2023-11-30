const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db('users')
        .where({ id })
        .returning("*")
        .then(response => {
            if (response.length) {
                res.json(response[0])
            } else {
                res.status(400).json("NOT FOUND")
            }
        })
        .catch(err => {
            res.status(400).json("ERROR")
        })

}

module.exports = {
    handleProfileGet
};