import React, { useEffect } from "react";
import '../styles/result.css' ;
import { Link } from "react-router-dom";
import ResultTable from "./resultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attempts_Number, getMarks_Number, flagResult} from "../helper/helper";


export default function Result(){

    const dispatch= useDispatch()
    const{questions: {queue,answers}, result :{result,userId}}= useSelector(state => state)

    useEffect(()=> {
        console.log(flag)
    })
    const totalMarks = queue.length*10;
    const attempts= attempts_Number(result)
    const getMarks = getMarks_Number(result,answers,10)
    const flag= flagResult(totalMarks,getMarks)

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return(
        <div className="container">

             <h1 className="title">Quiz App</h1>

             <div className="result">
                <div className="flex">
                    <span>Name:</span>
                    <span className="Bold"> Anshul</span>
                </div>
                <div className="flex">
                    <span>Total Marks: </span>
                    <span className="Bold">{totalMarks || 0}</span>
                </div>
                <div className="flex">
                    <span>Total Questions: </span>
                    <span className="Bold">{queue.length}</span>
                </div>
                <div className="flex">
                    <span>Question attempted: </span>
                    <span className="Bold">{attempts ||0}</span>
                </div>
                <div className="flex">
                    <span>Final Marks: </span>
                    <span className="Bold">{getMarks ||0 }</span>
                </div>
                <div className="flex">
                    <span>Result: </span>
                    <span style={{color:`${flag ? "#4fb95dff" : "#ff2a66" }`}} className="Bold">{flag? "Passed" : "Failed"}</span>
                </div>
             
             </div>

             <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart}>Reattempt</Link>
             </div>

             <div>
                <ResultTable></ResultTable>
             </div>
        </div>
    )
}