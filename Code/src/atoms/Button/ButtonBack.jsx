export default function ButtonBack(){

    const handleClick = (e) =>{
        e.preventDefault();
        history.go(-1)
    }

    return(
        <>
            <button type='button' onClick={handleClick} className='buttonBack'>Regresar</button>
        </>
    )
}