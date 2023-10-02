"use client"
import Message from "./Message";
import styles from '../styles/chatwindow.module.css'
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import Inputbox from "./Inputbox";
export default function ChatWindow(params) {
    const [mArray,setArray] = useState([]);
    const getMessages = async() => {
        const query = await getDocs(collection(db,"Messages"));
        const messages = query.docs.map(doc => (doc.data().data))
        setArray(messages);
    }
    useEffect(()=>{
        getMessages()
    },[])
    const messages = [];
    for (let index = 0; index < mArray.length; index++) {
        messages.push(<Message key={index} data={mArray[index]}></Message>)
    }
    return(
        <>
        <div className={styles.container}>
            {messages}
        </div>
        <div className={styles.inp}>
            <Inputbox></Inputbox>
        </div>
        </>
    )
}