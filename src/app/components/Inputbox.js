"use client"
import styles from '../styles/inputbox.module.css'
import { db } from '../config/firestore';
import {collection, addDoc} from 'firebase/firestore';
import { useState } from 'react';
export default function Inputbox(params) {
    async function sendData(params) {
        let message = document.getElementById("input").value
        // console.log(data);
        const addMessage = await addDoc(collection(db,"Messages"),{
            data: message
        })
    }
    return(
        <>
        <input type="text" id='input' className={styles.input} ></input>
        <button className={styles.btn} onClick={sendData}>Send</button>
        </>
    )
}