import React from 'react';

function bannerInicio() {
    console.log('Componente banner montado.')
    return (
        <div className='row mt-3'>
            <div className='col-lg-12'>
                <img src='https://static.vecteezy.com/system/resources/previews/002/220/206/non_2x/computer-part-banner-vector.jpg' style={{ width: '100%' }}></img>
            </div>
        </div>
    );
}

export default bannerInicio;