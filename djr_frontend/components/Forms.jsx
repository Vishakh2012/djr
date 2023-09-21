import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useRef } from 'react'
import styles from "./forms.module.css"
export const Forms = () => {
    const titleRef = useRef();
    const textRef = useRef();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const title = titleRef.current.value;
        const text = textRef.current.value;
        console.log(title, text);
        const respose = await fetch("localhost:8000/getdata/", {
            method : 'POST',
            body : JSON.stringify({title : title, text : text}),
            headers : {
                'Content-Type' : "application/json"
            }
        })
        const data = await respose.json();
        console.log(data);
    }
    
  return (
    <>
        <form onSubmit={handleSubmit} className={styles.container}>
            <input className={styles.input}  ref={titleRef} type="text" placeholder="Type here"  />
            <input className={styles.input} ref={textRef}  type="text" placeholder="Type here"  />
            <button className="btn bg-pink-600" type='submit'>Button</button>
        </form>
    </>
  )
}
