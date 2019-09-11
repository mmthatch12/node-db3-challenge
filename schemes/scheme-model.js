const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id }).first()
}

function findSteps(id) {
    return db('schemes as s')
        .join('steps as st', 's.id', '=', 'st.id')
        .where({ id }).first
        .select('s.id', 's.scheme_name, as Scheme name')
}

function add(scheme) {

}

function update(id, changes) {

}

function remove(id) {

}