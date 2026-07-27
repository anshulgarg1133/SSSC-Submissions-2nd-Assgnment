import { useSelector } from "react-redux";
import {Navigate } from "react-router-dom";


export function attempts_Number(result){
    return result.filter(r => r!== undefined).length;
}

export function getMarks_Number(result,answers,mark){
    return result.map((element, i)=> answers[i]=== element).filter(i=> i).map(i=> mark).reduce((prev,curr)=> prev+curr,0 );
}

export function flagResult(totalMarks,getMarks){
    return(totalMarks*40/100)< getMarks;
}

export function CheckUserExist({children}){
    const auth= useSelector(state=> state.result.userId)
    return auth ? children: <Navigate to={'/'} replace={true}></Navigate>
}