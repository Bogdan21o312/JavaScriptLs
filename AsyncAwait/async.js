//Async====================================================================================================

const asyncFn = async () => {
    throw new Error('Error')
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

//====================================================================================================