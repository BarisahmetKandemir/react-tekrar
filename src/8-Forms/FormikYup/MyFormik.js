import React, { useState } from 'react';
import { useFormik } from 'formik';
import validation from './validation';

const MyFormik = () => {

  const [value,setValue] = useState("")
  const {handleSubmit,
    handleChange,
    errors, 
    touched,
    handleBlur} = useFormik({
      initialValues:{
          name:"",
          email:"",
          gender:"",
          hobies:[],
          country:"",
          password:"",
          confirmPassword:""
      },
      onSubmit: (values,bag) => {
          console.log(values)
          setValue(values)
          // bag.resetForm();
      },
     validationSchema : validation
  })

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
      <br></br>
      {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}
      {/* EMAİL */}
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br/>
      {errors.email && touched.email && <div style={{color:"red"}}>{errors.email}</div>}
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
      <br/>
      <input name="password" onChange={handleChange} onBlur={handleBlur} />
      <br />
      {errors.password && touched.password && <div style={{color:"red"}}>{errors.password}</div>}
      {/* CONFIRM PASSWORD */}
      <label>Confirm Password</label>
      <br />
      <input
        name="confirmPassword"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br/>     
       {errors.confirmPassword && touched.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}
      {/* SON BUTTON */}
      <button type="submit">Kayıt ol</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default MyFormik;


// && işarteti soldaki doğruysa sağdakini yaz anlamıda kullanılır (43.satır)
