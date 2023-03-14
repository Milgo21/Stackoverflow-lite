import { object } from 'joi';
import mssql from 'mssql'
import { sqlConfig } from '../config'
class DatabaseHelper {
public pool :Promise<mssql.ConnectionPool>
    constructor(){
    this.pool= mssql.connect(sqlConfig)
    }
createRequest (request:mssql.Request , data:{[x:string]:string}){
        const keys =Object.keys(data)
        keys.map(keyName=>{
            request.input(keyName, data[keyName])
        })

        return request
    }

async  exec( storedProcedure:string , data:{[x:string]:string}={}){
        let emptyRequest = await (await this.pool).request()
        let request =this.createRequest(emptyRequest,data)
        let result = await request.execute(storedProcedure)
        return result
    }

async query(queryString:string){
        return await (await this.pool).request().query(queryString)
    }
checkConnection(){
        return this.pool.then(()=>{
            return true
        }).catch(()=>{
            return false
        })
    }

}
let _db = new DatabaseHelper()
export default _db