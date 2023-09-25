var res="";
function calculate()
{
    res=document.getElementById("result").innerHTML;
    if(res.indexOf('+')!=-1)
    {
        let a=res.split('+');
        let b=Number(a[0])+Number(a[1]);
        document.getElementById("result").innerHTML+="="+b;
    }
        else if(res.indexOf('-')!=-1)
        {
            let a=res.split('-');
            let b=Number(a[0])-Number(a[1]);
            document.getElementById("result").innerHTML+="="+b;
        }
        else if(res.indexOf('*')!=-1)
        {
            let a=res.split('*');
            let b=Number(a[0])*Number(a[1]);
            document.getElementById("result").innerHTML+="="+b;
        }

        else if(res.indexOf('/')!=-1)
        {
            let a=res.split('/');
            let b=Number(a[0])/Number(a[1]);
            document.getElementById("result").innerHTML+="="+b;
        }

    
}
            function insert(val)
            {
                document.getElementById('result').innerHTML+=val;
            }
            function clearres(){
                document.getElementById('result').innerHTML=" ";
            }
        