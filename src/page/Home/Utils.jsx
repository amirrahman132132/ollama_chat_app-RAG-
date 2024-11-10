import { forwardRef } from "react"

export const IconButton = forwardRef((props, ref) => {
    const {children} = props
    return (
        <button ref={ref} className="p-2 bg-shade-3 rounded-theme ml-auto hover:bg-shade-1" {...props}>
            {children}
        </button>
    )
})