import React from "react"

const myThemes = [
  {
    id: "theme-daisy",
    name: "daisy",
  },
  {
    id: "theme-aqua",
    name: "aqua",
  },
  {
    id: "theme-fallguys",
    name: "fallguys",
  },
  {
    id: "theme-pinky",
    name: "pinky",
  },
  {
    id: "theme-purple",
    name: "purple",
  },
  {
    id: "theme-spacegray",
    name: "spacegray",
  },
]

const ThemePicker = ({ theme, setTheme }) => {
  if (theme) {
    return (
      <>
        {myThemes.map((item, index) => {
          const nextTheme =
            myThemes.length - 1 === index
              ? myThemes[0].id
              : myThemes[index + 1].id

          return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                style={{
                  backgroundColor: "var(--primary-focus)",
                  color: "var(--primary-content)",
                }}
                className="inline-flex items-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm"
                aria-label={`Theme ${item.name}`}
                onClick={() => setTheme(nextTheme)}
              >
                <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                  {item.name}
                </span>
                <span class="inline-flex px-2 text-pink-600">Change theme</span>
              </button>
            </div>
          ) : null
        })}
      </>
    )
  }
  return null
}

export default ThemePicker
