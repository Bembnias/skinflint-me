const addAction = (action) => {
    fetch('http://localhost:3000/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action)
    })
}

export default addAction