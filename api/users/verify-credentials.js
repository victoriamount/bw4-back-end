module.exports = (user) => {
    return Boolean(user.email && user.password && typeof user.password === 'string')
}