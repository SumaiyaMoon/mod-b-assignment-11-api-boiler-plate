import { Button } from "@mui/material";
type SMButtonProps = {
    label: string;
    variant: any;
    color: any;
    onClick?: (...arggs: any[]) => any;
}

export default function SMButton(props: SMButtonProps) {
    const { label, variant, color, onClick } = props
    return (
        <>
            <Button variant={variant} color={color} onClick={onClick} >
                {label}
            </Button>
        </>
    )
}