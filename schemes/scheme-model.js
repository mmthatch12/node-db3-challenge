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
        .join('steps as st', 's.id', '=', 'st.scheme_id')
        .where({ scheme_id: id })
        .select('s.scheme_name', 'st.step_number', 'st.instructions' )
        .orderBy('st.step_number', 'asc')
        .then(schemes => {
            return schemes
        })
    }

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(([scheme]) => {
            return scheme
        })
}

function update(id, changes) {

}

function remove(id) {

}