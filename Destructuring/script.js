//Destructuring====================================================================================================

const userProfile = {
    name: 'Bohdan',
    commentsQty: 18,
    hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name)
console.log(commentsQty)
console.log(hasSignedAgreement)

//====================================================================================================