type Role = {
    id:number;
    name:string;
}
type User={
    id:number;
    name:string;
}
export type CultivationUser = {
    cultivation_id:string;
    role:Role;
    user:User;
}