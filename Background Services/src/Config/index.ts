import dotenv from 'dotenv'
import path from 'path'
import mssql from 'mssql'
dotenv.config({ path: path.resolve(__dirname, '../../.env')})


export const sqlConfig = {
    
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true 
    }
    
}
console.log(process.env.DB_USER);
const checkConnection =async () => {
        try {
            const x = await mssql.connect(sqlConfig)
            if(x.connected){
                console.log('Database connected background...');
                
            }
        } catch (error) {
            console.log(error + 'mimi  ');
            
        }
    }
checkConnection()