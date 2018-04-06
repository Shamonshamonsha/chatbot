var data = [
    {
        'id':1, 'name':'shamon'
    },
    {
        'id':2, 'name':'manu'
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