
const baseUrl = 'https://jsonplaceholder.typicode.com'

const getUsers = async () => {
    const response = await fetch(baseUrl+"/users");
    const res = await response.json();
    return res
}

export default getUsers