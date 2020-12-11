// import Paper from '@material-ui/core/Paper';
import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import React from 'react';

import "./Contact.css";

const styles: StyleRulesCallback<any, any, any> = (theme: any) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing.unit * 2,
    },
    root: {
        flexGrow: 1,
    },
});

interface IContactProps {
    classes: {
        root: string,
        paper: string,
    }
}

function Contact(props: IContactProps) {
    const { classes } = props;

    return (
        <div className={`contact ${classes.root}`}>
            <h2>Pedidos</h2>
            <br />
            <p>
                Al telefono: <span>33.34.41.94.97</span>
            </p>
            <br />
            <p>Tambien puedes visitarnos en las redes sociales</p>
            <ul>
                <li><a target="blank" href="https://www.facebook.com/Minuette.postres"><img src="/icons/social-media/facebook/drawable-hdpi/ic_facebook_box_black_36dp.png" alt="" />Facebook</a></li>
                <li><a target="blank" href="https://www.instagram.com/minuette.ps/"><img src="/icons/social-media/instagram/drawable-hdpi/ic_instagram_black_36dp.png" alt="" />Instagram</a></li>
            </ul>
        </div>
    );
}

export default withStyles(styles)(Contact);