import React from "react"
import styled from "styled-components"
import "./emojiTheme.scss"

const EmojiThemeStyle = styled.span``

const EmojiTheme = () => (
  <EmojiThemeStyle>
    <span role="img" aria-label="emoji" className="emojiTheme hand">
      👋
    </span>
    <span role="img" aria-label="emoji" className="emojiTheme hand-light">
      👋🏻
    </span>
    <span role="img" aria-label="emoji" className="emojiTheme hand-mediumlight">
      👋🏼
    </span>
    <span role="img" aria-label="emoji" className="emojiTheme hand-medium">
      👋🏽
    </span>
    <span role="img" aria-label="emoji" className="emojiTheme hand-mediumdark">
      👋🏾
    </span>
    <span role="img" aria-label="emoji" className="emojiTheme hand-dark">
      👋🏿
    </span>
  </EmojiThemeStyle>
)

export default EmojiTheme
