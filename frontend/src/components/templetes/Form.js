import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const navigate= useNavigate();

    const gotoResult = (form) => {
        navigate('/result', { state: form });
    };

    const handleSubmit = (event) => {
        gotoResult(form);
    };

    return (
        <>
            <form>
                <label htmlFor="name">
                    名前
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label htmlFor="age">
                    年齢
                    <select
                        name="age"
                        id="age"
                        value={form.age}
                        onChange={handleInputChange}
                    >
                        <option value="10">10代</option>
                        <option value="20">20代</option>
                        <option value="30">30代</option>
                        <option value="40">40代</option>
                        <option value="50">50代</option>
                        <option value="60">60代以上</option>
                    </select>
                </label>
                <br />
                <label>性別</label>
                <br />
                <label htmlFor="male">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="男性"
                        checked={form.gender === "男性"}
                        onChange={handleInputChange}
                    />
                    男性
                </label>
                <br />
                <label htmlFor="female">
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="女性"
                        checked={form.gender === "女性"}
                        onChange={handleInputChange}
                    />
                    女性
                </label>
                <br />
                <label htmlFor="comment">
                    コメント
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder='コメントを入力してください'
                        value={form.comment}
                        onChange={handleInputChange}
                    />
                </label>
                <button onClick={handleSubmit}>送信</button>
            </form>
        </>
    );
};

export default Form;