const filterByName= (query, user) =>{
    return user.name.toLowerCase().includes(query.toLowerCase())
}
const filterByEmail= (query, user) =>{
    return user.email.toLowerCase().includes(query.toLowerCase())
}
const filterByCity= (query, user) =>{
    return user.address.city.toLowerCase().includes(query.toLowerCase())
}

export const filterUsers = (users, query) => {
    if (!query) {
        return users;
    }
    console.log( "QUERY; " + query)
    return users.filter( (user) => (filterByName(query, user) || filterByEmail(query, user) || filterByCity(query, user)) )
};