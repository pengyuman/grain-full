import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zomm-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,
    wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
    const { classNames, children, animation, wrapper, ...resetProps } = props
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...resetProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
}
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
}
export default Transition
