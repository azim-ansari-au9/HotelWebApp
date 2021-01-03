let Obj ={}

Obj.users=[
    {
        name:'Alvin',
        city:'Helsinki'
    },
    {
        name:'Sarah',
        city:'Amsterdam'
    }
]

Obj.dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values (${data.name},${data.city})`}
}

//es5
//module.exports = Obj;

//es6
export default Obj;