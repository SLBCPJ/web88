// const endpoint = 'https://randomuser.me/api/';
const url = 'https://randomuser.me/api/';
function getUsersPromise() {
    return fetch(url+'?results=50')
    .then(res=>res.json())
    .then(res=>res.results)
    .catch(err => console.log(err))
}

const getUsersAsync = async ()=>{
    try {
        const res = await fetch(url+'?results=50');
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.log(err);
    }
}

const getUserData= async (id)=>{
    try {
        const res = await fetch(`${url}?id=`+id); 
        const data = await res.json();
        return data.results[0];
    } catch (error) {
        console.log(error);
    }
}


export default{
    getUsersPromise,
    getUsersAsync,
    getUserData
}