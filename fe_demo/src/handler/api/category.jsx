import axios from "axios";

export const getAllCategory = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3007/api/categories`);
        return data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin:', error);
        throw error;
    }
};

export const createNewCategory = async (newRowData) => {
    try {
        let res = await axios.post(`http://localhost:3007/api/categories`, newRowData)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updateCategory = async (id, newRowData) => {
    try {
        let res = await axios.put('http://localhost:3007/api/categories'+'/'+id, newRowData)
        return res
    } catch (error) {
        console.log(1, error);
        throw error;
    }
}
export const deleteCategory= async (id) => {
    try {
        let res = await axios.delete(`http://localhost:3007/api/categories`+'/'+id)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}