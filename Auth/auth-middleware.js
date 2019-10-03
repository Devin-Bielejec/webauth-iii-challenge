
const protected = (req, res, next) => {
    console.log(req.session);
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({message: "Failure is the only option for you!"})
    }
}

module.exports = protected;