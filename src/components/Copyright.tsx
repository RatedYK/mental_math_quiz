import { CSSProperties } from "react"
type CopyrightProps ={
    name: string
    color: string
    fontsize?: string
}

const Copyright = ({name, color, fontsize} : CopyrightProps) => {
    const styles: CSSProperties = {
        color,
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        margin: '0.5rem',
        fontSize: fontsize
    }

    return (
        <footer style={styles}>Copyright© {name}</footer>
    )
    }

export default Copyright