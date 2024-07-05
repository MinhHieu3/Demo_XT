import axios from "axios";

export const getAllSubCategory = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3002/api/subCategories`);
        return data.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin:', error);
        throw error;
    }
};

export const createNewSubCategory = async (newRowData) => {
    try {
        let res = await axios.post(`http://localhost:3002/api/subCategories`, newRowData)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updateSubCategory = async (id, newRowData) => {
    try {
        let res = await axios.put('http://localhost:3002/api/subCategories'+'/'+id, newRowData)
        return res
    } catch (error) {
        console.log(1, error);
        throw error;
    }
}
export const deleteSubCategory= async (id) => {
    try {
        let res = await axios.delete(`http://localhost:3002/api/subCategories`+'/'+id)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}