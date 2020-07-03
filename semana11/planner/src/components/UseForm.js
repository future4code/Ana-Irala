import {useState} from 'react';



const useForm = (initialValues) => {
    const[form,setForm] = useState(initialValues);

    const onChangeInput = (event) => {
    const newValue = event.target.value;
    const fieldName = event.target.name;
	
	setForm({...form,[fieldName]:newValue})
  };

    return[form,onChangeInput];
};

export default useForm;