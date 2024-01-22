import React, { useState } from 'react';
import { useFormik } from 'formik';
import validation from './validation';

const MyFormik = () => {

    const [value,setValue] = useState("")
  const {
    handleSubmit,
    handleChange,
    error,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
      hobies: [],
      country: '',
      password: '',
      confirmPassworld: '',
    },
    onSubmit: (values, bag) => {
      console.log(values);
      setValue(values)
      bag.resetForm();
    },
    validationSchema: validation
  });

  return (
    <form onSubmit={handleSubmit}>
      {/* İSİM */}
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      {/* EMAİL */}
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      {/* CİNSİYET */}
      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
      />
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={handleChange}
      />
      <br />
      {/* HOBİLER */}
      <label>Football</label>
      <input
        type="checkbox"
        name="hobies"
        value="football"
        onChange={handleChange}
      />
      <label>Cinema</label>
      <input
        type="checkbox"
        name="hobies"
        value="Cinema"
        onChange={handleChange}
      />
      <label>Swim</label>
      <input
        type="checkbox"
        name="hobies"
        value="Swim"
        onChange={handleChange}
      />
      <br />
      {/* ÜLKE */}
      <select name="country" onChange={handleChange}>
        <option value="">- Select Country</option>
        <option value="tr">Turkey</option>
        <option value="en">England</option>
        <option value="usa">USA</option>
      </select>
      <br />
      {/* ŞİFRE */}
      <label>Password</label>
      <br />
      <input name="password" onChange={handleChange} onBlur={handleBlur} />
      <br />
      {/* CONFIRM PASSWORD */}
      <label>Confirm Password</label>
      <br />
      <input
        name="confirmPassworld"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      {/* SON BUTTON */}
      <button type="submit">Kayıt ol</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default MyFormik;
