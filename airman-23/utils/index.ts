import axios from "axios";

export const createOrGetUser = async (user: any) => {

    const userInfo: {displayName: string, photoURL: string, uid: string} = user;

    const {displayName, photoURL, uid} = userInfo;

    const userSanity = {
        _id: uid,
        _type: 'user',
        userName: displayName,
        image: photoURL,
    };


    await axios.post(`http://localhost:3000/api/auth`, userSanity)
}