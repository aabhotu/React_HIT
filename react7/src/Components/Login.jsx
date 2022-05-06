import React from 'react';
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            
            if(formik.values.email ==="thuy@gmail.com" && formik.values.password === "thao123"){
                navigate('/Header');
            }   
        },
    });


return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />

        {formik.touched.email && formik.errors.password ? (
            <div>{formik.errors.firstName}</div>
        ) : null}

        <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
        />

        <button type="submit">Submit</button>
        </form>
    );
};
export default Login