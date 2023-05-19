import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrStudent: [
        {
            idStudent : '01',
            name: 'Le A',
            phone: '0123456789',
            email: 'lea@gmail.com',
        },
        {
            idStudent : '02',
            name: 'Le B',
            phone: '0123456789',
            email: 'leb@gmail.com',
        }
    ],
    inputValue:{       
        idStudent : '',
        name: '',
        phone: '',
        email: '',
    },
    isValid: {
        finalValid:false,
        idStudent : false,
        name:false,
        phone: false,
        email: false,
    },
    errors:{
        idStudent : '',
        name: '',
        phone: '',
        email: '',
    },

}

const formReducer = createSlice({
  name: 'formReducer',
  initialState,
  reducers: {
    addInputAction: (state,action)=> {
        
        const inputValue = {...action.payload};
        if (state.isValid.finalValid === false){
            alert('Please correct all field');
        }
        if (state.isValid.finalValid === true){            
                state.arrStudent.push(inputValue);        
            
        }
    },
    updateStudentInput : (state,action) => {
        const {id, value} = action.payload;                
        state.inputValue[id] = value;      
        
        // validate input value
        if (id === "idStudent"){
            if (value.trim() === ""){                
                state.errors.idStudent = "Please fill in the ID";
            } else if (!/^[0-9]{2,6}$/.test(value)){
                state.isValid.idStudent = false;
                state.errors.idStudent = "ID contains only number, length 2-6 character "
            } else {
                state.isValid.idStudent = true;
                state.errors.idStudent = '';
            }
        };
        if (id === "name"){
            const regexLetter = /^[A-Z a-z àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+$/;  
            const test = value.trim()!==""
            &&value.length>=4 
            &&value.length<=20
            &&regexLetter.test(value);
            state.isValid.name = test;
            console.log("kiem tra name",state.isValid.name);
            if (value.trim() === ""){                
                state.errors.name = "Please fill in name";
            } else if(!test) {                
                state.errors.name = "Name must be characters and length between 3 => 20";
            } else {
                state.errors.name = "";
            }
        };
        if (id === "phone"){
            const test = value.trim()!=="" && /^[0-9]{6,11}$/.test(value);
            state.isValid.phone = test;
            if (value.trim() === ""){                
                state.errors.phone = "Please fill in phone number";
            }else if (!test){
                state.errors.phone = "Phone must be number and length between 6 => 11"
            } else {
                state.errors.phone ="";
            }
        };
        if (id === "email"){
            const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
            const test = value.trim()!==""
            &&regexEmail.test(value);
            console.log(test);
            state.isValid.email = test;
            if (value.trim() === ""){                
                state.errors.idStudent = "Please fill in the email";
            } else if (!test){
                state.errors.email = "Email is not valid "
            } else {
                state.errors.email ="";
            }
        
        }
        state.isValid.finalValid = 
        state.isValid.idStudent&&
        state.isValid.name&&
        state.isValid.phone&&
        state.isValid.email;
        console.log('test valid tong',state.isValid.finalValid)
    }
  }
});

export const {
    addInputAction,
    updateStudentInput,
} = formReducer.actions

export default formReducer.reducer