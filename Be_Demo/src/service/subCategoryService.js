import {Category, SubCategory} from "../mysql/mysql.js";

export const createSubCategory = async (value) => {
    try {
        const data = await SubCategory.create(value)
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

export const getSubCategory= async () => {
    try {
        const data = await SubCategory.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            }, include : [
                {model: Category , as:"category"},

            ]

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

export const deleteSubCategory = async (id) => {
    try {
        const data = await SubCategory.findOne({where: {id: id}});
        if (data) {
            await SubCategory.update({show: false}, {where: {id: id}})
            const value = await SubCategory.findOne({where: {id: data.id}});
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

export const updateSubCategory = async (id, value) => {
    try {
        const data = await SubCategory.findOne({where: {id: id}});
        if (data) {
            await SubCategory.update(value, {where: {id: id}})
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