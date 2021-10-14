import React from "react";

export default function Form(props) {
    const { user, update, submit, errors } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>{errors.fname}</div>
                <div>{errors.lname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.agree}</div>
            </div>
            <label>First Name
                <input
                    type='text' 
                    name='fname'
                    value={user.fname}
                    onChange={onChange}
                    maxLength='20'
                    placeholder='Please enter first name'
                />
            </label>
            <label>Last Name
                <input 
                    type='text'
                    name='lname'
                    value={user.lname}
                    onChange={onChange}
                    maxLength='40'
                    placeholder='Please enter last name'
                />
            </label>
            <label>Email
                <input 
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={onChange}
                    placeholder='Please enter email'
                />
            </label>
            <label>Password
                <input 
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={onChange}
                    maxLength='128'
                    placeholder='Please create a password'
                />
            </label>
            <label>Terms of Service
                <input 
                    type='checkbox'
                    name='agree'
                    onChange={onChange}
                    checked={user.agree}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}