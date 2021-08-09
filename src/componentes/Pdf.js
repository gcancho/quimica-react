import React, { Component } from 'react';

class Pdf extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../libros/ejemplo.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                    
                </object>
                <h1>hola gg</h1>
            </div>
        )
    }
}

export default Pdf;