import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    Sidebar: {
        height: 'calc(100% - 8rem)',
        position: 'fixed',
        top: '8rem',
        left: '0',
        marginBottom: '4rem',
        backgroundColor: '#48c3ed',
        overflowX: 'hidden',
        transition: 'all .5s ease-out'
    },

    isShown: {
        width: '30rem',
        zIndex: '1'
    },

    NotShown: {
        width: '0rem',
    },

    List: {
        fontSize: '1.8rem',
        letterSpacing: '.1rem',
        textTransform: 'uppercase',
        listStyleType: 'none',
        color: 'white',
        '& li': {
            marginBottom: '1rem',
            '& a': {
                textDecoration: 'none',
                color: '#777',
                '&:hover': {
                    color: '#f7f7f7'
                }
            }
        }
    }
})

export default function Sidenav({show}) {
    const classes = useStyles();
    const {Sidebar, isShown, NotShown, List} = classes;
    let isVisible = show ? `${Sidebar} ${isShown}` : `${Sidebar} ${NotShown}`;

  return <div className={isVisible}>
      <ul className={List}>
          <li><Link to="/">Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Categories</Link></li>
      </ul>
  </div>;
}
