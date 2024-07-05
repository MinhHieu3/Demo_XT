import axios from "axios";

export const getAllPost = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3007/api/posts`);
        return data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin:', error);
        throw error;
    }
};

export const createNewPost= async (newRowData) => {
    try {
        let res = await axios.post(`http://localhost:3007/api/posts`, newRowData)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updatePost = async (id, newRowData) => {
    try {
        let res = await axios.put('http://localhost:3007/api/posts'+'/'+id, newRowData)
        return res
    } catch (error) {
        console.log(1, error);
        throw error;
    }
}
export const deletePost = async (id) => {
    try {
        let res = await axios.delete(`http://localhost:3007/api/posts`+'/'+id)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}