import React from 'react';

const ProgressBar = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div className='flexLine'>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%'

                        return (
                            <li key={item.id} className='languagesList'>
                                <div>{item.value}</div>
                                <div className='progressBar' style={{ width:progressBar}}></div>
                            </li>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default ProgressBar;