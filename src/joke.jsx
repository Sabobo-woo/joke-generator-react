export default function Joke({ data }) {
    return (
        <div >
            {
                data.type === "single"
                    ? <h1>{data.joke}</h1>
                    :
                    <>

                        <h1>{data.setup}</h1>
                        <h4>{data.delivery}</h4>

                    </>

            }


        </div>
    )
}