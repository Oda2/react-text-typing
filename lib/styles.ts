import styled, { keyframes } from "styled-components";

export interface ITextRootProps {
  colorText?: string;
  colorTyping?: string;
  showBlink?: boolean;
  speed?: number;
  timeTyping?: number;
  internalText: string;
}

const blinking = keyframes`
0% {
  border-color: transparent;
};
  
50% {
  border-color: black;
}
`;

const loading = keyframes`
0% {
  max-width: 0%;
}
`;

export const TextRoot = styled.span<ITextRootProps>`
  position: relative;
  color: ${(props) => props.colorText};
  font-size: 5em;
  margin: 0;
  padding: 0;
  border-right: 0.1em solid;
  animation: ${blinking} 0.8s linear infinite;

  &::before {
    content: "${(props) => props.internalText}";
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    animation: ${loading} ${(props) => props.timeTyping}s steps(80);
    max-width: 100%;
    color: ${(props) => props.colorTyping};
  }
`;
