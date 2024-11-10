import { IconButton } from "./Utils"

const HomePage = function () {
    return (
        <div className="home_page bg-shade-1 min-h-screen w-full flex flex-col">
            <div className="group-vertical flex gap-5 h-full"> {/* --> */}
                <div className="group-vertical flex flex-col left_bar bg-shade-2 min-h-screen w-4/12"> {/* V */}                    
                    <div className="group-horizontal flex items-center gap-3 p-5"> {/* --> */}
                        <div className="text-2xl text-color-1 font-bold">Chats</div>
                        <IconButton>
                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1V13M13 7H1" stroke="#E6E6E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </IconButton>
                    </div>
                    <div className="group-vertical chats flex flex-col"> {/* V */}
                        <div className="group-horizontal each_chat flex bg-shade-3 p-4"> {/* --> */}
                            <div className="text-base text-color-1">How to do that</div>
                        </div>
                    </div> 
                </div> 
                <div className="content_window">

                </div>
            </div>
        </div>
    )
}
export default HomePage