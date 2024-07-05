import {Category} from "../mysql/mysql.js";

export const createCategory = async (value) => {
    try {
        const data = await Category.create(value)
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

export const getCategory= async () => {
    try {
        const data = await Category.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },

        })
        return {
            msg: data ? 'Lấy category thành công' : 'Lỗi lấy category ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const deleteCategory = async (id) => {
    try {
        const data = await Category.findOne({where: {id: id}});
        if (data) {
            await Category.update({show: false}, {where: {id: id}})
            const value = await Category.findOne({where: {id: data.id}});
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

export const updateCategory = async (id, value) => {
    try {
        const data = await Category.findOne({where: {id: id}});
        if (data) {
            await Category.update(value, {where: {id: id}})
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