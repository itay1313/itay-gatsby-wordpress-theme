import React from "react"

const myThemes = [
  {
    id: "theme-daisy",
    name: "daisy",
  },
  {
    id: "theme-seatheme",
    name: "seatheme",
  },
  {
    id: "theme-greeny",
    name: "greeny",
  },
  {
    id: "theme-pinky",
    name: "pinky",
  },
]

const ThemePicker = ({ theme, setTheme }) => {
  if (theme) {
    return (
      <div>
        {myThemes.map((item, index) => {
          const nextTheme =
            myThemes.length - 1 === index
              ? myThemes[0].id
              : myThemes[index + 1].id

          return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                style={{ backgroundColor: "var(--color-bg-accent)" }}
                className="btn btn-primary"
                aria-label={`Theme ${item.name}`}
                onClick={() => setTheme(nextTheme)}
              >
                {item.name}
              </button>
            </div>
          ) : null
        })}
      </div>
    )
  }
  return null
}

export default ThemePicker
