/*global exports:true*/
var flag = 1;
var HasAllPropertyAs = function(a,b)
{
    var i;
    for(i in a)
    {
        if(!b.hasOwnProperty(i))
        {
            flag = 0;
            break;
        }
    }
    if(flag == 1&&(Object.keys(a).length == Object.keys(b).length))
      return true;
    else
      return false;

};
var ObjCompare = function(a,b)
{
    var i;  
    for(i in a)
    {
        if(b.hasOwnProperty(i))
        {
            if(a[i]!==b[i])
            {
                flag =0;
                break;
            }
        }
        else
        {
            flag = 0;
            break;
        }
    }
    if(flag==1&&(Object.keys(a).length == Object.keys(b).length))
        return true;
    else
        return false;
    
};
exports.HasAllPropertyAs = HasAllPropertyAs;
exports.ObjCompare = ObjCompare;