import React from "react";

interface Badgeprops {
    children : React.ReactNode
}
export default function Badge({ children} : Badgeprops){
    return (
        <span className="border rounded text-sm font-medium
        bg-muted text-muted-foreground px-3 py-1">
            {children}
        </span>
    )

}