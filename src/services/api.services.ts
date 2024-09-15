import axios from "axios";
import { ENDPOINTS } from "../constants/constants";
import { CultivationUser } from "../models/users";


export const getCultivationUsers =  (cultivationId:string):Promise<CultivationUser[]>=>{
    return axios.get(ENDPOINTS.getCultivationUsers(cultivationId));
  
}