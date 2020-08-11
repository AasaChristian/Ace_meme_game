import React from 'react'

const theme = {
    vars: {
        'primary-color': 'red',
    },

    Column: {
        css: {
            borderRadius: '25%'
        }
    },

    // chat cont
    AgentBar: {

        css: {
                height: '100%',
                overflow: 'auto',
                transform: 'rotate(180deg)',
                direction: 'rtl'

        },
    },

    Avatar: {
            
        css: {
       float: 'left',
       marginRight: '5px',
       transform: 'rotate(180deg)',
       direction: 'rtl',
    //    height: '70%',
    //    width: '10%'
       
        },

    },
  };

export default theme