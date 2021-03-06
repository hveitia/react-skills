
import React, {useEffect} from 'react';
import { useForm } from '../../custom-hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Email changed');
    }, [email])

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Use Effect</h1>
            <hr/>

            <div className="form-group">
                <input 
                    typ="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    typ="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Your password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary"> Guardar </button>
        </form>

    )
}
