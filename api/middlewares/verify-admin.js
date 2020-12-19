module.exports = (req, res, next) => {
    if (req.decodedToken.admin_status === 1) {
        next()
    } else {
        res.status(403).json({ message: 'Users do not have access to this information' })
    }
}