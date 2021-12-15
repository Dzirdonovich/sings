import React from 'react'
import ContentLoader from 'react-content-loader'


function LoadingBlock() {
    return (
      
            
            <ContentLoader 
            className="pizza-block"
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                
                    >
                <circle cx="561" cy="231" r="94" /> 
                <circle cx="144" cy="126" r="126" /> 
                <rect x="0" y="279" rx="3" ry="3" width="280" height="26" /> 
                <rect x="0" y="315" rx="6" ry="6" width="280" height="84" /> 
                <rect x="134" y="412" rx="20" ry="20" width="138" height="40" /> 
                <rect x="0" y="412" rx="0" ry="0" width="99" height="42" />
            </ContentLoader>

    
    )
}

export default LoadingBlock
