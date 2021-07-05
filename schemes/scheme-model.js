const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db('schemes')
        .then(schemes => {
            return schemes
        })
}

function findById(id) {
    return db('schemes').where({ id }).first()
        .then(scheme => {
            if(scheme){
                return scheme
            } else {
                return null
            }
        })
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

function update(changes, id) {
    return db('schemes')
        .where('id', id)
        .update(changes)
        .then(count => {
            return count
        })
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
        .then(count => {
            return count ? count : null
        })
}

function addStep(step, scheme_id) {
    return db('steps as s')
        .join('schemes as st', 's.scheme_id', '=', 'st.id')
        .where({ scheme_id: scheme_id })
        .insert(step)
        .then(([step]) => {
            return step
        })
}