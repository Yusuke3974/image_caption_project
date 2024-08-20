import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
    const location = useLocation();
    const [result,setResult] = useState(location.state);
    return (
    <>
    <h2>結果ページ</h2>
        <p>名前：{result.name}</p>
        <p>年齢：{result.age}</p>
        <p>性別：{result.gender}</p>
        <p>コメント：{result.comment}</p>
    </>
    );
};

export default Result;