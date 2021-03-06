const URL_REDIRECT_ADMIN = "/login";
const URL_REDIRECT_STORER = "/login";
const URL_REDIRECT_OWNER = "/login";


const Admin = (userAuth) => new Promise((rs, rj) => {
    setTimeout(() => {
        // we will call api to check on server correct role
        if (userAuth.data.role !== "admin") {
            rj(URL_REDIRECT_ADMIN);
        } rs(true);
    }, 0);
})


const Owner = (userAuth) =>  new Promise((rs, rj) => {
    setTimeout(() => {
        // we will call api to check on server correct role
        if (userAuth.data.role !== "owner") {
            rj(URL_REDIRECT_OWNER);
        } rs(true);
    }, 0);
})


const Storer = (userAuth) => new Promise((rs, rj) => {
    setTimeout(() => {
        // we will call api to check on server correct role
        if (userAuth.data.role !== "store") {
            rj(URL_REDIRECT_STORER);
        } rs(true);
    }, 0);
})


export default {
    Admin,
    Owner,
    Storer,
}