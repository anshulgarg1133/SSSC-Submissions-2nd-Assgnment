import React, { useEffect, useState } from "react";
import '../styles/quiz.css' ;
import Questions from './questions.js' ;
import { moveNextQuestion, movePrevQuestion } from "../hooks/fetch_question.js";

import {useSelector,useDispatch} from 'react-redux'
import { PushAnswer } from "../hooks/setResult.js";
import { Navigate } from "react-router-dom";

export default function Quiz(){
    const[check,setChecked]= useState(undefined)

    const result = useSelector(state=>state.result.result);
    const {queue,trace}= useSelector(state =>state.questions);

    const dispatch= useDispatch()

    function onNext(){
        if(trace< queue.length){
         dispatch(moveNextQuestion());
         if(result.length<= trace){
            dispatch(PushAnswer(check))
         }
        }
        setChecked(undefined)
    }
    function onPrev(){
        if (trace>0){
           dispatch(movePrevQuestion());
        }  
    }
    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

    if(result.length && result.length>= queue.length){
        return <Navigate to={'/result'} replace="true"></Navigate>

    }

    return(
        <div className="container">
           <h1 className="title">Quiz App</h1>

           <Questions onChecked={onChecked}/>


           <div className="grid">
            {trace > 0 ? <button className="prev btn" onClick={onPrev}>Prev</button> :<div></div>}
            <button className="next btn" onClick={onNext} >Next</button>

           </div>


        </div>
    )
}