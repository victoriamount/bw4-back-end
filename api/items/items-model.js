const db = require('../../database/dbConfig')

module.exports = {
    find,
    findBy,
    findByItemId,
    add,
    addCategory,
    addLocation,
    update,
    remove,
    findAllByUserId
}

function find() {
    return db('items')
}
function findBy(filter) {
    return db('items').where(filter)
}
function findByItemId(id) {
    return db('items').where('item_id', id)
}
function findAllByUserId(id) {
    return db('items').where('user_id', id)
}
async function add(item) {
    const [id] = await db('items').insert(item)
    return db('items').where('item_id', id).first()
}
async function addCategory(cat) {
    const [id] = await db('categories').insert(cat)
    return db('categories').where('category_id', id).first()
}
async function addLocation(loc) {
    const [id] = await db('locations').insert(loc)
    return db('locations').where('location_id', id).first()
}
async function update(id, item) {
    await db('items').where('item_id', id).update(item)
    return db('items').where('item_id', id)
}
function remove(id) {
    return db('items').where('item_id', id).del()
}