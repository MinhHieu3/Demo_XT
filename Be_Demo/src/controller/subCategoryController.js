import {createCategory, deleteCategory, getCategory, updateCategory} from "../service/categoryService.js";
import {
    createSubCategory,
    deleteSubCategory,
    getSubCategory,
    updateSubCategory
} from "../service/subCategoryService.js";

export const createSubCategoryController = async (req, res) => {
    try {
        const data = await createSubCategory(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getSubCategoryController = async (req, res) => {
    try {
        const data = await getSubCategory();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideSubCategoryController = async (req, res) => {
    try {
        const data = await deleteSubCategory(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateSubCategoryController = async (req, res) => {
    try {
        const data = await updateSubCategory(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
