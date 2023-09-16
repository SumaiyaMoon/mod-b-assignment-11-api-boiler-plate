import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SMButton from './SMButton';


type SMCardProps = {
    name: string,
    email: string,
    body: string,
    onClick?: (...args: any[]) => any;
    onEditClick?: (...args: any[]) => any;
    onDeleteClick?: (...args: any[]) => any;
}
export default function SMCard(props: SMCardProps) {
    const { name, email, body, onClick, onEditClick, onDeleteClick } = props
    return (
        <Card sx={{ minWidth: 275, background: "#e3fce5" }}>
            <CardContent>

                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {email}
                </Typography>
                <Typography variant="body2">
                    {body}
                   
                </Typography>
                <Typography sx={{ mb: 1.5, color: "blue" }} color="text.secondary" onClick={onClick}>
                    more detail
                </Typography>
            </CardContent>
            <CardActions>
                <SMButton color="primary" variant="contained" label="Edit" onClick={onEditClick} />
                <SMButton color="primary" variant="contained" label="Delete" onClick={onDeleteClick} />
            </CardActions>
        </Card>
    );
}
