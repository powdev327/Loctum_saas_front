import React from 'react'
import TitleStyleWrapper from './Title.style'

const TitleWithBadge = ({ title, title2, title3, badge, subTitle, parentClass }) => {
    return (
        <TitleStyleWrapper>
            <div className={parentClass}>
                <span className="sub-title">{subTitle}</span>
                <h2 className="title">
                    {title}<br />
                    {title2}<span className="marketing-badge">{badge}</span>{title3}
                </h2>
            </div>
        </TitleStyleWrapper>
    )
}

export default TitleWithBadge