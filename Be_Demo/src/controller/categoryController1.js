import {createCategory, deleteCategory, getCategory, updateCategory} from "../service/categoryService.js";
import {deleteCategory1, getCategory1} from "../service/category1Service.js";

export const createCategory1Controller = async (req, res) => {
    try {
        const data = await createCategory1Controller(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getCategory1Controller = async (req, res) => {
    try {
        const data = await getCategory1();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideCategory1Controller = async (req, res) => {
    try {
        const data = await deleteCategory1(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateCategory1Controller = async (req, res) => {
    try {
        const data = await updateCategory1Controller(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
