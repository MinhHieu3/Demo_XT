import {createCategory, deleteCategory, getCategory, updateCategory} from "../service/categoryService.js";

export const createCategoryController = async (req, res) => {
    try {
        const data = await createCategory(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getCategoryController = async (req, res) => {
    try {
        const data = await getCategory();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideCategoryController = async (req, res) => {
    try {
        const data = await deleteCategory(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateCategoryController = async (req, res) => {
    try {
        const data = await updateCategory(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
