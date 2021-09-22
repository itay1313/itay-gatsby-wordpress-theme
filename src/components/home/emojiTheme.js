import React from "react"
import styled from "styled-components"

const EmojiThemeStyle = styled.span``

const EmojiTheme = () => (
  <EmojiThemeStyle>
    <span className="emojiTheme hand">👋</span>
    <span className="emojiTheme hand-light">👋🏻</span>
    <span className="emojiTheme hand-mediumlight">👋🏼</span>
    <span className="emojiTheme hand-medium">👋🏽 </span>
    <span className="emojiTheme hand-mediumdark">👋🏾</span>
    <span className="emojiTheme hand-dark">👋🏿</span>
  </EmojiThemeStyle>
)

export default EmojiTheme
