import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 125px);
    min-width: 228px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const DonutCircle = styled.circle`
    cx: ${(props) => props.cx};
    cy: ${(props) => props.cy};
    r: ${(props) => props.r};
    fill: ${(props) => props.fill};

    stroke: ${(props) => props.color};
    stroke-width: ${(props) => props.width};
    stroke-dasharray: ${(props) => props.dashArray};
    stroke-dashoffset: ${(props) => props.dashOffset};
    transform: rotate(${(props) => props.angle}deg);
    transform-origin: ${(props) => props.cx}px ${(props) => props.cy}px;
`;
