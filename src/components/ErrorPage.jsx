import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ErrorPage = () => {
    const {reason} = useParams();
    const [errorMsg, setErrorMsg] = useState('Error 400: invalid path')

    useEffect(() => {
        console.log(reason);
        if(reason === 'noarticle') {
            setErrorMsg('Error 404: invalid article ID')
        }
        if(reason === 'notopic') {
            setErrorMsg('Error 400: invalid topic')
        }

    }, [reason])
  
    return <p id="error-page-message">{errorMsg}</p>
}

export default ErrorPage;