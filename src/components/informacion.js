import React from 'react';

function InformacionEmpresa() {
    console.log('Componente información montada')
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-lg-6'>
                    <img></img>
                </div>

                <div className='col-lg-6'>
                    <h2>Misión:</h2>
                    <p>Ser la mejor empresa de tecnología del país.</p>
                    <h2>Visión:</h2>
                    <p>Ser reconocidos como líderes en innovación y calidad en el sector tecnológico.</p>
                </div>
            </div>
        </div>
    );
}

export default InformacionEmpresa;