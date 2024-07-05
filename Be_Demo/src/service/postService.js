import {Post, SubCategory, User} from "../mysql/mysql.js";

export const createPost = async (value) => {
    try {
        const data = await Post.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};
export const getPost = async () => {
    try {
        const data = await Post.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include: [
                { model: SubCategory, as: "subCategory" }, // Chỉnh alias cho đúng
                { model: User, as: 'user' },
            ],
        });

        return {
            msg: data ? 'Lấy post thành công' : 'Lỗi lấy post',
            data: data
        };
    } catch (error) {
        return {
            error: error.message, // Trả về thông điệp lỗi chi tiết hơn
            msg: "Lỗi máy chủ",
        };
    }
};

export const deletePost = async (id) => {
    try {
        const data = await Post.findOne({where: {id: id}});
        if (data) {
            await Post.update({show: false}, {where: {id: id}})
            const value = await Post.findOne({where: {id: data.id}});
            return {
                msg: "Đã thay dổi show = fasle thành công",
                data: value
            }
        }
        else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để thay đổi",
                id: id
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}

export const updatePost = async (id, value) => {
    try {
        const data = await Post.findOne({where: {id: id}});
        if (data) {
            await Post.update(value, {where: {id: id}})
            return {
                msg: "Đã cập nhật thành công",
                data: {...value, id}
            }
        } else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để sửa"
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}