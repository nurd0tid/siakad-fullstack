import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    nip_nipd:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Users;
