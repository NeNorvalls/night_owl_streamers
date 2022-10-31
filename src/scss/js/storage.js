localStorage.setItem("userKey", "burla202927@stud.noroff.no");
localStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk5LCJuYW1lIjoiYnVybGEyMDI5MjciLCJlbWFpbCI6ImJ1cmxhMjAyOTI3QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MzY2MDM3M30.iqWsF1yEVnt2b-QMrnwrb7IwCxzXeOfUrCCaV2CKe58");

const accessToken = "token";
const userKey = user;

// USER INFO

export const saveToken = token => {
    saveStorage(accessToken, token);
};

export const getToken = () => {
    return getStorage(accessToken);
};


export const saveUser = user => {
    saveStorage(userKey, user);
};

export const getUsername = () => {
    const user = getStorage(userKey);
    if (user) {
        return user.username;
    }
    return null;
};


// LOCAL STORAGE
const saveStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = key => {
    const value = localStorage.getItem(key);
    if (!value) {
        return [];
    }
    return JSON.parse(value);

};export const clearStorage = () => {
    localStorage.removeItem(accessToken);
    localStorage.removeItem(userKey);
};