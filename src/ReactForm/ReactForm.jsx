// rafce
import React from 'react';
//hook react-redux
import {useSelector,useDispatch} from 'react-redux';
import {addInputAction, updateStudentInput} from '../redux/reducers/formReducer';
const ReactForm = () => {
    const arrStudent = useSelector(state => state.formReducer.arrStudent);
    const inputValue = useSelector(state => state.formReducer.inputValue);
    const errors = useSelector(state => state.formReducer.errors);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = addInputAction(inputValue)
        dispatch(action);

    }
    const handleChange = (e) => {
        const {id,value} = e.target;
        const action = updateStudentInput({id,value});
        dispatch(action);
    }
    const renderTableStudent = (arr) => {
        return arr.map((student,index)=> {
            return (
                <tr key={index}>
                    <td>{student.idStudent}</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                </tr>
            );
        });
    };
    return (
        <div className='container' onSubmit={handleSubmit}>
            {/* Form student */}
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h3>Student Information</h3>
                </div>
                <div className="card-body">
                    <form >
                        <div className="row">
                            <div className="form-group col-6">
                                <span>ID</span>
                                <input className='form-control' id='idStudent' onInput={handleChange}  />
                                <span className='text-danger'>{errors.idStudent}</span>
                            </div>
                            <div className="form-group col-6">
                                <span>Name</span>
                                <input className='form-control' id='name' onInput={handleChange} />
                                <span className='text-danger'>{errors.name}</span>

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="form-group col-6">
                                <span>Email</span>
                                <input className='form-control' id='email' onInput={handleChange} />
                                <span className='text-danger'>{errors.email}</span>

                            </div>
                            <div className="form-group col-6">
                                <span>Phone number</span>
                                <input className='form-control' id='phone' onInput={handleChange}/>
                                <span className='text-danger'>{errors.phone}</span>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-end mt-2">
                                <button type='submit' className='btn btn-success'>Insert</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Table Student */}
            <div>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableStudent(arrStudent)}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default ReactForm