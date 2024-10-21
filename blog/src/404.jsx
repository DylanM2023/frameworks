import { useNavigate } from "react-router-dom";

const PageError = (()=> {

    const navigate = useNavigate();

    setTimeout(()=>{
        navigate("/")
    },10000)

    return(
        <h1 className="text-5xl p-48">404:ERROR PAGE NOT FOUND</h1>
    );

});

export default PageError;