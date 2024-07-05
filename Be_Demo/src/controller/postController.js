
import {createPost, deletePost, getPost, updatePost} from "../service/postService.js";

export const createPostController = async (req, res) => {
    try {
        const data = await createPost(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getPostController = async (req, res) => {
    try {
        const data = await getPost();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hidePostController = async (req, res) => {
    try {
        const data = await deletePost(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updatePostController = async (req, res) => {
    try {
        const data = await updatePost(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
