var data = [
    {
        'id':1, 'name':'shamon','message':' your income certificate has been approved and possession certificate is under processing'
    },
    {
        'id':2, 'name':'manu','message':' your income certificate  and  possession certificate has been approved'
    }
]

module.exports = {

    customResult:function(id,callback){

        console.log("From user",id);

        let searchField = 'id';

        let result;

        for (var i=0 ; i < data.length ; i++)
        {
            if (data[i][searchField] == id) {
               console.log('result found',data[i]);
               result = data[i];
            }
        }

        return callback(result);
    }

}