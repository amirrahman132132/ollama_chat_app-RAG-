import { Link } from "react-router-dom"

const Wellcome = function(){
    return (
        <>
            <div className="main h-screen w-full flex flex-col gap-y-4 justify-center items-center">
                <h2 className="text-6xl tracking-wider text-white">Wellcome</h2>
                <Link className="underline text-white" to="../">Back</Link>
            </div>
        </>
    )
}
export default Wellcome