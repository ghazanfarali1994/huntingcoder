import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'



const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    async function postJSON(data) {
  try {
    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.text();
    alert("Thanks for contacting us");
    setname('')
    setphone('')
    setemail('')
    setdesc('')
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { name, email, phone, desc };
postJSON(data);

  }
  const handleChange = (e) =>{
    if(e.target.name == 'name'){
      setname(e.target.value)
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setphone(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value)
    }
  }
  
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input className={styles.input} type="text" onChange={handleChange} id="name" name='name' value={name} aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input className={styles.input} type="email" onChange={handleChange} id="email" name='email' value={email} aria-describedby="emailHelp" />
          <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone</label>
          <input className={styles.input} type="phone" onChange={handleChange} name='phone' id="phone" value={phone} required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea className={styles.input} onChange={handleChange}  id="desc" name='desc' value={desc}></textarea>
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact