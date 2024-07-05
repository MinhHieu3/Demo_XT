import {Post, User} from "../mysql/mysql.js";


export const createUserService =async (value) => {
    try {
        const newUser = await User.create(value);
        return{
            msg: newUser? "Tạo mới thành công":"Lỗi",
            newUser: newUser
        }

    } catch (error) {
      return {
          error:error,
          msg:"lỗi máy chủ"
      }
    }
}
export const getUserService =async () => {
    try {
        const data =await User.findAll({
            include:[
                {
                    model: Post ,as :"Post"
                }
            ]
        })
        return {
            msg:data?"done":"err",
            data:data
        }
    }catch (error){
        return {
            error:error,
        }
    }
}

export const loginUserService =async (value) => {
    try{
        const username = await User.findOne({ where: { username:value.username ,password:value.password } });
    if (username){
        return {
            data:username,
            msg:"success"
        }
    }
    }catch (error){
        return {
            error:error,
            msg:"error"
        }
    }
}