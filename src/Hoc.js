import React , {useState} from 'react'

function UpdatedComponent(OriginalComponent) {
     
    function NewComponent()
    {
        const [money , setMoney] = useState(10);
  
        const handleChange =()=>
        {
            var val = money*2;
            setMoney(val);
        };   
        
    return <OriginalComponent handleChange={handleChange}  money = {money} />;    
    }

    return NewComponent;

}

export default UpdatedComponent;