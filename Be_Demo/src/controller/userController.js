import {createUserService, loginUserService} from "../service/userService.js";

export const createUser = async (req, res) => {
    try{
        const newUser = await createUserService(req.body)
        res.status(200).json(newUser);
    }catch(err){
        return res.status(500).json(err);
    }

}
export const login = async (req, res) => {
    try{
        const user = await loginUserService(req.body)
        res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
}