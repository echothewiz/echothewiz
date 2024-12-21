import React from "react";

import styled, { keyframes } from "styled-components";

/**
 * Make your text rainbow with your desired colors.
 *
 * @component
 *
 * @param {object} props
 * @param {string[]} [props.colors=["red", "green", "blue", "orange", "pink"]] - A list of the colors you want the rainbow to be. By default are red, green, blue, orange and pink.
 * @param {number} [props.duration=5] - Duration of the rainbow animation by seconds set to 5 by default.
 * @param {React.ReactNode} - The content wrapped.
 * @param {string} - ClassName property in case of additional styles or overrides.
 *
 * @returns {JSX.Element}
 */

type RainbowTextProperties = {
  colors?: string[];
  duration?: number;
  children: React.ReactNode;
  className?: string;
};

const RainbowText = React.memo(
  ({
    colors = ["red", "green", "blue", "orange", "pink"],
    duration = 5,
    children,
    className,
  }: RainbowTextProperties) => {
    const gradientColors = colors?.join(", ");

    const rainbowEffect = keyframes`
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    `;

    const Text = styled.div`
      color: transparent;
      background: linear-gradient(90deg, ${gradientColors});
      background-size: 400% 400%;
      background-clip: text;
      -webkit-background-clip: text;
      animation: ${rainbowEffect} ${duration}s linear infinite;
    `;

    return <Text className={className}>{children}</Text>;
  }
);

export default RainbowText;
