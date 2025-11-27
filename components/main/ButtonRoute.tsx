import React from 'react'

const ButtonRoute = ({Route = '/',icon = "",text = ""}) => {
  return (
     <a
        href={Route}
        className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
      >
        <img
          src={icon}
          className="w-6 h-6"
          alt="icon"
        />
        <span className="font-semibold">{text}</span>
      </a>
  )
}

export default ButtonRoute